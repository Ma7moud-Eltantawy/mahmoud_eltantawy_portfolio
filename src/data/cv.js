/* ============================================================
   CV CONTENT — single source of truth for the whole site.
   Everything here mirrors Mahmoud_Eltantawy.pdf.
   ============================================================ */

export const PROFILE = {
  name: "Mahmoud Eltantawy",
  firstName: "Mahmoud",
  headline: "Software Engineer",
  titles: ["Software Engineer", "Flutter Mobile Developer", "API Gateway Engineer", "System Integration & Design"],
  location: "Al Khobar, Eastern Province, Saudi Arabia",
  phone: "+966 57 582 0045",
  phoneHref: "tel:+966575820045",
  email: "mahmoudeltantawy2019@gmail.com",
  linkedin: "https://linkedin.com/in/mahmoud-eltantawy-7b26321b1",
  linkedinLabel: "linkedin.com/in/mahmoud-eltantawy-7b26321b1",
  github: "https://github.com/ma7moud-eltantawy",
  githubLabel: "github.com/ma7moud-eltantawy",
  portfolio: "https://ma7moud-eltantawy.github.io/mahmoud_eltantawy_portfolio/",
  cv: "Mahmoud_Eltantawy.pdf",
  photo: "imgs/profile.webp",
  current: { role: "Software Engineer", company: "Dolf Technologies" },
  languages: ["Arabic", "English"],
};

export const SUMMARY =
  "Flutter Developer and Software Engineer with nearly 3 years of professional experience building production mobile apps with Flutter and Dart, including multi-tenant ERP, restaurant POS, HR, and fintech payment apps published on Google Play. Experienced in Clean Architecture, BLoC/GetX state management, offline-first sync, REST API and WebSocket integration, and app releases with Shorebird, Fastlane, and GitHub Actions. Also works on API Gateway management with Apache APISIX and Keycloak (API routing, authentication and authorization, API security), and completed the University of Minnesota Software Development Lifecycle (SDLC) Specialization.";

export const STATS = [
  { value: 3, prefix: "~", suffix: " yrs", label: "Professional Flutter & software engineering experience" },
  { value: 4, suffix: "", label: "Production apps live on Google Play" },
  { value: 11, suffix: "", label: "Projects across ERP, POS, fintech, HR & gateways" },
  { value: 11, suffix: "", label: "Certifications, incl. a University of Minnesota specialization" },
];

export const PILLARS = [
  {
    key: "mobile",
    eyebrow: "Mobile",
    title: "Flutter apps, built for production.",
    body: "Multi-tenant ERP, restaurant POS, HR, and fintech payment apps, with Clean Architecture, BLoC/GetX, offline-first sync, and releases shipped through Shorebird, Fastlane, and GitHub Actions.",
    chips: ["Flutter", "Dart", "BLoC", "GetX", "Offline Sync", "WebSockets"],
  },
  {
    key: "gateway",
    eyebrow: "API Gateway",
    title: "Secure gateways for microservices.",
    body: "API routing, request/response transformation, and gateway-level security with Apache APISIX and Keycloak, from requirements and design through documentation.",
    chips: ["Apache APISIX", "Keycloak", "IAM", "Rate Limiting", "CORS", "OpenAPI"],
  },
];

