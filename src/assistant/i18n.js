/* ============================================================
   ASSISTANT COPY · English & Arabic
   Facts come from src/data/cv.js; this file only holds interface
   text, reply phrasing, and Arabic renderings of CV content.
   To add a language: add it to LANGS, copy the `en` block in
   STRINGS, and add its keywords to the intents in engine.js.
   ============================================================ */

import { PROFILE } from "../data/cv.js";

export const LANGS = {
  en: { label: "EN", name: "English", dir: "ltr" },
  ar: { label: "ع", name: "العربية", dir: "rtl", script: /[؀-ۿ]/ },
};

export const DEFAULT_LANG = "en";

/* The language a message is written in, or null when it can't tell (e.g. "👍" or "CV"). */
export function detectLang(text) {
  for (const [code, lang] of Object.entries(LANGS)) if (lang.script?.test(text)) return code;
  return /[a-z]{2,}/i.test(text) ? "en" : null;
}

export function initialLang() {
  try {
    const pref = (navigator.language || "").toLowerCase().slice(0, 2);
    if (LANGS[pref]) return pref;
  } catch {
    /* no navigator: fall through */
  }
  return DEFAULT_LANG;
}

const AR_MONTHS = {
  Jan: "يناير", Feb: "فبراير", Mar: "مارس", Apr: "أبريل", May: "مايو", Jun: "يونيو",
  Jul: "يوليو", Aug: "أغسطس", Sep: "سبتمبر", Oct: "أكتوبر", Nov: "نوفمبر", Dec: "ديسمبر",
};

