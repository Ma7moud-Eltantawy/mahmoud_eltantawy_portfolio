import React from 'react';
import { Smartphone, Cpu, Network, Sparkles } from 'lucide-react';

export default function AboutSection({ lang }) {
  return (
    <section className="py-24 bg-[#FBFBFD] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-4xl relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                THE EVOLUTION NARRATIVE
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black leading-tight mb-8 text-white tracking-tight">
              {lang === 'en'
                ? "From Crafting Mobile Screens to Architecting Enterprise Systems."
                : "من تصميم شاشات الهواتف الذكية إلى هندسة المنظومات السحابية."}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 font-medium">
              {lang === 'en'
                ? "Mahmoud's trajectory began as a Flutter developer building high-impact mobile applications like Saaed Pay and Multi-Tenant ERPs. Realizing that great client applications depend heavily on backend integrity and communication efficiency, he expanded into Clean Architecture, SOLID design patterns, and enterprise API Gateway management with Apache APISIX & Keycloak."
                : "بدأت رحلة محمود كمطور تطبيقات فلاتر يسعى لبناء تجارب استثنائية في تطبيقات مثل Saaed Pay وأنسجة ERP متعددة المستأجرين. ومع الإدراك بأن قوة التطبيقات تبدأ من ثبات وقوة الخلفية البرمجية، توسع محمود في هندسة البرمجيات النظيفة، وإدارة بوابات واجهات البرمجة Apache APISIX وKeycloak."}
            </p>

            {/* Progression Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <Smartphone className="w-6 h-6 text-blue-400 mb-3" />
                  <h4 className="text-sm font-extrabold text-white">1. Mobile Dev</h4>
                  <p className="text-xs text-slate-400 mt-1 font-mono">Flutter, Dart, NFC & SQLite</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <Cpu className="w-6 h-6 text-purple-400 mb-3" />
                  <h4 className="text-sm font-extrabold text-white">2. Architecture</h4>
                  <p className="text-xs text-slate-400 mt-1 font-mono">Clean Arch & Design Patterns</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <Network className="w-6 h-6 text-amber-400 mb-3" />
                  <h4 className="text-sm font-extrabold text-white">3. API Gateway</h4>
                  <p className="text-xs text-slate-400 mt-1 font-mono">Apache APISIX & Keycloak</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-emerald-400 font-black text-xl mb-2 block font-mono">04.</span>
                  <h4 className="text-sm font-extrabold text-white">System Thinking</h4>
                  <p className="text-xs text-slate-400 mt-1 font-mono">End-to-End Scalability</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
