/* ============================================================
   ASSISTANT ENGINE
   Turns a visitor's message into a structured reply grounded in
   src/data/cv.js. No network, no model: keyword intents, entity
   lookup (projects, companies, technologies, glossary terms) with
   typo tolerance, small talk, and a little memory of what the
   conversation is about, so "tell me more" or "what was his role?"
   follow the last topic. Replies carry keys and ids only; the UI
   renders them in the current language.
   ============================================================ */

import { CERTIFICATIONS, EXPERIENCE, OTHER_PROJECTS, PROJECTS, SKILLS } from "../data/cv.js";
import { GLOSSARY } from "./glossary.js";

/* Fold case, accents, Arabic diacritics and letter variants (أ/إ/آ, ة, ى)
   so a keyword matches however the visitor types it. */
export function normalize(text) {
  return String(text)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯؐ-ًؚ-ٰٟۖ-ۭ]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/[ىئ]/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/[^\p{L}\p{N}+#.\s]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const escape = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const LATIN = /^[\x20-\x7e]+$/;

/* Latin keywords match at a word start (so "project" also catches "projects",
   but "app" doesn't fire inside "whatsapp"); Arabic keywords match anywhere,
   since Arabic glues prefixes like ال / و / ب onto the word. */
function matcher(keyword) {
  // "==" matches whole tokens in any script ("باي" must not fire inside "بإيه")
  if (keyword.startsWith("==")) {
    const kw = ` ${normalize(keyword.slice(2))} `;
    return (text) => ` ${text} `.includes(kw);
  }
  // a leading "=" asks for the whole word only ("hi" must not fire inside "his")
  if (keyword.startsWith("=")) return wordMatcher(keyword.slice(1));
  const kw = normalize(keyword);
  if (!LATIN.test(kw)) return (text) => text.includes(kw);
  const re = new RegExp(`(^|[^\\p{L}\\p{N}])${escape(kw)}`, "u");
  return (text) => re.test(text);
}

/* Whole-word match, for names ("dart" must not fire inside "standard"). */
function wordMatcher(term) {
  const t = normalize(term);
  if (!LATIN.test(t)) return (text) => text.includes(t);
  const re = new RegExp(`(^|[^\\p{L}\\p{N}])${escape(t)}($|[^\\p{L}\\p{N}+#])`, "u");
  return (text) => re.test(text);
}

const anyOf = (words) => {
  const tests = words.map(matcher);
  return (text) => tests.some((t) => t(text));
};

/* — Typo tolerance: "fluter", "apisx", "keyclock" still find their entity — */

function editDistance(a, b) {
  if (Math.abs(a.length - b.length) > 2) return 3;
  const d = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
    }
  }
  return d[a.length][b.length];
}

/* A single Latin word of 5+ letters within 1 edit (2 for 8+ letters) of a token. */
function fuzzyHit(text, name) {
  const n = normalize(name);
  if (!LATIN.test(n) || n.includes(" ") || n.length < 5) return false;
  const limit = n.length >= 8 ? 2 : 1;
  return text.split(" ").some((tok) => tok.length >= 4 && LATIN.test(tok) && editDistance(tok, n) <= limit);
}

/* Find the first entry whose names match exactly, then retry with typo tolerance. */
function lookup(text, entries) {
  for (const [key, , tests] of entries) if (tests.some((t) => t(text))) return key;
  for (const [key, names] of entries) if (names.some((n) => fuzzyHit(text, n))) return key;
  return null;
}
const index = (map) => Object.entries(map).map(([key, names]) => [key, names, names.map(wordMatcher)]);

/* — Intents · listed in priority order: on a tie, the earlier one wins — */

