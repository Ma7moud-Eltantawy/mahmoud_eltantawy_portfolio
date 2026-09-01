import React, { useState, useEffect } from 'react';
import { Smartphone, Cpu, Network, ShieldCheck, Database, Play, RotateCcw, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

export default function IntroSequence({ lang }) {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const t = translations[lang].intro;

  const steps = [
    {
      id: "mobile",
      title: lang === 'en' ? "01. Flutter UI & Client App" : "01. تطبيق الهاتف وشاشات الفلاتر",
      desc: lang === 'en' ? "Pixel-perfect mobile interfaces built with Flutter & Dart, integrated with NearPay NFC & local SQLite sync." : "واجهات فلاتر عالية الاستجابة مع دعم الدفع اللاتلامسي NFC والمزامنة المحلية.",
      icon: Smartphone,
      color: "#0071E3"
    },
    {
      id: "arch",
      title: lang === 'en' ? "02. Clean Architecture & Patterns" : "02. معمارية الأنظمة وأنماط التصميم",
      desc: lang === 'en' ? "Decoupled Presentation, Domain use-cases, and Data Repositories using SOLID & Adapter patterns." : "فصل الواجهات وقواعد العمل ومصادر البيانات باستخدام قواعد SOLID والمحول.",
      icon: Cpu,
      color: "#6E44FF"
    },
    {
      id: "gateway",
      title: lang === 'en' ? "03. Apache APISIX Gateway" : "03. بوابة واجهات البرمجة Apache APISIX",
      desc: lang === 'en' ? "Dynamic proxy routing, URI rewriting, rate limiting, and CORS header enforcement." : "توجيه الوكلاء، إعادة كتابة المسارات، وتحديد معدل الطلبات وحماية الترويسات.",
      icon: Network,
      color: "#10B981"
    },
    {
      id: "auth",
      title: lang === 'en' ? "04. Keycloak JWT Identity" : "04. توثيق الهويات بـ Keycloak & JWT",
      desc: lang === 'en' ? "Centralized identity provider, token introspection, and X-Consumer identity header injection." : "خادم الهويات المركزي، فحص تاريخ الصلاحيات وحقن هوية المستهلك.",
      icon: ShieldCheck,
      color: "#10B981"
    },
    {
      id: "services",
      title: lang === 'en' ? "05. Microservices & Enterprise SQL" : "05. الخدمات المصغرة وقواعد البيانات",
      desc: lang === 'en' ? "Scalable backend microservice engines, direct SQL Server connections, and Firebase realtime sync." : "محركات الخلفية المصغرة، قواعد بيانات SQL Server، والمزامنة اللحظية.",
      icon: Database,
      color: "#0071E3"
    }
  ];

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
      }, 3500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Subtle Lines */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
            {t.badge}
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
            {t.title}
          </h2>
          <p className="text-slate-400 text-base md:text-lg leading-relaxed">
            {t.desc}
          </p>
        </div>

        {/* Cinematic Pipeline Visualization */}
        <div className="bg-slate-950/80 rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl backdrop-blur-xl">
          
          {/* Controls Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-10">
            <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span>SYSTEM PIPELINE: ACTIVE STEP [{activeStep + 1}/5]</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition-colors"
              >
                {isPlaying ? (
                  <><span>Pause Animation</span></>
                ) : (
                  <><Play className="w-3.5 h-3.5 text-blue-400" /><span>Play</span></>
                )}
              </button>
              
              <button
                onClick={() => setActiveStep(0)}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                title="Restart Sequence"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={step.id}
                  onClick={() => {
                    setActiveStep(idx);
                    setIsPlaying(false);
                  }}
                  className={`p-4 rounded-2xl border text-left rtl:text-right transition-all duration-300 relative flex flex-col justify-between h-36 ${
                    isActive
                      ? "bg-slate-800/90 border-blue-500/50 shadow-lg shadow-blue-500/10 scale-105"
                      : "bg-slate-900/50 border-slate-800/60 hover:bg-slate-800/40 text-slate-400"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                      style={{
                        backgroundColor: isActive ? step.color : "rgba(255,255,255,0.05)",
                        color: "#fff"
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-bold">0{idx + 1}</span>
                  </div>

                  <div>
                    <h3 className={`text-xs font-extrabold line-clamp-1 ${isActive ? "text-white" : "text-slate-300"}`}>
                      {step.title}
                    </h3>
                  </div>

                  {/* Active Progress Bar */}
                  {isActive && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl overflow-hidden bg-slate-800">
                      <div
                        className="h-full transition-all duration-300"
                        style={{ backgroundColor: step.color, width: "100%" }}
                      />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Detailed Active Step Presentation */}
          <div className="bg-slate-900/80 rounded-2xl border border-slate-800 p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Step Content */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: steps[activeStep].color }}
                />
                <span className="font-mono text-xs text-slate-400 font-semibold tracking-wider uppercase">
                  CURRENT ARCHITECTURE NODE
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-black text-white">
                {steps[activeStep].title}
              </h3>

              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="flex items-center gap-2 mt-4 text-xs font-mono text-slate-400">
                <span className="text-blue-400">Protocol:</span> HTTPS / REST / WebSockets
                <span className="mx-2 text-slate-700">|</span>
                <span className="text-amber-400">Target:</span> Production Gateway
              </div>
            </div>

            {/* Step Visual Dynamic Graph */}
            <div className="lg:col-span-5 flex items-center justify-center p-6 bg-slate-950 rounded-xl border border-slate-800">
              <div className="relative w-full h-48 flex items-center justify-center">
                
                {/* SVG Connecting Flow Canvas */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 150">
                  <path
                    d="M 30 75 Q 150 20 270 75"
                    fill="none"
                    stroke={steps[activeStep].color}
                    strokeWidth="3"
                    className="animate-flow-line"
                    opacity="0.8"
                  />
                  <circle cx="30" cy="75" r="8" fill={steps[activeStep].color} />
                  <circle cx="150" cy="47" r="10" fill="#fff" opacity="0.9" />
                  <circle cx="270" cy="75" r="8" fill={steps[activeStep].color} />
                </svg>

                <div className="relative z-10 flex flex-col items-center gap-2 text-center">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-xl transition-all duration-500 scale-110"
                    style={{ backgroundColor: steps[activeStep].color }}
                  >
                    {React.createElement(steps[activeStep].icon, { className: "w-8 h-8 text-white" })}
                  </div>
                  <span className="font-mono text-xs font-bold text-white bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700 mt-2">
                    NODE_ACTIVE :: {steps[activeStep].id.toUpperCase()}
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
