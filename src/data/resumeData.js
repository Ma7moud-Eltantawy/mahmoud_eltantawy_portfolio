export const resumeData = {
  personalInfo: {
    name: {
      en: "Mahmoud El-Tantawy",
      ar: "محمود الطنطاوي"
    },
    title: {
      en: "Software Engineer | Flutter & Mobile Architecture | API Gateway Specialist",
      ar: "مهندس برمجيات | خبير تطبيقات الموبايل وبوابات واجهات البرمجة (APISIX)"
    },
    summary: {
      en: "Results-driven Software Engineer with extensive experience bridging the gap between high-performance Flutter mobile applications and enterprise cloud infrastructure. Specialist in Clean Architecture, payment gateway integration (NearPay NFC, 3DS), and Apache APISIX API Gateway orchestration with Keycloak IAM.",
      ar: "مهندس برمجيات محترف يمتلك خبرة استثنائية في الربط المتكامل بين تطبيقات الموبايل عالية الأداء بالفلاتر والبنية التحتية السحابية. متخصص في المعمارية النظيفة (Clean Architecture)، حلول المدفوعات ونقاط البيع (NearPay NFC)، وإدارة بوابات واجهات البرمجة عبر Apache APISIX والمصادقة المركزية بـ Keycloak."
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

  engineeringPhilosophy: [
    {
      id: "full-spectrum",
      icon: "Layers",
      title: {
        en: "Full-Spectrum Architecture",
        ar: "معمارية شاملة ومتكاملة"
      },
      tagline: {
        en: "From the Mobile Pixel to the Gateway Header",
        ar: "من شاشة الموبايل وحتى ترويسة البوابة السحابية"
      },
      desc: {
        en: "I don't just build UI; I engineer how mobile apps communicate securely through API Gateways (APISIX), authenticate with Keycloak IAM, and sync seamlessly with backend microservices.",
        ar: "لا أكتفي ببناء واجهات المستخدم، بل أهندس طريقة اتصال التطبيق بأمان عبر بوابات APISIX، والتحقق عبر Keycloak، والمزامنة الذكية مع الخدمات المصغرة."
      }
    },
    {
      id: "offline-resilience",
      icon: "Database",
      title: {
        en: "Mission-Critical Offline Reliability",
        ar: "استمرارية العمل دون انقطاع (Offline First)"
      },
      tagline: {
        en: "Zero Downtime for Real-world Business",
        ar: "ضمان عدم توقف عمليات الشركات والمطاعم"
      },
      desc: {
        en: "In POS and ERP platforms, internet drops must not stop sales. I engineer direct SQL socket connections and background SQLite sync workers that ensure sub-millisecond local speed.",
        ar: "في أنظمة نقاط البيع والمؤسسات، انقطاع الإنترنت لا يجب أن يوقف البيع. لذلك أقوم ببناء ربط مباشر مع قواعد البيانات SQL Server ومزامنة خلفية ذكية."
      }
    },
    {
      id: "clean-standards",
      icon: "Cpu",
      title: {
        en: "Clean Code & Design Patterns",
        ar: "كود نظيف وأنماط برمجية قياسية"
      },
      tagline: {
        en: "Maintainable, Testable, Decoupled",
        ar: "سهولة التطوير وقابلية التوسع والاختبار"
      },
      desc: {
        en: "Applying SOLID principles, Repository and Adapter patterns to isolate external payment SDKs (NearPay NFC) and APIs, making codebases scalable across platforms and future-proof.",
        ar: "تطبيق مبادئ SOLID ونمط المحول (Adapter Pattern) لعزل مكتبات الدفع وSDKs، مما يجعل الكود قابلاً للتوسع وإعادة الاستخدام لسنوات."
      }
    }
  ],

  metrics: [
    { id: "exp", value: "3+", label: { en: "Years Professional Exp.", ar: "سنوات خبرة مهنية" } },
    { id: "projects", value: "12+", label: { en: "Production Projects", ar: "مشروع إنتاجي" } },
    { id: "gateway", value: "100%", label: { en: "APISIX Security & Routing", ar: "إدارة بوابات APISIX" } },
    { id: "tenant", value: "3+", label: { en: "Multi-Tenant Enterprise Platforms", ar: "أنظمة متعددة المستأجرين" } }
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
      role: { en: "Flutter Developer & System Specialist", ar: "مطور فلاتر وهندسة أنظمة" },
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
      role: { en: "Flutter Developer & POS Specialist", ar: "مطور فلاتر وحلول نقاط البيع" },
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
      id: "qiyasi",
      type: "gateway",
      title: { en: "Qiyasi API Gateway & Microservices Platform", ar: "منصة قياسي - إدارة بوابة واجهات البرمجة والمايكروسيرفيسيز" },
      category: "API Gateway & System Design",
      tagline: { en: "Enterprise microservices management layer built on Apache APISIX & Keycloak authentication.", ar: "طبقة إدارة الخدمات المصغرة للبوابة البرمجية المعتمدة على Apache APISIX وKeycloak." },
      roleDescription: {
        en: "API Gateway Engineer responsible for designing APISIX route topologies, proxy rewrite rules, Keycloak OAuth2 token introspection, and injecting X-Consumer tenant identity headers for backend microservices.",
        ar: "مهندس بوابة APIs مسؤول عن تخطيط وتكوين مسارات Apache APISIX، وقواعد التوجيه وإعادة كتابة الوكيل (Proxy Rewrite)، وتوثيق الهوية عبر Keycloak، وحقن ترويسات المستأجرين X-Consumer."
      },
      description: {
        en: "Contributed to the design and implementation of the API Gateway layer using Apache APISIX for the Qiyasi microservices platform. Configured routing, security plugins, Keycloak authentication/authorization, and request/response transformations.",
        ar: "المساهمة في تصميم وتطوير طبقة بوابة واجهات البرمجة (API Gateway) باستخدام Apache APISIX لمنصة قياسي، وإعداد التوجيه، والحماية عبر Keycloak وتحويل الطلبات."
      },
      keyFeatures: [
        { en: "Apache APISIX Dynamic Route Orchestration", ar: "إدارة التوجيه الديناميكي لمسارات Apache APISIX" },
        { en: "Keycloak JWT Token Lifecycle & Introspection", ar: "ربط دورة حياة رمزي JWT وتأكيد الهويات عبر Keycloak" },
        { en: "X-Consumer Tenant Header Injection", ar: "حقن هوية المستأجر في الترويسة X-Consumer لضمان العزل" },
        { en: "Swagger / OpenAPI Documentation & Sync", ar: "توثيق واجهات البرمجة وتكاملها مع Swagger/OpenAPI" }
      ],
      architectureHighlights: {
        en: "Decoupled mobile and web client applications from backend engines by funneling traffic through centralized APISIX plugins for JWT validation, rate limiting, and CORS headers.",
        ar: "عزل تطبيقات العملاء عن محركات الخلفية بتوجيه الحركة عبر إضافات APISIX المركزية لمصادقة الـ JWT وتحديد المعدلات."
      },
      tech: ["Apache APISIX", "Keycloak IAM", "JWT Tokens", "Microservices", "API Security", "Swagger/OpenAPI"],
      accentColor: "#FF6B00"
    },
    {
      id: "saaed-pay",
      type: "mobile",
      title: { en: "Saaed Pay (Fintech & NFC Payments)", ar: "تطبيق Saaed Pay للمدفوعات الرقمية وNFC" },
      category: "Fintech & Mobile App",
      tagline: { en: "Saudi digital payment application with NearPay NFC tap-to-phone, digital wallet, and multi-currency transfer.", ar: "تطبيق مدفوعات سعودي يدعم الدفع اللاتلامسي NFC عبر NearPay، المحافظ الرقمية، وتحويل الأموال." },
      roleDescription: {
        en: "Lead Flutter Mobile Engineer who built the core payment architecture, integrating NearPay NFC SDK via Adapter Pattern, managing digital wallet states, and handling 3DS payment gateway webhooks.",
        ar: "مهندس تطبيقات الفلاتر الذي تولى بناء المعمارية البرمجية للمدفوعات، ودمج NearPay NFC عبر نمط المحول (Adapter Pattern)، وإدارة المحافظ ومصادقة 3DS."
      },
      description: {
        en: "Transformed the company's financial app into a cross-platform Flutter application. Focused on performance, UI/UX consistency, and advanced fintech features including NearPay NFC SDK integration, digital wallet management, bill payments, and money transfers.",
        ar: "تحويل التطبيق المالي للشركة إلى تطبيق فلاتر عالي الأداء مع إدماج حلول الدفع اللاتلامسي NearPay NFC، إدارة المحافظ المالية، سداد الفواتير، وتحويل الأموال."
      },
      keyFeatures: [
        { en: "NearPay NFC Tap-on-Phone Direct Checkout", ar: "إدماج تقنية NFC للدفع المباشر عبر تلامس الهواتف" },
        { en: "Digital Wallet Management & Top-ups", ar: "إدارة المحفظة الرقمية وشحن وتتبع الرصيد" },
        { en: "SADAD Bill Payments & Direct IBAN Transfers", ar: "سداد الفواتير وتحويلات الأموال الفورية" },
        { en: "Biometric Auth & Multi-Language AR/EN", ar: "المصادقة بالبصمة ودعم كامل للغتين العربية والإنجليزية" }
      ],
      architectureHighlights: {
        en: "Implemented Provider Abstraction (Adapter Pattern) to standardize payment gateways, 3DS authentication flow, webhook handling, and deterministic transaction state mutation.",
        ar: "تطبيق نمط المحول (Adapter Pattern) لتوحيد بوابات الدفع، وإدارات مصادقة 3DS ومزامنة الحالات عبر الـ Webhooks."
      },
      tech: ["Flutter", "Dart", "NearPay NFC", "Fintech Security", "Provider", "REST APIs"],
      accentColor: "#0071E3"
    },
    {
      id: "ezee-restaurant-pos",
      type: "pos_hardware",
      title: { en: "Ezee Restaurant POS (Direct SQL Server Engine)", ar: "نظام Ezee Restaurant POS بالربط المباشر مع SQL Server" },
      category: "POS & Hardware Integration",
      tagline: { en: "Ultra-fast restaurant management app connected directly to SQL Server socket for zero-latency offline operations.", ar: "نظام إدارة مطاعم ونقاط بيع متصل مباشرة بقواعد بيانات SQL Server بدون وسائط API لسرعة استجابة فائقة." },
      roleDescription: {
        en: "Designed and implemented a zero-latency POS system using direct TCP/IP socket queries to local SQL Server, kitchen display sync, and thermal receipt printer drivers.",
        ar: "تصميم وتطوير نظام نقاط بيع عالي السرعة متصل مباشرة بقاعدة بيانات SQL Server عبر بروتوكول Socket محلي مع دعم طابعات الإيصالات الحرارية وشاشات المطبخ."
      },
      description: {
        en: "Developed a full local POS system for restaurant operations from scratch. Directly integrated Flutter frontend with SQL Server without an API layer for zero network latency and maximum offline reliability between waiters, kitchen, and cashiers.",
        ar: "إنشاء نظام نقاط بيع للمطاعم متصل مباشرة بقاعدة SQL Server بدون طبقة API للوصول إلى سرعة استجابة فائقة واستقرار أوفلاين تام."
      },
      keyFeatures: [
        { en: "Direct SQL Server Connection (<1ms latency)", ar: "ربط مباشر بقاعدة بيانات SQL Server بسرعة استجابة أقل من ملي ثانية" },
        { en: "Kitchen Display & Waiter Real-time Sync", ar: "مزامنة لحظية بين أجهزة الويتر، شاشة المطبخ، وجهاز الكاشير" },
        { en: "Table Layout & Thermal ESC/POS Receipt Printing", ar: "تخطيط الطاولات التفاعلي وطباعة الفواتير الحرارية ESC/POS" },
        { en: "100% Offline Resilience (No internet dependency)", ar: "استقلالية تامة عن الإنترنت لضمان استمرار المبيعات" }
      ],
      architectureHighlights: {
        en: "Direct ADO.NET / SQL Driver bindings over local network socket protocols ensuring sub-millisecond database queries and immediate sync.",
        ar: "ربط مباشر عبر بروتوكولات الاتصال المحلي لضمان استعلامات فائقة السرعة واستقرار أوفلاين كامل."
      },
      tech: ["Flutter", "Direct SQL Server", "POS Engine", "ESC/POS Printing", "Local Socket Sync"],
      accentColor: "#F59E0B"
    },
    {
      id: "multi-tenant-erp",
      type: "mobile",
      title: { en: "Ezee Manager Pro & Tebalink ERP (Online/Offline)", ar: "نظام ERP متعدد المستأجرين (Ezee Manager Pro & Tebalink)" },
      category: "Enterprise ERP & Multi-Tenant",
      tagline: { en: "Flutter-based Multi-Tenant ERP with isolated tenant environments and seamless automatic data synchronization.", ar: "نظام ERP متعدد المستأجرين يعزل بيانات كل مؤسسة مع مزامنة فورية أونلاين وأوفلاين." },
      roleDescription: {
        en: "Key contributor to the mobile ERP platform, developing custom PDF/receipt printing engines, financial reporting modules, offline SQLite sync queues, and multi-tenant isolation.",
        ar: "المطور الرئيسي لوحدات تطبيق ERP الموبايل، وبناء محرك إنشاء وطباعة الفواتير والـ PDF، والتقارير المالية، وطوابير المزامنة المحلية مع SQLite."
      },
      description: {
        en: "Worked on enhancing and expanding a Multi-Tenant ERP System built with Flutter. Optimized UI/UX, developed PDF & receipt printing modules, added financial reports, restructured core workflow pipelines for max stability.",
        ar: "تطوير وتوسيع نظام ERP متعدد المستأجرين يعمل أونلاين وأوفلاين، وإنشاء محرك التقارير المالية والطباعة، وإعادة صياغة تدفق العمليات لثبات عالي."
      },
      keyFeatures: [
        { en: "Strict Multi-Tenant Isolation & Multi-Branch", ar: "عزل تام ومصادقة حصرية لبيانات وفروع كل مستأجر" },
        { en: "Automatic Online / Offline Background Sync", ar: "مزامنة تلقائية للبيانات في الخلفية عند عودة الاتصال" },
        { en: "Thermal Printing & Custom PDF Invoice Engine", ar: "وحدة طباعة فواتير حرارية وتصدير تقارير PDF" },
        { en: "Live Accounting Dashboard & Inventory Reports", ar: "لوحة تحكم محاسبية حية وتقارير مراقبة المخزون" }
      ],
      architectureHighlights: {
        en: "Used SQLite local storage coupled with Background Sync Workers to handle network interruptions without stopping business operations.",
        ar: "استخدام التخزين المحلي مع عمال المزامنة الخلفية لمعالجة انقطاع الشبكة بدون توقف العمليات."
      },
      tech: ["Flutter", "Multi-Tenant", "Offline First", "Financial Engine", "PDF/Print", "SQL Server"],
      accentColor: "#6E44FF"
    },
    {
      id: "alfakhra",
      type: "mobile",
      title: { en: "ALFAKHRA Men's Fashion App (تطبيق الفاخرة)", ar: "تطبيق لشركة الفاخرة للخياطة الرجالية" },
      category: "E-Commerce & Mobile Migration",
      tagline: { en: "Saudi premium men's tailoring company app transformed from native to unified Flutter.", ar: "تطبيق شركة الفاخرة للزي والسدائل الرجالية في السعودية، تم تحويله من ناتيڤ إلى فلاتر موحد." },
      roleDescription: {
        en: "Led the native-to-Flutter migration architecture, designing the custom measurement profile modules, fabric selection flows, and high-performance smooth animations.",
        ar: "قيادة معمارية تحويل التطبيق من ناتيڤ إلى فلاتر، وبناء شاشات تحديد المقاسات التفصيلية للثوب واختيار الأقمشة وتجربة المستخدم السلسة."
      },
      description: {
        en: "Led the primary phase of migrating ALFAKHRA native application into a cross-platform Flutter mobile application, ensuring UI consistency, performance improvements, and modular architecture for future expansions.",
        ar: "قيادة المرحلة الأولى لتحويل تطبيق الفاخرة للزي الرجالي من التطوير الناتيڤ إلى تطبيق فلاتر مرن وعالي الأداء."
      },
      keyFeatures: [
        { en: "Custom Tailoring Measurements & Body Profile", ar: "إدارة دقيقة لمقاسات وتفاصيل خياطة الثوب السعودي" },
        { en: "Fabric & Style Visual Customizer", ar: "استعراض تفاعلي للأقمشة والموديلات والياقات والأزرار" },
        { en: "Branch Booking & Home Tailor Service", ar: "حجز مواعيد الفروع وخدمة الخياط المتنقل للمنزل" },
        { en: "Fast Track Order Tracking & Payments", ar: "متابعة مراحل تفصيل وتجهيز الطلب والدفع الإلكتروني" }
      ],
      architectureHighlights: {
        en: "Modular component strategy allowing quick feature additions and smooth cross-device rendering on iOS and Android.",
        ar: "استراتيجية المكونات المودولار لسلاسة إضافة الميزات ودعم مختلف الأجهزة بكفاءة عالية."
      },
      tech: ["Flutter", "Dart", "Native Migration", "Tailoring UI System", "State Management"],
      accentColor: "#0284C7"
    },
    {
      id: "ezee-hr",
      type: "mobile",
      title: { en: "Ezee HR (Human Resources & QR Attendance)", ar: "تطبيق Ezee HR لإدارة الموارد البشرية والحضور بالـ QR" },
      category: "Enterprise HR Mobile",
      tagline: { en: "Flutter HR mobile app featuring instant QR check-in/out, role permissions, and vacation tracking.", ar: "تطبيق موارد بشرية يدعم الحضور والانصراف بمسح رمز الـ QR، وإدارة الإجازات والأذونات والصلاحيات." },
      roleDescription: {
        en: "Built the entire mobile client from scratch in Flutter, implementing secure QR scanner with anti-spoofing location verification, leave workflow pipelines, and offline token auth.",
        ar: "بناء تطبيق الموبايل بالكامل من الصفر بالفلاتر، وبرمجة ماسح QR السريع مع التحقق من الموقع الجغرافي، وإدارة طلبات الإجازات والصلاحيات."
      },
      description: {
        en: "Developed a complete HR management mobile application from scratch using Flutter. Integrated RESTful APIs for real-time attendance, QR code scan check-in/out, employee profiles, leave requests, and role-based permissions.",
        ar: "بناء تطبيق موارد بشرية كامل بالـ Flutter، يتضمن الحضور عبر رمز الـ QR، تقارير الحضور، وطلبات الإجازات وتحكم الصلاحيات."
      },
      keyFeatures: [
        { en: "Instant QR Attendance with Geo-Fencing Check", ar: "تسجيل الحضور والانصراف الفوري بمسح رمز QR مع التحقق من الموقع" },
        { en: "Leave Request Workflow & Manager Approval", ar: "دورات طلب الإجازات والاعتمادات الإدارية اللحظية" },
        { en: "Salary Slips & Monthly Attendance Analytics", ar: "استعراض مسيرات الرواتب وسجلات الحضور والغياب" },
        { en: "Multi-Role Employee / Manager Access", ar: "لوحة تحكم مرنة تختلف بحسب دور وصلاحيات الموظف" }
      ],
      architectureHighlights: {
        en: "RESTful API client using Clean Architecture data sources and local encrypted storage for identity tokens.",
        ar: "استخدام معمارية البيانات النظيفة مع تخزين مشفر للتطبيقات والهويات."
      },
      tech: ["Flutter", "QR Scanner", "Geo-Location", "Role Permissions", "Clean Architecture"],
      accentColor: "#8B5CF6"
    },
    {
      id: "ecommerce-multi-tenant",
      type: "mobile",
      title: { en: "Multi-Tenant White-Label E-Commerce Platform", ar: "منصة المتاجر الإلكترونية متعددة المستأجرين" },
      category: "E-Commerce SaaS & Mobile",
      tagline: { en: "SaaS platform empowering distinct vendors to deploy white-labeled mobile apps with custom dashboards.", ar: "منصة برمجية كخدمة تمكّن التجار من إطلاق تطبيقات مخصصة مع لوحات تحكم مستقلة." },
      roleDescription: {
        en: "Engineered the white-label Flutter theme and dynamic remote configuration engine, enabling instant brand color/logo switching per tenant without re-publishing.",
        ar: "تطوير نظام السمات المخصصة (White-Label) والإعدادات الديناميكية لتغيير هوية التطبيق وألوانه وشعاره لكل تاجر بصورة فورية."
      },
      description: {
        en: "Built a multi-tenant mobile platform where each client receives a customized version ready for Google Play release. Integrated private dashboards for inventory, payments, real-time push notifications, and API syncing.",
        ar: "بناء منصة متجر إلكتروني تمنح كل تاجر تطبيقاً مخصصاً على متجر جوجل مع لوحة تحكم خاصة للممنتجات والطلبات والمدفوعات."
      },
      keyFeatures: [
        { en: "White-labeled dynamic theme generation", ar: "توليد تطبيقات مخصصة بهوية وألوان كل تاجر تلقائياً" },
        { en: "Vendor Catalog & Order Management", ar: "إدارة متكاملة لكتالوج المنتجات ومتابعة الطلبات" },
        { en: "Payment Gateways & Real-Time Push Alerts", ar: "ربط بوابات الدفع الإلكتروني وإشعارات الطلبات الفورية" },
        { en: "Arabic & English RTL/LTR Dynamic Interface", ar: "واجهة متجاوبة فائقة السرعة تدعم العربية والإنجليزية" }
      ],
      architectureHighlights: {
        en: "Clean Architecture separating presentation layer, domain logic, and tenant-aware remote data sources.",
        ar: "معمارية نظيفة تفصل العرض عن قواعد العمل ومصادر البيانات المعرفة بكل مستأجر."
      },
      tech: ["Flutter", "Multi-Tenant SaaS", "White-Labeling", "Payment Integration", "Push Notifications"],
      accentColor: "#10B981"
    },
    {
      id: "taqeem-qa",
      type: "qa_security",
      title: { en: "Taqeem Platform (QA & API Security Testing)", ar: "منصة تقييم (اختبار الجودة والأمان لـ APIs)" },
      category: "Software Quality & API Security",
      tagline: { en: "Comprehensive testing of core business microservices, REST APIs, and multi-tenant isolation.", ar: "اختبار شامل للخدمات المصغرة، واجهات البرمجة، وعزل بيانات المستأجرين وحماية المعاملات." },
      roleDescription: {
        en: "Conducted automated and manual API testing using Postman test scripts and OpenAPI schemas, verifying multi-tenant data isolation, permission boundaries, and payment webhooks.",
        ar: "إجراء اختبارات شاملة لواجهات البرمجة وتأكيد مطابقتها لمواصفات OpenAPI، والتحقق من عزل بيانات المستأجرين وصلاحيات الحماية وحركات الدفع."
      },
      description: {
        en: "Software tester on the Taqeem digital platform. Conducted functional, integration, and API testing using Postman & Swagger/OpenAPI. Validated payment workflows and strict multi-tenant tenant isolation and access controls.",
        ar: "مختبر برمجيات على منصة تقييم الرقمية. إجراء اختبارات الواجهات البرمجية والتكاملية بـ Postman وSwagger، واختبار عزل المستأجرين وبوابات الدفع."
      },
      keyFeatures: [
        { en: "Automated Postman Test Collections & Assertions", ar: "بناء مجموعات اختبارات Postman المؤتمتة وتأكيد صحة الاستجابات" },
        { en: "Multi-Tenant Data Segregation Verification", ar: "التحقق الصارم من عزل وتشفير بيانات كل مستأجر" },
        { en: "Payment Transaction & Webhook Edge-cases", ar: "تأكيد مسارات وتسلسلات الدفع وحالات الفشل والنجاح" }
      ],
      architectureHighlights: {
        en: "Built test suites for OpenAPI spec validation and edge case coverage for secure transactions.",
        ar: "بناء مجموعات اختبار للتأكد من مطابقة المواصفات القياسية لحماية المعاملات."
      },
      tech: ["Postman", "Swagger / OpenAPI", "Jira", "API Security", "Multi-Tenant QA"],
      accentColor: "#059669"
    }
  ],

  techStack: {
    mobile: [
      { name: "Flutter", level: "Expert", desc: "Cross-platform mobile apps" },
      { name: "Dart", level: "Expert", desc: "Strongly-typed object programming" },
      { name: "BLoC & Provider & GetX", level: "Advanced", desc: "State management paradigms" },
      { name: "Android & iOS UI/UX", level: "Advanced", desc: "Pixel-perfect mobile design" },
      { name: "NearPay NFC SDK", level: "Specialist", desc: "Tap-on-phone payment integration" }
    ],
    architecture: [
      { name: "Clean Architecture", level: "Expert", desc: "Separation of concerns & testability" },
      { name: "SOLID Principles", level: "Expert", desc: "Maintainable object design" },
      { name: "Adapter & Repository Patterns", level: "Advanced", desc: "Modular SDK abstraction" },
      { name: "Offline Sync Engine", level: "Advanced", desc: "Background queue & SQLite" }
    ],
    apiManagement: [
      { name: "Apache APISIX", level: "Specialist", desc: "High-performance API Gateway" },
      { name: "Keycloak Identity IAM", level: "Specialist", desc: "Centralized OAuth2 / OIDC" },
      { name: "JWT Token Lifecycle", level: "Specialist", desc: "Access/Refresh token rotation" },
      { name: "Route Proxy & URI Rewrite", level: "Advanced", desc: "Dynamic route orchestration" },
      { name: "Swagger / OpenAPI", level: "Advanced", desc: "Standardized API contracts" }
    ],
    backendData: [
      { name: "Direct SQL Server Socket", level: "Advanced", desc: "Sub-millisecond queries" },
      { name: "Node.js & Express", level: "Intermediate", desc: "RESTful backend microservices" },
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
