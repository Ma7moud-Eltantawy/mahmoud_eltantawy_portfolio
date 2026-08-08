export const translations = {
  en: {
    nav: {
      brand: "Mahmoud El-Tantawy",
      mobile: "Mobile App Dev",
      architecture: "Software Architecture",
      apiGateway: "API Gateway (APISIX)",
      projects: "Showcase",
      experience: "Experience",
      contact: "Contact",
      resume: "View Resume"
    },
    hero: {
      headlinePart1: "Software Engineering.",
      headlinePart2: "Mobile Development.",
      headlinePart3: "API Gateway (APISIX).",
      subtitle: "Senior Software Engineer specializing in Flutter Mobile App Development, Clean System Architecture, and Enterprise API Gateway Management (Apache APISIX & Keycloak IAM).",
      ctaPrimary: "Explore Mobile Apps",
      ctaSecondary: "Inspect Architecture & APISIX",
      scrollHint: "Scroll to launch experience"
    },
    intro: {
      badge: "System Architecture Showcase",
      title: "From Mobile Apps to Gateway Infrastructure",
      desc: "An integrated engineering ecosystem: starting at high-performance Flutter UI apps, extending through Clean Architecture, and governed by Apache APISIX API Gateway & Microservices management."
    },
    mobileSection: {
      badge: "01 — Mobile App Development (Flutter & Dart)",
      title: "Production-Grade Mobile Engineering",
      subtitle: "Architecting high-performance iOS & Android apps with Flutter, BLoC/Provider state management, offline SQLite sync, NearPay NFC payments, and multi-tenant architectures.",
      selectProject: "Select Mobile App Showcase",
      featuresTitle: "Mobile Technical Capabilities",
      architectureTitle: "Mobile Architecture & Design Patterns",
      viewScreenshots: "Interactive Screen Preview"
    },
    archSection: {
      badge: "02 — Software Engineering & System Architecture",
      title: "Clean Architecture, SOLID & Modular Design",
      subtitle: "Building resilient systems with strict separation of concerns, Adapter Pattern for external SDKs, Domain Use Cases, and offline queue synchronization.",
      interactiveHint: "Click nodes to inspect layer boundaries and contract specifications.",
      layers: {
        presentation: "Presentation Layer (Flutter UI, BLoC / Provider)",
        domain: "Domain Layer (Entities, Pure Dart Use Cases, Contracts)",
        data: "Data Layer (Repositories, Adapters, SQLite, Offline Sync)",
        gateway: "Gateway Layer (Apache APISIX, Route Proxy Rewrite, Rate Limiting)",
        services: "Backend Microservices (SQL Server, Centralized Keycloak IAM)"
      }
    },
    gatewaySection: {
      badge: "03 — API Gateway & Microservices Management (Apache APISIX)",
      title: "Enterprise API Gateway & Centralized Keycloak Auth",
      subtitle: "Deep practical experience managing microservices via Apache APISIX: routing dynamic endpoints, token introspection & claims validation with Keycloak IAM, X-Consumer header injection, and rate limiting.",
      interactiveTitle: "Live Apache APISIX Request Tracer",
      triggerRequest: "Simulate APISIX Live Request",
      steps: {
        step1: "Mobile App dispatches HTTPS request with Bearer JWT",
        step2: "Apache APISIX intercepts request & validates CORS & Rate Limit",
        step3: "Keycloak IAM validates JWT signature & user permissions",
        step4: "APISIX injects X-Consumer tenant header & rewrites URI path",
        step5: "Backend Microservice receives verified request & returns payload"
      }
    },
    securitySection: {
      badge: "04 — Authentication & Security Lifecycle",
      title: "Centralized Keycloak JWT Token Management",
      subtitle: "Visualization of JWT token lifecycle, silent refresh handling, and microservices tenant isolation via Apache APISIX.",
      validToken: "Valid Access Token",
      tokenExpired: "Access Token Expired",
      refreshTrigger: "Execute Silent Token Refresh",
      authFailure: "Simulate Invalid Token / Re-auth"
    },
    paymentSection: {
      badge: "05 — Payment Architecture & Hardware Integration",
      title: "Saaed Pay & NearPay NFC Hardware Integration",
      subtitle: "Production payment architecture utilizing the Adapter Pattern to isolate client UI from NFC tap-to-pay SDKs and 3DS payment gateway webhooks.",
      nfcTap: "1. NearPay NFC Tap",
      adapterPattern: "2. Payment Adapter Layer",
      threeDS: "3. 3DS Authentication",
      webhook: "4. Webhook State Mutation"
    },
    techSection: {
      badge: "06 — Technical Ecosystem",
      title: "Core Engineering Competencies",
      subtitle: "Structured tech stack spanning Mobile App Dev, Software Architecture, and Apache APISIX API Gateway.",
      domains: {
        mobile: "Mobile App Development (Flutter)",
        architecture: "Software Architecture & SOLID",
        apiManagement: "API Gateway (Apache APISIX & Keycloak)",
        backendData: "Backend & Databases",
        devops: "DevOps & CI/CD"
      }
    },
    expSection: {
      badge: "07 — Career Trajectory",
      title: "Professional Experience",
      subtitle: "Engineering trajectory across Egypt and Saudi Arabia."
    },
    metricsSection: {
      badge: "08 — Quantitative Impact",
      title: "Engineering Achievements & Metrics"
    },
    contactSection: {
      badge: "09 — Contact",
      headline: "Have a system or app to build?",
      ctaText: "Let's build it.",
      form: {
        name: "Your Name",
        email: "Your Email",
        message: "Project details or inquiry...",
        send: "Send Message",
        success: "Thank you! Your message has been sent."
      },
      directContact: "Direct Channels",
      downloadCv: "Download Formatted CV (PDF)"
    }
  },
  ar: {
    nav: {
      brand: "محمود الطنطاوي",
      mobile: "تطوير الموبايل",
      architecture: "هندسة البرمجيات",
      apiGateway: "بوابة APIs (APISIX)",
      projects: "المشاريع",
      experience: "الخبرات",
      contact: "التواصل",
      resume: "السيرة الذاتية"
    },
    hero: {
      headlinePart1: "هندسة البرمجيات.",
      headlinePart2: "تطوير تطبيقات الموبايل.",
      headlinePart3: "إدارة بوابات APIs (APISIX).",
      subtitle: "مهندس برمجيات متخصص في تطوير تطبيقات الموبايل (Flutter)، هندسة المعمارية النظيفة (Clean Architecture)، وإدارة بوابات واجهات البرمجة والمايكروسيرفيسيز (Apache APISIX & Keycloak).",
      ctaPrimary: "استكشف تطبيقات الموبايل",
      ctaSecondary: "تفحص الهندسة وبوابة APISIX",
      scrollHint: "قم بالتمرير للبدء"
    },
    intro: {
      badge: "عرض الأنظمة والمعمارية",
      title: "من شاشات الموبايل إلى بنية بوابات APIs السحابية",
      desc: "منظومة برمجية متكاملة تجمع بين تطبيقات الموبايل عالية الأداء بالفلاتر، والمعمارية النظيفة المحكمة، وإدارة المايكروسيرفيسيز والمصادقة المركزية عبر Apache APISIX و Keycloak."
    },
    mobileSection: {
      badge: "01 — تطوير تطبيقات الموبايل (Flutter & Dart)",
      title: "تطوير تطبيقات موبايل احترافية للمؤسسات",
      subtitle: "بناء تطبيقات iOS و Android عالية الكفاءة باستخدام Flutter، إدارة الحالات المتقدمة (BLoC / Provider)، المزامنة المحلية بدون إنترنت SQLite، حلول الدفع NearPay NFC، وهيكلية الأنظمة متعددة المستخدمين.",
      selectProject: "اختر تطبيق الموبايل للمعاينة",
      featuresTitle: "القدرات التقنية في الموبايل",
      architectureTitle: "معمارية وتصاميم تطبيق الموبايل",
      viewScreenshots: "معاينة واجهات التطبيق التفاعلية"
    },
    archSection: {
      badge: "02 — هندسة البرمجيات وتصميم الأنظمة",
      title: "Clean Architecture ومبادئ SOLID والتصميم النظاراتي",
      subtitle: "تطبيق قواعد الهندسة النظيفة وفصل الصلاحيات بالكامل، نمط المحول (Adapter Pattern) للمدفوعات، وقواعد العمل المستقلة لضمان استقرار النظام ومزامنة قواعد البيانات.",
      interactiveHint: "اضغط على الطبقات لمعاينة حدود الصلاحيات والاتفاقيات البرمجية.",
      layers: {
        presentation: "طبقة العرض (واجهات Flutter BLoC / Provider)",
        domain: "طبقة قواعد العمل (Entities, Dart Use Cases)",
        data: "طبقة البيانات (Repositories, Adapters, SQLite, Sync)",
        gateway: "طبقة البوابة (Apache APISIX, Route Proxy Rewrite, CORS)",
        services: "الخدمات المصغرة (SQL Server, Centralized Keycloak IAM)"
      }
    },
    gatewaySection: {
      badge: "03 — إدارة بوابات واجهات البرمجة والمايكروسيرفيسيز (Apache APISIX)",
      title: "إدارة بوابة APISIX والمصادقة المركزية Keycloak IAM",
      subtitle: "خبرة عملية متعمقة في تكوين وإدارة Apache APISIX كبوابة مركزية للميكروسيرفيسيز: توجيه المسارات الديناميكية، التحقق من هوية JWT عبر Keycloak، حماية الخدمات وحقن ترويسة X-Consumer.",
      interactiveTitle: "مُحاكي حزم الطلبات التفاعلي لـ Apache APISIX",
      triggerRequest: "تشغيل محاكاة طلب APISIX",
      steps: {
        step1: "تطبيق الموبايل يرسل طلب HTTPS مع رمز Bearer JWT",
        step2: "بوابة Apache APISIX تلتقط الطلب وتتحقق من قواعد CORS ومعدل الطلبات Rate Limit",
        step3: "خادم Keycloak IAM يتحقق من التوقيع الرقمي وصلاحيات المستخدم",
        step4: "بوابة APISIX تحقن ترويسة X-Consumer وتعدل مسار الوكيل Proxy Rewrite",
        step5: "الخدمة المصغرة Microservice تستقبل الطلب الموثق وترسل الاستجابة"
      }
    },
    securitySection: {
      badge: "04 — دورة حياة المصادقة والأمان",
      title: "إدارة المصادقة المركزية بـ Keycloak & JWT Tokens",
      subtitle: "محاكاة تفاعلية لتنقل حالات رمز الوصول، التجديد الصامت في الخلفية، وعزل المايكروسيرفيسيز عبر Apache APISIX.",
      validToken: "رمز وصول صالح (Valid Access Token)",
      tokenExpired: "انتهت صلاحية رمز الوصول",
      refreshTrigger: "تشغيل التجديد الصامت Refresh Token",
      authFailure: "محاكاة فشل المصادقة"
    },
    paymentSection: {
      badge: "05 — معمارية المدفوعات وتكامل الأجهزة",
      title: "تطبيقات Saaed Pay وتكامل NearPay NFC",
      subtitle: "تصميم معمارية مدفوعات احترافية باستخدام نمط المحول (Adapter Pattern) لعزل واجهات الموبايل عن مكتبات الدفع باللمس ورسائل Webhooks.",
      nfcTap: "1. قراءة NFC عبر NearPay",
      adapterPattern: "2. طبقة محول الدفع (Adapter)",
      threeDS: "3. مصادقة الحماية 3DS",
      webhook: "4. تحديث حالة المعاملة عبر Webhook"
    },
    techSection: {
      badge: "06 — المنظومة التقنية",
      title: "المهارات والخبرات البرمجية",
      subtitle: "قائمة تقنيات مهندسة تشمل تطبيقات الموبايل، هندسة البرمجيات، وبوابة Apache APISIX.",
      domains: {
        mobile: "تطوير تطبيقات الموبايل (Flutter)",
        architecture: "هندسة البرمجيات (SOLID & Clean Arch)",
        apiManagement: "إدارة بوابات APIs (Apache APISIX & Keycloak)",
        backendData: "الخلفية وقواعد البيانات",
        devops: "النشر والتحكم بالنسخ"
      }
    },
    expSection: {
      badge: "07 — مسيرة العمل والخبرات",
      title: "الخبرات المهنية",
      subtitle: "المسار المهني للتطوير والهندسة في مصر والمملكة العربية السعودية."
    },
    metricsSection: {
      badge: "08 — الأثر بالأرقام",
      title: "إحصائيات الإنجاز والخبرات الميدانية"
    },
    contactSection: {
      badge: "09 — التواصل والتعاون",
      headline: "هل لديك تطبيق موبايل أو نظام يستحق البناء؟",
      ctaText: "لنقم ببنائه الآن.",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        message: "تفاصيل المشروع أو الاستفسار...",
        send: "إرسال الرسالة",
        success: "شكراً لك! تم إرسال رسالتك بنجاح."
      },
      directContact: "قنوات التواصل المباشرة",
      downloadCv: "تحميل السيرة الذاتية (PDF)"
    }
  }
};

