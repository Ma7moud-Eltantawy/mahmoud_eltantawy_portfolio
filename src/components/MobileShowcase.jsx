import React, { useState } from 'react';
import { Smartphone, Check, Layers, Cpu, ShieldCheck, WifiOff, CreditCard, Network, AlertCircle, Sparkles, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';
import { resumeData } from '../data/resumeData';

export default function MobileShowcase({ lang }) {
  const [selectedProjectId, setSelectedProjectId] = useState('qiyasi');
  const t = translations[lang].showcaseSection;
  const projects = resumeData.projects;

  const activeProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  return (
    <section id="showcase" className="py-24 bg-gradient-to-b from-white via-[#FBFBFD] to-[#F5F5F7] border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-200/60 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Project Horizontal Navigation Bar */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {projects.map((proj) => {
            const isSelected = proj.id === selectedProjectId;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 border ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: proj.accentColor || '#0071E3' }}
                />
                <span>{proj.title[lang].split('—')[0].trim()}</span>
              </button>
            );
          })}
        </div>

        {/* Main Product Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive UI Visual Frame */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="phone-mockup-frame shadow-2xl transition-all duration-500 hover:scale-[1.02] w-full max-w-[280px]">
              <div className="phone-notch" />
              
              {/* Dynamic Screen Content */}
              <div
                className="w-full h-full pt-10 px-4 pb-6 flex flex-col justify-between text-white overflow-hidden relative"
                style={{
                  background: `linear-gradient(180deg, #0F172A 0%, ${activeProject.accentColor || '#0071E3'} 190%)`
                }}
              >
                {/* Screen Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center font-bold text-xs">
                      ⚙️
                    </div>
                    <span className="text-xs font-bold truncate max-w-[130px]">
                      {activeProject.id.toUpperCase()}
                    </span>
                  </div>
                  <span className="text-[9px] font-mono bg-white/20 px-2 py-0.5 rounded text-white font-semibold uppercase">
                    SYSTEM
                  </span>
                </div>

                {/* Interactive State Details Mock */}
                <div className="my-auto flex flex-col gap-3">
                  <div className="p-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                    <span className="text-[9px] font-mono uppercase tracking-wider text-slate-300 block mb-1">
                      Target Domain
                    </span>
                    <h4 className="text-xs font-extrabold leading-tight">
                      {activeProject.tagline[lang]}
                    </h4>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                      <Layers className="w-4 h-4 mx-auto mb-1 text-blue-300" />
                      <span className="text-[9px] font-bold block">Modular Core</span>
                    </div>

                    <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                      <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-emerald-300" />
                      <span className="text-[9px] font-bold block">Isolated Data</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-mono flex items-center justify-between">
                    <span>STATE: VERIFIED</span>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Footer Screen Navigation Bar */}
                <div className="w-24 h-1 bg-white/40 rounded-full mx-auto" />
              </div>
            </div>

            {/* Quick Tech Tag Badges */}
            <div className="flex flex-wrap justify-center gap-1.5 mt-6 w-full">
              {activeProject.tech.map((techItem, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold bg-slate-900 text-slate-200"
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Problem → Architecture → Decisions → Impact */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Category & Title */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  {activeProject.category}
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">
                  CASE_STUDY: {activeProject.id.toUpperCase()}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight">
                {activeProject.title[lang]}
              </h3>

              <p className="text-slate-600 text-sm font-medium mt-2 leading-relaxed">
                {activeProject.tagline[lang]}
              </p>
            </div>

            {/* 1. Problem Box */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/70 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-amber-900 font-extrabold text-xs">
                <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{t.problemTitle}</span>
              </div>
              <p className="text-amber-950 text-xs font-medium leading-relaxed">
                {activeProject.problem[lang]}
              </p>
            </div>

            {/* 2. Architecture Box */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/70 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xs">
                <Cpu className="w-4 h-4 text-blue-600 shrink-0" />
                <span>{t.architectureTitle}</span>
              </div>
              <p className="text-blue-950 text-xs font-medium leading-relaxed">
                {activeProject.architecture[lang]}
              </p>
            </div>

            {/* 3. Engineering Decisions & Patterns */}
            {activeProject.engineeringDecisions && (
              <div>
                <h4 className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                  {t.decisionsTitle}
                </h4>

                <div className="space-y-2.5">
                  {activeProject.engineeringDecisions.map((dec, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 flex flex-col gap-1">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span>{dec.decision[lang]}</span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed pl-5 rtl:pr-5 rtl:pl-0 font-medium">
                        {dec.detail[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Impact / Result Box */}
            <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200/70 flex flex-col gap-1.5">
              <div className="flex items-center gap-2 text-emerald-900 font-extrabold text-xs">
                <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>{t.impactTitle}</span>
              </div>
              <p className="text-emerald-950 text-xs font-bold leading-relaxed">
                {activeProject.impact[lang]}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
