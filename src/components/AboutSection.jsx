import React from 'react';
import { Smartphone, Cpu, Network, ShieldCheck, Sparkles, Layers, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

export default function AboutSection({ lang }) {
  const t = translations[lang].aboutSection;

  return (
    <section className="py-24 bg-[#FBFBFD] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-4xl relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                {t.badge}
              </span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black leading-tight mb-8 text-white tracking-tight">
              {t.title}
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6 font-medium">
              {t.desc}
            </p>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-10 font-medium">
              {t.subdesc}
            </p>

            {/* Progression Steps */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-slate-800">
              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <Smartphone className="w-6 h-6 text-blue-400 mb-3" />
                  <h4 className="text-sm font-extrabold text-white">1. Software Development</h4>
                  <p className="text-xs text-slate-400 mt-1 font-mono">Flutter, Dart & Reactive UI</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <Cpu className="w-6 h-6 text-purple-400 mb-3" />
                  <h4 className="text-sm font-extrabold text-white">2. Application Architecture</h4>
                  <p className="text-xs text-slate-400 mt-1 font-mono">Clean Arch, SOLID & Patterns</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <Network className="w-6 h-6 text-amber-400 mb-3" />
                  <h4 className="text-sm font-extrabold text-white">3. API Management</h4>
                  <p className="text-xs text-slate-400 mt-1 font-mono">Apache APISIX & Keycloak IAM</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
                <div>
                  <ShieldCheck className="w-6 h-6 text-emerald-400 mb-3" />
                  <h4 className="text-sm font-extrabold text-white">4. System Design</h4>
                  <p className="text-xs text-slate-400 mt-1 font-mono">Resilience & Failure Scenarios</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
