import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { resumeData } from '../data/resumeData';
import { mahmoudPhoto } from '../assets/mahmoudBase64';

export default function ResumeModal({ isOpen, onClose, lang }) {
  if (!isOpen) return null;

  const info = resumeData.personalInfo;
  const exps = resumeData.experiences;
  const projs = resumeData.projects;
  const edu = resumeData.education;
  const courses = resumeData.courses;

  const cvPdfUrl = `${import.meta.env.BASE_URL}Mahmoud_Eltantawy_CV.pdf`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative flex flex-col">
        
        {/* Modal Sticky Header */}
        <div className="sticky top-0 bg-white/95 backdrop-blur-md px-8 py-5 border-b border-slate-200 flex items-center justify-between z-20">
          <div className="flex items-center gap-3">
            <img
              src={mahmoudPhoto}
              alt="Mahmoud El-Tantawy"
              className="w-9 h-9 rounded-full object-cover border border-slate-300"
            />
            <span className="font-extrabold text-slate-900 text-sm sm:text-base">
              {info.name[lang]} — Curricular Vitae
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={cvPdfUrl}
              target="_blank"
              rel="noreferrer"
              download="Mahmoud_Eltantawy_CV.pdf"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Original PDF</span>
            </a>

            <button
              onClick={() => window.print()}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print Page</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Content */}
        <div id="printable-resume" className="p-8 sm:p-12 text-slate-800 space-y-8">
          
          {/* Document Header with Photo */}
          <div className="border-b border-slate-200 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                {info.name[lang]}
              </h1>
              <p className="text-blue-600 font-extrabold text-sm sm:text-base mt-1">
                FLUTTER DEVELOPER & SOFTWARE ENGINEER
              </p>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-xs font-medium text-slate-600">
                <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-blue-600" /> {info.email}</span>
                <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-blue-600" /> {info.phone}</span>
                <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-blue-600" /> {info.location[lang]}</span>
              </div>
            </div>

            <img
              src={mahmoudPhoto}
              alt="Mahmoud El-Tantawy"
              className="w-24 h-24 rounded-2xl object-cover border-2 border-slate-200 shadow-md shrink-0"
            />
          </div>

          {/* Direct PDF View Prompt */}
          <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between gap-4">
            <div>
              <h4 className="text-xs font-extrabold text-blue-950">Official Verified PDF Document</h4>
              <p className="text-[11px] text-blue-800">Directly uploaded from Mahmoud El-Tantawy's original resume file.</p>
            </div>
            <a
              href={cvPdfUrl}
              target="_blank"
              rel="noreferrer"
              download="Mahmoud_Eltantawy_CV.pdf"
              className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs whitespace-nowrap shadow-sm"
            >
              Open PDF File
            </a>
          </div>

          {/* Summary */}
          <div>
            <h2 className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest mb-3">SUMMARY</h2>
            <p className="text-sm text-slate-700 leading-relaxed font-medium">
              {info.summary[lang]}
            </p>
          </div>

          {/* Work Experience */}
          <div>
            <h2 className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest mb-4">PROFESSIONAL EXPERIENCE</h2>
            <div className="space-y-6">
              {exps.map((exp) => (
                <div key={exp.id} className="border-l-2 border-slate-200 pl-4 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between">
                    <h3 className="text-base font-extrabold text-slate-900">{exp.role[lang]} — <span className="text-blue-600">{exp.company}</span></h3>
                    <span className="text-xs font-mono text-slate-500 font-bold">{exp.period}</span>
                  </div>
                  {exp.companyDesc && <p className="text-xs text-slate-500 italic">{exp.companyDesc[lang]}</p>}
                  <ul className="space-y-1 mt-2">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-slate-700 font-medium leading-relaxed flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{h[lang]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest mb-3">EDUCATION</h2>
            <div className="border-l-2 border-purple-300 pl-4">
              <h3 className="text-sm font-extrabold text-slate-900">{edu.degree[lang]}</h3>
              <p className="text-xs text-slate-600 font-medium">{edu.institution[lang]} ({edu.period})</p>
              <p className="text-xs font-mono text-purple-600 font-bold mt-0.5">Grade: {edu.grade[lang]} | {edu.location[lang]}</p>
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest mb-4">FEATURED PROJECTS</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projs.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                  <h4 className="text-xs font-extrabold text-slate-900">{p.title[lang]}</h4>
                  <p className="text-[11px] text-slate-600 line-clamp-2">{p.tagline[lang]}</p>
                  <div className="flex flex-wrap gap-1 pt-2">
                    {p.tech.slice(0, 3).map((t, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded text-[9px] font-mono bg-white text-slate-700 border border-slate-200">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Courses & Training */}
          <div>
            <h2 className="text-xs font-mono font-black text-slate-400 uppercase tracking-widest mb-3">COURSES & CERTIFICATIONS</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
              {courses.map((c, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>{c.name} ({c.platform})</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}