const INTENTS = [
  ["hire", ["hire", "hiring", "recruit", "job offer", "opportunit", "freelance", "collaborat", "available for", "open to work", "work with him", "work together", "interview", "توظيف", "توظف", "فرصه", "فرص عمل", "عرض عمل", "تعاون", "متاح", "مقابله", "نشتغل", "اشتغل معه", "اشتغل معاه", "التعاقد", "نوظفه", "اوظفه"]],
  ["salary", ["salary", "compensation", "expected pay", "hourly rate", "how much does he charge", "his rate", "راتب", "مرتب", "الراتب", "بياخد كام", "سعره", "اجره", "بكام"]],
  ["availability", ["remote", "relocat", "onsite", "on site", "hybrid", "notice period", "full time", "part time", "عن بعد", "ريموت", "ينتقل", "انتقال", "يسافر", "دوام كامل", "دوام جزئي", "فتره الاشعار", "من البيت"]],
  ["privacy", ["how old", "his age", "married", "wife", "religion", "birthday", "date of birth", "born in", "عمره", "سنه كام", "متجوز", "متزوج", "زوجه", "مواليد", "ديانته", "عيد ميلاده"]],
  ["whatsapp", ["whatsapp", "whats app", "واتس", "واتساب"]],
  ["linkedin", ["linkedin", "linked in", "لينكد"]],
  ["github", ["github", "git hub", "repo", "source code", "جيت هب", "جيتهب", "جيثب", "قيت هب"]],
  ["cv", ["cv", "resume", "curriculum", "السيره الذاتيه", "سيرته", "سيرتك", "الذاتيه", "سي في"]],
  ["contact", ["contact", "reach", "email", "e mail", "mail", "phone", "call", "number", "get in touch", "message him", "talk to him", "تواصل", "اتصال", "اتصل", "ايميل", "الايميل", "بريد", "رقم", "جوال", "هاتف", "كلمه", "اكلمه", "اراسل", "راسل"]],
  ["projects", ["project", "app", "built", "work samples", "case stud", "showcase", "portfolio items", "مشروع", "مشاريع", "مشروعات", "تطبيق", "برامج", "اعمال", "نماذج", "سابقه"]],
  ["current", ["work now", "working now", "currently", "current job", "current role", "current company", "these days", "nowadays", "بيشتغل فين", "شغال فين", "يعمل حاليا", "شغله الحالي", "وظيفته الحاليه", "حاليا", "دلوقتي", "الحين"]],
  ["years", ["how many years", "years of experience", "how long has he", "how experienced", "how much experience", "كام سنه", "سنين خبره", "سنوات الخبره", "خبرته قد ايه", "خبرته كام", "عدد سنوات", "من امتى"]],
  ["experience", ["experience", "worked", "work history", "work experience", "where does he work", "job", "career", "compan", "employ", "خبر", "شرك", "وظيف", "سنوات", "مسيره", "اين عمل", "وين اشتغل", "فين اشتغل", "اشتغل فين", "عمل في", "يشتغل", "اشتغل"]],
  ["certs", ["certif", "course", "coursera", "udemy", "credential", "specialization", "شهاد", "كورس", "دورات"]],
  ["education", ["educat", "degree", "universit", "college", "study", "studied", "graduat", "bachelor", "دراس", "جامع", "تخرج", "بكالوريوس", "كليه", "درس"]],
  ["skills", ["skill", "tech", "stack", "tool", "framework", "expertise", "good at", "speciali", "programming", "work with", "works with", "مهار", "تقني", "تكنولوج", "ادوات", "برمجه", "يتقن", "تخصص", "شاطر في", "بيعرف"]],
  ["location", ["where", "located", "based", "live", "city", "country", "فين", "وين", "اين", "مكان", "يسكن", "مقيم", "عايش", "مدينه", "دوله", "بلد"]],
  ["languages", ["speak", "spoken", "languages does", "language does", "يتكلم", "يتحدث", "لغات", "لغه"]],
  ["isMahmoud", ["are you mahmoud", "is this mahmoud", "you are mahmoud", "انت محمود", "انتا محمود", "هو انت محمود", "انت نفسك محمود"]],
  ["creator", ["who made you", "who built you", "who created you", "who developed you", "who programmed you", "how were you made", "how do you work", "مين عملك", "مين صممك", "مين برمجك", "مين عامل", "اتعملت ازاي", "بتشتغل ازاي"]],
  ["bot", ["who are you", "what are you", "your name", "are you a bot", "are you ai", "are you a robot", "are you real", "are you human", "chatgpt", "انت مين", "انتا مين", "مين انت", "انت بوت", "انت روبوت", "انت حقيقي", "اسمك", "مين معايا", "انت ذكاء", "انت ai"]],
  ["howAreYou", ["how are you", "how r u", "how are u", "how is it going", "hows it going", "how s it going", "whats up", "what s up", "how do you do", "ازيك", "عامل ايه", "اخبارك", "كيف حالك", "كيفك", "شلونك", "ايش اخبارك", "عامله ايه", "الدنيا عامله"]],
  ["about", ["who", "about him", "about mahmoud", "about his background", "know about him", "yourself", "introduce", "background", "summary", "profile", "مين", "من هو", "من هذا", "نبذه", "عرفني", "تعريف", "معلومات عن", "عن محمود", "حدثني عن", "احكيلي عن"]],
  ["joke", ["joke", "funny", "make me laugh", "something fun", "نكته", "نكت", "ضحكني", "هزار", "حاجه تضحك"]],
  ["laugh", ["haha", "hahaha", "hehe", "lol", "lmao", "rofl", "ههه", "هههه", "خخخ"]],
  ["compliment", ["nice", "awesome", "cool", "amazing", "impressive", "love it", "love this", "beautiful", "great site", "great work", "well done", "good job", "حلو", "جميل", "تحفه", "عاش", "برافو", "ممتاز", "رائع", "جامد", "فخم", "روعه", "شغل نضيف"]],
  ["negative", ["stupid", "useless", "dumb", "bad bot", "you suck", "not helpful", "you don t understand", "you dont understand", "غبي", "مش فاهم", "مبتفهمش", "فاشل", "وحش", "مش مفيد", "مش بتفهم"]],
  ["help", ["help", "what can you", "what do you do", "options", "what should i ask", "ماذا تستطيع", "ايش تقدر", "ماذا يمكنك", "كيف تساعد", "تقدر تساعد", "تعمل ايه", "اسالك عن ايه"]],
  ["thanks", ["thank", "thx", "appreciate", "شكر", "مشكور", "تسلم", "يعطيك العافيه", "جزاك", "ميرسي", "متشكر"]],
  ["bye", ["bye", "goodbye", "see you", "good night", "مع السلامه", "وداعا", "==باي", "سلام عليكم ورحمه"]],
  ["greeting", ["=hi", "hello", "=hey", "=yo", "good morning", "good evening", "salam", "مرحب", "اهلا", "هلا", "السلام", "صباح", "مساء", "سلام"]],
].map(([key, words]) => [key, words.map(matcher)]);

