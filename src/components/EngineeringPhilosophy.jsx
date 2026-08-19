import React from 'react';
import { 
  Layers, 
  Database, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  GitBranch, 
  CheckCircle2, 
  Smartphone, 
  Network 
} from 'lucide-react';
import { translations } from '../data/translations';
import { resumeData } from '../data/resumeData';

export default function EngineeringPhilosophy({ lang }) {
  const t = translations[lang].philosophySection;
  const philosophies = resumeData.engineeringPhilosophy;

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'Database': return Database;
      case 'Cpu': return Cpu;
      default: return Sparkles;
    }
  };

  return (
    <section id="philosophy" className="py-24 bg-white border-t border-slate-200/60 relative overflow-hidden">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-purple-50 text-purple-700 border border-purple-200/60 mb-4">
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

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {philosophies.map((item, idx) => {
            const Icon = getIcon(item.icon);
            return (
              <div 
                key={item.id}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-xs font-mono font-bold text-blue-600 block mb-1 uppercase tracking-wider">
                    {item.tagline[lang]}
                  </span>

                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    {item.title[lang]}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.desc[lang]}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>{lang === 'en' ? "Field Proven in Production" : "مُطبق عملياً في مشاريع حية"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Engineering Differentiator Quote Banner */}
        <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="flex flex-col gap-2 max-w-2xl">
            <span className="text-xs font-mono text-amber-400 font-bold uppercase tracking-widest">
              {lang === 'en' ? "WHY THIS MATTERS FOR YOUR TEAM" : "القيمة المضافة لفريق العمل"}
            </span>
            <h4 className="text-xl sm:text-2xl font-black leading-tight">
              {lang === 'en' 
                ? "Connecting the Frontend Mobile Experience Directly with Gateway Security & Microservices."
                : "الربط السلس بين تجربة مستخدم الموبايل العصرية وأمان بوابات واجهات البرمجة والخدمات المصغرة."}
            </h4>
            <p className="text-slate-300 text-sm leading-relaxed mt-1">
              {lang === 'en'
                ? "Eliminating communication friction between mobile developers and backend/DevOps engineers by owning the contract, token lifecycle, and routing end-to-end."
                : "إنهاء الفجوة التقليدية بين مطوري الموبايل وفرق الباك إند والبنية التحتية من خلال التحكم الكامل في دورة حياة الرموز ومسارات البوابة."}
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full md:w-auto shrink-0">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-3">
              <Smartphone className="w-6 h-6 text-blue-400" />
              <div>
                <div className="text-xs font-extrabold">{lang === 'en' ? "Flutter & Clean Arch" : "تطوير فلاتر وهندسة نظيفة"}</div>
                <div className="text-[10px] text-slate-300 font-mono">Mobile Client Layer</div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 flex items-center gap-3">
              <Network className="w-6 h-6 text-amber-400" />
              <div>
                <div className="text-xs font-extrabold">{lang === 'en' ? "APISIX & Keycloak IAM" : "Apache APISIX وبوابات APIs"}</div>
                <div className="text-[10px] text-slate-300 font-mono">Gateway Security Layer</div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
