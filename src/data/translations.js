export const translations = {
  en: {
    nav: {
      brand: "Mahmoud El-Tantawy",
      roleBadge: "SOFTWARE ENGINEER",
      showcase: "Systems & Projects",
      architecture: "System Design",
      apiGateway: "API Management",
      mindset: "How I Think",
      skills: "Technical Skills",
      experience: "Experience",
      contact: "Contact",
      resume: "View Resume"
    },
    hero: {
      headlinePart1: "Engineering systems.",
      headlinePart2: "Designing architectures.",
      headlinePart3: "Connecting platforms.",
      subtitle: "Software Engineer with hands-on experience in client-side engineering, system design, API management, and distributed system architectures. Bridging high-performance Flutter applications with Apache APISIX Gateway routing and Keycloak IAM security.",
      ctaPrimary: "Explore Systems",
      ctaSecondary: "Inspect Architecture",
      scrollHint: "Scroll to explore engineering architecture"
    },
    intro: {
      badge: "Architecture Pipeline Trace",
      title: "From Application Layer to Gateway Infrastructure",
      desc: "An end-to-end trace of how systems are structured: starting from modular Flutter client layers, moving through domain contracts and offline queues, into centralized Apache APISIX API Gateway governance and Keycloak IAM security."
    },
    showcaseSection: {
      badge: "01 — Production Systems & Case Studies",
      title: "Engineered for real-world constraints.",
      subtitle: "Production-grade systems designed with explicit boundaries, offline-first reliability, payment provider abstractions, and centralized gateway security.",
      selectProject: "Select Engineering Case Study",
      problemTitle: "The Engineering Problem",
      architectureTitle: "System Architecture",
      decisionsTitle: "Key Technical Decisions & Patterns",
      impactTitle: "System Impact & Outcome",
      viewScreenshots: "Interface & State Preview"
    },
    archSection: {
      badge: "02 — Software Architecture & Domain Boundaries",
      title: "I don't start with code. I start with system boundaries.",
      subtitle: "Applying Clean Architecture, SOLID principles, and proven design patterns to ensure modular testability, offline resilience, and replaceable external integrations.",
      interactiveHint: "Click nodes to inspect data flows and contract boundaries.",
      layers: {
        presentation: "Presentation Layer (Flutter UI, BLoC / Reactive Streams)",
        domain: "Domain Layer (Entities, Use Cases, Repository Contracts)",
        data: "Data Layer (Adapters, Offline SQLite Sync, Network Repositories)",
        gateway: "Gateway Layer (Apache APISIX, Route Transformation, CORS)",
        services: "Identity & Services (Keycloak IAM, SQL Server, Microservices)"
      }
    },
    gatewaySection: {
      badge: "03 — API Gateway & Centralized Governance",
      title: "The client application is only one side of the system.",
      subtitle: "Hands-on experience configuring Apache APISIX as a high-throughput API Gateway: managing dynamic route matching, token introspection with Keycloak, proxy URI rewrites, and consumer identification.",
      interactiveTitle: "Live APISIX Gateway Packet Flow Tracer",
      triggerRequest: "Dispatch API Request Packet",
      steps: {
        step1: "Client application issues HTTPS request with Bearer JWT token",
        step2: "Apache APISIX intercepts request, enforcing CORS and rate-limiting rules",
        step3: "Keycloak IAM service introspects JWT token signature and expiry",
        step4: "APISIX injects X-Consumer tenant header and executes proxy URI rewrite",
        step5: "Downstream microservice processes authenticated payload and returns response"
      }
    },
    securitySection: {
      badge: "04 — Authentication & Security Lifecycle",
      title: "JWT Token Rotation & Access Control",
      subtitle: "Deterministic handling of token lifecycle states: silent background refresh, token rotation, and graceful re-authentication upon session expiration.",
      validToken: "Valid Access Token (15m)",
      tokenExpired: "Token Expired (401 Trigger)",
      refreshTrigger: "Execute Refresh Token Rotation",
      authFailure: "Simulate Session Invalidation (403)"
    },
    paymentSection: {
      badge: "05 — Distributed Payment Architecture",
      title: "Payment Abstraction & Hardware Decoupling",
      subtitle: "Decoupling client applications from proprietary payment SDKs (NearPay NFC) using the Adapter Pattern, with 3DS challenge workflows and server webhook reconciliation.",
      nfcTap: "1. Hardware NFC Tap via SDK",
      adapterPattern: "2. Normalized Adapter Layer",
      threeDS: "3. 3DS Authentication Challenge",
      webhook: "4. Webhook Reconciliation"
    },
    mindsetSection: {
      badge: "06 — Engineering Mindset",
      title: "How I Think About Systems",
      quote: "“I don't start with technology. I start with the problem, constraints, failure scenarios, and the evolution the system may need to support.”",
      subtitle: "Core architectural principles applied across every production project:"
    },
    techSection: {
      badge: "07 — Technical Ecosystem",
      title: "Skills & Engineering Domains",
      subtitle: "Structured engineering taxonomy categorized by discipline and verified production experience.",
      domains: {
        softwareEngineering: "Software Engineering & Mobile",
        systemDesign: "System Design & Architecture",
        apiManagement: "API Management & Gateway",
        identitySecurity: "Identity & Security",
        backendData: "Backend & Databases",
        devopsTooling: "DevOps & Tooling"
      }
    },
    expSection: {
      badge: "08 — Career Trajectory",
      title: "Professional Engineering Experience",
      subtitle: "Demonstrated progression across application engineering, system design, and API management in Saudi Arabia and Egypt."
    },
    metricsSection: {
      badge: "09 — Quantitative Track Record",
      title: "Measurable Engineering Impact"
    },
    aboutSection: {
      badge: "10 — Professional Evolution",
      title: "From Application Development to System Architecture",
      desc: "My journey began with deep hands-on mobile development in Flutter, engineering mission-critical systems such as Saaed Pay and Multi-Tenant ERPs. Recognizing that client performance is fundamentally bounded by backend stability and communication integrity, I expanded into Clean Architecture, SOLID principles, and API Gateway infrastructure management with Apache APISIX & Keycloak IAM.",
      subdesc: "Today, I focus on building reliable end-to-end software systems: designing clear domain boundaries, planning for offline failure states, centralizing cross-cutting gateway concerns, and evaluating architectural trade-offs pragmatically."
    },
    contactSection: {
      badge: "11 — Connect & Collaborate",
      headline: "Open to opportunities in:",
      ctaText: "Software Engineering • System Design • API Management",
      form: {
        name: "Your Name",
        email: "Your Email Address",
        message: "Discuss engineering roles, system architecture, or projects...",
        send: "Send Direct Inquiry",
        success: "Thank you! Your message has been routed to Mahmoud."
      },
      directContact: "Direct Engineering Channels",
      downloadCv: "Download Formatted CV (PDF)"
    }
  },
  ar: {
    nav: {
      brand: "محمود الطنطاوي",
      roleBadge: "مهندس برمجيات",
      showcase: "الأنظمة والمشاريع",
      architecture: "تصميم الأنظمة",
      apiGateway: "إدارة واجهات APIs",
      mindset: "طريقة التفكير",
      skills: "المهارات التقنية",
      experience: "الخبرات",
      contact: "التواصل",
      resume: "السيرة الذاتية"
    },
    hero: {
      headlinePart1: "هندسة الأنظمة.",
      headlinePart2: "تصميم المعماريات.",
      headlinePart3: "ربط المنصات.",
      subtitle: "مهندس برمجيات يمتلك خبرة عملية في تطوير التطبيقات، وتصميم الأنظمة، وإدارة بوابات واجهات البرمجة (APIs)، والأنظمة الموزعة. ربط تطبيقات فلاتر عالية الأداء مع بوابة Apache APISIX وتأمين الهويات عبر Keycloak.",
      ctaPrimary: "استكشف الأنظمة البرمجية",
      ctaSecondary: "تفحص تصميم المعماريات",
      scrollHint: "قم بالتمرير لاستكشاف المعمارية الهندسية"
    },
    intro: {
      badge: "تتبع خط المعمارية البرمجية",
      title: "من طبقة التطبيقات إلى بنية بوابات واجهات البرمجة",
      desc: "تتبع شامل لكيفية ترابط الأنظمة: بدءاً من معمارية واجهات فلاتر المعيارية، مروراً بقواعد العمل وطوابير المزامنة بدون إنترنت، وصولاً إلى الحماية المركزية عبر بوابة Apache APISIX وخادم Keycloak IAM."
    },
    showcaseSection: {
      badge: "01 — دراسات حالة الأنظمة في بيئات الإنتاج",
      title: "مصممة للتعامل مع تحديات وظروف التشغيل الواقعية.",
      subtitle: "أنظمة برمجية مصممة بحدود واضحة، وعمل موثوق بدون اتصال (Offline-First)، وتجريد مزودي الدفع بنمط المحول، وحماية مركزية لواجهات البرمجة.",
      selectProject: "اختر دراسة الحالة الهندسية",
      problemTitle: "المشكلة الهندسية والتشغيلية",
      architectureTitle: "معمارية وبنية النظام",
      decisionsTitle: "القرارات التقنية وأنماط التصميم",
      impactTitle: "الأثر والنتيجة التشغيلية",
      viewScreenshots: "معاينة الواجهات والحالات"
    },
    archSection: {
      badge: "02 — هندسة البرمجيات وفصل قواعد العمل",
      title: "أنا لا أبدأ بالكود. أبدأ بتحديد حدود ومكونات النظام.",
      subtitle: "تطبيق مبادئ Clean Architecture و SOLID وأنماط التصميم الهندسية لضمان قابلية الاختبار، والاستقرار عند انقطاع الاتصال، وسهولة استبدال الخدمات الخارجية.",
      interactiveHint: "اضغط على العقد البرمجية لمعاينة تدفق البيانات وحدود العقود البرمجية.",
      layers: {
        presentation: "طبقة العرض Presentation (واجهات فلاتر، BLoC / تدفق البيانات)",
        domain: "طبقة قواعد العمل Domain (الكيانات، حالات الاستخدام، عقود المستودعات)",
        data: "طبقة البيانات Data (المحولات، مزامنة SQLite، مصادر الشبكة)",
        gateway: "طبقة البوابة Gateway (Apache APISIX، إعادة كتابة المسارات، CORS)",
        services: "الهويات والخدمات (Keycloak IAM، SQL Server، الخدمات المصغرة)"
      }
    },
    gatewaySection: {
      badge: "03 — بوابة واجهات البرمجة (API Gateway) والإدارة المركزية",
      title: "تطبيق الهاتف هو جانب واحد فقط من المنظومة المتكاملة.",
      subtitle: "خبرة عملية في إعداد Apache APISIX كبوابة واجهات برمجة سحابية: إدارة التوجيه الديناميكي، والتحقق المركزي من الرموز عبر Keycloak، وإعادة كتابة المسارات، وحقن هوية المستهلك.",
      interactiveTitle: "مُحاكي تدفق حزم الطلبات عبر بوابة APISIX",
      triggerRequest: "محاكاة إرسال حزمة طلب برمجي",
      steps: {
        step1: "التطبيق يرسل طلب HTTPS مرفقاً برمز Bearer JWT",
        step2: "بوابة Apache APISIX تلتقط الطلب وتتحقق من سياسات CORS ومعدل الطلبات",
        step3: "خادم Keycloak يتحقق من التوقيع الرقمي وصلاحية رمز JWT",
        step4: "بوابة APISIX تحقن ترويسة X-Consumer وهوية المستأجر وتعدل مسار الوكيل",
        step5: "الخدمة المصغرة تستقبل الطلب الموثق وترسل استجابة البيانات 200 OK"
      }
    },
    securitySection: {
      badge: "04 — دورة حياة المصادقة والأمان",
      title: "دورة تجديد رموز JWT والتحكم في الوصول",
      subtitle: "إدارة منهجية لحالات رمز المصادقة: التجديد الصامت في الخلفية، وتدوير الرموز، وإعادة التوجيه الآمن عند انتهاء الجلسة.",
      validToken: "رمز وصول صالح (15 دقيقة)",
      tokenExpired: "انتهت صلاحية الرمز (حالة 401)",
      refreshTrigger: "تشغيل مسار التجديد الصامت Refresh Token",
      authFailure: "محاكاة إنهاء الجلسة وإعادة المصادقة (403)"
    },
    paymentSection: {
      badge: "05 — معمارية أنظمة المدفوعات الموزعة",
      title: "تجريد مزودي الدفع وعزل مكتبات العتاد",
      subtitle: "فصل تطبيقات العملاء عن مكتبات الدفع وأجهزة NearPay NFC باستخدام نمط المحول (Adapter Pattern)، مع تحديات 3DS ومطابقة حالات الدفع عبر الـ Webhooks.",
      nfcTap: "1. مسح بطاقة NFC عبر SDK",
      adapterPattern: "2. طبقة محول المدفوعات المعيارية",
      threeDS: "3. مصادقة الحماية 3DS",
      webhook: "4. مطابقة المعاملة عبر الـ Webhook"
    },
    mindsetSection: {
      badge: "06 — الفلسفة الهندسية",
      title: "كيف أفكر في تصميم وبناء الأنظمة",
      quote: "“أنا لا أبدأ باختيار التقنيات، بل أبدأ بفهم المشكلة، والقيود، وسيناريوهات الفشل، والتوسع المستقبلي الذي يجب أن يتحمله النظام.”",
      subtitle: "المبادئ الهندسية الأساسية المطبقة في كافة الأنظمة ومشاريع الإنتاج:"
    },
    techSection: {
      badge: "07 — المنظومة التقنية",
      title: "المهارات والتخصصات الهندسية",
      subtitle: "تصنيف هندسي منظم للتقنيات والمهارات المعتمدة على خبرات تشغيل فعلية.",
      domains: {
        softwareEngineering: "هندسة البرمجيات وتطبيقات الهواتف",
        systemDesign: "تصميم الأنظمة والمعماريات",
        apiManagement: "إدارة بوابات APIs",
        identitySecurity: "الهويات والأمان الرقمي",
        backendData: "الخلفية وقواعد البيانات",
        devopsTooling: "أدوات التطوير والنشر المستمر"
      }
    },
    expSection: {
      badge: "08 — المسار المهني",
      title: "الخبرات الهندسية والعملية",
      subtitle: "تدرج مهني يجمع بين تطوير التطبيقات، وتصميم الأنظمة، وإدارة بوابات APIs في السعودية ومصر."
    },
    metricsSection: {
      badge: "09 — الأثر بالأرقام",
      title: "مؤشرات الإنجاز والخبرة العملية"
    },
    aboutSection: {
      badge: "10 — التطور المهني",
      title: "من تطوير التطبيقات إلى هندسة ومعمارية الأنظمة",
      desc: "بدأت رحلتي بالتعمق في تطوير تطبيقات فلاتر متقدمة لأنظمة مثل Saaed Pay ومنصات ERP متعددة المستأجرين. ومع الإدراك بأن أداء التطبيقات مرتبط مباشرة بثبات الخدمات الخلفية وكفاءة الاتصال، توسعت في تطبيق معمارية Clean Architecture، ومبادئ SOLID، وإدارة بنية بوابات واجهات البرمجة عبر Apache APISIX وخادم Keycloak IAM.",
      subdesc: "أركز اليوم على بناء منظومات برمجية موثوقة ومتكاملة: تحديد حدود المكونات، والتخطيط للتعامل مع انقطاع الاتصال، ومركزية الاهتمامات المشتركة في البوابات البرمجية، والموازنة الواعية بين الخيارات الهندسية."
    },
    contactSection: {
      badge: "11 — التواصل والتعاون المهني",
      headline: "متاح لفرص التعاون في:",
      ctaText: "هندسة البرمجيات • تصميم الأنظمة • إدارة واجهات APIs",
      form: {
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        message: "تفاصيل الفرصة المهنية أو معمارية المشروع...",
        send: "إرسال الاستفسار المباشر",
        success: "شكراً لك! تم توجيه رسالتك إلى محمود مباشرة."
      },
      directContact: "قنوات التواصل المباشرة",
      downloadCv: "تحميل السيرة الذاتية (PDF)"
    }
  }
};