/* intents that outrank a technology mention ("github" is a link, not a skill) */
const DIRECT = new Set(["hire", "salary", "availability", "privacy", "whatsapp", "linkedin", "github", "cv", "contact", "projects", "certs", "education", "isMahmoud", "creator", "bot", "current", "years"]);

function topIntent(text) {
  let best = null;
  let bestScore = 0;
  for (const [key, tests] of INTENTS) {
    const score = tests.reduce((n, test) => n + (test(text) ? 1 : 0), 0);
    if (score > bestScore) {
      best = key;
      bestScore = score;
    }
  }
  return best;
}

/* very short replies: "ok", "yes", "no" (whole message, any language) */
const SHORT = {
  yes: ["yes", "yeah", "yep", "yup", "sure", "ya", "of course", "please", "ok sure", "ايوه", "ايوا", "اه", "نعم", "اكيد", "يب", "طبعا", "ياريت", "اوكي ماشي"],
  no: ["no", "nope", "nah", "not really", "no thanks", "لا", "لأ", "لا شكرا", "مش عايز", "مش محتاج", "خلاص"],
  ack: ["ok", "okay", "k", "alright", "got it", "fine", "cool", "great", "تمام", "ماشي", "اوك", "اوكي", "طيب", "فهمت", "حلو", "تمام كده", "عظيم"],
};
const SHORT_SETS = Object.fromEntries(Object.entries(SHORT).map(([k, words]) => [k, new Set(words.map(normalize))]));
function shortReply(text) {
  if (text.split(" ").length > 3) return null;
  for (const [key, set] of Object.entries(SHORT_SETS)) if (set.has(text)) return key;
  return null;
}

