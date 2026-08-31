import React, { useState } from 'react';
import { Smartphone, Cpu, Network, Database, Wrench, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { translations } from '../data/translations';
import { resumeData } from '../data/resumeData';

export default function TechEcosystem({ lang }) {
  const [activeCategory, setActiveCategory] = useState('systemDesign');
  const t = translations[lang].techSection;
  const techData = resumeData.techStack;

  const categories = [
    { id: 'systemDesign', label: t.domains.systemDesign, icon: Cpu, color: '#6E44FF' },
    { id: 'apiManagement', label: t.domains.apiManagement, icon: Network, color: '#FF6B00' },
    { id: 'softwareEngineering', label: t.domains.softwareEngineering, icon: Smartphone, color: '#0071E3' },
    { id: 'identitySecurity', label: t.domains.identitySecurity, icon: ShieldCheck, color: '#10B981' },
    { id: 'backendData', label: t.domains.backendData, icon: Database, color: '#3B82F6' },
    { id: 'devopsTooling', label: t.domains.devopsTooling, icon: Wrench, color: '#64748B' }
  ];

  const currentItems = techData[activeCategory] || techData.systemDesign;

  return (
    <section id="tech" className="py-24 bg-slate-900 text-white relative border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
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

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs font-bold transition-all border ${
                  isSelected
                    ? "bg-slate-800 text-white border-blue-500 shadow-lg scale-105"
                    : "bg-slate-950/60 text-slate-400 border-slate-800 hover:bg-slate-800/50"
                }`}
              >
                <Icon className="w-4 h-4" style={{ color: cat.color }} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-extrabold text-white">
                    {item.name}
                  </h3>
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-blue-500/20 text-blue-400">
                    {item.level}
                  </span>
                </div>
                <p className="text-slate-400 text-xs font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-900 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                <span>HANDS-ON PRODUCTION</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
