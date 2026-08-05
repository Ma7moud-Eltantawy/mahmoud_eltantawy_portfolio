import React, { useState } from 'react';
import { Cpu, Smartphone, Network, ShieldCheck, Database, Layers, ArrowRight, CheckCircle, Info, RefreshCw } from 'lucide-react';
import { translations } from '../data/translations';

export default function Architecture({ lang }) {
  const [selectedNode, setSelectedNode] = useState('presentation');
  const t = translations[lang].archSection;

  const nodes = [
    {
      id: 'presentation',
      title: lang === 'en' ? 'Presentation Layer' : 'طبقة الواجهات (Presentation)',
      subtitle: 'Flutter UI & State Management',
      icon: Smartphone,
      color: '#0071E3',
      pattern: 'BLoC / GetX / Provider',
      description: {
        en: 'Isolated UI components handling user interaction, rendering pixel-perfect screens, and consuming reactive streams from Cubits/BLoCs without exposing business rules.',
        ar: 'واجهات مستخدم معزولة تتعامل مع التفاعل وتدفق البيانات عبر BLoC أو Provider بدون تعريض قواعد العمل.'
      },
      details: [
        'Decoupled UI Widgets & Animations',
        'State Management (BLoC / GetX / Provider)',
        'Reactive Stream Builders',
        'Bilingual RTL / LTR Internationalization'
      ]
    },
    {
      id: 'domain',
      title: lang === 'en' ? 'Domain Layer' : 'طبقة قواعد العمل (Domain)',
      subtitle: 'Entities & Use Cases',
      icon: Cpu,
      color: '#6E44FF',
      pattern: 'SOLID & Strategy Pattern',
      description: {
        en: 'Pure Dart core containing Entities, Use Cases, and Repository Interfaces. Completely independent from third-party plugins or framework dependencies.',
        ar: 'نواة لغة Dart النقية التي تحتوي على قواعد العمل والحالات الكيانية بشكل مستقل تماماً عن إطار العمل.'
      },
      details: [
        'Pure Business Logic Use-Cases',
        'Repository Abstract Interfaces',
        'Strategy Pattern for Dynamic Workflows',
        'Dependency Inversion Principle'
      ]
    },
    {
      id: 'data',
      title: lang === 'en' ? 'Data Layer' : 'طبقة البيانات (Data)',
      subtitle: 'Repositories & Local DB',
      icon: Layers,
      color: '#FF6B00',
      pattern: 'Adapter Pattern & SQLite Sync',
      description: {
        en: 'Handles data persistence and network synchronization. Employs the Adapter Pattern for payment providers (NearPay) and background SQLite queues for offline operation.',
        ar: 'إدارة تخزين البيانات ومزامنة الشبكة. استخدام نمط المحول (Adapter Pattern) لبوابات الدفع وقواعد SQLite المحلية.'
      },
      details: [
        'Adapter Pattern for Payment Providers',
        'SQLite & Direct SQL Server Drivers',
        'Offline Queue & Sync Workers',
        'Encrypted Secure Storage'
      ]
    },
    {
      id: 'gateway',
      title: lang === 'en' ? 'Gateway Layer' : 'طبقة البوابة (APISIX Gateway)',
      subtitle: 'Apache APISIX & Proxy Rewrite',
      icon: Network,
      color: '#FF6B00',
      pattern: 'API Gateway & CORS',
      description: {
        en: 'Centralized API Gateway entry point. Manages dynamic URI routes, rate limits, CORS policy headers, and request packet transformation.',
        ar: 'نقطة الدخول المركزية لبوابة واجهات البرمجة. إدارة التوجيه، الترويسات، وحماية الخدمات المصغرة.'
      },
      details: [
        'Apache APISIX Dynamic Routing',
        'X-Consumer Identity Header Injection',
        'CORS & Rate Limiting Enforcement',
        'Swagger / OpenAPI Specification'
      ]
    },
    {
      id: 'services',
      title: lang === 'en' ? 'Identity & Services' : 'طبقة الهوية والخدمات (Keycloak & DB)',
      subtitle: 'Keycloak & Microservices',
      icon: ShieldCheck,
      color: '#10B981',
      pattern: 'OAuth2 / Keycloak JWT',
      description: {
        en: 'Centralized Keycloak IAM verifying token signature and scope authorization. Exposes REST microservices and direct enterprise SQL databases.',
        ar: 'خادم الهويات المركزي لـ Keycloak، للتحقق من صلاحيات الرموز وتغذية الخدمات المصغرة.'
      },
      details: [
        'Keycloak IAM Token Introspection',
        'Access & Refresh Token Lifecycle',
        'SQL Server Enterprise Databases',
        'Multi-Tenant Tenant Data Isolation'
      ]
    }
  ];

  const currentNode = nodes.find((n) => n.id === selectedNode) || nodes[0];

  return (
    <section id="architecture" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#6E44FF_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
            {t.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-medium leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="bg-slate-950/90 rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
          
          <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-10">
            <span className="font-mono text-xs text-purple-400 font-bold tracking-wider">
              SYSTEM NODE EXPLORER :: CLICK NODE TO INSPECT
            </span>
            <span className="text-xs text-slate-500 hidden sm:inline">
              {t.interactiveHint}
            </span>
          </div>

          {/* Node Navigation Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mb-12">
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              const isSelected = selectedNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setSelectedNode(node.id)}
                  className={`p-4 rounded-2xl border text-left rtl:text-right transition-all flex flex-col justify-between h-32 ${
                    isSelected
                      ? "bg-slate-800 border-purple-500 shadow-lg shadow-purple-500/10 scale-105"
                      : "bg-slate-900/60 border-slate-800 hover:bg-slate-800/50 text-slate-400"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{
                        backgroundColor: isSelected ? node.color : 'rgba(255,255,255,0.05)',
                        color: '#fff'
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className={`text-xs font-black line-clamp-1 ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                    {node.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Selected Node Details Container */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Description */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: currentNode.color }} />
                <span className="font-mono text-xs text-purple-400 font-bold">
                  PATTERN: {currentNode.pattern}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {currentNode.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {currentNode.description[lang]}
              </p>

              <div className="mt-4 pt-4 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-500 font-bold uppercase tracking-wider block mb-3">
                  ARCHITECTURE CONTRACT SPECIFICATIONS
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentNode.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Interactive Code / Diagram Visual */}
            <div className="lg:col-span-5 bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col gap-4 font-mono text-xs">
              <div className="flex items-center justify-between text-slate-400 border-b border-slate-800 pb-3">
                <span>LAYER_INSPECTOR.DART</span>
                <span className="text-purple-400">CLEAN_ARCH</span>
              </div>

              <div className="text-slate-300 space-y-2 leading-relaxed">
                <div className="text-slate-500">// Abstract Interface Contract</div>
                <div><span className="text-purple-400">abstract class</span> <span className="text-yellow-300">PaymentRepository</span> {'{'}</div>
                <div className="pl-4 text-blue-400">Future&lt;PaymentResult&gt; <span className="text-white">processTransaction</span>(TransactionReq req);</div>
                <div>{'}'}</div>
                
                <div className="text-slate-500 mt-3">// Adapter Pattern Implementation</div>
                <div><span className="text-purple-400">class</span> <span className="text-emerald-300">NearPayNfcAdapter</span> <span className="text-purple-400">implements</span> <span className="text-yellow-300">PaymentRepository</span> {'{'}</div>
                <div className="pl-4 text-slate-400">@override</div>
                <div className="pl-4 text-blue-400">Future&lt;PaymentResult&gt; <span className="text-white">processTransaction</span>(...) {'{'}</div>
                <div className="pl-8 text-emerald-400">return _nearPaySdk.tapToPay(amount);</div>
                <div className="pl-4">{'}'}</div>
                <div>{'}'}</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
