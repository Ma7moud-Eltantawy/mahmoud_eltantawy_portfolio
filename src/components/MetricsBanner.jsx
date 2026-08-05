import React from 'react';
import { translations } from '../data/translations';
import { resumeData } from '../data/resumeData';

export default function MetricsBanner({ lang }) {
  const t = translations[lang].metricsSection;
  const metrics = resumeData.metrics;

  return (
    <section className="py-20 bg-slate-950 text-white border-y border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-2">
            {t.badge}
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            {t.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div
              key={m.id}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center flex flex-col items-center justify-center hover:border-slate-700 transition-all hover:scale-105 shadow-xl"
            >
              <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 mb-3 tracking-tight">
                {m.value}
              </span>
              <span className="text-slate-300 text-xs sm:text-sm font-extrabold leading-snug">
                {m.label[lang]}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