/* — Entities — */

const PROJECT_ALIASES = {
  qiyasi: ["qiyasi", "قياسي"],
  taqeem: ["taqeem", "تقييم"],
  "ezee-erp": ["erp", "ezee manager", "ezee manager pro", "tebalink erp"],
  "saaed-pay": ["saaed pay", "saaedpay", "saaed", "ساعد باي", "سعيد باي"],
  "ezee-restaurant": ["ezee restaurant", "restaurant", "pos", "point of sale", "مطعم", "مطاعم", "نقاط البيع", "نقاط بيع", "كاشير"],
  "ezee-hr": ["ezee hr", "hr", "human resources", "attendance", "موارد بشريه", "الموارد البشريه", "حضور"],
  ecommerce: ["ecommerce", "e commerce", "white label", "jory care", "jory", "جوري", "جوري كير", "متجر", "تجاره الكترونيه", "التجاره الالكترونيه"],
  alfakhra: ["alfakhra", "alfakhera", "الفاخره", "tailoring", "خياطه"],
};

const OTHER_ALIASES = {
  "Ezee Customer": ["ezee customer"],
  Illuminate: ["illuminate", "graduation project", "مشروع التخرج"],
  "Negozio Store": ["negozio"],
};

// companies by their index in EXPERIENCE
const COMPANY_ALIASES = {
  0: ["dolf", "dolf technologies", "دولف"],
  1: ["tebalink", "teba link", "تيبالينك", "تيبا لينك", "طيبه لينك"],
  2: ["dar alsaaed", "dar saaed", "darsaaed", "alsaaed", "دار الساعد", "دار ساعد", "دار السعيد"],
};

const projectIndex = index(PROJECT_ALIASES);
const otherIndex = index(OTHER_ALIASES);
const companyIndex = index(COMPANY_ALIASES);
const glossaryIndex = index(Object.fromEntries(Object.entries(GLOSSARY).map(([k, g]) => [k, g.names])));

function findProject(text) {
  const id = lookup(text, projectIndex);
  if (id) return { id };
  const other = lookup(text, otherIndex);
  return other ? { other } : null;
}

const CATEGORY_WORDS = {
  mobile: ["mobile", "flutter", "android", "ios", "play store", "google play", "app store", "موبايل", "فلاتر", "جوال", "اندرويد"],
  gateway: ["gateway", "apisix", "keycloak", "microservice", "بواب", "ابيسكس"],
  qa: ["test", "qa", "quality", "اختبار", "جوده", "فحص"],
};
const categoryTests = Object.entries(CATEGORY_WORDS).map(([key, words]) => [key, anyOf(words)]);
const findCategory = (text) => categoryTests.find(([, test]) => test(text))?.[0] || null;

/* Technologies: every skill and project technology is a searchable term. */

// spoken languages inside "Localization (Arabic/English)" are not technologies
const NOT_TECH = new Set(["arabic", "english"]);

const TECH_ALIASES = {
  Flutter: ["فلاتر", "فلتر"],
  Dart: ["دارت"],
  Firebase: ["فايربيس", "فايربيز", "فاير بيس"],
  Keycloak: ["كي كلوك", "كيكلوك"],
  "Apache APISIX": ["apisix", "ابيسكس", "اباتشي"],
  "API Gateway": ["بوابات api", "بوابه api", "بوابات ال api"],
  Postman: ["بوستمان"],
  Jira: ["جيرا"],
  "Node.js": ["node", "nodejs", "نود"],
  Supabase: ["سوبابيس"],
  BLoC: ["بلوك"],
  "REST APIs (RESTful)": ["rest", "rest api", "ريست"],
  WebSockets: ["websocket", "web sockets", "ويب سوكيت"],
};

