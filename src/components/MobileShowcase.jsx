import React, { useState } from 'react';
import { Smartphone, Check, ArrowRight, Layers, Cpu, ShieldCheck, Printer, WifiOff, CreditCard, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';
import { resumeData } from '../data/resumeData';

export default function MobileShowcase({ lang }) {
  const [selectedProjectId, setSelectedProjectId] = useState('saaed-pay');
  const t = translations[lang].mobileSection;
  const projects = resumeData.projects;

  const activeProject = projects.find((p) => p.id === selectedProjectId) || projects[0];

  return (
    <section id="mobile" className="py-24 bg-gradient-to-b from-white via-[#FBFBFD] to-[#F5F5F7] border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-200/60 mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Project Navigation Horizontal Selector */}
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
                <span>{proj.title[lang]}</span>
              </button>
            );
          })}
        </div>

        {/* Main Product Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Phone Mockup Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="phone-mockup-frame shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="phone-notch" />
              
              {/* Dynamic Phone Screen Content */}
              <div className="w-full h-full pt-10 px-4 pb-6 flex flex-col justify-between text-white overflow-hidden relative"
                   style={{
                     background: `linear-gradient(180deg, #111827 0%, ${activeProject.accentColor || '#0071E3'} 180%)`
                   }}>
                
                {/* Screen Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-white/10 backdrop-blur-md flex items-center justify-center font-bold text-xs">
                      ⚡
                    </div>
                    <span className="text-xs font-bold truncate max-w-[130px]">
                      {activeProject.title[lang]}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono bg-white/20 px-2 py-0.5 rounded text-white font-semibold">
                    FLUTTER
                  </span>
                </div>

                {/* Interactive Phone UI Elements Mock */}
                <div className="my-auto flex flex-col gap-4">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-slate-300 block mb-1">
                      System Module Active
                    </span>
                    <h4 className="text-base font-extrabold leading-tight">
                      {activeProject.tagline[lang]}
                    </h4>
                  </div>

                  {/* UI Action Cards Mock */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                      <CreditCard className="w-5 h-5 mx-auto mb-1 text-blue-300" />
                      <span className="text-[10px] font-bold block">Fintech / Core</span>
                    </div>

                    <div className="p-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/10 text-center">
                      <WifiOff className="w-5 h-5 mx-auto mb-1 text-emerald-300" />
                      <span className="text-[10px] font-bold block">Offline Sync</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[11px] font-mono flex items-center justify-between">
                    <span>STATE: PROD_READY</span>
                    <Check className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Footer Screen Navigation Bar */}
                <div className="w-32 h-1 bg-white/40 rounded-full mx-auto" />
              </div>
            </div>
          </div>

          {/* Right Column: Technical Details & Architecture Highlights */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                {activeProject.category}
              </span>
              <span className="text-xs font-mono text-slate-400 font-semibold">
                ID: {activeProject.id.toUpperCase()}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              {activeProject.title[lang]}
            </h3>

            <p className="text-slate-600 text-base leading-relaxed">
              {activeProject.description[lang]}
            </p>

            {/* Key Features List */}
            <div className="mt-2">
              <h4 className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-wider mb-3">
                {t.featuresTitle}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeProject.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                    <Check className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-xs font-bold text-slate-800 leading-snug">
                      {feat[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            {activeProject.architectureHighlights && (
              <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200/60 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-purple-900 font-extrabold text-xs">
                  <Cpu className="w-4 h-4 text-purple-600" />
                  <span>{t.architectureTitle}</span>
                </div>
                <p className="text-purple-950 text-xs font-medium leading-relaxed">
                  {activeProject.architectureHighlights[lang]}
                </p>
              </div>
            )}

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {activeProject.tech.map((tItem, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900 text-slate-200"
                >
                  {tItem}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
