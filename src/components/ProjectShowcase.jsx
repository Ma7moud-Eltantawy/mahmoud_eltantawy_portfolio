import React, { useState } from 'react';
import { 
  Smartphone, 
  Network, 
  Check, 
  ArrowRight, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Database, 
  FileCode2, 
  UserCheck, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { translations } from '../data/translations';
import { resumeData } from '../data/resumeData';
import MobileMockupScreen from './mockups/MobileMockupScreen';
import GatewayMockupScreen from './mockups/GatewayMockupScreen';
import PosMockupScreen from './mockups/PosMockupScreen';
import QaMockupScreen from './mockups/QaMockupScreen';

export default function ProjectShowcase({ lang }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProjectId, setSelectedProjectId] = useState('qiyasi');
  const t = translations[lang].projectShowcase;
  const allProjects = resumeData.projects;

  // Filter projects by category
  const filteredProjects = activeCategory === 'all' 
    ? allProjects 
    : allProjects.filter((p) => p.type === activeCategory);

  const activeProject = filteredProjects.find((p) => p.id === selectedProjectId) || filteredProjects[0] || allProjects[0];

  const renderAdaptiveMockup = () => {
    switch (activeProject.type) {
      case 'gateway':
        return <GatewayMockupScreen project={activeProject} lang={lang} />;
      case 'pos_hardware':
        return <PosMockupScreen project={activeProject} lang={lang} />;
      case 'qa_security':
        return <QaMockupScreen project={activeProject} lang={lang} />;
      case 'mobile':
      default:
        return (
          <div className="phone-mockup-frame shadow-2xl transition-all duration-500 hover:scale-[1.02] mx-auto">
            <div className="phone-notch" />
            <MobileMockupScreen project={activeProject} lang={lang} />
          </div>
        );
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white via-[#FBFBFD] to-[#F5F5F7] border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-200/60 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 no-scrollbar">
          {[
            { id: 'all', label: t.filters.all, icon: Layers },
            { id: 'gateway', label: t.filters.gateway, icon: Network },
            { id: 'mobile', label: t.filters.mobile, icon: Smartphone },
            { id: 'pos_hardware', label: t.filters.pos_hardware, icon: Database },
            { id: 'qa_security', label: t.filters.qa_security, icon: ShieldCheck }
          ].map((cat) => {
            const Icon = cat.icon;
            const isCatActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  const firstMatching = cat.id === 'all' 
                    ? allProjects[0] 
                    : allProjects.find((p) => p.type === cat.id);
                  if (firstMatching) setSelectedProjectId(firstMatching.id);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all border ${
                  isCatActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/20 scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Project Selector Horizontal Scrollable List */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {filteredProjects.map((proj) => {
            const isSelected = proj.id === activeProject.id;
            return (
              <button
                key={proj.id}
                onClick={() => setSelectedProjectId(proj.id)}
                className={`px-5 py-3 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2.5 border ${
                  isSelected
                    ? "bg-slate-900 text-white border-slate-900 shadow-md scale-105"
                    : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: proj.accentColor || '#0071E3' }}
                />
                <span className="truncate max-w-[200px]">{proj.title[lang]}</span>
                {proj.type === 'gateway' && (
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-amber-500/20 text-amber-300">APISIX</span>
                )}
                {proj.type === 'mobile' && (
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-blue-500/20 text-blue-300">FLUTTER</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Main Adaptive Showcase Card */}
        <div className="bg-white rounded-3xl border border-slate-200 p-6 md:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Adaptive Device / Topology Screen */}
          <div className="lg:col-span-6 flex justify-center w-full">
            {renderAdaptiveMockup()}
          </div>

          {/* Right Column: Engineering Breakdown, Role & Features */}
          <div className="lg:col-span-6 flex flex-col gap-5">
            
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
                {activeProject.category}
              </span>
              <span className="text-xs font-mono text-slate-400 font-semibold">
                TYPE: {activeProject.type?.toUpperCase()}
              </span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 leading-tight">
              {activeProject.title[lang]}
            </h3>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {activeProject.description[lang]}
            </p>

            {/* Mahmoud's Role Highlight Box */}
            {activeProject.roleDescription && (
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/70 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-blue-900 font-extrabold text-xs">
                  <UserCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>{t.roleTitle}</span>
                </div>
                <p className="text-blue-950 text-xs font-medium leading-relaxed">
                  {activeProject.roleDescription[lang]}
                </p>
              </div>
            )}

            {/* Key Features List */}
            <div>
              <h4 className="text-xs font-mono font-extrabold text-slate-400 uppercase tracking-wider mb-2.5">
                {t.featuresTitle}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeProject.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200/60">
                    <Check className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                    <span className="text-xs font-bold text-slate-800 leading-snug">
                      {feat[lang]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            {activeProject.architectureHighlights && (
              <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200/60 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-purple-900 font-extrabold text-xs">
                  <Cpu className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>{t.architectureTitle}</span>
                </div>
                <p className="text-purple-950 text-xs font-medium leading-relaxed">
                  {activeProject.architectureHighlights[lang]}
                </p>
              </div>
            )}

            {/* Tech Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
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