function splitItem(item) {
  const base = item.replace(/\s*\(.*\)\s*/, "").trim();
  const inner = (item.match(/\((.*)\)/)?.[1] || "").split(/[,/]/).map((s) => s.trim());
  return [base, ...base.split("/").map((s) => s.trim()), ...inner].filter(Boolean);
}

const TERMS = [];
const addTerm = (name, group, label = name) => {
  const key = normalize(name);
  if (key.length < 2 || NOT_TECH.has(key) || TERMS.some((t) => t.key === key)) return;
  TERMS.push({ key, name, label, group, test: wordMatcher(name) });
};

SKILLS.forEach((g) =>
  g.items.forEach((item) => {
    const label = item.replace(/\s*\(.*\)\s*/, "").trim();
    splitItem(item).forEach((name) => addTerm(name, g.key, name === label ? label : name));
    (TECH_ALIASES[item] || TECH_ALIASES[label] || []).forEach((alias) => addTerm(alias, g.key, label));
  })
);
PROJECTS.forEach((p) => p.tech.forEach((tech) => addTerm(tech, null)));

// longest first, so "SQL Server" wins over "SQL" and "GitHub Actions" over "GitHub"
TERMS.sort((a, b) => b.key.length - a.key.length);

function findTech(text) {
  return TERMS.find((t) => t.test(text)) || TERMS.find((t) => fuzzyHit(text, t.name)) || null;
}

function projectsMentioning(label) {
  const test = wordMatcher(label);
  return PROJECTS.filter((p) => [p.subtitle, ...p.tech, ...p.bullets].some((s) => test(normalize(s)))).map((p) => p.id);
}

/* "what is X?" style questions route to the glossary */
const DEFINE = anyOf(["what is", "what s", "whats", "what are", "explain", "define", "meaning of", "what does", "stand for", "يعني ايه", "ايه هو", "ايه هي", "ايه الـ", "ما هو", "ما هي", "ما معنى", "اشرح", "وضحلي", "معنى", "يعني اي"]);

/* — Follow-ups: short questions about the topic already on the table — */

const FOLLOW = {
  more: anyOf(["more", "tell me more", "details", "detail", "elaborate", "go on", "continue", "كمان", "تفاصيل", "اكتر", "زياده", "وضح اكتر", "كمل", "احكيلي اكتر", "عايز اعرف اكتر"]),
  role: anyOf(["his role", "what was his role", "what did he do", "his part", "he do there", "he do in it", "responsib", "contribut", "دوره", "عمل ايه", "عمل فيه", "كان بيعمل", "مسؤوليات", "مسئوليات", "ساهم"]),
  tech: anyOf(["built with", "made with", "does it use", "it use", "its stack", "stack of it", "its tech", "استخدم فيه", "مبني ب", "بني ب", "اتبنى ب", "بايه", "تقنياته", "معمول ب", "التقنيات المستخدمه"]),
  links: anyOf(["link", "download", "where can i see", "see it", "try it", "store", "install", "لينك", "رابط", "روابط", "تحميل", "انزله", "اشوفه", "اجربه", "انزل"]),
  next: anyOf(["next", "another", "other one", "something else", "show me another", "one before", "before that", "the previous one", "غيره", "التاني", "اللي بعده", "بعده", "اللي قبله", "قبله", "اخر", "تاني"]),
};
// intents too weak to override a follow-up ("where can I see it" isn't about location)
const WEAK = new Set(["location", "projects", "help", "greeting", "thanks", "compliment"]);

function followUp(text, intent) {
  const words = text.split(" ").length;
  if (words > 9) return null;
  for (const [kind, test] of Object.entries(FOLLOW)) {
    if (!test(text)) continue;
    if (!intent || WEAK.has(intent) || (kind === "tech" && intent === "skills")) return kind;
  }
  return null;
}

/* — Replies — */

