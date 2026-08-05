import React, { useState } from 'react';
import { Mail, Phone, Send, FileText, CheckCircle2, Globe, Code } from 'lucide-react';
import { translations } from '../data/translations';
import { resumeData } from '../data/resumeData';

export default function ContactFooter({ lang, onOpenResume }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const t = translations[lang].contactSection;
  const info = resumeData.personalInfo;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct direct mailto dispatch to mahmoudeltantawy2019@gmail.com
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.open(`mailto:mahmoudeltantawy2019@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');
    
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <footer id="contact" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main CTA Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-4">
            {t.badge}
          </span>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight leading-tight mb-6">
            <span className="block text-slate-400">{t.headline}</span>
            <span className="block text-blue-500">{t.ctaText}</span>
          </h2>
        </div>

        {/* Grid: Form & Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form sending directly to mahmoudeltantawy2019@gmail.com */}
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-8 md:p-10 border border-slate-800 shadow-2xl">
            {submitted ? (
              <div className="py-12 text-center flex flex-col items-center gap-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 animate-bounce" />
                <h3 className="text-xl font-bold text-white">{t.form.success}</h3>
                <p className="text-xs text-slate-400">Message directed to mahmoudeltantawy2019@gmail.com</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-slate-400 mb-2 uppercase">
                    {t.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="e.g. Sarah Al-Otaibi"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-400 mb-2 uppercase">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-slate-400 mb-2 uppercase">
                    {t.form.message}
                  </label>
                  <textarea
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Discuss mobile app development, system architecture, or API Gateway configuration..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 py-4 rounded-xl font-extrabold text-sm bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-lg shadow-blue-600/20"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.form.send} (to mahmoudeltantawy2019@gmail.com)</span>
                </button>
              </form>
            )}
          </div>

          {/* Direct Channels & CV Trigger */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col gap-6">
              <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                {t.directContact}
              </h3>

              <a
                href={`mailto:${info.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all text-slate-200 hover:text-white"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">DIRECT EMAIL</span>
                  <span className="text-xs sm:text-sm font-bold">{info.email}</span>
                </div>
              </a>

              <a
                href={`tel:${info.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all text-slate-200 hover:text-white"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">PHONE / WHATSAPP</span>
                  <span className="text-xs sm:text-sm font-bold">{info.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <a
                  href={info.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-800 text-xs font-bold text-slate-300 transition-colors"
                >
                  <Code className="w-4 h-4 text-blue-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={info.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:bg-slate-800 text-xs font-bold text-slate-300 transition-colors"
                >
                  <Globe className="w-4 h-4 text-purple-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Resume Trigger Card */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-blue-400" />
                <h4 className="text-base font-extrabold text-white">Full Professional Resume</h4>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Inspect complete verified breakdown of Mahmoud's experience, certifications, and technical projects.
              </p>
              <button
                onClick={onOpenResume}
                className="w-full py-3 rounded-xl bg-white text-slate-900 font-extrabold text-xs hover:bg-slate-100 transition-all shadow-md mt-2"
              >
                {t.downloadCv}
              </button>
            </div>

          </div>

        </div>

        {/* Footer Subtext */}
        <div className="mt-20 pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between text-xs text-slate-500 font-mono gap-4">
          <span>© {new Date().getFullYear()} MAHMOUD EL-TANTAWY. ALL RIGHTS RESERVED.</span>
          <span>FLUTTER • CLEAN ARCHITECTURE • APACHE APISIX</span>
        </div>

      </div>
    </footer>
  );
}
