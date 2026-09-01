import React, { useState } from 'react';
import { Network, ShieldCheck, Check, Play, RefreshCw, Key, Layers, ArrowRight, Lock } from 'lucide-react';
import { translations } from '../data/translations';

export default function ApiGateway({ lang }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const [requestLogs, setRequestLogs] = useState([]);
  const t = translations[lang].gatewaySection;

  const simulationSteps = [
    {
      step: 1,
      title: lang === 'en' ? 'Client Request Dispatched' : 'إرسال الطلب من تطبيق العميل',
      details: 'POST /api/v1/qiyasi/reports with Bearer JWT Token',
      icon: Network,
      color: '#0071E3'
    },
    {
      step: 2,
      title: lang === 'en' ? 'APISIX Route & CORS Policy' : 'استقبال APISIX والتحقق من CORS ومعدل الطلب',
      details: 'Matches APISIX Route ID #1042. CORS & Rate-limit verified.',
      icon: Layers,
      color: '#06B6D4'
    },
    {
      step: 3,
      title: lang === 'en' ? 'Keycloak Token Introspection' : 'التحقق من الهوية والصلاحية عبر Keycloak IAM',
      details: 'Validates JWT signature, claims, and realm expiration via Keycloak.',
      icon: ShieldCheck,
      color: '#10B981'
    },
    {
      step: 4,
      title: lang === 'en' ? 'Header Rewrite & X-Consumer' : 'إعادة كتابة المسار وحقن ترويسة X-Consumer',
      details: 'Injects X-Consumer: "tenant_saudi_01". Path rewritten to /v1/engine/reports.',
      icon: Key,
      color: '#6E44FF'
    },
    {
      step: 5,
      title: lang === 'en' ? 'Backend Service Response' : 'استجابة الخدمة المصغرة برمز 200 OK',
      details: 'Microservice receives authenticated request. Payload returned in 14ms.',
      icon: Check,
      color: '#10B981'
    }
  ];

  const runSimulation = () => {
    setIsSimulating(true);
    setActiveStep(0);
    setRequestLogs(['[APISIX Tracer] Initializing HTTPS Connection via Gateway Entrypoint...']);

    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      if (current < simulationSteps.length) {
        setActiveStep(current);
        setRequestLogs((prev) => [
          ...prev,
          `[Step ${current + 1}] ${simulationSteps[current].details}`
        ]);
      } else {
        clearInterval(interval);
        setIsSimulating(false);
        setRequestLogs((prev) => [...prev, '[APISIX Tracer] Request Complete. Status: 200 OK (Round-trip: 14ms)']);
      }
    }, 1200);
  };

  return (
    <section id="apigateway" className="py-24 bg-gradient-to-b from-[#F5F5F7] via-[#FBFBFD] to-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-amber-50 text-amber-700 border border-amber-200/60 mb-4">
            <Network className="w-3.5 h-3.5" />
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive APISIX Gateway Simulator Container */}
        <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl">
          
          {/* Simulator Top Action Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-6 mb-10">
            <div>
              <span className="font-mono text-xs text-amber-400 font-bold block mb-1 uppercase tracking-wider">
                APACHE APISIX GATEWAY TRAFFIC SIMULATOR
              </span>
              <h3 className="text-xl font-black text-white">
                {t.interactiveTitle}
              </h3>
            </div>

            <button
              onClick={runSimulation}
              disabled={isSimulating}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs transition-all shadow-md ${
                isSimulating
                  ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                  : "bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-amber-500/20 hover:scale-105"
              }`}
            >
              {isSimulating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-amber-400" />
                  <span>Tracer Running...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>{t.triggerRequest}</span>
                </>
              )}
            </button>
          </div>

          {/* Stepper Pipeline Flow */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-10">
            {simulationSteps.map((s, idx) => {
              const Icon = s.icon;
              const isCurrent = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={s.step}
                  className={`p-4 rounded-2xl border transition-all ${
                    isCurrent
                      ? "bg-slate-800 border-amber-500 scale-105 shadow-lg shadow-amber-500/10"
                      : isPast
                      ? "bg-slate-900/90 border-emerald-500/50 text-emerald-300"
                      : "bg-slate-950 border-slate-800 text-slate-500"
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs"
                      style={{
                        backgroundColor: isCurrent ? s.color : isPast ? '#10B981' : 'rgba(255,255,255,0.05)',
                        color: '#fff'
                      }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-mono text-[10px] font-bold opacity-75">STEP 0{s.step}</span>
                  </div>

                  <h4 className={`text-xs font-black mb-1 line-clamp-1 ${isCurrent ? 'text-white' : 'text-slate-300'}`}>
                    {s.title}
                  </h4>
                </div>
              );
            })}
          </div>

          {/* Console Output & Route Metadata */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Real-time Trace Log Box */}
            <div className="lg:col-span-7 bg-slate-950 p-6 rounded-2xl border border-slate-800 font-mono text-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-slate-500 border-b border-slate-800 pb-3 mb-4">
                  <span>LIVE LOG TERMINAL</span>
                  <span className="text-amber-400">APISIX_GATEWAY_V3.8</span>
                </div>

                <div className="space-y-2 text-slate-300">
                  {requestLogs.map((log, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">&gt;</span>
                      <span className="leading-relaxed">{log}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span>GATEWAY OVERHEAD: <strong className="text-emerald-400">&lt; 2ms</strong></span>
                <span>SECURITY: <strong className="text-blue-400">KEYCLOAK JWT VALIDATED</strong></span>
              </div>
            </div>

            {/* APISIX Features Grid */}
            <div className="lg:col-span-5 flex flex-col justify-between gap-3">
              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-extrabold text-white">Centralized Keycloak IAM Introspection</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Offloaded auth signature validation from microservices directly to gateway plugins.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                <Key className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-extrabold text-white">X-Consumer & Tenant Identity Injection</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Automatic tenant isolation header injection at gateway entry before proxying upstream.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/60 border border-slate-700/60 flex items-start gap-3">
                <Layers className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-extrabold text-white">Proxy Route Rewriting & Contract Decoupling</h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Decoupled public semantic API endpoints from internal service URLs via proxy rewrite rules.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
