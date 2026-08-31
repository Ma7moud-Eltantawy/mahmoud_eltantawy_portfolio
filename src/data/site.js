/* ============================================================
   MAHMOUD EL-TANTAWY — CONTENT MODEL
   Software Engineer | System Design • API Management • Distributed Systems • Flutter
   ============================================================ */

export const SITE = {
  name: "MAHMOUD EL-TANTAWY",
  role: "SOFTWARE ENGINEER  &  SYSTEM DESIGN ARCHITECT",

  github: "https://github.com/Ma7moud-Eltantawy",
  linkedin: "https://linkedin.com/in/mahmoud-eltantawy-7b26321b1",
  cv: "Mahmoud_Eltantawy_CV.pdf",

  /* ---------------------------------------------------------
     HERO & 3D CARDS
  --------------------------------------------------------- */
  hero: {
    kicker: "SOFTWARE ARCHITECTURE & ENGINEERING — 2026",
    statement:
      "I engineer resilient software systems, centralized API Gateways, and high-performance cross-platform applications.",
    roles: [
      {
        icon: "network",
        title: "SYSTEM DESIGN & API GATEWAY",
        desc: "Apache APISIX routing, Keycloak IAM token lifecycle, and microservices boundary governance.",
      },
      {
        icon: "code",
        title: "SOFTWARE ENGINEER & FLUTTER",
        desc: "Clean Architecture, offline-first data sync engines, and NearPay NFC payment adapters.",
      },
    ],
    techLabel: "CORE ENGINEERING DOMAINS",
    tech: ["apache-apisix", "system-design", "keycloak", "clean-architecture", "flutter", "sql-server"],
    panel: {
      tag: "// SYSTEM ARCHITECTURE FIELD",
      intelTitle: "GATEWAY & ENGINE LAYER",
      intelLines: ["APISIX Routing • JWT Rotation", "Offline Sync • Clean Arch"],
      status: "GATEWAY STATUS",
      statusValue: "200 OK",
      updated: "LAST DEPLOYED",
      updatedValue: "NOW",
    },
  },

  /* ---------------------------------------------------------
     ABOUT
  --------------------------------------------------------- */
  about: {
    photo: "imgs/Profile.jpg",
    headingLines: [
      "I build resilient",
      "|systems| and modern",
      "architectures that",
      "scale reliably.",
    ],
    roleLine: ["SOFTWARE ENGINEER", "SYSTEM DESIGN & FLUTTER"],
    paragraph:
      "Software Engineer with hands-on experience spanning client-side engineering, system design, API management, and distributed systems. Specialized in building maintainable Flutter applications, integrating resilient offline-first data synchronization, configuring Apache APISIX Gateway routing and Keycloak IAM security, and enforcing clean domain boundaries with robust design patterns.",
    bullets: [
      {
        icon: "network",
        title: "Systems before syntax.",
        desc: "Every system starts with clear boundaries, failure scenarios, and maintainable contracts.",
      },
      {
        icon: "code",
        title: "End-to-end integration.",
        desc: "From Flutter UI & offline SQLite queues up to Apache APISIX reverse proxies and SQL Server.",
      },
      {
        icon: "target",
        title: "Pragmatic trade-offs.",
        desc: "Clean code is essential; practical reliability and zero transaction loss are non-negotiable.",
      },
    ],
    stats: [
      { value: 12, pad: true, suffix: "+", label: "PRODUCTION\nSYSTEMS" },
      { value: 2, pad: false, suffix: "+", label: "YEARS OF\nENGINEERING" },
      { value: 3, pad: false, suffix: "", label: "MULTI-TENANT\nPLATFORMS" },
      { value: null, symbol: "100%", label: "GATEWAY\nSECURITY" },
    ],
    focusCard: {
      title: "FOCUS",
      items: ["System Design", "API Management", "Flutter Architecture"],
    },
    process: [
      { n: "01", icon: "search", title: "ANALYZE", desc: "I dissect business constraints, data schemas, and failure states." },
      { n: "02", icon: "cube", title: "DESIGN", desc: "I establish clean boundaries, adapter abstractions, and gateway rules." },
      { n: "03", icon: "pencil", title: "IMPLEMENT", desc: "I write decoupled domain use-cases, reactive UIs, and sync queues." },
      { n: "04", icon: "plane", title: "SCALE", desc: "I verify contracts, enforce rate limits, and ensure zero transaction loss." },
    ],
  },

  /* ---------------------------------------------------------
     SKILLS & STACK
  --------------------------------------------------------- */
  skills: {
    intro:
      "A structured overview of the engineering disciplines, architectural patterns, and technologies I apply in production.",
    rows: [
      {
        n: "01",
        key: "SYSTEM DESIGN & ARCHITECTURE",
        blurb: "Designing decoupled, offline-resilient architectures with strict domain boundaries and proven design patterns.",
        kind: "skills",
        items: [
          { icon: "cube", name: "Clean Architecture", lines: ["Domain · Data · Presentation", "Use-Cases · Repositories"], tag: "CORE" },
          { icon: "gear", name: "Design Patterns", lines: ["Adapter · Strategy · Repository", "Factory · Observer"], tag: "APPLIED" },
          { icon: "server", name: "Offline Sync Engine", lines: ["Monotonic FIFO Queues", "SQLite · Conflict Resolution"], tag: "APPLIED" },
          { icon: "network", name: "Multi-Tenant Isolation", lines: ["Tenant Partition Keys", "Isolated Contexts"], tag: "APPLIED" },
          { icon: "shield", name: "Failure & Retry Handling", lines: ["Idempotent Operations", "Exponential Backoff"], tag: "APPLIED" },
        ],
      },
      {
        n: "02",
        key: "API MANAGEMENT & GATEWAY",
        blurb: "Centralized API Gateway traffic orchestration, token introspection, and reverse proxy routing.",
        kind: "bars",
        items: [
          { icon: "network", name: "Apache APISIX Gateway", lines: ["Dynamic Routes · Plugins", "Proxy Rewrite Rules"], pct: 90, tag: "SPECIALIST" },
          { icon: "lock", name: "Keycloak IAM & OAuth2", lines: ["JWT Lifecycle · Introspection", "Token Rotation & RBAC"], pct: 88, tag: "SPECIALIST" },
          { icon: "shield", name: "API Security & Rate Limits", lines: ["CORS Governance", "X-Consumer Injection"], pct: 85, tag: "ADVANCED" },
          { icon: "code", name: "OpenAPI & Swagger Contracts", lines: ["Contract Testing", "Schema Validation"], pct: 85, tag: "ADVANCED" },
        ],
      },
      {
        n: "03",
        key: "MOBILE & CLIENT ENGINEERING",
        blurb: "Building high-performance cross-platform Flutter applications with reactive state flows and hardware integrations.",
        kind: "bars",
        items: [
          { icon: "code", name: "Flutter & Dart", lines: ["Cross-Platform Mobile", "Reactive UI · Animations"], pct: 95, tag: "CORE" },
          { icon: "gear", name: "State Management", lines: ["BLoC · Cubit · Provider", "GetX · UDF Streams"], pct: 90, tag: "CORE" },
          { icon: "card", name: "Fintech & NFC SDKs", lines: ["NearPay Tap-on-Phone", "Payment Adapters"], pct: 85, tag: "SPECIALIST" },
          { icon: "db", name: "SQL Server & Direct Sockets", lines: ["Sub-10ms Queries", "TCP Socket Protocol"], pct: 80, tag: "ADVANCED" },
        ],
      },
      {
        n: "04",
        key: "CORE PRINCIPLES (HOW I THINK)",
        blurb: "The engineering mindset and architectural principles behind every system.",
        kind: "cards",
        items: [
          { icon: "bulb", name: "Define Clear Boundaries", desc: "Business logic never depends on whether data comes from SQLite, REST, or memory." },
          { icon: "target", name: "Design for Change", desc: "Isolate proprietary payment SDKs and hardware drivers behind the Adapter Pattern." },
          { icon: "shield", name: "Centralize Concerns", desc: "Delegate authentication, rate limiting, and CORS to Apache APISIX Gateway." },
          { icon: "rocket", name: "Design for Failure", desc: "Treat network interruption as a normal state with offline queues and silent token retries." },
        ],
      },
    ],
  },

  /* ---------------------------------------------------------
     JOURNEY — Timeline Milestones
  --------------------------------------------------------- */
  journey: {
    note: "A progression from client-side mobile engineering to software architecture, API management, and system design.",
    quote: "“I don't start with technology. I start with the problem, constraints, failure scenarios, and the evolution the system may need to support.”",
    stats: [
      { value: 12, pad: true, suffix: "+", label: "PRODUCTION\nSYSTEMS" },
      { value: 100, pad: false, suffix: "%", label: "API GATEWAY\nISOLATION" },
      { value: 2, pad: false, suffix: "+", label: "YEARS OF\nENGINEERING" },
      { value: null, symbol: "∞", label: "LEARNING &\nEVOLUTION" },
    ],
    milestones: [
      {
        tag: "EDUCATION",
        icon: "calendar",
        year: "2018 — 2022",
        title: "B.Sc. in Computer Science",
        org: "MET — Misr Higher Institute for Engineering & Technology",
        meta: "Grade: Very Good (V.Good) • Mansoura, Egypt",
        desc: "Foundational studies in algorithms, data structures, relational databases, OOP, and software engineering methodologies.",
        chipsTitle: "FOUNDATIONS",
        chips: ["Data Structures", "Algorithms", "Database Systems", "Software Engineering", "OOP Principles"],
      },
      {
        tag: "FINTECH & POS",
        icon: "card",
        year: "12/2023 — 06/2024",
        title: "Software Engineer — Fintech & POS Systems",
        org: "Dar Alsaaed • Riyadh, Saudi Arabia",
        meta: "Fintech, NFC Payments, POS Systems",
        desc: "Engineered Saaed Pay fintech app with NearPay NFC SDK integration using the Adapter Pattern, and built Ezee Restaurant POS with direct local SQL Server socket bindings.",
        chipsTitle: "KEY DELIVERABLES",
        chips: ["NearPay NFC SDK", "Adapter Pattern", "Direct SQL Sockets", "ALFAKHRA Migration", "WebSockets"],
      },
      {
        tag: "ERP & OFFLINE SYNC",
        icon: "server",
        year: "02/2024 — 01/2026",
        title: "Software Engineer — Enterprise Systems",
        org: "Teba-link • Giza, Egypt",
        meta: "Multi-Tenant ERP, Offline-First Architecture",
        desc: "Architected the offline-first data sync engine for Ezee Manager Pro ERP using local SQLite FIFO queues, dynamic invoice taxation engines, and Ezee HR with cryptographic QR verification.",
        chipsTitle: "KEY DELIVERABLES",
        chips: ["Offline-First Sync", "Multi-Tenant DB", "SQLite Queues", "Clean Architecture", "RBAC Security"],
      },
      {
        tag: "CURRENT",
        icon: "rocket",
        year: "02/2026 — Present",
        title: "Software Engineer",
        org: "Dolf Technologies • Saudi Arabia / Remote",
        meta: "Enterprise Software & Scalable Architecture",
        desc: "Architecting modular client applications with Clean Architecture, contract-driven API integrations, and scalable state management systems.",
        chipsTitle: "FOCUS",
        chips: ["Clean Architecture", "API Management", "System Reliability", "State Management", "SOLID"],
      },
    ],
  },

  /* ---------------------------------------------------------
     CERTIFICATES & CREDENTIALS
  --------------------------------------------------------- */
  certificates: [
    {
      id: "001",
      title: "Flutter Clean Architecture",
      issuer: "Udemy Verified Credential",
      date: "2024",
      image: "imgs/certficate/cert_flutter_clean_arch.jpg",
      tag: "CLEAN ARCH",
      url: "https://www.udemy.com/certificate/UC-2076ada3-2d25-4dc6-a7f1-655e31e33805/",
      credId: "UC-2076ada3-2d25-4dc6-a7f1-655e31e33805",
      baseRot: -4,
      baseMargin: -15,
    },
    {
      id: "002",
      title: "Complete Flutter & Dart Development",
      issuer: "Udemy Verified Credential",
      date: "2023",
      image: "imgs/certficate/cert_flutter_dart.jpg",
      tag: "FLUTTER & DART",
      url: "https://www.udemy.com/certificate/UC-b6fa0c24-4166-4664-a9ba-f9aff3dc830d/",
      credId: "UC-b6fa0c24-4166-4664-a9ba-f9aff3dc830d",
      baseRot: 3,
      baseMargin: 20,
    },
    {
      id: "003",
      title: "Foundations of Project Management",
      issuer: "Google / Coursera",
      date: "2024",
      image: "imgs/certficate/cert_google_pm.jpg",
      tag: "PROJECT MGMT",
      url: "https://www.coursera.org/account/accomplishments/certificate/AW2G88RPWUBG",
      credId: "AW2G88RPWUBG",
      baseRot: -2,
      baseMargin: 0,
    },
    {
      id: "004",
      title: "Software Processes & Methodologies",
      issuer: "University of Minnesota / Coursera",
      date: "2024",
      image: "imgs/certficate/cert_software_processes.jpg",
      tag: "METHODOLOGY",
      url: "https://www.coursera.org/account/accomplishments/certificate/BNDEGYPNFCAA",
      credId: "BNDEGYPNFCAA",
      baseRot: 5,
      baseMargin: 35,
    },
    {
      id: "005",
      title: "Agile Software Development",
      issuer: "University of Minnesota / Coursera",
      date: "2024",
      image: "imgs/certficate/cert_agile_development.jpg",
      tag: "AGILE SCRUM",
      url: "https://www.coursera.org/account/accomplishments/certificate/LK8JXJ9EY7HA",
      credId: "LK8JXJ9EY7HA",
      baseRot: -3,
      baseMargin: -5,
    },
    {
      id: "006",
      title: "Flutter Development Bootcamp",
      issuer: "The App Brewery & Google Flutter",
      date: "2023",
      image: "imgs/certficate/cert_app_brewery.jpg",
      tag: "BOOTCAMP",
      url: "https://drive.google.com/file/d/1g2x6qbBk0uAGDOPUVI9gho1XCHnH5UbO/view?usp=drive_link",
      credId: "VERIFIED CREDENTIAL",
      baseRot: 2,
      baseMargin: 15,
    },
    {
      id: "007",
      title: "RESTful Web Services & Node.js",
      issuer: "Maharatech / ITIDA",
      date: "2024",
      image: "imgs/certficate/cert_nodejs_maharatech.jpg",
      tag: "NODE.JS APIS",
      url: "https://maharatech.gov.eg/",
      credId: "MAHARA-NODE-CERT",
      baseRot: -4,
      baseMargin: 10,
    },
  ],

  /* ---------------------------------------------------------
     CONTACT
  --------------------------------------------------------- */
  contact: {
    sub: "Open to opportunities in Software Engineering, System Design, API Management, and Architecture.",
    email: "mahmoudeltantawy2019@gmail.com",
    phone: "+966 57 582 0045",
    location: "Al Khobar, Eastern Province, Saudi Arabia | Egypt",
    availability: "Available for full-time and contract engineering roles.",
    infoTitle: "HAVE A SYSTEM WORTH BUILDING? LET'S TALK.",
    types: [
      { key: "SYSTEM_DESIGN", label: "SYSTEM DESIGN / ARCHITECTURE" },
      { key: "API_GATEWAY", label: "API GATEWAY / APISIX" },
      { key: "SOFTWARE_ENG", label: "SOFTWARE ENGINEERING" },
      { key: "FLUTTER", label: "FLUTTER / MOBILE ARCHITECTURE" },
      { key: "COLLAB", label: "TECHNICAL CONSULTING" },
    ],
    safeNote: ["DIRECT DISPATCH TO MAHMOUD..", "FAST AND DIRECT RESPONSE."],
  },

  /* ---------------------------------------------------------
     PROJECTS & CASE STUDIES
  --------------------------------------------------------- */
  projects: [
    {
      id: "qiyasi",
      title: "QIYASI API GATEWAY",
      category: "API GATEWAY / APISIX",
      year: "2025",
      teamNote: "Architecture & Infrastructure Contribution",
      repo: "https://github.com/Ma7moud-Eltantawy",
      tags: ["Apache APISIX", "Keycloak IAM", "JWT Tokens", "Microservices"],
      stack: ["Apache APISIX", "Keycloak IAM", "JWT Security", "OpenAPI", "Microservices"],
      about: [
        "Architected the API Gateway entry point using Apache APISIX for the Qiyasi distributed microservices platform, decoupling client apps from internal backend services.",
        "Problem: Direct exposure of microservices to client apps created duplicated auth logic, CORS policy mismatches, and tight coupling of internal endpoints.",
        "Solution: Implemented centralized JWT token introspection with Keycloak IAM, dynamic proxy URI rewrites, CORS enforcement, and automatic X-Consumer tenant header injection.",
        "Impact: Eliminated duplicate auth logic across downstream services, unified security governance, and enabled zero-downtime routing modifications.",
      ],
      image: "proj_qiyasi.jpg",
      imageDetail: "proj_qiyasi.jpg",
    },
    {
      id: "saaed-pay",
      title: "SAAED PAY FINTECH",
      category: "FINTECH / NFC PAYMENTS",
      year: "2024",
      teamNote: "Lead Mobile & Fintech Engineer",
      repo: "https://github.com/Ma7moud-Eltantawy",
      tags: ["Flutter", "NearPay NFC", "Adapter Pattern", "3DS Auth"],
      stack: ["Flutter", "Dart", "NearPay NFC SDK", "Clean Architecture", "Fintech Security"],
      about: [
        "Engineered a cross-platform digital payment system with NearPay NFC tap-on-phone, digital wallet management, and multi-step 3DS payment verification.",
        "Problem: Integrating hardware NFC SDKs directly into UI widgets created tight coupling, risking inconsistent state during network drops and 3DS challenge flows.",
        "Solution: Utilized the Adapter Pattern to wrap payment providers behind a normalized PaymentRepository interface, with asynchronous server webhook reconciliation.",
        "Impact: Delivered reliable contactless tap-to-phone transactions, zero client state conflicts, and modular payment channel extensibility.",
      ],
      image: "proj_saaed_pay.jpg",
      imageDetail: "proj_saaed_pay.jpg",
    },
    {
      id: "ezee-erp",
      title: "EZEE MANAGER PRO ERP",
      category: "ENTERPRISE / OFFLINE-FIRST",
      year: "2025",
      teamNote: "Core Software Engineer",
      repo: "https://github.com/Ma7moud-Eltantawy",
      tags: ["Flutter", "Offline-First Sync", "SQLite", "Multi-Tenant"],
      stack: ["Flutter", "SQLite Local Queue", "SQL Server", "Thermal Print Engine", "Multi-Tenant"],
      about: [
        "Multi-Tenant enterprise ERP system operating with zero interruption under network connectivity loss through an Offline-First architectural pattern.",
        "Problem: Intermittent network drops in retail branches halted cashier billing, invoice calculations, and inventory tracking.",
        "Solution: Built an offline-first data sync engine using local SQLite storage and monotonic sequence queues with automatic background reconciliation.",
        "Impact: Guaranteed 100% operational uptime during network failures and zero transaction loss across multi-branch enterprise deployments.",
      ],
      image: "proj_ezee_erp.jpg",
      imageDetail: "proj_ezee_erp.jpg",
    },
    {
      id: "ecommerce-multi-tenant",
      title: "MULTI-TENANT SAAS STORE",
      category: "DISTRIBUTED SAAS / MOBILE",
      year: "2025",
      teamNote: "Lead Mobile Architect",
      repo: "https://github.com/Ma7moud-Eltantawy",
      tags: ["Flutter", "Multi-Tenant SaaS", "Clean Architecture", "Dependency Injection"],
      stack: ["Flutter", "Dependency Injection", "Vendor API Sync", "Clean Architecture"],
      about: [
        "White-labeled Multi-Tenant mobile platform empowering distinct merchants to deploy brand-customized mobile applications from a single unified codebase.",
        "Problem: Maintaining separate codebases per merchant multiplied maintenance costs and created divergent bug states.",
        "Solution: Built a modular runtime configuration injector resolving vendor schemas, payment configs, and UI tokens dynamically via Clean Architecture domain abstractions.",
        "Impact: Enabled rapid onboarding of new enterprise vendors within hours without writing new application codebases.",
      ],
      image: "proj_ecommerce.jpg",
      imageDetail: "proj_ecommerce.jpg",
    },
    {
      id: "ezee-restaurant-pos",
      title: "EZEE RESTAURANT POS",
      category: "HIGH-PERFORMANCE POS",
      year: "2024",
      teamNote: "Solo Systems Developer",
      repo: "https://github.com/Ma7moud-Eltantawy",
      tags: ["Flutter", "Direct SQL Server", "Local Sockets", "Sub-10ms Queries"],
      stack: ["Flutter", "SQL Server Direct", "TCP Sockets", "Thermal Printing", "POS Realtime"],
      about: [
        "High-performance restaurant point-of-sale system connected directly to local SQL Server databases over raw local socket protocols.",
        "Problem: High-concurrency order bursts during peak hours caused HTTP REST bottlenecks, delaying ticket delivery between tables, kitchen, and cashier.",
        "Solution: Bypassed HTTP proxies for local floor operations, executing optimized parameterized queries directly over local TCP sockets.",
        "Impact: Eliminated order dispatch latency, achieving sub-10ms response times and real-time floor synchronization.",
      ],
      image: "proj_ezee_pos.jpg",
      imageDetail: "proj_ezee_pos.jpg",
    },
    {
      id: "ezee-hr",
      title: "EZEE HR & QR SECURITY",
      category: "ENTERPRISE IDENTITY & RBAC",
      year: "2025",
      teamNote: "Lead Developer",
      repo: "https://github.com/Ma7moud-Eltantawy",
      tags: ["Flutter", "QR Cryptography", "Role-Based Access (RBAC)", "Clean Architecture"],
      stack: ["Flutter", "QR Cryptography", "Encrypted Storage", "REST APIs", "Clean Architecture"],
      about: [
        "Enterprise human resources mobile system featuring cryptographic QR attendance verification, permission gating, and employee leave request workflows.",
        "Problem: Manual attendance records were vulnerable to spoofing, and employee self-service lacked structured approval hierarchies.",
        "Solution: Engineered encrypted time-bound QR payloads for physical check-in validation, stored session tokens in secure keystores, and applied dynamic RBAC UI gating.",
        "Impact: Prevented attendance fraud and streamlined leave approval cycles across distributed enterprise teams.",
      ],
      image: "proj_ezee_hr.jpg",
      imageDetail: "proj_ezee_hr.jpg",
    },
    {
      id: "alfakhra",
      title: "ALFAKHRA FASHION APP",
      category: "MIGRATION & MODULAR REFACTOR",
      year: "2024",
      teamNote: "Migration Lead",
      repo: "https://github.com/Ma7moud-Eltantawy",
      tags: ["Flutter", "Native Migration", "Tailoring Logic", "Performance Optimization"],
      stack: ["Flutter", "Dart", "Native Code Migration", "Modular Architecture"],
      about: [
        "Consolidated legacy native iOS and Android applications into a unified, high-performance Flutter codebase for a premier Saudi tailoring brand.",
        "Problem: Maintaining dual native codebases slowed down feature parity and caused custom tailoring measurement calculation inconsistencies.",
        "Solution: Unified both platforms into independent domain modules, isolating business calculation geometry from UI rendering.",
        "Impact: Reduced ongoing maintenance costs by 50% while delivering consistent 60fps UI performance across all devices.",
      ],
      image: "proj_alfakhra.jpg",
      imageDetail: "proj_alfakhra.jpg",
    },
    {
      id: "taqeem-qa",
      title: "TAQEEM API CONTRACT QA",
      category: "API TESTING & RELIABILITY",
      year: "2024",
      teamNote: "API Quality & Security Tester",
      repo: "https://github.com/Ma7moud-Eltantawy",
      tags: ["Postman", "OpenAPI / Swagger", "Contract Testing", "Multi-Tenant QA"],
      stack: ["Postman", "Swagger / OpenAPI", "Contract Testing", "API Security Validation"],
      about: [
        "Designed comprehensive Postman automated test suites and OpenAPI schema validation collections for the Taqeem distributed platform.",
        "Problem: Microservices required rigorous contract validation to prevent regressions and tenant data leaks during fast-paced API updates.",
        "Solution: Built automated test suites validating payload schemas, authorization boundaries, rate limiting headers, and multi-tenant data isolation.",
        "Impact: Ensured 100% adherence to OpenAPI specifications and prevented security boundary regressions.",
      ],
      image: "proj_taqeem_qa.jpg",
      imageDetail: "proj_taqeem_qa.jpg",
    },
  ],
};