const FOLLOW_UPS = {
  greeting: ["who", "tech", "projects", "contact"],
  help: ["who", "tech", "projects", "contact"],
  about: ["experience", "projects", "contact"],
  experience: ["current", "projects", "hire"],
  current: ["more", "experience", "contact"],
  years: ["experience", "projects", "tech"],
  company: ["more", "nextCompany", "projects"],
  skills: ["projects", "experience", "contact"],
  skill: ["tech", "projects", "hire"],
  skillGroup: ["projects", "experience", "contact"],
  term: ["tech", "projects", "contact"],
  projects: ["tech", "experience", "hire"],
  project: ["projRole", "projTech", "projLinks", "next"],
  projectRole: ["projTech", "projLinks", "next"],
  projectTech: ["projRole", "projLinks", "next"],
  projectLinks: ["projRole", "next", "contact"],
  contact: ["projects", "cv"],
  hire: ["projects", "cv"],
  whatsapp: ["projects", "cv"],
  linkedin: ["projects", "cv"],
  github: ["projects", "contact"],
  cv: ["contact", "projects"],
  certs: ["experience", "projects"],
  education: ["certs", "experience"],
  location: ["contact", "hire"],
  languages: ["who", "contact"],
  salary: ["projects", "cv"],
  availability: ["projects", "cv"],
  privacy: ["who", "projects"],
  bot: ["who", "projects", "contact"],
  isMahmoud: ["who", "projects"],
  creator: ["who", "projects"],
  howAreYou: ["who", "projects", "tech"],
  joke: ["projects", "who"],
  laugh: ["projects", "who"],
  compliment: ["projects", "contact"],
  negative: ["who", "projects", "contact"],
  ack: ["projects", "tech", "contact"],
  no: ["projects", "contact"],
  thanks: ["projects", "contact"],
  bye: [],
  fallback: ["who", "projects", "contact"],
};

const SECTIONS = {
  about: ["about"],
  experience: ["experience"],
  current: ["experience"],
  years: ["experience"],
  company: ["experience"],
  skills: ["skills"],
  skill: ["skills"],
  skillGroup: ["skills"],
  projects: ["projects"],
  project: ["projects"],
  contact: ["contact"],
  hire: ["contact"],
  certs: ["certifications"],
  education: ["certifications"],
};

/* a stable choice between phrasings, so repeated questions don't read robotic */
function variant(text, n) {
  let h = 0;
  for (const ch of text) h = (h * 31 + ch.charCodeAt(0)) >>> 0;
  return h % n;
}

/* ctx: what the conversation is about now (undefined keeps the previous topic) */
const reply = (key, data = {}, ctx) => ({ key, data, sections: SECTIONS[key] || [], suggest: FOLLOW_UPS[key] || [], ctx });

const projectCtx = (p) => ({ topic: "project", ...p });

/* the question a suggestion chip asks, in English, for "yes" after an offer */
const OFFERS = {
  who: "who is mahmoud",
  tech: "what technologies does he work with",
  projects: "show me his projects",
  contact: "how can i contact him",
  experience: "where has he worked",
  current: "where does he work now",
  certs: "what certifications does he have",
  cv: "can i get his resume",
  hire: "i'd like to hire him",
};

function answerFollowUp(kind, ctx) {
  if (ctx.topic === "project") {
    const p = ctx.id ? { id: ctx.id } : { other: ctx.other };
    if (kind === "more") return reply("project", { ...p, full: true }, projectCtx(p));
    if (kind === "role") return reply("projectRole", p, projectCtx(p));
    if (kind === "tech") return reply("projectTech", p, projectCtx(p));
    if (kind === "links") return reply("projectLinks", p, projectCtx(p));
    if (kind === "next") {
      const list = ctx.list?.length ? ctx.list : PROJECTS.map((x) => x.id);
      const at = ctx.id ? list.indexOf(ctx.id) : -1;
      const id = list[(at + 1) % list.length];
      return reply("project", { id }, { topic: "project", id, list });
    }
  }
  if (ctx.topic === "projects" && (kind === "next" || kind === "more")) {
    const id = ctx.list?.[0] || PROJECTS[0].id;
    return reply("project", { id }, { topic: "project", id, list: ctx.list });
  }
  if (ctx.topic === "company") {
    if (kind === "next") {
      const i = (ctx.index + 1) % EXPERIENCE.length;
      return reply("company", { index: i }, { topic: "company", index: i });
    }
    if (kind === "more" || kind === "role" || kind === "tech") return reply("company", { index: ctx.index, full: true }, ctx);
  }
  if (ctx.topic === "skill" && (kind === "more" || kind === "tech")) {
    if (ctx.group) return reply("skillGroup", { group: ctx.group }, ctx);
  }
  if (ctx.topic === "term" && (kind === "more" || kind === "role")) {
    const g = GLOSSARY[ctx.key];
    const ids = projectsMentioning(g.uses);
    if (ids.length) return reply("projects", { category: null, ids }, { topic: "projects", list: ids });
  }
  return null;
}