export const SKILLS = [
  {
    key: "mobile",
    icon: "phone",
    title: "Mobile Development",
    wide: true,
    items: ["Flutter", "Dart", "Cross-Platform Development (Android, iOS)", "State Management (BLoC, GetX, Provider)", "Firebase", "Firebase Cloud Messaging", "Google Maps", "Localization (Arabic/English)", "Performance Optimization"],
  },
  {
    key: "gateway",
    icon: "gateway",
    title: "API Gateway & API Management",
    wide: true,
    items: ["Apache APISIX", "API Gateway", "Keycloak", "Identity and Access Management (IAM)", "API Routing", "Request/Response Transformation", "Authentication & Authorization", "API Security", "Rate Limiting", "CORS", "Load Balancing", "Observability & Logging"],
  },
  {
    key: "integration",
    icon: "link",
    title: "Integration",
    items: ["API Integration", "REST APIs (RESTful)", "Microservices Integration", "WebSockets", "Real-Time Communication", "Node.js", "Express.js"],
  },
  {
    key: "design",
    icon: "blueprint",
    title: "Software Engineering & Design",
    items: ["Software Development Lifecycle (SDLC)", "System Analysis", "System Design", "Requirements Analysis", "Architecture Diagrams", "Technical Documentation", "Clean Architecture", "SOLID Principles", "OOP", "Multi-Tenant Applications", "Agile", "Lean"],
  },
  {
    key: "qa",
    icon: "check",
    title: "Software Testing & QA",
    items: ["Software Testing", "API Testing", "Functional Testing", "Integration Testing", "Regression Testing", "Postman", "Swagger/OpenAPI", "Jira"],
  },
  {
    key: "db",
    icon: "database",
    title: "Databases",
    items: ["SQL Server", "SQL", "Supabase", "Firebase Realtime Database", "Cloud Firestore"],
  },
  {
    key: "devops",
    icon: "infinity",
    title: "DevOps & Tools",
    items: ["CI/CD", "GitHub Actions", "Fastlane", "Shorebird", "Git", "GitHub"],
  },
  {
    key: "other",
    icon: "spark",
    title: "Other",
    items: ["Java", "C++", "JavaScript", "Power BI", "DAX", "Data Modeling", "Business Analysis"],
  },
];

