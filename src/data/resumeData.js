export const resumeData = {
  personalInfo: {
    name: {
      en: "Mahmoud El-Tantawy",
      ar: "محمود الطنطاوي"
    },
    title: {
      en: "Software Engineer | Flutter & Mobile Architecture | API Gateway Specialist",
      ar: "مهندس برمجيات | مطور تطبيقات فلاتر وهندسة برمجيات | متقدم في بوابة واجهات البرمجة"
    },
    summary: {
      en: "Software engineer and Flutter developer with over three years of professional experience building high-quality, scalable mobile applications and enterprise systems. Specialized in mobile development, clean architecture, payment integrations, and API Gateway infrastructure management (Apache APISIX & Keycloak).",
      ar: "مهندس برمجيات ومطور تطبيقات فلاتر بخبرة تزيد عن 3 سنوات في بناء تطبيقات الهواتف الذكية عالية الجودة والأنظمة السحابية. متخصص في تطوير الفلاتر، الهندسة النظيفة (Clean Architecture)، حلول الدفع الرقمي، وإدارة بوابات واجهات البرمجة (Apache APISIX & Keycloak)."
    },
    email: "mahmoudeltantawy2019@gmail.com",
    phone: "+966 57 582 0045",
    location: {
      en: "Al Khobar, Eastern Province, Saudi Arabia | Egypt",
      ar: "الخبر، المنطقة الشرقية، المملكة العربية السعودية | مصر"
    },
    github: "https://github.com/Ma7moud-Eltantawy",
    linkedin: "https://linkedin.com/in/mahmoud-eltantawy-7b26321b1",
    dob: "24/05/2000"
  },

  metrics: [
    { id: "exp", value: "3+", label: { en: "Years Professional Exp.", ar: "سنوات خبرة مهنية" } },
    { id: "projects", value: "12+", label: { en: "Production Projects", ar: "مشروع إنتاجي" } },
    { id: "tenant", value: "3+", label: { en: "Multi-Tenant Enterprise Platforms", ar: "أنظمة متعددة المستأجرين" } },
    { id: "gateway", value: "100%", label: { en: "API Gateway Security & Routing", ar: "حماية وتوجيه واجهات البرمجة" } }
  ],

  experiences: [
    {
      id: "dolf",
      company: "Dolf Technologies",
      role: { en: "Software Engineer | Mobile App Developer", ar: "مهندس برمجيات | مطور تطبيقات هواتف" },
      period: "01/02/2026 – Present",
      location: { en: "Saudi Arabia / Remote", ar: "المملكة العربية السعودية / عن بُعد" },
      highlights: [
        { en: "Engineering enterprise-grade mobile applications and scalable systems.", ar: "تطوير تطبيقات هواتف ذكية وأنظمة قابلة للتوسع بمقاييس عالمية." },
        { en: "Implementing Clean Architecture and robust state management for complex business logic.", ar: "تطبيق الهندسة النظيفة (Clean Architecture) وإدارة الحالات للمعالجات البرمجية المعقدة." }
      ],
      tech: ["Flutter", "Dart", "Clean Architecture", "REST APIs", "State Management"]
    },
    {
      id: "tebalink",
      company: "Teba-link",
      role: { en: "Flutter Developer", ar: "مطور فلاتر (Flutter Developer)" },
      period: "01/02/2024 – 12/01/2026",
      location: { en: "Giza, Egypt", ar: "الجيزة، مصر" },
      companyDesc: { en: "Software company specializing in accounting and administrative programs.", ar: "شركة برمجيات متخصصة في البرامج المحاسبية والإدارية." },
      highlights: [
        { en: "Enhanced and expanded Multi-Tenant ERP Systems (Ezee Manager Pro & Tebalink ERP) both online and offline.", ar: "تطوير وتوسيع نظام ERP متعدد المستأجرين (Ezee Manager Pro & Tebalink ERP) للعمل أونلاين وأوفلاين." },
        { en: "Developed custom PDF/printing modules, financial reports, and updated invoice calculations.", ar: "إنشاء وحدات الطباعة والـ PDF، والتقارير المالية وإعادة إنعاش معادلات الفواتير." },
        { en: "Built Ezee HR app from scratch featuring QR-based check-in/out and role-based permissions.", ar: "بناء تطبيق Ezee HR من الصفر ونظام الحضور بالـ QR وتحكم صلاحيات المستخدمين." }
      ],
      tech: ["Flutter", "Multi-Tenant", "Offline Sync", "SQL Server", "PDF Engine", "QR Auth"]
    },
    {
      id: "daralsaaea",
      company: "Dar Alsaaed",
      role: { en: "Flutter Developer", ar: "مطور فلاتر (Flutter Developer)" },
      period: "01/12/2023 – 01/06/2024",
      location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
      companyDesc: { en: "Company specializing in management and payment solutions, POS, commercial & accounting software.", ar: "شركة متخصصة في حلول إدارة وإدماج مدفوعات أنظمة نقاط البيع والأنظمة المحاسبية." },
      highlights: [
        { en: "Engineered Saaed Pay fintech app with NearPay NFC integration and digital wallet management.", ar: "تطوير تطبيق Saaed Pay للمدفوعات الرقمية وإدماج تقنية NFC عبر NearPay وتسهيل المحافظ." },
        { en: "Developed Ezee Restaurant POS system with direct SQL Server integration for ultra-fast offline operations.", ar: "إنشاء نظام Ezee Restaurant POS بربط مباشر مع SQL Server لسرعة الاستجابة بدون إنترنت." },
        { en: "Transformed ALFAKHRA native Saudi fashion app to cross-platform Flutter application.", ar: "تحويل تطبيق الفاخرة للزي السعودي من التطوير الأصيل إلى منصة فلاتر موحدة." }
      ],
      tech: ["Flutter", "NearPay NFC", "Fintech", "Direct SQL Server", "POS Realtime", "WebSockets"]
    }
  ],

  projects: [
    {
      id: "saaed-pay",
      title: { en: "Saaed Pay (Fintech & NFC Payments)", ar: "تطبيق Saaed Pay للمدفوعات الرقمية وNFC" },
      category: "Fintech & Mobile",
      tagline: { en: "Saudi digital payment application with NFC tap-to-phone, digital wallet, and multi-currency transfer.", ar: "تطبيق مدفوعات سعودي يدعم الدفع اللاتلامسي NFC، المحافظ الرقمية، وتحويل الأموال." },
      description: {
        en: "Transformed the company's financial app into a cross-platform Flutter application. Focused on performance, UI/UX consistency, and advanced fintech features including NearPay NFC SDK integration, digital wallet management, bill payments, and money transfers.",
        ar: "تحويل التطبيق المالي للشركة إلى تطبيق فلاتر عالي الأداء مع إدماج حلول الدفع اللاتلامسي NearPay NFC، إدارة المحافظ المالية، سداد الفواتير، وتحويل الأموال."
      },
      keyFeatures: [
        { en: "NearPay NFC Tap-on-Phone Integration", ar: "إدماج تقنية NFC للدفع المباشر عبر NearPay" },
        { en: "Digital Wallet Management (Add, store & manage funds)", ar: "إدارة المحفظة الرقمية وإضافة وشحن الرصيد" },
        { en: "Bill Payments & Direct Money Transfers", ar: "سداد الفواتير وتحويلات الأموال الفورية" },
        { en: "Multi-Language AR/EN Support", ar: "دعم كامل للغتين العربية والإنجليزية" }
      ],
      architectureHighlights: {
        en: "Implemented Provider Abstraction (Adapter Pattern) to standardize payment gateways, 3DS authentication flow, webhook handling, and deterministic transaction state mutation.",
        ar: "تطبيق نمط المحول (Adapter Pattern) لتوحيد بوابات الدفع، وإدارات مصادقة 3DS ومزامنة الحالات عبر الـ Webhooks."
      },
      tech: ["Flutter", "Dart", "NearPay NFC", "Fintech Security", "Provider", "REST APIs"],
      accentColor: "#0071E3"
    },
    {
      id: "qiyasi",
      title: { en: "Qiyasi API Gateway & Microservices Platform", ar: "مشروع قياسي - منصة البوابة البرمجية والخدمات الدقيقة" },
      category: "API Gateway & System Design",
      tagline: { en: "Enterprise microservices management layer built on Apache APISIX & Keycloak authentication.", ar: "طبقة إدارة الخدمات المصغرة للبوابة البرمجية المعتمدة على Apache APISIX وKeycloak." },
      description: {
        en: "Contributed to the design and implementation of the API Gateway layer using Apache APISIX for the Qiyasi microservices platform. Configured routing, security plugins, Keycloak authentication/authorization, and request/response transformations.",
        ar: "المساهمة في تصميم وتطوير طبقة بوابة واجهات البرمجة (API Gateway) باستخدام Apache APISIX لمنصة قياسي، وإعداد التوجيه، والحماية عبر Keycloak وتحويل الطلبات."
      },
      keyFeatures: [
        { en: "Apache APISIX Dynamic Route Management", ar: "إدارة التوجيه الديناميكي عبر Apache APISIX" },
        { en: "Keycloak JWT Token Lifecycle Integration", ar: "ربط دورة حياة رمزي JWT وتأكيد الهويات عبر Keycloak" },
        { en: "X-Consumer Identification & Proxy Rewrite", ar: "تحديد هوية المطلب عبر X-Consumer وإعادة كتابة الوكلاء" },
        { en: "Swagger / OpenAPI Documentation Integration", ar: "توثيق واجهات البرمجة وتكاملياتها عبر Swagger/OpenAPI" }
      ],
      architectureHighlights: {
        en: "Decoupled client applications from backend engines by funneling traffic through centralized APISIX plugins for JWT validation, rate limiting, and CORS headers.",
        ar: "عزل تطبيقات العملاء عن محركات الخلفية بتوجيه الحركة عبر إضافات APISIX المركزية لمصادقة الـ JWT وتحديد المعدلات."
      },
      tech: ["Apache APISIX", "Keycloak", "JWT", "Microservices", "API Security", "Swagger/OpenAPI"],
      accentColor: "#FF6B00"
    },
    {
      id: "multi-tenant-erp",
      title: { en: "Ezee Manager Pro & Tebalink ERP (Online/Offline)", ar: "نظام ERP متعدد المستأجرين (Ezee Manager Pro & Tebalink)" },
      category: "Enterprise Software",
      tagline: { en: "Flutter-based Multi-Tenant ERP with isolated tenant environments and seamless automatic data synchronization.", ar: "نظام ERP متعدد المستأجرين يعزل بيانات كل مؤسسة مع مزامنة فورية أونلاين وأوفلاين." },
      description: {
        en: "Worked on enhancing and expanding a Multi-Tenant ERP System built with Flutter. Optimized UI/UX, developed PDF & receipt printing modules, added financial reports, restructured core workflow pipelines for max stability.",
        ar: "تطوير وتوسيع نظام ERP متعدد المستأجرين يعمل أونلاين وأوفلاين، وإنشاء محرك التقارير المالية والطباعة، وإعادة صياغة تدفق العمليات لثبات عالي."
      },
      keyFeatures: [
        { en: "Strict Multi-Tenant Isolation & Security", ar: "عزل تام ومصادقة حصرية لبيانات كل مستأجر" },
        { en: "Automatic Online / Offline Data Synchronization", ar: "مزامنة تلقائية للبيانات عند عودة الاتصال بالشبكة" },
        { en: "Custom Financial Reporting & Invoice Engine", ar: "تقارير مالية مخصصة ومحرك حساب فواتير دقيق" },
        { en: "Thermal Printing & PDF Generation Modules", ar: "وحدة طباعة الحرارية وإنشاء مستندات PDF" }
      ],
      architectureHighlights: {
        en: "Used SQLite local storage coupled with Background Sync Workers to handle network interruptions without stopping business operations.",
        ar: "استخدام التخزين المحلي مع عمال المزامنة الخلفية لمعالجة انقطاع الشبكة بدون توقف العمليات."
      },
      tech: ["Flutter", "Multi-Tenant", "Offline First", "Financial Engine", "PDF/Print", "SQL Server"],
      accentColor: "#6E44FF"
    },
    {
      id: "ecommerce-multi-tenant",
      title: { en: "Multi-Tenant E-Commerce Platform", ar: "منصة التجارة الإلكترونية متعددة المستأجرين" },
      category: "E-Commerce & Mobile",
      tagline: { en: "SaaS platform empowering distinct vendors to deploy white-labeled mobile apps with custom dashboards.", ar: "منصة برمجية كخدمة تمكّن التجار من إطلاق تطبيقات مخصصة مع لوحات تحكم مستقلة." },
      description: {
        en: "Built a multi-tenant mobile platform where each client receives a customized version ready for Google Play release. Integrated private dashboards for inventory, payments, real-time push notifications, and API syncing.",
        ar: "بناء منصة متجر إلكتروني تمنح كل تاجر تطبيقاً مخصصاً على متجر جوجل مع لوحة تحكم خاصة للممنتجات والطلبات والمدفوعات."
      },
      keyFeatures: [
        { en: "White-labeled customized App Generation", ar: "توليد تطبيقات مخصصة بهوية كل عمل" },
        { en: "Private Vendor Dashboards for Orders & Products", ar: "لوحة تحكم خاصة بكل تاجر لإدارة المنتجات والطلبات" },
        { en: "Payment Gateway Integration & Real-time Notifications", ar: "ربط المدفوعات الآمنة وإشعارات الهاتف الفورية" },
        { en: "Bilingual AR/EN Responsive Interface", ar: "واجهة متجاوبة داعمة للغتين العربية والإنجليزية" }
      ],
      architectureHighlights: {
        en: "Clean Architecture separating presentation layer, domain logic, and tenant-aware remote data sources.",
        ar: "معمارية نظيفة تفصل العرض عن قواعد العمل ومصادر البيانات المعرفة بكل مستأجر."
      },
      tech: ["Flutter", "Multi-Tenant SaaS", "Vendor Dashboard", "Payment Integration", "Push Notifications"],
      accentColor: "#10B981"
    },
    {
      id: "alfakhra",
      title: { en: "ALFAKHRA Men's Fashion App (تطبيق الفاخرة)", ar: "تطبيق لشركة الفاخرة للخياطة الرجالية" },
      category: "Mobile Migration",
      tagline: { en: "Saudi men's tailoring company app transformed from native to Flutter.", ar: "تطبيق شركة الفاخرة للزي والسدائل الرجالية في السعودية، تم تحويله إلى فلاتر." },
      description: {
        en: "Led the primary phase of migrating ALFAKHRA native application into a cross-platform Flutter mobile application, ensuring UI consistency, performance improvements, and modular architecture for future expansions.",
        ar: "قيادة المرحلة الأولى لتحويل تطبيق الفاخرة للزي الرجالي من التطوير الناتيڤ إلى تطبيق فلاتر مرن وعالي الأداء."
      },
      keyFeatures: [
        { en: "Native to Cross-Platform Flutter Code Base", ar: "تحويل الكود من أصل ناتيڤ إلى فلاتر موحد" },
        { en: "Tailoring Order & Measurement Management", ar: "إدارة تفاصيل المقاسات وطلبات الخياطة" },
        { en: "Refine UI/UX for High Performance", ar: "تحسين تجربة وواجهة المستخدم لأعلى استجابة" }
      ],
      architectureHighlights: {
        en: "Modular component strategy allowing quick feature additions and smooth cross-device rendering.",
        ar: "استراتيجية المكونات المودولار لسلاسة إضافة الميزات ودعم مختلف الأجهزة."
      },
      tech: ["Flutter", "Dart", "Native Migration", "Tailoring System", "Saudi Arabia"],
      accentColor: "#0071E3"
    },
    {
      id: "ezee-restaurant-pos",
      title: { en: "Ezee Restaurant POS & Direct SQL System", ar: "نظام Ezee Restaurant POS بالربط المباشر مع SQL Server" },
      category: "POS & Enterprise",
      tagline: { en: "Local restaurant management app connected directly to SQL Server without API latency.", ar: "نظام إدارة مطاعم ونقاط بيع متصل مباشرة بقواعد بيانات SQL Server بدون وسائط API." },
      description: {
        en: "Developed a full local POS system for restaurant operations from scratch. Directly integrated Flutter frontend with SQL Server without an API layer for zero network latency and maximum offline reliability between waiters, kitchen, and cashiers.",
        ar: "إنشاء نظام نقاط بيع للمطاعم متصل مباشرة بقاعدة SQL Server بدون طبقة API للوصول إلى سرعة استجابة فائقة واستقرار أوفلاين تام."
      },
      keyFeatures: [
        { en: "Direct SQL Server Connection (No API Latency)", ar: "ربط مباشر بقاعدة بيانات SQL Server سرعة استجابة فورية" },
        { en: "Kitchen, Waiter, & Cashier Real-time Sync", ar: "مزامنة لحظية بين المطبخ، الويتر، والكاشير" },
        { en: "Table Management & Thermal Receipt Printing", ar: "إدارة الطاولات وطباعة الفواتير الحرارية السريعة" },
        { en: "Offline Inventory & Stock Tracking", ar: "متابعة المخزون وتتبع المبيعات بدون إنترنت" }
      ],
      architectureHighlights: {
        en: "Direct ADO.NET / SQL Driver bindings over local network socket protocols ensuring sub-millisecond database queries.",
        ar: "ربط مباشر عبر بروتوكولات الاتصال المحلي لضمان استعلامات فائقة السرعة."
      },
      tech: ["Flutter", "SQL Server Direct", "POS Engine", "Local Socket Sync", "Receipt Printer"],
      accentColor: "#FF6B00"
    },
    {
      id: "ezee-hr",
      title: { en: "Ezee HR - Human Resources System", ar: "نظام Ezee HR لإدارة الموارد البشرية" },
      category: "Enterprise HR",
      tagline: { en: "Flutter HR mobile app featuring QR check-in/out, role permissions, and leave tracking.", ar: "تطبيق موارد بشرية يدعم الحضور والانصراف بالـ QR، وإدارة الإجازات والأذونات." },
      description: {
        en: "Developed a complete HR management mobile application from scratch using Flutter. Integrated RESTful APIs for real-time attendance, QR code scan check-in/out, employee profiles, leave requests, and role-based permissions.",
        ar: "بناء تطبيق موارد بشرية كامل بالـ Flutter، يتضمن الحضور عبر رمز الـ QR، تقارير الحضور، وطلبات الإجازات وتحكم الصلاحيات."
      },
      keyFeatures: [
        { en: "QR Code Instant Attendance Scan", ar: "تسجيل الحضور والانصراف الفوري بمسح رمز QR" },
        { en: "Role-Based User Access & Permissions", ar: "صلاحيات الوصول المخصصة لكل دور وظيفي" },
        { en: "Leave Request Workflows & Approval", ar: "دورات طلب الإجازات والاعتمادات الإدارية" }
      ],
      architectureHighlights: {
        en: "RESTful API client using Clean Architecture data sources and local encrypted storage for identity tokens.",
        ar: "استخدام معمارية البيانات النظيفة مع تخزين مشفر للتطبيقات والهويات."
      },
      tech: ["Flutter", "QR Scanning", "HR Management", "Role Permissions", "REST APIs"],
      accentColor: "#6E44FF"
    },
    {
      id: "taqeem-qa",
      title: { en: "Taqeem Platform (QA & API Security Testing)", ar: "منصة تقييم (اختبار الجودة والأمان لـ APIs)" },
      category: "Software Quality & Testing",
      tagline: { en: "Comprehensive testing of core business microservices, REST APIs, and multi-tenant isolation.", ar: "اختبار شامل للخدمات المصغرة، واجهات البرمجة، وعزل بيانات المستأجرين." },
      description: {
        en: "Software tester on the Taqeem digital platform. Conducted functional, integration, and API testing using Postman & Swagger/OpenAPI. Validated payment workflows and strict multi-tenant tenant isolation and access controls.",
        ar: "مختبر برمجيات على منصة تقييم الرقمية. إجراء اختبارات الواجهات البرمجية والتكاملية بـ Postman وSwagger، واختبار عزل المستأجرين وبوابات الدفع."
      },
      keyFeatures: [
        { en: "REST API Automated & Manual Postman Validation", ar: "اختبار وتأكيد سلوك الواجهات البرمجية عبر Postman" },
        { en: "Multi-Tenant Data Segregation Verification", ar: "التحقق من عزل وتشفير بيانات كل مستأجر" },
        { en: "Payment Transaction Outcome Verification", ar: "تأكيد مسارات وتسلسلات الدفع الإلكتروني" }
      ],
      architectureHighlights: {
        en: "Built test suites for OpenAPI spec validation and edge case coverage for secure transactions.",
        ar: "بناء مجموعات اختبار للتأكد من مطابقة المواصفات القياسية لحماية المعاملات."
      },
      tech: ["Postman", "Swagger / OpenAPI", "Jira", "Payment Validation", "Multi-Tenant QA"],
      accentColor: "#10B981"
    }
  ],

  techStack: {
    mobile: [
      { name: "Flutter", level: "Expert", desc: "Cross-platform mobile apps" },
      { name: "Dart", level: "Expert", desc: "Strongly-typed object programming" },
      { name: "GetX / BLoC / Provider", level: "Advanced", desc: "State management paradigms" },
      { name: "Android & iOS UI/UX", level: "Advanced", desc: "Pixel-perfect mobile design" },
      { name: "NearPay NFC SDK", level: "Specialist", desc: "Tap-on-phone payment integration" }
    ],
    architecture: [
      { name: "Clean Architecture", level: "Expert", desc: "Separation of concerns & testability" },
      { name: "SOLID Principles", level: "Expert", desc: "Maintainable object design" },
      { name: "Design Patterns", level: "Advanced", desc: "Adapter, Strategy, Repository" },
      { name: "System Flow Design", level: "Advanced", desc: "End-to-end data orchestration" },
      { name: "Offline Sync Engine", level: "Advanced", desc: "Background queue & SQLite" }
    ],
    apiManagement: [
      { name: "Apache APISIX", level: "Specialist", desc: "High-performance API Gateway" },
      { name: "Keycloak Identity", level: "Specialist", desc: "Centralized IAM & OAuth2" },
      { name: "JWT Token Lifecycle", level: "Specialist", desc: "Access/Refresh token rotation" },
      { name: "API Security & CORS", level: "Advanced", desc: "Header manipulation & protection" },
      { name: "Swagger / OpenAPI", level: "Advanced", desc: "Standardized API contracts" }
    ],
    backendData: [
      { name: "Node.js & Express", level: "Intermediate", desc: "RESTful backend microservices" },
      { name: "SQL Server Queries", level: "Advanced", desc: "Direct database integration" },
      { name: "Firebase & Supabase", level: "Advanced", desc: "Realtime DB & Cloud Firestore" },
      { name: "Real-Time WebSockets", level: "Advanced", desc: "Bidirectional live communication" }
    ],
    devops: [
      { name: "Shorebird CodePush", level: "Advanced", desc: "Over-the-air Flutter updates" },
      { name: "GitHub Actions", level: "Advanced", desc: "CI/CD automated pipelines" },
      { name: "Fastlane & Codemagic", level: "Advanced", desc: "Automated app store deployments" }
    ]
  },

  education: {
    degree: { en: "Bachelor of Computer Science", ar: "بكالوريوس علوم الحاسب" },
    institution: { en: "MET - Misr Higher Institute For Engineering & Technology", ar: "معهد مصر العالي للهندسة والتكنولوجيا" },
    period: "2018 – 2022",
    grade: { en: "Very Good (V.Good)", ar: "جيد جداً" },
    location: { en: "Mansoura, Egypt", ar: "المنصورة، مصر" }
  },

  courses: [
    { name: "Flutter Development Bootcamp", platform: "The App Brewery" },
    { name: "The Complete 2022 Flutter & Dart Development Course", platform: "Udemy" },
    { name: "Flutter Clean Architecture [2022]", platform: "Udemy" },
    { name: "Foundations of Project Management", platform: "Grow with Google on Coursera" },
    { name: "Software Development Processes & Methodologies", platform: "University of Minnesota | Coursera" },
    { name: "Agile Software Development", platform: "University of Minnesota | Coursera" },
    { name: "The Complete Node.js Course (RESTful Web Services & MongoDB)", platform: "Maharatech" }
  ]
};
