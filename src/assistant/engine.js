/* ============================================================
   ASSISTANT ENGINE
   Turns a visitor's message into a structured reply grounded in
   src/data/cv.js. No network, no model: keyword intents plus
   entity lookup (project names, technologies). Replies carry keys
   and ids only; the UI renders them in the current language.
   ============================================================ */

import { CERTIFICATIONS, EXPERIENCE, OTHER_PROJECTS, PROJECTS, SKILLS } from "../data/cv.js";

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
  // a leading "=" asks for the whole word only ("hi" must not fire inside "his")
  if (keyword.startsWith("=")) return wordMatcher(keyword.slice(1));
  const kw = normalize(keyword);
  if (!LATIN.test(kw)) return (text) => text.includes(kw);
  const re = new RegExp(`(^|[^\\p{L}\\p{N}])${escape(kw)}`, "u");
  return (text) => re.test(text);
}

/* Whole-word match, for technology names ("dart" must not fire inside "standard"). */
function wordMatcher(term) {
  const t = normalize(term);
  if (!LATIN.test(t)) return (text) => text.includes(t);
  const re = new RegExp(`(^|[^\\p{L}\\p{N}])${escape(t)}($|[^\\p{L}\\p{N}+#])`, "u");
  return (text) => re.test(text);
}

/* — Intents · listed in priority order: on a tie, the earlier one wins — */

const INTENTS = [
  ["hire", ["hire", "hiring", "recruit", "job offer", "opportunit", "freelance", "collaborat", "available for", "open to work", "work with him", "work together", "interview", "توظيف", "توظف", "فرصه", "فرص عمل", "عرض عمل", "تعاون", "متاح", "مقابله", "نشتغل", "اشتغل معه", "التعاقد"]],
  ["whatsapp", ["whatsapp", "whats app", "واتس", "واتساب"]],
  ["linkedin", ["linkedin", "linked in", "لينكد"]],
  ["github", ["github", "git hub", "repo", "source code", "جيت هب", "جيتهب", "جيثب", "قيت هب"]],
  ["cv", ["cv", "resume", "curriculum", "السيره الذاتيه", "سيرته", "سيرتك", "الذاتيه", "سي في"]],
  ["contact", ["contact", "reach", "email", "e mail", "mail", "phone", "call", "number", "get in touch", "message him", "talk to", "تواصل", "اتصال", "اتصل", "ايميل", "الايميل", "بريد", "رقم", "جوال", "هاتف", "كلم", "اراسل", "راسل"]],
  ["projects", ["project", "app", "built", "work samples", "case stud", "showcase", "مشروع", "مشاريع", "مشروعات", "تطبيق", "برامج", "اعمال", "نماذج"]],
  ["experience", ["experience", "worked", "work history", "work experience", "where does he work", "job", "career", "compan", "employ", "years", "current role", "currently", "dolf", "tebalink", "alsaaed", "خبر", "شرك", "وظيف", "سنوات", "مسيره", "اين عمل", "وين اشتغل", "فين اشتغل", "اشتغل فين", "عمل في", "يشتغل"]],
  ["certs", ["certif", "course", "coursera", "udemy", "credential", "specialization", "شهاد", "كورس", "دوره", "دورات"]],
  ["education", ["educat", "degree", "universit", "college", "study", "studied", "graduat", "bachelor", "دراس", "جامع", "تخرج", "بكالوريوس", "كليه", "درس"]],
  ["skills", ["skill", "tech", "stack", "tool", "framework", "expertise", "good at", "speciali", "programming", "work with", "works with", "مهار", "تقني", "تكنولوج", "ادوات", "برمجه", "يتقن", "تخصص", "خبرته التقنيه"]],
  ["location", ["where", "located", "based", "live", "city", "country", "relocat", "فين", "وين", "اين", "مكان", "يسكن", "مقيم", "مدينه", "دوله", "بلد"]],
  ["languages", ["speak", "spoken", "languages does", "language does", "يتكلم", "يتحدث", "لغات", "لغه"]],
  ["about", ["who", "about", "yourself", "introduce", "background", "summary", "profile", "مين", "من هو", "من هذا", "نبذه", "عرفني", "تعريف", "معلومات عن", "عن محمود", "حدثني عن"]],
  ["help", ["help", "what can you", "what do you do", "options", "ماذا تستطيع", "ايش تقدر", "ماذا يمكنك", "كيف تساعد", "تقدر تساعد"]],
  ["thanks", ["thank", "thx", "appreciate", "شكر", "مشكور", "تسلم", "يعطيك العافيه", "جزاك"]],
  ["bye", ["bye", "goodbye", "see you", "مع السلامه", "وداعا", "باي"]],
  ["greeting", ["=hi", "hello", "=hey", "good morning", "good evening", "salam", "مرحب", "اهلا", "هلا", "السلام", "صباح", "مساء"]],
].map(([key, words]) => [key, words.map(matcher)]);

/* intents that outrank a technology mention ("github" is a link, not a skill) */
const DIRECT = new Set(["hire", "whatsapp", "linkedin", "github", "cv", "contact", "projects", "certs", "education"]);

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

