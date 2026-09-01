export const resumeData = {
  personalInfo: {
    name: {
      en: "Mahmoud El-Tantawy",
      ar: "محمود الطنطاوي"
    },
    title: {
      en: "Software Engineer | System Design • API Management • Distributed Systems • Flutter",
      ar: "مهندس برمجيات | تصميم الأنظمة • إدارة واجهات البرمجة • الأنظمة الموزعة • فلاتر"
    },
    summary: {
      en: "Software Engineer with hands-on experience spanning client-side engineering, system design, API management, and distributed system architectures. Specialized in building maintainable Flutter applications, integrating resilient offline-first data synchronization, configuring Apache APISIX API Gateway routing and Keycloak IAM security, and implementing clean domain boundaries with robust design patterns.",
      ar: "مهندس برمجيات يمتلك خبرة عملية تجمع بين تطوير التطبيقات، وتصميم الأنظمة، وإدارة بوابات واجهات البرمجة (APIs)، والمعماريات الموزعة. متخصص في بناء تطبيقات فلاتر عالية الاعتمادية، ومزامنة البيانات في بيئات العمل غير المتصلة (Offline-First)، وإدارة بوابات Apache APISIX وتأمين الهويات عبر Keycloak، مع تطبيق مبادئ Clean Architecture وأنماط التصميم الهندسية."
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
    { id: "exp", value: "2+", label: { en: "Years Engineering Experience", ar: "سنوات خبرة برمجية وهندسية" } },
    { id: "projects", value: "12+", label: { en: "Production Systems Delivered", ar: "أنظمة برمجية في بيئات الإنتاج" } },
    { id: "tenant", value: "3", label: { en: "Multi-Tenant Enterprise Platforms", ar: "منصات متعددة المستأجرين" } },
    { id: "gateway", value: "100%", label: { en: "API Gateway Security & Isolation", ar: "حماية وتوجيه موحد لواجهات APIs" } }
  ],

  experiences: [
    {
      id: "dolf",
      company: "Dolf Technologies",
      role: { en: "Software Engineer", ar: "مهندس برمجيات" },
      period: "01/02/2026 – Present",
      location: { en: "Saudi Arabia / Remote", ar: "المملكة العربية السعودية / عن بُعد" },
      highlights: [
        { 
          en: "Architecting and developing modular client applications with Clean Architecture and strict domain-layer boundaries.", 
          ar: "هندسة وتطوير تطبيقات معيارية بتطبيق معمارية Clean Architecture وفصل صارم لقواعد العمل." 
        },
        { 
          en: "Designing resilient state management models and contract-driven API integrations for high-reliability workflows.", 
          ar: "تصميم نماذج إدارة حالات مرنة وتكاملات APIs قائمة على عقود برمجية واضحة لضمان موثوقية العمليات." 
        }
      ],
      tech: ["Flutter", "Dart", "Clean Architecture", "REST APIs", "State Management", "SOLID"]
    },
    {
      id: "tebalink",
      company: "Teba-link",
      role: { en: "Software Engineer — Mobile & Enterprise Systems", ar: "مهندس برمجيات — الأنظمة وتطبيقات الأعمال" },
      period: "01/02/2024 – 12/01/2026",
      location: { en: "Giza, Egypt", ar: "الجيزة، مصر" },
      companyDesc: { en: "Software enterprise specializing in accounting, multi-tenant ERP, and administrative management platforms.", ar: "شركة متخصصة في برمجيات المحاسبة، وأنظمة ERP متعددة المستأجرين، والحلول الإدارية." },
      highlights: [
        { 
          en: "Architected the offline-first data sync engine for Ezee Manager Pro & Tebalink ERP using local SQLite queues, ensuring deterministic reconciliation upon network recovery.", 
          ar: "تصميم محرك مزامنة البيانات للعمل أوفلاين لنظامي Ezee Manager Pro و Tebalink ERP عبر طوابير SQLite لضمان مطابقة العمليات عند عودة الشبكة." 
        },
        { 
          en: "Implemented tenant-aware data partitioning and dynamic invoice calculation engines handling complex taxation and multi-currency ledgers.", 
          ar: "تطبيق عزل بيانات المستأجرين وتطوير محرك حساب الفواتير والتقارير المالية للتعامل مع الضرائب والعملات المتعددة." 
        },
        { 
          en: "Engineered Ezee HR mobile application from scratch, incorporating cryptographic QR check-in/out verification and role-based access control (RBAC).", 
          ar: "بناء تطبيق Ezee HR من الصفر مع تضمين التحقق المشفر من الحضور عبر رموز QR وتطبيق منظومة الصلاحيات القائمة على الأدوار (RBAC)." 
        }
      ],
      tech: ["Flutter", "Offline-First Sync", "Multi-Tenant Architecture", "SQL Server", "SQLite", "Clean Architecture", "RBAC"]
    },
    {
      id: "daralsaaea",
      company: "Dar Alsaaed",
      role: { en: "Software Engineer — Fintech & POS Systems", ar: "مهندس برمجيات — أنظمة التقنية المالية ونقاط البيع" },
      period: "01/12/2023 – 01/06/2024",
      location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
      companyDesc: { en: "Provider of digital payment solutions, retail POS infrastructures, and commercial management systems.", ar: "شركة متخصصة في حلول المدفوعات الرقمية، وبنية نقاط البيع، والبرمجيات التجارية." },
      highlights: [
        { 
          en: "Implemented payment provider abstractions using the Adapter Pattern in Saaed Pay, isolating NearPay NFC SDK hardware logic from core application domains.", 
          ar: "تطبيق نمط المحول (Adapter Pattern) لتجريد مزودي الدفع في تطبيق Saaed Pay وعزل منطق NearPay NFC عن قواعد العمل الأساسية." 
        },
        { 
          en: "Built a sub-millisecond local POS client for Ezee Restaurant connected directly to SQL Server via socket protocols for uninterrupted offline restaurant floor operations.", 
          ar: "تطوير نظام نقاط بيع محلي لمطاعم Ezee Restaurant متصل مباشرة بـ SQL Server عبر Socket محلي لضمان سرعة فائقة واستمرارية تشغيل أوفلاين." 
        },
        { 
          en: "Led the migration of ALFAKHRA native mobile codebases into a maintainable, unified Flutter cross-platform architecture with modular UI systems.", 
          ar: "قيادة تحويل الكود الأصيل لمنصة الفاخرة إلى معمارية فلاتر موحدة ونمط تصميم معياري يسهل التوسع المستقبلي." 
        }
      ],
      tech: ["Flutter", "Adapter Pattern", "NearPay NFC", "Direct SQL Sockets", "Fintech Security", "WebSockets"]
    }
  ],

  projects: [
    {
      id: "qiyasi",
      title: { en: "Qiyasi — Enterprise API Gateway & Microservices Platform", ar: "منصة قياسي — معمارية بوابة APIs والخدمات المصغرة" },
      category: "API Management & System Design",
      tagline: { en: "Centralized entry point managing dynamic routing, Keycloak JWT security, and consumer proxy transformations.", ar: "بوابة واجهات برمجة مركزية لإدارة التوجيه الديناميكي، ومصادقة Keycloak، وتعديل ترويسات الوكلاء." },
      problem: {
        en: "Backend microservices were directly exposed to multiple client applications, causing fragmented authentication logic, CORS inconsistencies, and tight coupling between client endpoints and backend domain services.",
        ar: "كانت الخدمات المصغرة معرضة مباشرة لتطبيقات العملاء، مما أدى إلى تشتت منطق المصادقة، وتضارب سياسات CORS، والارتباط الوثيق بين واجهات المستخدم ومسارات الخدمات الداخلية."
      },
      architecture: {
        en: "Implemented Apache APISIX as a centralized reverse proxy and API Gateway layer sitting between mobile/web clients and internal microservices, integrated with Keycloak IAM for identity federation.",
        ar: "بناء طبقة بوابة موحدة باستخدام Apache APISIX كوكيل عكسي بين التطبيقات والخدمات المصغرة، مدعومة بخادم Keycloak IAM للتحقق المركزي من الهويات."
      },
      engineeringDecisions: [
        {
          decision: { en: "Centralized JWT Token Introspection", ar: "فحص وتأكيد رموز JWT مركزياً" },
          detail: { en: "Offloaded authentication verification from downstream microservices to APISIX gateway plugins, reducing microservice compute overhead.", ar: "نقل عملية التحقق من التوقيع الرقمي والصلاحيات إلى إضافات البوابة لتخفيف العبء عن الخدمات الخلفية." }
        },
        {
          decision: { en: "Dynamic Consumer Identification", ar: "تحديد هوية المستهلك ديناميكياً" },
          detail: { en: "Injected X-Consumer and tenant headers at gateway level to provide tenant-aware context to internal services automatically.", ar: "حقن ترويسات X-Consumer وهوية المستأجر على مستوى البوابة لتمرير سياق المؤسسة تلقائياً للخدمات الداخلية." }
        },
        {
          decision: { en: "Proxy URI Rewriting & Contract Decoupling", ar: "إعادة كتابة المسارات وتجريد العقود البرمجية" },
          detail: { en: "Decoupled public semantic API routes (e.g., /api/v1/reports) from internal microservice paths via proxy rewrite rules.", ar: "فصل المسارات العامة الموجهة للعملاء عن المسارات الداخلية للخدمات عبر قواعد Proxy Rewrite." }
        }
      ],
      tech: ["Apache APISIX", "Keycloak IAM", "JWT Tokens", "Microservices Architecture", "API Security", "OpenAPI / Swagger"],
      impact: {
        en: "Eliminated duplicate auth logic across services, unified CORS/Rate-limiting governance, and enabled zero-downtime routing modifications.",
        ar: "إلغاء تكرار منطق المصادقة عبر الخدمات، وتوحيد سياسات الحماية ومعدل الطلبات، وإتاحة تعديل مسارات التوجيه دون توقف النظام."
      },
      accentColor: "#10B981"
    },
    {
      id: "saaed-pay",
      title: { en: "Saaed Pay — Resilient Fintech & Payment Architecture", ar: "تطبيق Saaed Pay — معمارية المدفوعات الرقمية و NFC" },
      category: "Fintech & Distributed Payments",
      tagline: { en: "Decoupled payment orchestration integrating NearPay NFC SDK, digital wallets, 3DS challenges, and webhook reconciliation.", ar: "معمارية مدفوعات مرنة تعتمد نمط المحول لربط تقنيات NFC، والمحافظ الرقمية، ومصادقة 3DS، والـ Webhooks." },
      problem: {
        en: "Integrating proprietary payment hardware SDKs (NearPay NFC) created tight coupling within the UI layer, risking fragile state transitions during multi-step 3DS authentication and network drops.",
        ar: "ارتباط مكتبات أجهزة الدفع (NearPay NFC) بطبقة واجهات المستخدم أدى لتعقيد المعاملات وصعوبة إدارة الحالات الحرجة أثناء تحديات 3DS وانقطاع الاتصال."
      },
      architecture: {
        en: "Engineered a layered architecture utilizing the Adapter Pattern to wrap payment providers behind a unified domain repository interface, coupled with an asynchronous transaction state machine.",
        ar: "تصميم معمارية قائمة على نمط المحول (Adapter Pattern) لتجريد مزودي الدفع خلف واجهة موحدة، مع آلة حالات غير متزامنة لإدارة دورة حياة المعاملة."
      },
      engineeringDecisions: [
        {
          decision: { en: "Payment Provider Abstraction (Adapter Pattern)", ar: "تجريد مزودي الدفع بنمط المحول" },
          detail: { en: "Isolated SDK-specific payloads behind a normalized PaymentRepository interface, allowing provider swapping without changing business use-cases.", ar: "عزل تفاصيل مكاتب SDK وراء واجهة معيارية تتيح تبديل أو إضافة مزودي دفع جدد دون المساس بقواعد العمل." }
        },
        {
          decision: { en: "Deterministic Webhook & Transaction Reconciliation", ar: "مطابقة الحالات عبر الـ Webhooks والتحقق الثنائي" },
          detail: { en: "Designed idempotent state transitions confirming transaction finality through asynchronous server webhooks rather than client-only signals.", ar: "الاعتماد على إشعارات Webhook غير المتزامنة من الخادم لتأكيد نجاح الدفع بدلاً من الاعتماد المنفرد على إشارة تطبيق الهاتف." }
        }
      ],
      tech: ["Flutter", "Dart", "Adapter Pattern", "NearPay NFC SDK", "Clean Architecture", "Fintech Security"],
      impact: {
        en: "Achieved seamless contactless tap-to-phone transactions, zero client-state inconsistency, and modular payment channel extensibility.",
        ar: "تحقيق تجربة دفع لاتلامسية موثوقة عبر الهاتف، ومنع تعارض حالات المعاملات المالية، وسهولة التوسع لإضافة قنوات دفع إضافية."
      },
      accentColor: "#0071E3"
    },
    {
      id: "multi-tenant-erp",
      title: { en: "Ezee Manager Pro & Tebalink ERP — Offline-First Architecture", ar: "نظام ERP متعدد المستأجرين والعمل بدون اتصال (Offline-First)" },
      category: "Enterprise Software & Offline Sync",
      tagline: { en: "Multi-Tenant enterprise ERP with isolated tenant environments and deterministic background data reconciliation.", ar: "نظام ERP متعدد المستأجرين مع عزل تام للبيانات ومزامنة موثوقة للعمليات في الخلفية." },
      problem: {
        en: "Retail and administrative operations suffered severe operational disruption whenever internet connectivity dropped, blocking cashier transactions and invoice creation.",
        ar: "توقف عمليات البيع وإصدار الفواتير المحاسبية في المحال التجارية والمؤسسات عند أي انقطاع مؤقت في شبكة الإنترنت."
      },
      architecture: {
        en: "Implemented an Offline-First architectural pattern using local SQLite storage as the primary read/write target, orchestrated by a robust background Synchronization Queue with automatic retry and conflict resolution.",
        ar: "تطبيق معمارية Offline-First تعتمد على SQLite المحلي كهدف أساسي للقراءة والكتابة، مع طابور مزامنة خلفي يعالج الأخطاء تلقائياً عند عودة الشبكة."
      },
      engineeringDecisions: [
        {
          decision: { en: "Local Queue & Background Worker Sync", ar: "طابور العمليات المحلي والمزامنة الخلفية" },
          detail: { en: "Queued mutations locally with monotonic sequence IDs to guarantee FIFO processing upon reconnection.", ar: "حفظ العمليات محلياً بمعرفات تسلسلية تضمن تنفيذها بترتيبها الزمني الصحيح عند استعادة الاتصال." }
        },
        {
          decision: { en: "Multi-Tenant Data Segregation", ar: "عزل بيانات كل مستأجر في قاعدة البيانات" },
          detail: { en: "Applied tenant partition keys across local and remote queries to maintain absolute tenant data isolation.", ar: "استخدام مفاتيح فصل المستأجرين في كافة الاستعلامات لضمان عدم تداخل بيانات الشركات المختلفة." }
        },
        {
          decision: { en: "Custom Calculation & PDF Reporting Engine", ar: "محرك حسابات دقيق وطباعة فواتير حرارية" },
          detail: { en: "Engineered deterministic tax/discount invoice calculations and high-performance ESC/POS thermal printing routines.", ar: "بناء محرك لحساب الضرائب والخصومات بدقة وطباعة الفواتير الحرارية مباشرة عبر بروتوكول ESC/POS." }
        }
      ],
      tech: ["Flutter", "Offline-First Sync", "SQLite", "SQL Server", "Multi-Tenant DB", "Thermal Printing"],
      impact: {
        en: "Guaranteed 100% operational uptime during connectivity failures and zero transaction loss across multi-branch enterprise deployments.",
        ar: "ضمان استمرارية تشغيل العمليات بنسبة 100% حتى في أوقات انقطاع الإنترنت التام دون فقدان أي فاتورة أو حركة مالية."
      },
      accentColor: "#6E44FF"
    },
    {
      id: "ecommerce-multi-tenant",
      title: { en: "Multi-Tenant E-Commerce SaaS Architecture", ar: "معمارية منصة التجارة الإلكترونية متعددة المستأجرين" },
      category: "Distributed SaaS & Mobile",
      tagline: { en: "White-labeled architecture delivering isolated vendor configurations from a single unified codebase.", ar: "معمارية تتيح توليد تطبيقات مخصصة لكل تاجر بهويته الخاصة اعتماداً على قاعدة كود موحدة." },
      problem: {
        en: "Managing separate codebases for different merchants caused exponential maintenance overhead and divergent bug states.",
        ar: "إدارة قواعد كود منفصلة لكل متجر وتطبيق أدت إلى مضاعفة تكاليف الصيانة وتكرار الأخطاء البرمجية."
      },
      architecture: {
        en: "Built a configurable Multi-Tenant SaaS mobile engine where vendor branding, API endpoints, payment configs, and theme tokens are loaded dynamically at runtime via dependency injection.",
        ar: "هندسة تطبيق معياري متعدد المستأجرين يتم فيه تحميل هوية التاجر ومسارات الـ API وإعدادات الدفع ديناميكياً عبر الـ Dependency Injection."
      },
      engineeringDecisions: [
        {
          decision: { en: "Runtime Configuration Injection", ar: "حقن إعدادات المستأجر عند التشغيل" },
          detail: { en: "Clean Architecture domain layer abstracts tenant configs, dynamically resolving vendor schemas and UI themes.", ar: "فصل إعدادات التاجر في طبقة Domain لتغذية واجهات التطبيق وعناوين الاتصال بشكل ديناميكي." }
        }
      ],
      tech: ["Flutter", "Multi-Tenant SaaS", "Clean Architecture", "Dependency Injection", "Push Notifications"],
      impact: {
        en: "Enabled rapid on-boarding of new enterprise vendors within hours without writing new application codebases.",
        ar: "تمكين إطلاق تطبيقات جديدة للتجار في غضون ساعات قليلة دون الحاجة لكتابة كود جديد من الصفر."
      },
      accentColor: "#10B981"
    },
    {
      id: "ezee-restaurant-pos",
      title: { en: "Ezee Restaurant POS — Sub-Millisecond Local Socket Engine", ar: "نظام نقاط بيع المطاعم Ezee — اتصال مباشر وسرعة استجابة فائقة" },
      category: "High-Performance Enterprise POS",
      tagline: { en: "Direct SQL Server communication architecture eliminating HTTP latency for ultra-fast restaurant floor operations.", ar: "معمارية ربط مباشر مع SQL Server لإلغاء تأخير HTTP وتوفير سرعة استجابة فورية بين الصالة والمطبخ والكاشير." },
      problem: {
        en: "High-concurrency order bursts in busy restaurants caused HTTP REST bottlenecks, resulting in order delay between tables, kitchen displays, and cashiers.",
        ar: "الضغط العالي للطلبات في أوقات الذروة أدى لبطء بروتوكول HTTP التقليدي وتأخر وصول الطلبات بين الطاولات وشاشات المطبخ والكاشير."
      },
      architecture: {
        en: "Connected the Flutter desktop/tablet client directly to local SQL Server databases over raw local socket protocols, bypassing multi-hop REST proxies for local network operations.",
        ar: "ربط واجهات التطبيق بقاعدة بيانات SQL Server عبر Socket محلي مباشر متجاوزاً طبقات الـ REST لتقليل زمن الاستجابة إلى أجزاء من الثانية."
      },
      engineeringDecisions: [
        {
          decision: { en: "Direct TCP Socket Queries", ar: "استعلامات TCP Socket مباشرة" },
          detail: { en: "Executed optimized parameterized queries directly against local database instances, achieving sub-10ms transaction round-trips.", ar: "تنفيذ استعلامات قواعد البيانات المباشرة محلياً لتحقيق استجابة فائقة تقل عن 10 مللي ثانية." }
        }
      ],
      tech: ["Flutter", "Direct SQL Server", "Socket Protocols", "Real-Time Floor Sync", "Thermal Receipt Engine"],
      impact: {
        en: "Eliminated order dispatch lag, providing instant synchronization between kitchen printers, waitstaff tablets, and cashiers.",
        ar: "إلغاء أي تأخير في تسجيل وتمرير الطلبات وتوفير مزامنة فورية بين طاولات الخدمة وطابعات المطبخ والكاشير."
      },
      accentColor: "#10B981"
    },
    {
      id: "ezee-hr",
      title: { en: "Ezee HR — Identity & Role-Based Access Architecture", ar: "نظام Ezee HR — إدارة الهويات والتحكم بالصلاحيات (RBAC)" },
      category: "Enterprise Identity & Mobile",
      tagline: { en: "Cryptographic QR attendance verification and granular role-based security client.", ar: "نظام حضور وانصراف مشفر برموز QR مع تحكم دقيق بصلاحيات الموظفين والمديرين." },
      problem: {
        en: "Manual attendance records were vulnerable to spoofing, and employee self-service lacked structured approval hierarchies.",
        ar: "تعرض سجلات الحضور الورقية أو البسيطة للتلاعب، وغياب دورات اعتماد واضحة لطلبات الإجازات والأذونات."
      },
      architecture: {
        en: "Built a Clean Architecture mobile client communicating with secure REST endpoints, utilizing encrypted time-bound QR payloads for physical check-in validation and dynamic RBAC UI gating.",
        ar: "تطوير تطبيق Clean Architecture يتواصل مع خوادم آمنة، مع استخدام رموز QR مشفرة ومحددة زمنياً لتسجيل الحضور وتطبيق منظومة الصلاحيات RBAC."
      },
      engineeringDecisions: [
        {
          decision: { en: "Encrypted Token Storage & RBAC UI Policies", ar: "تخزين مشفر لرموز الهوية وسياسات واجهة مبنية على الصلاحيات" },
          detail: { en: "Stored session tokens in hardware keystores and conditioned navigation graphs strictly on validated user roles.", ar: "حفظ رموز الجلسة في مخازن الهاتف المشفرة وتحديد مسارات التنقل وفق صلاحيات المستخدم المعتمدة." }
        }
      ],
      tech: ["Flutter", "QR Cryptography", "Role-Based Access (RBAC)", "Clean Architecture", "Encrypted Storage"],
      impact: {
        en: "Prevented attendance fraud and streamlined internal leave approval workflows across distributed corporate teams.",
        ar: "منع التلاعب في تسجيل الحضور وتسريع وتيرة دورات اعتماد الإجازات عبر الفرق الإدارية."
      },
      accentColor: "#6E44FF"
    },
    {
      id: "alfakhra",
      title: { en: "ALFAKHRA — Cross-Platform Migration & Modular Refactor", ar: "منصة الفاخرة — إعادة الهيكلة والتحويل إلى فلاتر" },
      category: "System Migration & Mobile",
      tagline: { en: "Migrated native mobile codebases into a unified, high-performance Flutter architecture for a premier Saudi brand.", ar: "تحويل تطبيق ناتيڤ أصيل إلى بنية فلاتر موحدة وعالية الأداء لأكبر علامة خياطة رجالية في السعودية." },
      problem: {
        en: "Maintaining dual native codebases (iOS & Android) slowed down feature parity and made custom measurement calculation modules hard to maintain consistently.",
        ar: "ازدواجية التطوير المنفصل لـ iOS و Android أدت لبطء إطلاق الميزات وتفاوت دقة خوارزميات حساب المقاسات بين النظامين."
      },
      architecture: {
        en: "Consolidated both platforms into a unified Flutter codebase structured into independent domain modules for catalog, custom tailoring orders, and measurement geometry.",
        ar: "توحيد المنصتين في مشروع فلاتر واحد مقسم إلى وحدات برمجية مستقلة لإدارة الكتالوج، وطلبات التفصيل، وحسابات المقاسات."
      },
      engineeringDecisions: [
        {
          decision: { en: "Modular Domain Design", ar: "تقسيم النظام لوحدات عمل مستقلة" },
          detail: { en: "Isolated business calculation logic from UI rendering, eliminating cross-platform discrepancy.", ar: "عزل منطق حساب المقاسات عن طبقة العرض لمنع أي اختلاف في النتائج بين أجهزة أندرويد وآيفون." }
        }
      ],
      tech: ["Flutter", "Dart", "Native Migration", "Tailoring Geometric Logic", "Performance Optimization"],
      impact: {
        en: "Reduced ongoing maintenance costs by 50% while delivering consistent 60fps UI performance across all devices.",
        ar: "خفض تكاليف الصيانة المستقبلية بنسبة 50% مع ضمان تجربة مستخدم سلسة واستجابة 60 إطاراً في الثانية."
      },
      accentColor: "#0071E3"
    },
    {
      id: "taqeem-qa",
      title: { en: "Taqeem — Microservices & API Contract Quality Assurance", ar: "منصة تقييم — اختبار عقود واجهات البرمجة وعزل الأنظمة" },
      category: "API Testing & System Reliability",
      tagline: { en: "Verification of microservices REST contracts, multi-tenant isolation, and secure payment flow logic.", ar: "التحقق الشامل من مطابقة عقود واجهات APIs، وعزل المستأجرين، وتسلسلات الدفع الإلكتروني." },
      problem: {
        en: "Complex distributed microservices required rigorous contract validation to prevent regressions during fast-paced API version upgrades.",
        ar: "تطلب النظام الموزع تأكيداً صارماً لمطابقة عقود الواجهات (API Contracts) لمنع أي تعطل أثناء تحديث إصدارات الخدمات."
      },
      architecture: {
        en: "Designed comprehensive Postman test collections and OpenAPI schema validation suites to verify REST contracts, authorization boundaries, and tenant isolation policies.",
        ar: "بناء مجموعات اختبار عبر Postman ومطابقة مواصفات OpenAPI للتأكد من سلامة العقود البرمجية وحدود الصلاحيات."
      },
      engineeringDecisions: [
        {
          decision: { en: "Automated Contract & Edge-Case Testing", ar: "اختبار العقود البرمجية والحالات الاستثنائية" },
          detail: { en: "Validated payload schemas, rate limit headers, and multi-tenant security boundary enforcement.", ar: "التأكد من سلامة البيانات المرسلة والمستلمة وسياسات الحماية وعزل بيانات كل مستأجر." }
        }
      ],
      tech: ["Postman", "OpenAPI / Swagger", "Contract Testing", "API Security Validation", "Multi-Tenant QA"],
      impact: {
        en: "Ensured 100% adherence to OpenAPI specifications and prevented security leaks across multi-tenant API endpoints.",
        ar: "ضمان مطابقة بنية الواجهات للمواصفات القياسية وحماية مسارات النظام من أي تسريب لبيانات المستأجرين."
      },
      accentColor: "#10B981"
    }
  ],

  techStack: {
    softwareEngineering: [
      { name: "Flutter & Dart", level: "Core Strength", desc: "Cross-platform engineering, high-performance UI, animations & reactive architecture" },
      { name: "Clean Architecture", level: "Core Strength", desc: "Domain/Data/Presentation boundary segregation & testability" },
      { name: "State Management", level: "Core Strength", desc: "BLoC, Cubit, GetX, and Provider with unidirectional data flows" },
      { name: "OOP & SOLID", level: "Core Strength", desc: "Decoupled class hierarchies, dependency inversion & single responsibility" },
      { name: "Design Patterns", level: "Applied", desc: "Adapter, Strategy, Repository, Factory, and Observer patterns" }
    ],
    systemDesign: [
      { name: "Microservices Concepts", level: "Applied", desc: "Service boundaries, contract decoupling & async vs sync workflows" },
      { name: "Offline-First Sync Engine", level: "Applied", desc: "Monotonic sequence queues, conflict resolution & SQLite local caching" },
      { name: "Multi-Tenant Isolation", level: "Applied", desc: "Tenant partition keys, isolated contexts & tenant-aware data routing" },
      { name: "Failure & Retry Handling", level: "Applied", desc: "Idempotent operations, exponential backoff & graceful degradation" }
    ],
    apiManagement: [
      { name: "Apache APISIX Gateway", level: "Specialist", desc: "Dynamic route configurations, proxy rewrite rules & plugin orchestration" },
      { name: "API Security & Rate Limiting", level: "Specialist", desc: "CORS policies, traffic throttling, header manipulation & IP filtering" },
      { name: "Consumer Header Injection", level: "Applied", desc: "X-Consumer and tenant identity header injection at gateway entry" },
      { name: "OpenAPI & Swagger Contracts", level: "Applied", desc: "Standardized API contract specifications and request schema validation" }
    ],
    identitySecurity: [
      { name: "Keycloak IAM", level: "Specialist", desc: "Centralized identity provider, OAuth2 / OIDC realms & client management" },
      { name: "JWT Token Lifecycle", level: "Specialist", desc: "Access/Refresh token rotation, silent refresh & signature introspection" },
      { name: "Role-Based Access (RBAC)", level: "Applied", desc: "Fine-grained permission gating across client and gateway layers" },
      { name: "API Security Testing", level: "Applied", desc: "Postman contract validation, header inspection & auth boundary testing" }
    ],
    backendData: [
      { name: "SQL Server & SQLite", level: "Applied", desc: "Complex queries, indexing, local relational storage & direct socket drivers" },
      { name: "Node.js & Express", level: "Working Knowledge", desc: "RESTful microservices, middleware pipelines & token handlers" },
      { name: "Redis Caching", level: "Working Knowledge", desc: "Session storage, rate limiting counters & caching layers" },
      { name: "Real-Time WebSockets", level: "Applied", desc: "Bidirectional live event streams & client socket listeners" }
    ],
    devopsTooling: [
      { name: "GitHub Actions & CI/CD", level: "Applied", desc: "Automated linting, building, testing, and deployment workflows" },
      { name: "Shorebird CodePush", level: "Applied", desc: "Over-the-air binary patch deployment for production Flutter apps" },
      { name: "Postman & API Test Suites", level: "Applied", desc: "Automated regression testing, mock servers & contract suites" },
      { name: "Fastlane & Deployment", level: "Applied", desc: "Automated app store distribution pipelines" }
    ]
  },

  engineeringPrinciples: [
    {
      id: "boundaries",
      title: { en: "Define Clear Boundaries", ar: "تحديد حدود صارمة للمكونات" },
      desc: { 
        en: "Strictly segregate presentation, business use-cases, and external data sources. Business logic should never know whether data comes from SQLite, REST, or memory.",
        ar: "فصل طبقة العرض عن قواعد العمل ومصادر البيانات. لا ينبغي لمنطق العمل أن يعتمد على مصدر البيانات سواء كان SQLite أو REST أو ذاكرة مؤقتة."
      },
      tag: "CLEAN_BOUNDARIES"
    },
    {
      id: "change",
      title: { en: "Design for Change & Modularity", ar: "التصميم للمرونة وقابلية التوسع" },
      desc: {
        en: "Decouple third-party libraries and hardware SDKs (like NearPay NFC or payment gateways) behind abstract interfaces using the Adapter Pattern.",
        ar: "عزل المكتبات الخارجية ومكتبات العتاد (مثل NearPay NFC أو بوابات الدفع) خلف واجهات مجردة عبر نمط المحول (Adapter Pattern)."
      },
      tag: "ADAPTER_PATTERN"
    },
    {
      id: "crosscutting",
      title: { en: "Centralize Cross-Cutting Concerns", ar: "مركزية الاهتمامات المشتركة" },
      desc: {
        en: "Handle authentication, routing, rate limiting, and CORS centrally at the API Gateway (Apache APISIX) rather than duplicating them across microservices.",
        ar: "إدارة المصادقة، والتوجيه، وتحديد معدل الطلبات، وسياسات CORS مركزياً في بوابة واجهات البرمجة (APISIX) بدلاً من تكرارها في كل خدمة."
      },
      tag: "API_GATEWAY"
    },
    {
      id: "failure",
      title: { en: "Design for Failure & Disconnection", ar: "التصميم لتحمل الأخطاء وانقطاع الاتصال" },
      desc: {
        en: "Treat network failure as a standard state. Implement offline storage, deterministic background sync queues, and transparent token refresh retries.",
        ar: "التعامل مع انقطاع الشبكة كحالة طبيعية عبر التخزين المحلي، وطوابير المزامنة المتسلسلة، وتجديد رموز المصادقة تلقائياً."
      },
      tag: "OFFLINE_FIRST"
    },
    {
      id: "tradeoffs",
      title: { en: "Make Architectural Trade-offs Explicit", ar: "الموازنة الواعية بين الخيارات الهندسية" },
      desc: {
        en: "Prefer maintainability and practical simplicity over premature complexity. Choose direct database sockets for local POS speed, and Gateway proxies for distributed web APIs.",
        ar: "تفضيل البساطة وقابلية الصيانة على التعقيد المبكر. اختيار الاتصال المباشر لسرعة نقاط البيع، وبوابة APIs للأنظمة السحابية الموزعة."
      },
      tag: "PRAGMATIC_ENGINEERING"
    },
    {
      id: "contracts",
      title: { en: "Build with Contract Clarity & Observability", ar: "وضوح العقود البرمجية وإمكانية التتبع" },
      desc: {
        en: "Enforce explicit data contracts via OpenAPI/Swagger specifications, structured error handling, and consistent logging at the gateway entry.",
        ar: "الاعتماد على عقود برمجية واضحة (OpenAPI/Swagger)، ومعالجة منهجية للأخطاء، وتتبع حركة الطلبات على مستوى البوابة."
      },
      tag: "CONTRACT_DRIVEN"
    }
  ],

  education: {
    degree: { en: "Bachelor of Computer Science", ar: "بكالوريوس علوم الحاسب" },
    institution: { en: "MET - Misr Higher Institute For Engineering & Technology", ar: "معهد مصر العالي للهندسة والتكنولوجيا" },
    period: "2018 – 2022",
    grade: { en: "Very Good (V.Good)", ar: "جيد جداً" },
    location: { en: "Mansoura, Egypt", ar: "المنصورة، مصر" }
  },

  courses: [
    { name: "Flutter Development Bootcamp", platform: "The App Brewery" },
    { name: "The Complete Flutter & Dart Development Course", platform: "Udemy" },
    { name: "Flutter Clean Architecture", platform: "Udemy" },
    { name: "Foundations of Project Management", platform: "Grow with Google on Coursera" },
    { name: "Software Development Processes & Methodologies", platform: "University of Minnesota | Coursera" },
    { name: "Agile Software Development", platform: "University of Minnesota | Coursera" },
    { name: "The Complete Node.js Course (RESTful Web Services & MongoDB)", platform: "Maharatech" }
  ]
};