export const EXPERIENCE = [
  {
    role: "Software Engineer (API Gateway & Mobile)",
    company: "Dolf Technologies",
    location: "Saudi Arabia",
    start: "Feb 2026",
    end: "Present",
    current: true,
    tags: ["Apache APISIX", "Keycloak", "Swagger/OpenAPI", "SDLC"],
    bullets: [
      "Build and manage the API Gateway layer using Apache APISIX, configuring API routing, request/response transformation, and integration with backend services.",
      "Integrate authentication, authorization, and access control at the gateway level with Keycloak and enforce API security policies.",
      "Contribute to system analysis, requirements analysis, API design, and technical solution design across the software development lifecycle (SDLC).",
      "Prepare technical documentation, architecture diagrams, and API specifications using Swagger/OpenAPI.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "TebaLink",
    companyUrl: "https://tebalink.com/",
    location: "Giza, Egypt",
    start: "Feb 2024",
    end: "Jan 2026",
    tags: ["Flutter", "Clean Architecture", "BLoC/GetX", "Offline Sync", "REST APIs"],
    bullets: [
      "Developed and maintained cross-platform Flutter applications for accounting, ERP, and enterprise management systems.",
      "Delivered multi-tenant ERP features, including online/offline data synchronization, financial reports, invoice calculations, and PDF generation and printing.",
      "Implemented reusable UI components with Clean Architecture and BLoC/GetX state management, and integrated REST APIs.",
      "Restructured parts of the application flow for performance optimization and stability, and participated in requirements analysis, debugging, and testing.",
    ],
  },
  {
    role: "Flutter Developer",
    company: "Dar Alsaaed",
    companyUrl: "https://www.darsaaed.com/ar",
    location: "Riyadh, Saudi Arabia",
    start: "Dec 2023",
    end: "Jun 2024",
    tags: ["Flutter", "Fintech", "POS", "WebSockets", "Firebase"],
    bullets: [
      "Developed Flutter applications for digital payments, point of sale (POS), and commercial operations, including the native-to-Flutter migration of Saaed Pay.",
      "Built the Saaed POS order management module: retrieved products via RESTful APIs, sent orders over WebSockets for real-time updates, and generated invoices instantly on quantity changes.",
      "Integrated RESTful APIs and Firebase services and built responsive, user-friendly interfaces.",
      "Worked with business and technical teams to analyze requirements, resolve issues, and support software testing.",
    ],
  },
];

/* category: used by the segmented filter */
export const PROJECTS = [
  {
    id: "qiyasi",
    title: "Qiyasi",
    subtitle: "API Gateway & Microservices Integration",
    category: "gateway",
    image: "imgs/proj_qiyasi.webp",
    tech: ["Apache APISIX", "Keycloak", "Microservices", "Swagger/OpenAPI"],
    bullets: [
      "Contributed to the analysis, design, and implementation of the API Gateway layer for a microservices-based platform using Apache APISIX.",
      "Designed API routing strategies, request/response transformation, and service communication between the API Gateway and backend microservices.",
      "Implemented authentication, authorization, and access control with Keycloak and Apache APISIX, including gateway-level API security policies.",
      "Produced technical documentation, architecture diagrams, and API specifications using Swagger/OpenAPI.",
    ],
  },
  {
    id: "taqeem",
    title: "Taqeem",
    subtitle: "Software Testing & API Quality Assurance",
    role: "Software Tester",
    category: "qa",
    image: "imgs/proj_taqeem_qa.webp",
    tech: ["Postman", "Swagger/OpenAPI", "Jira"],
    bullets: [
      "Performed functional, integration, and API testing of RESTful APIs using Postman and Swagger/OpenAPI.",
      "Tested end-to-end payment workflows across different payment scenarios and transaction outcomes.",
      "Validated multi-tenant functionality, including tenant isolation, access control, and data segregation.",
      "Logged and tracked defects in Jira, performed regression testing, and worked with developers and business teams to verify fixes.",
    ],
  },
  {
    id: "ezee-erp",
    title: "Multi-Tenant ERP System",
    subtitle: "Ezee Manager Pro & Tebalink ERP",
    category: "mobile",
    image: "imgs/proj_ezee_erp.webp",
    tech: ["Flutter", "Dart", "Offline Sync", "PDF Generation"],
    link: { kind: "play", url: "https://play.google.com/store/apps/details?id=com.tebalink.ezee_click_reports" },
    bullets: [
      "Enhanced a Flutter multi-tenant ERP in which each business runs in an isolated environment with secure data separation, supporting online and offline operation with automatic synchronization.",
      "Built printing and PDF modules, added financial reports, updated invoice calculations, and refined UI/UX and workflows.",
    ],
  },
  {
    id: "saaed-pay",
    title: "Saaed Pay",
    subtitle: "Fintech Mobile Application",
    category: "mobile",
    image: "imgs/proj_saaed_pay.webp",
    tech: ["Flutter", "Dart", "NFC Payments", "NearPay"],
    link: { kind: "play", url: "https://play.google.com/store/apps/details?id=sa.saaedpay.app.google" },
    bullets: [
      "Contributed to migrating the company's payment application from native development to cross-platform Flutter.",
      "Worked on secure digital payments, NFC payments (NearPay integration), wallet management, bill payments, money transfers, and transaction history.",
      "Implemented Arabic and English localization.",
    ],
  },
  {
    id: "ezee-restaurant",
    title: "Ezee Restaurant",
    subtitle: "POS & Restaurant Management System",
    category: "mobile",
    image: "imgs/proj_ezee_pos.webp",
    tech: ["Flutter", "Dart", "SQL Server"],
    link: { kind: "play", url: "https://play.google.com/store/apps/details?id=com.tebalink.ezee_resturant&hl=en-US" },
    bullets: [
      "Built a local restaurant POS system from scratch in Flutter, connected directly to SQL Server without an API layer.",
      "Implemented order processing, billing, table management, and real-time synchronization between kitchen, cashier, and waiter sections.",
      "Added inventory management, receipt printing, data tracking, and offline operation.",
    ],
  },
  {
    id: "ezee-hr",
    title: "Ezee HR",
    subtitle: "Human Resources Management System",
    status: "Testing Phase",
    category: "mobile",
    image: "imgs/proj_ezee_hr.webp",
    tech: ["Flutter", "Dart", "RESTful APIs"],
    link: { kind: "github", url: "https://github.com/Ma7moud-Eltantawy/ezee_hr" },
    bullets: [
      "Built an HR mobile application from scratch in Flutter, using RESTful APIs for real-time data synchronization.",
      "Implemented QR code-based check-in/out, leave requests, attendance reports, employee records, and role-based access control.",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce Multi-Tenant Platform",
    subtitle: "White-label commerce apps",
    category: "mobile",
    image: "imgs/proj_ecommerce.webp",
    tech: ["Flutter", "Dart", "Payment Integration"],
    bullets: [
      "Built a Flutter multi-tenant e-commerce app in which each client receives a customized version publishable on Google Play, with a private dashboard for products, orders, payments, layout, and settings.",
      "Integrated secure payments, real-time notifications, smart search, and API syncing, with Arabic and English support.",
    ],
  },
  {
    id: "alfakhra",
    title: "ALFAKHRA",
    subtitle: "Native-to-Flutter migration",
    category: "mobile",
    image: "imgs/proj_alfakhra.webp",
    tech: ["Flutter", "Dart", "Migration"],
    link: { kind: "play", url: "https://play.google.com/store/apps/details?id=com.alfakhera.alfakhera" },
    bullets: ["First phase of a native-to-Flutter migration for a Saudi men's tailoring company app."],
  },
];

export const OTHER_PROJECTS = [
  {
    title: "Ezee Customer",
    status: "Development Phase",
    desc: "Flutter mobile portal giving client companies' end users real-time account statements and inventory.",
  },
  {
    title: "Illuminate",
    status: "Graduation Project",
    desc: "Flutter app with separate teacher (volunteer) and student versions to help illiterate adults learn reading and writing.",
    link: { kind: "github", url: "https://github.com/Ma7moud-Eltantawy/illuminate" },
  },
  {
    title: "Negozio Store",
    desc: "Flutter e-commerce app using Provider, Google Maps, Firebase Cloud Messaging, and the Alan AI voice assistant.",
    link: { kind: "github", url: "https://github.com/Ma7moud-Eltantawy/Negozio-store" },
  },
];

export const PROJECT_FILTERS = [
  { key: "all", label: "All" },
  { key: "mobile", label: "Mobile" },
  { key: "gateway", label: "API Gateway" },
  { key: "qa", label: "Testing & QA" },
];

export const SPECIALIZATION = {
  title: "Software Development Lifecycle (SDLC) Specialization",
  issuer: "University of Minnesota",
  platform: "Coursera",
  date: "Oct 2026",
  url: "https://www.coursera.org/account/accomplishments/specialization/6FNUY48NQSUY",
  courses: [
    { title: "Software Development Processes and Methodologies", url: "https://www.coursera.org/account/accomplishments/certificate/BNDEGYPNFCAA" },
    { title: "Agile Software Development", url: "https://www.coursera.org/account/accomplishments/certificate/LK8JXJ9EY7HA" },
    { title: "Lean Software Development", url: "https://www.coursera.org/account/accomplishments/certificate/RTXYW99GOBDD" },
    { title: "Engineering Practices for Building Quality Software", url: "https://www.coursera.org/account/accomplishments/records/028M4DVP78GJ" },
  ],
};

export const CERTIFICATIONS = [
  { title: "API Gateway Getting Started", issuer: "AWS Training & Certification", date: "Aug 2026", mark: "AWS", tone: "orange", url: "https://drive.google.com/file/d/1qsq-gitqQIje4glt2hQfHWQD3onMBW-k/view?usp=sharing" },
  { title: "Foundations of Project Management", issuer: "Google, Coursera", date: "Aug 2023", mark: "G", tone: "blue", url: "https://www.coursera.org/account/accomplishments/verify/AW2G88RPWUBG" },
  { title: "Flutter Clean Architecture (In Arabic)", issuer: "Udemy", date: "May 2023", mark: "U", tone: "purple", url: "https://www.udemy.com/certificate/UC-2076ada3-2d25-4dc6-a7f1-655e31e33805/" },
  { title: "The Complete 2022 Flutter & Dart Development Course [Arabic]", issuer: "Udemy", date: "Jul 2022", mark: "U", tone: "purple", url: "https://www.udemy.com/certificate/UC-b6fa0c24-4166-4664-a9ba-f9aff3dc830d/" },
  { title: "The Complete Node.js Course (RESTful Web Services with Node.js, Express, and MongoDB)", issuer: "Maharatech", mark: "M", tone: "green" },
  { title: "Introduction to Flutter Development Using Dart", issuer: "The App Brewery", date: "Aug 2020", mark: "AB", tone: "pink", url: "https://drive.google.com/file/d/1_YxLbZWNSWaBFBSzoT7zFmPmth4G8Kq6/view?usp=sharing" },
];

export const EDUCATION = {
  degree: "Bachelor of Computer Science",
  grade: "Very Good",
  school: "Misr Higher Institute for Engineering and Technology (MET)",
  location: "Mansoura, Egypt",
  years: "2018 – 2022",
};

export const NAV = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
