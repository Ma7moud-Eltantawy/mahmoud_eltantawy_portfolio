import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Cpu, Network, ShieldCheck, ArrowDown, ExternalLink, ChevronRight, CheckCircle2, MapPin } from 'lucide-react';
import { translations } from '../data/translations';
import { resumeData } from '../data/resumeData';
import { mahmoudPhoto } from '../assets/mahmoudBase64';

export default function Hero({ lang, onOpenResume }) {
  const t = translations[lang].hero;
  const info = resumeData.personalInfo;
  const [activeTab, setActiveTab] = useState('mobile');

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-between overflow-hidden bg-[#FBFBFD]">
      
      {/* Dynamic Animated Fluid Ambient Background Color Orbs */}
      <motion.div
        animate={{
          x: [0, 90, -70, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/35 via-cyan-400/25 to-blue-600/30 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 80, -50, 0],
          scale: [1, 1.25, 0.85, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="absolute top-1/3 right-10 w-[550px] h-[550px] bg-gradient-to-br from-purple-600/30 via-indigo-500/25 to-pink-500/20 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div
        animate={{
          x: [0, 70, -40, 0],
          y: [0, 50, -60, 0],
          scale: [1, 1.35, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut"
        }}
        className="absolute bottom-20 left-10 w-[450px] h-[450px] bg-gradient-to-r from-amber-500/25 via-orange-400/20 to-emerald-400/20 rounded-full blur-[110px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 my-auto">
        
        {/* Profile Card & Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0">
            <img
              src={mahmoudPhoto}
              alt="Mahmoud El-Tantawy"
              className="w-full h-full rounded-2xl object-cover border-2 border-white shadow-xl ring-4 ring-blue-500/20"
            />
            <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" />
          </div>

          <div className="flex flex-col gap-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1 rounded-full text-xs font-extrabold bg-slate-900 text-white shadow-sm tracking-wide uppercase">
                {info.name[lang]}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/60 shadow-xs">
                {info.title[lang]}
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{info.location[lang]}</span>
            </div>
          </div>
        </div>

        {/* Main Cinematic Statement */}
        <div className="max-w-4xl text-center md:text-left rtl:md:text-right">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 tracking-tight leading-[1.08] mb-8">
            <span className="block text-slate-900">{t.headlinePart1}</span>
            <span className="block text-blue-600 font-extrabold">{t.headlinePart2}</span>
            <span className="block text-slate-400">{t.headlinePart3}</span>
          </h1>

          <p className="text-slate-600 text-lg sm:text-xl font-medium max-w-2xl leading-relaxed mb-10">
            {t.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-16">
            <button
              onClick={() => scrollTo('mobile')}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm transition-all shadow-md shadow-blue-500/20 hover:scale-105"
            >
              <span>{t.ctaPrimary}</span>
              <ChevronRight className="w-4 h-4 rtl:rotate-180" />
            </button>

            <button
              onClick={() => scrollTo('architecture')}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white/90 backdrop-blur-md hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold text-sm transition-all shadow-sm hover:scale-105"
            >
              <span>{t.ctaSecondary}</span>
              <Cpu className="w-4 h-4 text-purple-600" />
            </button>

            <button
              onClick={onOpenResume}
              className="flex items-center gap-2 px-5 py-3.5 rounded-full bg-slate-100/80 backdrop-blur-md hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors border border-slate-200"
            >
              <span>CV Resume</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Interactive Floating System Composition (App -> Architecture -> Gateway) */}
        <div className="mt-6 p-6 md:p-10 rounded-3xl bg-white/85 backdrop-blur-2xl border border-slate-200/80 shadow-2xl">
          
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
            <div>
              <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider block mb-1">
                SYSTEM INTEGRATION CANVAS
              </span>
              <h3 className="text-xl font-black text-slate-900">
                {lang === 'en' ? "End-to-End Infrastructure Story" : "قصة المنظومة البرمجية متكاملة"}
              </h3>
            </div>

            {/* Pillar Selector Tabs */}
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl">
              <button
                onClick={() => setActiveTab('mobile')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'mobile' ? 'bg-white text-blue-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                <span>01. Mobile App</span>
              </button>

              <button
                onClick={() => setActiveTab('arch')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'arch' ? 'bg-white text-purple-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Cpu className="w-4 h-4" />
                <span>02. Architecture</span>
              </button>

              <button
                onClick={() => setActiveTab('gateway')}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === 'gateway' ? 'bg-white text-amber-600 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Network className="w-4 h-4" />
                <span>03. API Gateway</span>
              </button>
            </div>
          </div>

          {/* Visual System Flow Diagrams */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[300px]">
            
            {/* Left Diagram Text */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              {activeTab === 'mobile' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 w-fit">
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>FLUTTER / DART / NATIVE</span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">
                    {lang === 'en' ? "Production Flutter Client" : "تطبيقات الهواتف الذكية"}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {lang === 'en'
                      ? "Responsive Flutter mobile client supporting offline SQLite local database, NearPay NFC payments, BLoC/Provider state management, and real-time WebSockets."
                      : "تطبيقات فلاتر سلسة تدعم التخزين المحلي SQLite، ودفع NearPay NFC، وإدارة الحالات BLoC و Provider والاتصال اللحظي."}
                  </p>
                  <ul className="flex flex-col gap-2 mt-2">
                    <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>Saaed Pay NFC & Digital Wallet</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      <span>Multi-Tenant ERP (Ezee Manager Pro)</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === 'arch' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-purple-50 text-purple-700 w-fit">
                    <Cpu className="w-3.5 h-3.5" />
                    <span>CLEAN ARCHITECTURE & SOLID</span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">
                    {lang === 'en' ? "Modular System Design" : "معمارية الأنظمة والتصميم البرمجي"}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {lang === 'en'
                      ? "Strict separation of concerns: Presentation layer, Use Cases domain logic, Repository interfaces, and Data Sources."
                      : "فصل تام بين واجهات التطبيق، وقواعد العمل، والأنماط الهيكلية لحفظ وإدارة البيانات."}
                  </p>
                  <ul className="flex flex-col gap-2 mt-2">
                    <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      <span>Adapter Pattern for Payment Gateways</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-purple-500" />
                      <span>Background Data Sync Queue Engine</span>
                    </li>
                  </ul>
                </>
              )}

              {activeTab === 'gateway' && (
                <>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 w-fit">
                    <Network className="w-3.5 h-3.5" />
                    <span>APACHE APISIX & KEYCLOAK</span>
                  </div>
                  <h4 className="text-2xl font-black text-slate-900">
                    {lang === 'en' ? "API Gateway & Security Layer" : "إدارة بوابة APIs والأمان"}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {lang === 'en'
                      ? "Apache APISIX managing dynamic routes, JWT identity verification via Keycloak, proxy rewrites, X-Consumer injection, and microservices security."
                      : "إدارة البوابة البرمجية عبر Apache APISIX، والتحقق من هوية JWT عبر Keycloak، وحماية جميع الخدمات المصغرة."}
                  </p>
                  <ul className="flex flex-col gap-2 mt-2">
                    <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" />
                      <span>Qiyasi Microservices API Gateway</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-amber-500" />
                      <span>Token Introspection & Header Rewrites</span>
                    </li>
                  </ul>
                </>
              )}
            </div>

            {/* Right Interactive Architecture Flow Box */}
            <div className="lg:col-span-7 bg-slate-900 text-white rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-inner">
              
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 border-b border-slate-800 pb-4 mb-6">
                <span>FLOW: CLIENT → APISIX → KEYCLOAK → SERVICE</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">STATUS: 200 OK</span>
              </div>

              {/* Node flow visual cards */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative z-10">
                
                {/* Mobile Client */}
                <div className={`p-4 rounded-xl border text-center transition-all ${
                  activeTab === 'mobile' ? 'bg-blue-600/20 border-blue-500 text-white shadow-lg' : 'bg-slate-800/60 border-slate-700/50 text-slate-400'
                }`}>
                  <Smartphone className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <span className="text-xs font-extrabold block">Flutter Client</span>
                  <span className="text-[10px] opacity-75 font-mono">Mobile App</span>
                </div>

                {/* Gateway APISIX */}
                <div className={`p-4 rounded-xl border text-center transition-all ${
                  activeTab === 'gateway' ? 'bg-amber-600/20 border-amber-500 text-white shadow-lg' : 'bg-slate-800/60 border-slate-700/50 text-slate-400'
                }`}>
                  <Network className="w-6 h-6 mx-auto mb-2 text-amber-400" />
                  <span className="text-xs font-extrabold block">Apache APISIX</span>
                  <span className="text-[10px] opacity-75 font-mono">API Gateway</span>
                </div>

                {/* Keycloak Auth */}
                <div className={`p-4 rounded-xl border text-center transition-all ${
                  activeTab === 'gateway' || activeTab === 'arch' ? 'bg-emerald-600/20 border-emerald-500 text-white shadow-lg' : 'bg-slate-800/60 border-slate-700/50 text-slate-400'
                }`}>
                  <ShieldCheck className="w-6 h-6 mx-auto mb-2 text-emerald-400" />
                  <span className="text-xs font-extrabold block">Keycloak IAM</span>
                  <span className="text-[10px] opacity-75 font-mono">JWT Auth</span>
                </div>

                {/* Backend Engine */}
                <div className={`p-4 rounded-xl border text-center transition-all ${
                  activeTab === 'arch' ? 'bg-purple-600/20 border-purple-500 text-white shadow-lg' : 'bg-slate-800/60 border-slate-700/50 text-slate-400'
                }`}>
                  <Cpu className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                  <span className="text-xs font-extrabold block">Microservices</span>
                  <span className="text-[10px] opacity-75 font-mono">SQL / Node Engine</span>
                </div>

              </div>

              {/* Code snippet mock */}
              <div className="mt-6 bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 overflow-x-auto">
                <div className="text-slate-500">// Real APISIX Route snippet sample</div>
                <div><span className="text-amber-400">POST</span> /api/v1/auth/token <span className="text-emerald-400 font-bold">200 OK</span></div>
                <div className="text-blue-400">X-Consumer-ID: <span className="text-white">"tenant_saudi_01"</span></div>
                <div className="text-purple-400">Keycloak-JWT: <span className="text-white">"Bearer eyJhbGciOi..."</span></div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Scroll Down Indicator */}
      <div className="flex justify-center mt-12">
        <button
          onClick={() => scrollTo('mobile')}
          className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-800 transition-colors group"
        >
          <span className="text-xs font-bold uppercase tracking-wider">{t.scrollHint}</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-blue-600" />
        </button>
      </div>

    </section>
  );
}
