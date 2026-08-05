export const translations = {
  en: {
    nav: {
      brand: "Mahmoud El-Tantawy",
      mobile: "Mobile App Dev",
      architecture: "Software Architecture",
      apiGateway: "API Gateway",
      projects: "Showcase",
      experience: "Experience",
      contact: "Contact",
      resume: "View Resume"
    },
    hero: {
      headlinePart1: "Building interfaces.",
      headlinePart2: "Designing systems.",
      headlinePart3: "Connecting everything.",
      subtitle: "Software Engineer specializing in Flutter Mobile Development, System Architecture, and Enterprise API Gateway Infrastructure (Apache APISIX & Keycloak).",
      ctaPrimary: "Explore Ecosystem",
      ctaSecondary: "Inspect Architecture",
      scrollHint: "Scroll to launch experience"
    },
    intro: {
      badge: "Cinematic System Launch",
      title: "From Mobile Screens to Gateway Infrastructure",
      desc: "Watch the progressive initialization of Mahmoud's engineering domain: starting at the Flutter UI layer, expanding into Clean Architecture, and scaling across API Gateways and microservices."
    },
    mobileSection: {
      badge: "01 — Mobile App Engineering",
      title: "Where ideas become products.",
      subtitle: "Engineered production-grade Flutter & Dart applications for Android & iOS with robust state management, NearPay NFC payments, direct database sync, and multi-tenant architectures.",
      selectProject: "Select Project Showcase",
      featuresTitle: "Key Technical Features",
      architectureTitle: "Architecture & Engineering Highlights",
      viewScreenshots: "Interactive Screen Preview"
    },
    archSection: {
      badge: "02 — Software Architecture & System Design",
      title: "I don't just build features. I design how they fit together.",
      subtitle: "Clean Architecture, SOLID Principles, and Design Patterns applied to ensure long-term stability, offline reliability, and maintainability.",
      interactiveHint: "Click nodes to inspect data flow and contract boundaries.",
      layers: {
        presentation: "Presentation Layer (Flutter UI, BLoC / GetX / Provider)",
        domain: "Domain Layer (Use Cases, Entities, Business Rules)",
        data: "Data Layer (Repositories, Adapters, SQLite, Network Sources)",
        gateway: "Gateway Layer (Apache APISIX, Route Transformation, CORS)",
        services: "Backend Microservices (SQL Server, Node.js, Firebase)"
      }
    },
    gatewaySection: {
      badge: "03 — API Gateway & API Management",
      title: "The application is only one side of the system.",
      subtitle: "Deep hands-on experience configuring Apache APISIX as an enterprise API Gateway: managing dynamic routes, JWT identity validation via Keycloak, and proxy rewrite headers.",
      interactiveTitle: "Live APISIX Request Packet Tracer",
      triggerRequest: "Simulate Live API Request",
      steps: {
        step1: "Client Mobile App dispatches HTTPS request with Bearer JWT",
        step2: "Apache APISIX intercepts request & validates CORS / Rate Limit",
        step3: "Keycloak introspects token & verifies signature / claims",
        step4: "APISIX injects X-Consumer & rewrites proxy path",
        step5: "Backend Microservice receives verified request & returns payload"
      }
    },
    securitySection: {
      badge: "04 — Authentication & Security Lifecycle",
      title: "JWT Token Rotation & Access Control",
      subtitle: "Visualization of state transitions during token expiry, silent background refresh, and re-authentication safeguards.",
      validToken: "Valid Access Token",
      tokenExpired: "Access Token Expired",
      refreshTrigger: "Execute Refresh Token Flow",
      authFailure: "Simulate Invalid Token / Failure"
    },
    paymentSection: {
      badge: "05 — Payment System Architecture",
      title: "Saaed Pay & NearPay NFC Integration",
      subtitle: "Systemic payment flow using the Adapter Pattern to decouple client UI from payment hardware SDKs, 3DS authentication, and webhook notifications.",
      nfcTap: "1. NearPay NFC Tap",
      adapterPattern: "2. Payment Adapter Layer",
      threeDS: "3. 3DS Authentication",
      webhook: "4. Webhook State Mutation"
    },
    techSection: {
      badge: "06 — Technical Ecosystem",
      title: "Technologies & Domain Expertise",
      subtitle: "Single source of truth tech stack grouped by engineering domains.",
      domains: {
        mobile: "Mobile App Development",
        architecture: "Architecture & Design",
        apiManagement: "API Gateway & Security",
        backendData: "Backend & Databases",
        devops: "DevOps & CI/CD"
      }
    },
    expSection: {
      badge: "07 — Career Journey",
      title: "Professional Experience",
      subtitle: "Chronological engineering trajectory in Egypt and Saudi Arabia."
    },
    metricsSection: {
      badge: "08 — Quantitative Impact",
      title: "Proven Engineering Track Record"
    },
    contactSection: {
      badge: "09 — Get In Touch",
      headline: "Have a system worth building?",
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
      mobile: "تطوير الهواتف",
      architecture: "هندسة البرمجيات",
      apiGateway: "بوابة واجهات البرمجة",
      projects: "المشاريع",
      experience: "الخبرات",
      contact: "التواصل",
      resume: "عرض السيرة الذاتية"
    },
    hero: {
      headlinePart1: "بناء الواجهات.",
      headlinePart2: "تصميم الأنظمة.",
      headlinePart3: "ربط كل شيء.",
      subtitle: "مهندس برمجيات متخصص في تطوير تطبيقات الفلاتر (Flutter)، هندسة البرمجيات النظيفة، وإدارة بوابات واجهات البرمجة (Apache APISIX & Keycloak).",
      ctaPrimary: "استكشف النظام البرمجي",
      ctaSecondary: "تفحص معمارية الأنظمة",
      scrollHint: "قم بالتمرير للبدء"
    },
    intro: {
      badge: "العرض التفاعلي للأنظمة",
      title: "من شاشات الهواتف الذكية إلى البوابات السحابية",
      desc: "شاهد التسلسل الهندسي لمجالات خبرة محمود: بدءاً من واجهات الفلاتر التفاعلية، إلى المعمارية النظيفة، وحتى حماية بوابات واجهات البرمجة والخدمات المصغرة."
    },
    mobileSection: {
      badge: "01 — هندسة تطبيقات الهواتف الذكية",
      title: "حيث تتدفق الأفكار لتصبح منتجات حقيقية.",
      subtitle: "تطوير تطبيقات فلاتر (Flutter & Dart) احترافية لمنصتي Android و iOS مع إدارة حالات متقدمة، حلول دفع اللاتلامسي NearPay NFC، ومزامنة قواعد البيانات بدون إنترنت.",
      selectProject: "اختر المشروع للمعاينة",
      featuresTitle: "الميزات التقنية الرئيسية",
      architectureTitle: "أبرز تفاصيل الهندسة والتطوير",
      viewScreenshots: "معاينة واجهات التطبيق التفاعلية"
    },
    archSection: {
      badge: "02 — هندسة البرمجيات وتصميم الأنظمة",
      title: "أنا لا أبني الميزات فحسب، بل أصمم كيف تتناغم معاً.",
      subtitle: "تطبيق قواعد Clean Architecture ومبادئ SOLID وأنماط التصميم (Design Patterns) لضمان استقرار النظام وقابليته للتوسع والعمل بدون إنترنت.",
      interactiveHint: "اضغط على العقد البرمجية لمعاينة تدفق البيانات وحدود الصلاحيات.",
      layers: {
        presentation: "طبقة العرض presentation (واجهات الفلاتر، BLoC / GetX / Provider)",
        domain: "طبقة قواعد العمل Domain (حالات الاستخدام use-cases، الكيانات)",
        data: "طبقة البيانات Data (المستودعات، المحولات، SQLite، الشبكة)",
        gateway: "طبقة البوابة Gateway (Apache APISIX، تحويل المسارات، CORS)",
        services: "الخدمات الخلفية Backend Services (SQL Server, Node.js, Firebase)"
      }
    },
    gatewaySection: {
      badge: "03 — إدارة بوابات واجهات البرمجة (API Gateway)",
      title: "التطبيق هو جانب واحد فقط من المنظومة.",
      subtitle: "خبرة متقدمة في إعداد وتكوين Apache APISIX كبوابة واجهات برمجة سحابية: إدارة التوجيه الديناميكي، والتحقق من هوية JWT عبر Keycloak، وإعادة كتابة الوكلاء.",
      interactiveTitle: "مُحاكي حزم الطلبات التفاعلي لـ APISIX",
      triggerRequest: "محاكاة إرسال طلب برمجية حقيقي",
      steps: {
        step1: "تطبيق الهاتف يرسل طلب HTTPS مع رمز Bearer JWT",
        step2: "بوابة Apache APISIX تلتقط الطلب وتتحقق من قواعد CORS ومعدل الطلبات",
        step3: "خادم Keycloak يتحقق من التوقيع الرقمي وتاريخ صلاحية الرمز",
        step4: "بوابة APISIX تحقن الترويسة X-Consumer وتعدل مسار الوكيل Proxy",
        step5: "الخدمة المصغرة تستقبل الطلب الموثق وترسل الاستجابة"
      }
    },
    securitySection: {
      badge: "04 — دورة حياة المصادقة والأمان",
      title: "دورة تجديد رموز JWT والتحكم في الوصول",
      subtitle: "محاكاة تفاعلية لتنقل حالات رمز الوصول، وتجديده الصامت في الخلفية عند الانتهاء، وحماية النظام من الرموز غير الصالحة.",
      validToken: "رمز وصول صالح (Valid Access Token)",
      tokenExpired: "انتهت صلاحية رمز الوصول",
      refreshTrigger: "تشغيل مسار التجديد الصامت Refresh Token",
      authFailure: "محاكاة فشل المصادقة / إعادة التوجيه"
    },
    paymentSection: {
      badge: "05 — معمارية أنظمة المدفوعات",
      title: "تطبيق Saaed Pay وإدماج NearPay NFC",
      subtitle: "تصميم معمارية مدفوعات مرنة باستخدام نمط المحول (Adapter Pattern) لعزل واجهات الفلاتر عن مكتبات الدفع، والتحقق من 3DS ومزامنة إشعارات الـ Webhook.",
      nfcTap: "1. مسح NFC عبر NearPay",
      adapterPattern: "2. طبقة محول المدفوعات (Adapter)",
      threeDS: "3. مصادقة الحماية 3DS",
      webhook: "4. تحديث حالة المعاملة via Webhook"
    },
    techSection: {
      badge: "06 — المنظومة التقنية",
      title: "التقنيات ومجالات التخصص",
      subtitle: "استعراض شامل للتقنيات المستخدمة مقسمة حسب التخصصات البرمجية.",
      domains: {
        mobile: "تطوير تطبيقات الهواتف",
        architecture: "الهندسة وتصميم الأنظمة",
        apiManagement: "بوابات APIs والأمان",
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
      headline: "هل لديك نظام يستحق البناء؟",
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