/* — Public: message (+ conversation context) in, structured reply out — */

export function answer(message, ctx = {}) {
  const text = normalize(message);
  if (!text) return reply("help");

  // "yes" accepts the assistant's last offer; "ok" / "no" just keep things moving
  const short = shortReply(text);
  if (short === "yes" && ctx.offer && OFFERS[ctx.offer]) return answer(OFFERS[ctx.offer], { ...ctx, offer: null });
  if (short === "no") return reply("no");
  if (short === "ack") return reply("ack");

  const intent = topIntent(text);
  const defining = DEFINE(text);

  // "what is APISIX?" → the glossary, before anything else claims the word
  if (defining) {
    const key = lookup(text, glossaryIndex);
    if (key) {
      const ids = projectsMentioning(GLOSSARY[key].uses);
      return reply("term", { key, ids: ids.slice(0, 4) }, { topic: "term", key });
    }
  }

  // named entities start a new topic
  const company = lookup(text, companyIndex);
  if (company !== null && !/\b(erp|pay)\b/.test(text)) {
    const i = Number(company);
    return reply("company", { index: i }, { topic: "company", index: i });
  }

  const project = findProject(text);
  if (project) {
    // "what was Saaed Pay built with?" answers the follow-up right away
    const kind = followUp(text, null);
    if (kind === "more") return reply("project", { ...project, full: true }, projectCtx(project));
    if (kind && kind !== "next") return answerFollowUp(kind, projectCtx(project));
    return reply("project", project, projectCtx(project));
  }

  // short questions about the current topic ("what was his role?", "links?")
  if (ctx.topic) {
    const kind = followUp(text, intent);
    if (kind) {
      const out = answerFollowUp(kind, ctx);
      if (out) return out;
    }
  }

  const tech = findTech(text);

  if (intent === "projects" || (!intent && findCategory(text) && /project|مشروع|مشاريع/.test(text))) {
    const category = findCategory(text);
    const ids = PROJECTS.filter((p) => !category || p.category === category).map((p) => p.id);
    const list = ids.length ? ids : PROJECTS.map((p) => p.id);
    return reply("projects", { category, ids: list }, { topic: "projects", list });
  }

  if (intent && DIRECT.has(intent)) {
    if (intent === "certs") return reply("certs", { count: CERTIFICATIONS.length });
    if (intent === "current") return reply("current", { index: 0 }, { topic: "company", index: 0 });
    return reply(intent);
  }

  if (tech) {
    const ids = projectsMentioning(tech.label);
    return reply("skill", { term: tech.label, group: tech.group, ids }, { topic: "skill", group: tech.group, term: tech.label });
  }

  // a definition question about something outside the glossary, or a bare glossary term
  const term = lookup(text, glossaryIndex);
  if (term) {
    const ids = projectsMentioning(GLOSSARY[term].uses);
    return reply("term", { key: term, ids: ids.slice(0, 4) }, { topic: "term", key: term });
  }

  if (intent === "experience") return reply("experience", { count: EXPERIENCE.length });
  if (intent === "skills") return reply("skills");
  if (intent === "joke") return reply("joke", { v: variant(text + Date.now(), 4) });
  if (intent === "howAreYou" || intent === "greeting" || intent === "compliment" || intent === "thanks")
    return reply(intent, { v: variant(text, 3) });
  if (intent) return reply(intent);

  return reply("fallback");
}

export const OTHER = Object.fromEntries(OTHER_PROJECTS.map((p) => [p.title, p]));
