import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, GraduationCap, Building2 } from 'lucide-react';
import { translations } from '../data/translations';
import { resumeData } from '../data/resumeData';

export default function ExperienceTimeline({ lang }) {
  const t = translations[lang].expSection;
  const experiences = resumeData.experiences;
  const edu = resumeData.education;

  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-[#F5F5F7] via-[#FBFBFD] to-white border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-200/60 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-10 shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-100 pb-6 mb-6">
                <div>
                  <span className="text-xs font-mono font-extrabold text-blue-600 uppercase tracking-wider block mb-1">
                    CHAPTER 0{idx + 1}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-snug">
                    {exp.role[lang]}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span className="text-base font-bold text-slate-800">
                      {exp.company}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-blue-600" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-50 text-slate-600 border border-slate-200/60">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.location[lang]}</span>
                  </span>
                </div>
              </div>

              {exp.companyDesc && (
                <p className="text-xs font-medium text-slate-500 italic mb-4 bg-slate-50/80 p-3 rounded-xl border border-slate-100">
                  {exp.companyDesc[lang]}
                </p>
              )}

              {/* Highlights */}
              <div className="space-y-3 mb-6">
                {exp.highlights.map((h, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                    <p className="text-slate-700 text-sm font-medium leading-relaxed">
                      {h[lang]}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {exp.tech.map((tItem, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-slate-100 text-slate-800 border border-slate-200"
                  >
                    {tItem}
                  </span>
                ))}
              </div>
            </div>
          ))}

          {/* Academic Foundation Card */}
          <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 sm:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-slate-800 pb-6 mb-6">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-extrabold text-purple-400 uppercase tracking-wider mb-2">
                  <GraduationCap className="w-4 h-4" />
                  ACADEMIC FOUNDATION
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white leading-snug">
                  {edu.degree[lang]}
                </h3>
                <span className="text-sm font-bold text-slate-300 block mt-1">
                  {edu.institution[lang]}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-purple-500/20 text-purple-300 border border-purple-500/30">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{edu.period}</span>
                </span>

                <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  GRADE: {edu.grade[lang]}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-purple-400" />
              <span>Location: {edu.location[lang]}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
