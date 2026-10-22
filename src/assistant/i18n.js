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
      greeting: () => "Hi there! I can tell you about Mahmoud's experience, skills, and projects, or help you get in touch.",
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
      thanks: () => "You're welcome! Anything else you'd like to know?",
      bye: () => "Thanks for stopping by. Feel free to reach out to Mahmoud anytime.",
      fallback: () => "I can only answer from what's in Mahmoud's portfolio, and I don't have that detail. Mahmoud can tell you directly:",
    },
  },

  ar: {
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
    },
    sections: { about: "نبذة", experience: "الخبرات", projects: "المشاريع", skills: "المهارات", certifications: "الشهادات", contact: "التواصل" },
    channels: { whatsapp: "واتساب", email: "البريد الإلكتروني", linkedin: "LinkedIn", github: "GitHub", phone: "الهاتف" },
    whatsappText: "مرحبًا محمود، اطّلعت على البورتفوليو الخاص بك وأود التواصل معك.",
    profile: {
      name: "محمود الطنطاوي",
      role: `مهندس برمجيات في ${PROFILE.current.company}`,
      location: "الخبر، المنطقة الشرقية، المملكة العربية السعودية",
      summary:
        "مطوّر Flutter ومهندس برمجيات بخبرة احترافية تقارب 4 سنوات في بناء تطبيقات موبايل للإنتاج بـ Flutter و Dart، منها نظام ERP متعدد المستأجرين، ونظام نقاط بيع للمطاعم، وتطبيقات موارد بشرية ومدفوعات منشورة على Google Play. ويعمل أيضًا على إدارة بوابات API باستخدام Apache APISIX و Keycloak.",
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
      greeting: () => "أهلًا بك! أستطيع أن أعرّفك على خبرات محمود ومهاراته ومشاريعه، أو أساعدك في التواصل معه.",
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
      thanks: () => "العفو! هل تود معرفة شيء آخر؟",
      bye: () => "شكرًا لزيارتك. يمكنك التواصل مع محمود في أي وقت.",
      fallback: () => "أجيب فقط من المعلومات الموجودة في بورتفوليو محمود، وهذه المعلومة غير متوفرة لدي. يمكنك سؤال محمود مباشرة:",
    },
  },
};