/* — Projects · names a visitor might use, in both languages — */

const PROJECT_ALIASES = {
  qiyasi: ["qiyasi", "قياسي"],
  taqeem: ["taqeem", "تقييم"],
  "ezee-erp": ["erp", "ezee manager", "ezee manager pro", "tebalink erp", "tebalink"],
  "saaed-pay": ["saaed pay", "saaedpay", "saaed", "ساعد باي", "سعيد باي"],
  "ezee-restaurant": ["ezee restaurant", "restaurant", "pos", "point of sale", "مطعم", "مطاعم", "نقاط البيع", "نقاط بيع", "كاشير"],
  "ezee-hr": ["ezee hr", "hr", "human resources", "attendance", "موارد بشريه", "الموارد البشريه", "حضور"],
  ecommerce: ["ecommerce", "e commerce", "white label", "jory care", "jory", "جوري", "جوري كير", "متجر", "تجاره الكترونيه", "التجاره الالكترونيه"],
  alfakhra: ["alfakhra", "الفاخره", "tailoring", "خياطه"],
};

const OTHER_ALIASES = {
  "Ezee Customer": ["ezee customer"],
  Illuminate: ["illuminate", "graduation project", "مشروع التخرج"],
  "Negozio Store": ["negozio"],
};

const projectTests = Object.entries(PROJECT_ALIASES).map(([id, names]) => [id, names.map(wordMatcher)]);
const otherTests = Object.entries(OTHER_ALIASES).map(([title, names]) => [title, names.map(wordMatcher)]);

function findProject(text) {
  for (const [id, tests] of projectTests) if (tests.some((t) => t(text))) return { id };
  for (const [title, tests] of otherTests) if (tests.some((t) => t(text))) return { other: title };
  return null;
}

const CATEGORY_WORDS = {
  mobile: ["mobile", "flutter", "android", "ios", "play store", "google play", "موبايل", "فلاتر", "جوال", "اندرويد"],
  gateway: ["gateway", "apisix", "keycloak", "microservice", "بواب", "ابيسكس"],
  qa: ["test", "qa", "quality", "اختبار", "جوده", "فحص"],
};
const categoryTests = Object.entries(CATEGORY_WORDS).map(([key, words]) => [key, words.map(matcher)]);

function findCategory(text) {
  for (const [key, tests] of categoryTests) if (tests.some((t) => t(text))) return key;
  return null;
}

/* — Technologies · every skill and project technology becomes a searchable term — */

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
  "WebSockets": ["websocket", "web sockets", "ويب سوكيت"],
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
  TERMS.push({ key, label, group, test: wordMatcher(name) });
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
  return TERMS.find((t) => t.test(text)) || null;
}

function projectsUsing(term) {
  const test = wordMatcher(term.label);
  return PROJECTS.filter((p) => [p.subtitle, ...p.tech, ...p.bullets].some((s) => test(normalize(s)))).map((p) => p.id);
}

/* — Follow-ups & navigation per reply — */

const FOLLOW_UPS = {
  greeting: ["who", "tech", "projects", "contact"],
  help: ["who", "tech", "projects", "contact"],
  about: ["experience", "projects", "contact"],
  experience: ["projects", "tech", "hire"],
  skills: ["projects", "experience", "contact"],
  skill: ["tech", "projects", "hire"],
  projects: ["tech", "experience", "hire"],
  project: ["projects", "tech", "contact"],
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
  thanks: ["projects", "contact"],
  bye: [],
  fallback: ["who", "projects", "contact"],
};

const SECTIONS = {
  about: ["about"],
  experience: ["experience"],
  skills: ["skills"],
  skill: ["skills"],
  projects: ["projects"],
  project: ["projects"],
  contact: ["contact"],
  hire: ["contact"],
  certs: ["certifications"],
  education: ["certifications"],
};

const reply = (key, data = {}) => ({ key, data, sections: SECTIONS[key] || [], suggest: FOLLOW_UPS[key] || [] });

/* — Public: message in, structured reply out — */

export function answer(message) {
  const text = normalize(message);
  if (!text) return reply("help");

  const project = findProject(text);
  if (project) return reply("project", project);

  const intent = topIntent(text);
  const tech = findTech(text);

  if (intent === "projects" || (!intent && findCategory(text) && /project|مشروع|مشاريع/.test(text))) {
    const category = findCategory(text);
    const ids = PROJECTS.filter((p) => !category || p.category === category).map((p) => p.id);
    return reply("projects", { category, ids: ids.length ? ids : PROJECTS.map((p) => p.id) });
  }

  if (intent && DIRECT.has(intent)) {
    if (intent === "certs") return reply("certs", { count: CERTIFICATIONS.length });
    return reply(intent);
  }

  if (tech) {
    const ids = projectsUsing(tech);
    return reply("skill", { term: tech.label, group: tech.group, ids });
  }

  if (intent === "experience") return reply("experience", { count: EXPERIENCE.length });
  if (intent === "skills") return reply("skills");
  if (intent) return reply(intent);

  return reply("fallback");
}

export const OTHER = Object.fromEntries(OTHER_PROJECTS.map((p) => [p.title, p]));