export const STRINGS = {
  en: {
    code: "en",
    ui: {
      title: "Mahmoud's Assistant",
      subtitle: "Ask about his work, skills & projects",
      open: "Open Mahmoud's Assistant",
      close: "Close assistant",
      newChat: "Start a new conversation",
      placeholder: "Ask about Mahmoud…",
      send: "Send",
      typing: "Assistant is typing",
      language: "Language",
      errorText: "Something went wrong while answering. Please try again.",
      retry: "Try again",
      goTo: (section) => `Go to ${section}`,
      viewInPortfolio: "View in portfolio",
      now: "Now",
      present: "Present",
      more: (n) => `+${n}`,
      download: "Download resume (PDF)",
      verify: "Verify",
      grade: "Grade",
      starters: "Try asking",
    },
    welcome: "Hi! I'm Mahmoud's assistant. Ask me about his experience, skills, or projects, or how to get in touch.",
    questions: {
      who: "Who is Mahmoud?",
      tech: "What technologies does he work with?",
      projects: "Show me his projects.",
      contact: "How can I contact him?",
      experience: "Where has he worked?",
      certs: "What certifications does he have?",
      cv: "Can I get his resume?",
      hire: "I'd like to hire him.",
      current: "Where does he work now?",
      more: "Tell me more",
      nextCompany: "And the one before?",
      projRole: "What was his role?",
      projTech: "What was it built with?",
      projLinks: "Where can I see it?",
      next: "Show me another project",
    },
    sections: { about: "About", experience: "Experience", projects: "Projects", skills: "Skills", certifications: "Certifications", contact: "Contact" },
    channels: { whatsapp: "WhatsApp", email: "Email", linkedin: "LinkedIn", github: "GitHub", phone: "Phone" },
    whatsappText: "Hi Mahmoud, I came across your portfolio and would like to connect.",
    profile: {
      name: PROFILE.name,
      role: `${PROFILE.current.role} at ${PROFILE.current.company}`,
      location: PROFILE.location,
      summary: null, // English uses the CV summary as written
      stats: ["Years of experience", "Live apps on Google Play & App Store", "Projects"],
    },
    date: (d) => d,
    place: (p) => p,
    language: (l) => l,
    replies: {
      greeting: ({ v = 0 }) => [
        "Hi there! I can tell you about Mahmoud's experience, skills, and projects, or help you get in touch.",
        "Hello! Want to start with who Mahmoud is, or jump straight to his projects?",
        "Hey! Ask me anything about Mahmoud's work.",
      ][v % 3],
      help: () => "I'm a guide to Mahmoud's portfolio. Ask me who he is, what he works with, what he's built, or how to reach him.",
      about: () => "Here's a quick snapshot of Mahmoud.",
      experience: ({ count }) => `He has worked with ${count} teams across Saudi Arabia and Egypt, from fintech and POS to enterprise ERP and API gateways.`,
      skills: () => "Here's what Mahmoud works with, grouped by area.",
      skill: ({ term, group, ids }) =>
        group
          ? `Yes, ${term} is part of his ${group} toolkit.${ids.length ? " Here's where he used it:" : ""}`
          : `He used ${term} in ${ids.length === 1 ? "this project" : "these projects"}:`,
      projects: ({ category, ids }) => (category ? `Here are his ${category} projects.` : `Here are ${ids.length} of his projects.`),
      project: ({ title }) => `Here's an overview of ${title}.`,
      contact: () => "Here's how to reach Mahmoud. Email is the fastest way.",
      hire: () => "Great to hear! Mahmoud is open to Software Engineering, Flutter, and API Gateway roles. Pick whichever is easiest for you:",
      whatsapp: () => "You can message Mahmoud on WhatsApp. It opens a chat with a short greeting you can edit before sending.",
      linkedin: () => "Here's Mahmoud's LinkedIn profile.",
      github: () => "Here's Mahmoud's GitHub, with code from some of his projects.",
      cv: () => "Here's Mahmoud's resume as a PDF.",
      certs: ({ count }) => `He completed the University of Minnesota SDLC Specialization on Coursera, plus ${count} more certifications.`,
      education: () => "Mahmoud holds a Bachelor of Computer Science.",
      location: () => `Mahmoud is based in ${PROFILE.location}.`,
      languages: () => `He speaks ${PROFILE.languages.join(" and ")}.`,
      thanks: ({ v = 0 }) => [
        "You're welcome! Anything else you'd like to know?",
        "Happy to help! I'm here if you need anything else.",
        "Anytime! Any other questions about Mahmoud?",
      ][v % 3],
      bye: () => "Thanks for stopping by. Feel free to reach out to Mahmoud anytime.",
      current: ({ company, role, start }) => `He's currently a ${role} at ${company}, since ${start}.`,
      years: ({ years, count }) => `He has nearly ${years} years of professional experience, across ${count} teams in Saudi Arabia and Egypt:`,
      company: ({ company, role, start, end, current }) =>
        current ? `At ${company} (since ${start}), he works as ${role}.` : `At ${company} (${start} – ${end}), he worked as ${role}.`,
      skillGroup: ({ group }) => `Here's his full ${group} toolkit.`,
      term: ({ def, ids }) => `${def}${ids.length ? " Mahmoud has used it in these projects:" : ""}`,
      projectRole: ({ title, role }) => (role ? `On ${title}, his role was ${role}. Here's what he did:` : `Here's what Mahmoud worked on in ${title}:`),
      projectTech: ({ title, tech }) => `${title} was built with ${tech.join(", ")}.`,
      projectLinks: ({ title, has }) => (has ? `Here's where you can find ${title}:` : `${title} isn't publicly listed, but Mahmoud can tell you more about it:`),
      bot: () => "I'm Mahmoud's assistant, a small guide built into his portfolio. I'm not a general-purpose AI: I answer from what's in his portfolio. Ask me about his work, projects, or how to reach him.",
      isMahmoud: () => "I'm not Mahmoud, just his assistant. If you'd like to talk to him directly, here's how:",
      creator: () => "I'm part of Mahmoud's portfolio, built with React. I don't use an external AI service: I understand common questions in English and Arabic and answer from his portfolio.",
      howAreYou: ({ v = 0 }) => [
        "Doing great, thanks for asking! What would you like to know about Mahmoud?",
        "All good here! Curious about Mahmoud's work? Ask away.",
        "I'm well, thank you! I can tell you about Mahmoud's projects, skills, or experience.",
      ][v % 3],
      compliment: ({ v = 0 }) => [
        "Thank you! Mahmoud put a lot of care into this portfolio.",
        "Glad you like it! Want to see what else he's built?",
        "That's kind of you! Anything you'd like to know about his work?",
      ][v % 3],
      joke: ({ v = 0 }) => [
        "Why do programmers prefer dark mode? Because light attracts bugs.",
        "There are 10 kinds of people: those who understand binary and those who don't.",
        "A Flutter developer walks into a café… and rebuilds the whole widget tree just to order a coffee.",
        "Why did the API gateway stop talking to the client? Too many unauthorized requests.",
      ][v % 4],
      laugh: () => "Glad that made you smile! Anything you'd like to know about Mahmoud?",
      negative: () => "Sorry about that! I'm a simple guide focused on Mahmoud's work, so I might miss some questions. Try asking about his projects, skills, or experience, or reach him directly:",
      ack: () => "Great! Anything else you'd like to know?",
      no: () => "No problem! I'm here if you need anything.",
      privacy: () => "I only share Mahmoud's professional information. For anything personal, it's best to ask him directly.",
      salary: () => "That depends on the role, so it's best discussed with Mahmoud directly. You can reach him here:",
      availability: () => "Mahmoud is open to Software Engineering, Flutter, and API Gateway roles. For details like remote work, relocation, or start dates, it's best to ask him directly:",
      fallback: () => "I can only answer from what's in Mahmoud's portfolio, and I don't have that detail. Mahmoud can tell you directly:",
    },
  },

  ar: {
    code: "ar",
    ui: {
      title: "مساعد محمود",
      subtitle: "اسأل عن خبراته ومهاراته ومشاريعه",
      open: "افتح مساعد محمود",
      close: "إغلاق المساعد",
      newChat: "بدء محادثة جديدة",
      placeholder: "اسأل عن محمود…",
      send: "إرسال",
      typing: "المساعد يكتب",
      language: "اللغة",
      errorText: "حدث خطأ أثناء الرد. حاول مرة أخرى.",
      retry: "إعادة المحاولة",
      goTo: (section) => `انتقل إلى ${section}`,
      viewInPortfolio: "عرض في البورتفوليو",
      now: "حاليًا",
      present: "حتى الآن",
      more: (n) => `+${n}`,
      download: "تحميل السيرة الذاتية (PDF)",
      verify: "تحقّق",
      grade: "التقدير",
      starters: "جرّب أن تسأل",
    },
    welcome: "مرحبًا! أنا مساعد محمود. اسألني عن خبراته أو مهاراته أو مشاريعه، أو عن طريقة التواصل معه.",
    questions: {
      who: "من هو محمود؟",
      tech: "ما التقنيات التي يعمل بها؟",
      projects: "اعرض لي مشاريعه",
      contact: "كيف أتواصل معه؟",
      experience: "أين عمل محمود؟",
      certs: "ما الشهادات التي حصل عليها؟",
      cv: "أريد سيرته الذاتية",
      hire: "أرغب في توظيفه",
      current: "بيشتغل فين دلوقتي؟",
      more: "احكيلي أكتر",
      nextCompany: "والشغل اللي قبله؟",
      projRole: "كان دوره إيه؟",
      projTech: "اتبنى بإيه؟",
      projLinks: "فين أقدر أشوفه؟",
      next: "اعرض مشروع تاني",
    },
    sections: { about: "نبذة", experience: "الخبرات", projects: "المشاريع", skills: "المهارات", certifications: "الشهادات", contact: "التواصل" },
    channels: { whatsapp: "واتساب", email: "البريد الإلكتروني", linkedin: "LinkedIn", github: "GitHub", phone: "الهاتف" },
    whatsappText: "مرحبًا محمود، اطّلعت على البورتفوليو الخاص بك وأود التواصل معك.",
    profile: {
      name: "محمود الطنطاوي",
      role: `مهندس برمجيات في ${PROFILE.current.company}`,
      location: "الخبر، المنطقة الشرقية، المملكة العربية السعودية",
      summary:
        "مطوّر Flutter ومهندس برمجيات بخبرة احترافية تقارب 4 سنوات في بناء تطبيقات موبايل للإنتاج بـ Flutter و Dart، منها نظام ERP متعدد المستأجرين، ونظام نقاط بيع للمطاعم، وتطبيقات موارد بشرية ومدفوعات منشورة على Google Play و App Store. ويعمل أيضًا على إدارة بوابات API باستخدام Apache APISIX و Keycloak.",
      stats: ["سنوات خبرة", "تطبيقات على Google Play و App Store", "مشاريع"],
    },
    skillGroups: {
      mobile: "تطوير الموبايل",
      gateway: "بوابات API وإدارتها",
      integration: "التكامل",
      design: "هندسة البرمجيات والتصميم",
      qa: "اختبار البرمجيات وضمان الجودة",
      db: "قواعد البيانات",
      devops: "DevOps والأدوات",
      other: "أخرى",
    },
    categories: { mobile: "الموبايل", gateway: "بوابات API", qa: "الاختبار وضمان الجودة" },
    education: {
      degree: "بكالوريوس علوم الحاسب",
      school: "معهد مصر العالي للهندسة والتكنولوجيا (MET)",
      location: "المنصورة، مصر",
      grade: "جيد جدًا",
    },
    date: (d) => d.replace(/\b([A-Z][a-z]{2})\b/g, (m) => AR_MONTHS[m] || m),
    place: (p) =>
      ({ "Saudi Arabia": "السعودية", "Giza, Egypt": "الجيزة، مصر", "Riyadh, Saudi Arabia": "الرياض، السعودية", "Mansoura, Egypt": "المنصورة، مصر" })[p] || p,
    language: (l) => ({ Arabic: "العربية", English: "الإنجليزية" })[l] || l,
    replies: {
      greeting: ({ v = 0 }) => [
        "أهلًا بيك! أقدر أعرّفك على خبرات محمود ومهاراته ومشاريعه، أو أساعدك تتواصل معاه.",
        "أهلًا وسهلًا! تحب نبدأ بمين هو محمود، ولا نروح على مشاريعه على طول؟",
        "مرحبًا! اسألني أي حاجة عن شغل محمود.",
      ][v % 3],
      help: () => "أنا دليلك في بورتفوليو محمود. اسألني من هو، وما التقنيات التي يعمل بها، وما المشاريع التي بناها، أو كيف تتواصل معه.",
      about: () => "إليك لمحة سريعة عن محمود.",
      experience: ({ count }) => `عمل محمود مع ${count} فرق في السعودية ومصر، من التقنية المالية وأنظمة نقاط البيع إلى أنظمة ERP للمؤسسات وبوابات API.`,
      skills: () => "إليك التقنيات التي يعمل بها محمود، مقسّمة حسب المجال.",
      skill: ({ term, group, ids }) =>
        group
          ? `نعم، ${term} من ضمن أدواته في مجال ${group}.${ids.length ? " وهذه مشاريع استخدمه فيها:" : ""}`
          : `استخدم ${term} في ${ids.length === 1 ? "هذا المشروع" : "هذه المشاريع"}:`,
      projects: ({ category, ids }) => (category ? `إليك مشاريعه في مجال ${category}.` : `إليك ${ids.length} من مشاريعه.`),
      project: ({ title }) => `إليك نظرة عامة على ${title}.`,
      contact: () => "هذه طرق التواصل مع محمود، والبريد الإلكتروني هو الأسرع.",
      hire: () => "يسعدنا اهتمامك! محمود منفتح على فرص هندسة البرمجيات وتطوير Flutter وبوابات API. اختر الطريقة الأنسب لك:",
      whatsapp: () => "يمكنك مراسلة محمود عبر واتساب. ستُفتح محادثة برسالة ترحيب قصيرة يمكنك تعديلها قبل الإرسال.",
      linkedin: () => "هذا حساب محمود على LinkedIn.",
      github: () => "هذا حساب محمود على GitHub، وفيه أكواد بعض مشاريعه.",
      cv: () => "هذه سيرة محمود الذاتية بصيغة PDF.",
      certs: ({ count }) => `أكمل محمود تخصص دورة حياة تطوير البرمجيات (SDLC) من جامعة مينيسوتا على Coursera، إضافةً إلى ${count} شهادات أخرى.`,
      education: () => "يحمل محمود درجة البكالوريوس في علوم الحاسب.",
      location: () => "يقيم محمود في الخبر، المنطقة الشرقية، المملكة العربية السعودية.",
      languages: () => "يتحدث العربية والإنجليزية.",
      thanks: ({ v = 0 }) => [
        "العفو! تحب تعرف حاجة تانية؟",
        "على الرحب والسعة! أنا موجود لو احتجت أي حاجة.",
        "ولا يهمك! عندك أي سؤال تاني عن محمود؟",
      ][v % 3],
      bye: () => "شكرًا لزيارتك. يمكنك التواصل مع محمود في أي وقت.",
      current: ({ company, role, start }) => `يعمل محمود حاليًا بمسمى ${role} في ${company} منذ ${start}.`,
      years: ({ years, count }) => `لدى محمود خبرة احترافية تقارب ${years} سنوات، مع ${count} فرق عمل في السعودية ومصر:`,
      company: ({ company, role, start, end, current }) =>
        current ? `في ${company} (منذ ${start}) يعمل بمسمى ${role}.` : `في ${company} (${start} – ${end}) عمل بمسمى ${role}.`,
      skillGroup: ({ group }) => `إليك أدواته كاملة في مجال ${group}.`,
      term: ({ def, ids }) => `${def}${ids.length ? " وقد استخدمه محمود في هذه المشاريع:" : ""}`,
      projectRole: ({ title, role }) => (role ? `في ${title} كان دوره ${role}. وهذا ما قام به:` : `هذا ما عمل عليه محمود في ${title}:`),
      projectTech: ({ title, tech }) => `بُني ${title} باستخدام ${tech.join("، ")}.`,
      projectLinks: ({ title, has }) => (has ? `تقدر تلاقي ${title} هنا:` : `${title} مش منشور للعامة، لكن محمود يقدر يحكيلك عنه أكتر:`),
      bot: () => "أنا مساعد محمود، دليل صغير جوه البورتفوليو بتاعه. مش ذكاء اصطناعي عام: بجاوب من المعلومات اللي في البورتفوليو. اسألني عن شغله أو مشاريعه أو إزاي تتواصل معاه.",
      isMahmoud: () => "أنا مش محمود، أنا مساعده. لو حابب تكلمه مباشرة، دي الطرق:",
      creator: () => "أنا جزء من بورتفوليو محمود، ومعمول بـ React. مش بستخدم أي خدمة ذكاء اصطناعي خارجية: بفهم الأسئلة الشائعة بالعربي والإنجليزي وبجاوب من البورتفوليو.",
      howAreYou: ({ v = 0 }) => [
        "الحمد لله تمام، شكرًا إنك سألت! تحب تعرف إيه عن محمود؟",
        "كله تمام! عندك فضول عن شغل محمود؟ اسألني.",
        "بخير، شكرًا ليك! أقدر أحكيلك عن مشاريع محمود أو مهاراته أو خبراته.",
      ][v % 3],
      compliment: ({ v = 0 }) => [
        "شكرًا ليك! محمود اهتم جدًا بتفاصيل البورتفوليو ده.",
        "مبسوط إنه عجبك! تحب تشوف مشاريعه؟",
        "ده لطف منك! تحب تعرف إيه عن شغله؟",
      ][v % 3],
      joke: ({ v = 0 }) => [
        "ليه المبرمجين بيحبوا الوضع الداكن؟ عشان النور بيجذب الـ bugs 🐛",
        "فيه 10 أنواع من الناس: اللي فاهم الـ binary واللي مش فاهمه.",
        "مطوّر Flutter دخل كافيه… فعمل rebuild للـ widget tree كله عشان يطلب قهوة ☕",
        "ليه الـ API Gateway بطّل يرد على العميل؟ من كتر الطلبات اللي من غير صلاحية 😄",
      ][v % 4],
      laugh: () => "مبسوط إنها عجبتك 😄 تحب تعرف إيه عن محمود؟",
      negative: () => "آسف على كده! أنا دليل بسيط مركّز على شغل محمود، فممكن مفهمش كل الأسئلة. جرّب تسأل عن مشاريعه أو مهاراته أو خبراته، أو كلّمه مباشرة:",
      ack: () => "تمام! تحب تعرف حاجة تانية؟",
      no: () => "ولا يهمك! أنا موجود لو احتجت أي حاجة.",
      privacy: () => "أنا بشارك المعلومات المهنية لمحمود بس. لأي حاجة شخصية، الأفضل تسأله مباشرة.",
      salary: () => "ده بيعتمد على طبيعة الدور، فالأفضل تتكلم فيه مع محمود مباشرة. تقدر توصله من هنا:",
      availability: () => "محمود منفتح على فرص هندسة البرمجيات وتطوير Flutter وبوابات API. لتفاصيل زي الشغل عن بُعد أو الانتقال أو موعد البدء، الأفضل تسأله مباشرة:",
      fallback: () => "أجيب فقط من المعلومات الموجودة في بورتفوليو محمود، وهذه المعلومة غير متوفرة لدي. يمكنك سؤال محمود مباشرة:",
    },
  },
};
