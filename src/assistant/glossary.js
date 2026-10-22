/* ============================================================
   GLOSSARY · plain-language definitions of the technologies in
   the portfolio, for "what is …?" questions. Definitions are
   general knowledge; how Mahmoud used each one comes from cv.js
   (the engine finds the projects whose tech or bullets mention
   `uses`). Add an entry here and the assistant can explain it.
   ============================================================ */

export const GLOSSARY = {
  flutter: {
    names: ["flutter", "فلاتر", "فلتر"],
    uses: "Flutter",
    en: "Flutter is Google's open-source UI toolkit for building Android, iOS, web, and desktop apps from a single Dart codebase.",
    ar: "Flutter هي أداة مفتوحة المصدر من Google لبناء تطبيقات Android و iOS والويب وسطح المكتب من كود واحد مكتوب بلغة Dart.",
  },
  dart: {
    names: ["dart", "دارت"],
    uses: "Dart",
    en: "Dart is a typed programming language from Google, best known as the language Flutter apps are written in.",
    ar: "Dart لغة برمجة من Google تعتمد على الأنواع، وهي اللغة التي تُكتب بها تطبيقات Flutter.",
  },
  apisix: {
    names: ["apache apisix", "apisix", "ابيسكس", "اباتشي ابيسكس"],
    uses: "Apache APISIX",
    en: "Apache APISIX is an open-source, high-performance API gateway. It sits in front of backend services and handles routing, authentication, rate limiting, and traffic control.",
    ar: "Apache APISIX بوابة API مفتوحة المصدر وعالية الأداء، تقف أمام الخدمات الخلفية وتتولى توجيه الطلبات والمصادقة وتحديد معدل الطلبات والتحكم في الحركة.",
  },
  gateway: {
    names: ["api gateway", "gateway", "بوابه api", "بوابات api", "ال api gateway"],
    uses: "API Gateway",
    en: "An API gateway is a single entry point in front of a system's services. It routes each request to the right service, enforces security and rate limits, and can transform requests and responses.",
    ar: "بوابة الـ API نقطة دخول واحدة أمام خدمات النظام، توجّه كل طلب للخدمة المناسبة، وتطبّق سياسات الأمان وحدود الطلبات، ويمكنها تعديل الطلبات والردود.",
  },
  keycloak: {
    names: ["keycloak", "كي كلوك", "كيكلوك"],
    uses: "Keycloak",
    en: "Keycloak is an open-source identity and access management server: single sign-on, OAuth 2.0 and OpenID Connect, plus users, roles, and permissions.",
    ar: "Keycloak خادم مفتوح المصدر لإدارة الهوية والصلاحيات: تسجيل دخول موحّد، و OAuth 2.0 و OpenID Connect، وإدارة المستخدمين والأدوار والصلاحيات.",
  },
  iam: {
    names: ["iam", "identity and access management", "اداره الهويه"],
    uses: "Keycloak",
    en: "IAM (Identity and Access Management) is how a system knows who a user is (authentication) and what they're allowed to do (authorization).",
    ar: "IAM أو إدارة الهوية والصلاحيات هي الطريقة التي يعرف بها النظام هوية المستخدم (المصادقة) وما المسموح له بفعله (التفويض).",
  },
  multitenant: {
    names: ["multi tenant", "multitenant", "multi tenancy", "tenant", "متعدد المستاجرين", "تعدد المستاجرين"],
    uses: "multi-tenant",
    en: "A multi-tenant app serves many customers (tenants) from one codebase and platform while keeping each tenant's data and settings isolated.",
    ar: "التطبيق متعدد المستأجرين يخدم عملاء كثيرين من كود ومنصة واحدة، مع عزل بيانات وإعدادات كل عميل عن الآخرين.",
  },
  clean: {
    names: ["clean architecture", "كلين اركيتكتشر", "المعماريه النظيفه"],
    uses: "Clean Architecture",
    en: "Clean Architecture splits an app into layers (domain, data, presentation) so business logic doesn't depend on the UI, frameworks, or databases, which keeps code testable and easy to change.",
    ar: "المعمارية النظيفة (Clean Architecture) تقسم التطبيق لطبقات (المجال، والبيانات، والعرض) بحيث لا يعتمد منطق العمل على الواجهة أو الإطارات أو قواعد البيانات، فيسهل اختباره وتعديله.",
  },
  bloc: {
    names: ["bloc", "cubit", "بلوك"],
    uses: "BLoC",
    en: "BLoC is a Flutter state-management pattern: the UI sends events, the BLoC turns them into new states, and the UI rebuilds. It keeps logic separate from widgets.",
    ar: "BLoC نمط لإدارة الحالة في Flutter: الواجهة ترسل أحداثًا، والـ BLoC يحوّلها لحالات جديدة، فتُعاد رسم الواجهة. وهو يفصل المنطق عن عناصر الواجهة.",
  },
  getx: {
    names: ["getx", "جيت اكس"],
    uses: "GetX",
    en: "GetX is a lightweight Flutter library for state management, navigation, and dependency injection.",
    ar: "GetX مكتبة خفيفة في Flutter لإدارة الحالة والتنقل بين الشاشات وحقن الاعتماديات.",
  },
  offline: {
    names: ["offline first", "offline sync", "offline", "اوفلاين", "بدون انترنت", "مزامنه"],
    uses: "offline",
    en: "An offline-first app keeps working without a connection: it saves changes on the device and syncs them with the server once it's back online.",
    ar: "التطبيق الذي يعمل دون اتصال (Offline-first) يواصل العمل بلا إنترنت: يحفظ التغييرات على الجهاز ثم يزامنها مع الخادم عند عودة الاتصال.",
  },
  websockets: {
    names: ["websockets", "websocket", "web sockets", "ويب سوكيت"],
    uses: "WebSockets",
    en: "WebSockets keep a two-way connection open between app and server, so the server can push updates instantly instead of the app asking repeatedly.",
    ar: "الـ WebSockets تُبقي اتصالًا مفتوحًا في الاتجاهين بين التطبيق والخادم، فيرسل الخادم التحديثات فورًا بدلًا من أن يسأل التطبيق مرارًا.",
  },
  microservices: {
    names: ["microservices", "microservice", "مايكرو سيرفس", "الخدمات المصغره"],
    uses: "Microservices",
    en: "Microservices split a system into small, independent services that each own one job and talk to each other over APIs, often behind an API gateway.",
    ar: "الخدمات المصغّرة (Microservices) تقسم النظام لخدمات صغيرة ومستقلة، لكل منها مهمة واحدة، وتتواصل عبر واجهات API، وغالبًا خلف بوابة API.",
  },
  openapi: {
    names: ["swagger", "openapi", "open api", "سواجر"],
    uses: "Swagger/OpenAPI",
    en: "OpenAPI (often called Swagger) is a standard way to describe an API: its endpoints, inputs, and responses, so teams can document, test, and generate code from it.",
    ar: "OpenAPI (ويُعرف غالبًا باسم Swagger) طريقة قياسية لوصف واجهة الـ API: مساراتها ومدخلاتها وردودها، لتوثيقها واختبارها وتوليد الكود منها.",
  },
  rest: {
    names: ["rest api", "restful", "rest", "ريست"],
    uses: "REST",
    en: "A REST API exposes data over HTTP using standard verbs like GET, POST, PUT, and DELETE on resource URLs. It's the most common way apps talk to servers.",
    ar: "واجهة REST API تتيح البيانات عبر HTTP باستخدام أوامر قياسية مثل GET و POST و PUT و DELETE على روابط الموارد، وهي أشهر طريقة لتواصل التطبيقات مع الخوادم.",
  },
  shorebird: {
    names: ["shorebird", "شوربيرد"],
    uses: "Shorebird",
    en: "Shorebird lets Flutter teams push code fixes to apps that are already released (over the air), without waiting for a new store review.",
    ar: "Shorebird يتيح لفرق Flutter إرسال إصلاحات للتطبيقات المنشورة بالفعل عبر الهواء، دون انتظار مراجعة جديدة من المتجر.",
  },
  fastlane: {
    names: ["fastlane", "فاست لين"],
    uses: "Fastlane",
    en: "Fastlane automates the repetitive parts of shipping mobile apps: building, code signing, screenshots, and uploading to the stores.",
    ar: "Fastlane يؤتمت الخطوات المتكررة في نشر تطبيقات الموبايل: البناء، والتوقيع، ولقطات الشاشة، والرفع على المتاجر.",
  },
  cicd: {
    names: ["ci cd", "cicd", "ci/cd", "github actions", "continuous integration"],
    uses: "GitHub Actions",
    en: "CI/CD (continuous integration and delivery) automatically builds, tests, and ships code on every change. GitHub Actions is one popular way to run it.",
    ar: "الـ CI/CD (التكامل والتسليم المستمر) يبني الكود ويختبره وينشره تلقائيًا مع كل تغيير، و GitHub Actions من أشهر طرق تشغيله.",
  },
  sdlc: {
    names: ["sdlc", "software development lifecycle", "software development life cycle", "دوره حياه تطوير البرمجيات"],
    uses: "SDLC",
    en: "The SDLC (software development lifecycle) is the set of stages software goes through: requirements, design, implementation, testing, deployment, and maintenance.",
    ar: "دورة حياة تطوير البرمجيات (SDLC) هي المراحل التي تمر بها البرمجيات: تحليل المتطلبات، والتصميم، والتنفيذ، والاختبار، والنشر، والصيانة.",
  },
  nearpay: {
    names: ["nearpay", "softpos", "soft pos", "tap on phone", "nfc", "نير باي", "سوفت بوس"],
    uses: "NearPay",
    en: "NearPay provides SoftPOS: accepting contactless card payments on an NFC-enabled phone, with no separate card terminal.",
    ar: "NearPay تقدّم خدمة SoftPOS: قبول مدفوعات البطاقات اللاتلامسية على هاتف يدعم NFC، دون الحاجة لجهاز نقاط بيع منفصل.",
  },
  ratelimit: {
    names: ["rate limiting", "rate limit", "throttling", "تحديد معدل الطلبات"],
    uses: "Rate Limiting",
    en: "Rate limiting caps how many requests a client can make in a period, protecting services from overload and abuse. It's a common API gateway policy.",
    ar: "تحديد معدل الطلبات يضع حدًا لعدد الطلبات التي يرسلها العميل خلال فترة معينة، لحماية الخدمات من الضغط وإساءة الاستخدام، وهو سياسة شائعة في بوابات الـ API.",
  },
  firebase: {
    names: ["firebase", "فايربيس", "فايربيز"],
    uses: "Firebase",
    en: "Firebase is Google's app platform: authentication, databases (Firestore and Realtime Database), push notifications, analytics, and more, without running your own servers.",
    ar: "Firebase منصة تطبيقات من Google: تسجيل الدخول، وقواعد بيانات (Firestore و Realtime Database)، والإشعارات، والتحليلات، دون الحاجة لتشغيل خوادم خاصة.",
  },
  postman: {
    names: ["postman", "بوستمان"],
    uses: "Postman",
    en: "Postman is a tool for designing, sending, and automating API requests, widely used for API testing.",
    ar: "Postman أداة لتصميم طلبات الـ API وإرسالها وأتمتتها، وتُستخدم على نطاق واسع في اختبار الـ API.",
  },
};
