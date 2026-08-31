import React from 'react';
import { Lightbulb, Layers, ShieldCheck, RefreshCw, Cpu, FileCheck2, Scale } from 'lucide-react';
import { translations } from '../data/translations';
import { resumeData } from '../data/resumeData';

export default function EngineeringMindset({ lang }) {
  const t = translations[lang].mindsetSection;
  const principles = resumeData.engineeringPrinciples;

  const getIcon = (tag) => {
    switch (tag) {
      case 'CLEAN_BOUNDARIES': return Layers;
      case 'ADAPTER_PATTERN': return Cpu;
      case 'API_GATEWAY': return ShieldCheck;
      case 'OFFLINE_FIRST': return RefreshCw;
      case 'PRAGMATIC_ENGINEERING': return Scale;
      case 'CONTRACT_DRIVEN': return FileCheck2;
      default: return Lightbulb;
    }
  };

  return (
    <section id="mindset" className="py-24 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            <Lightbulb className="w-3.5 h-3.5" />
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight mb-6">
            {t.title}
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-medium leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Featured Engineering Quote Box */}
        <div className="bg-gradient-to-r from-blue-900/40 via-slate-900 to-purple-900/30 rounded-3xl p-8 sm:p-12 border border-blue-500/30 shadow-2xl mb-14 backdrop-blur-xl">
          <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-100 leading-relaxed italic">
            {t.quote}
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs font-mono text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span>CORE ENGINEERING PHILOSOPHY</span>
          </div>
        </div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => {
            const Icon = getIcon(item.tag);
            return (
              <div
                key={item.id}
                className="bg-slate-900/90 rounded-3xl p-7 border border-slate-800 hover:border-blue-500/40 transition-all flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-slate-500 font-bold">0{idx + 1}</span>
                  </div>

                  <h3 className="text-lg font-black text-white mb-3">
                    {item.title[lang]}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                    {item.desc[lang]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="text-blue-400 font-bold">TAG: {item.tag}</span>
                  <span>APPLIED PRINCIPLE</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
