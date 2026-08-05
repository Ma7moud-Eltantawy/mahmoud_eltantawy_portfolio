import React, { useState, useEffect } from 'react';
import { Globe, FileText, Menu, X, Smartphone, Cpu, Network, Briefcase, Mail } from 'lucide-react';
import { translations } from '../data/translations';
import mahmoudPhoto from '../assets/mahmoud.jpg';

export default function Navbar({ lang, setLang, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'mobile', label: t.mobile, icon: Smartphone },
    { id: 'architecture', label: t.architecture, icon: Cpu },
    { id: 'apigateway', label: t.apiGateway, icon: Network },
    { id: 'showcase', label: t.projects, icon: Briefcase },
    { id: 'experience', label: t.experience, icon: Briefcase },
    { id: 'contact', label: t.contact, icon: Mail }
  ];

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Brand with Real Photo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <img
              src={mahmoudPhoto}
              alt="Mahmoud El-Tantawy"
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition-transform"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-slate-900 text-base tracking-tight leading-none group-hover:text-blue-600 transition-colors">
              {t.brand}
            </span>
            <span className="text-[10px] text-slate-500 font-bold tracking-wider uppercase mt-0.5">
              FLUTTER & API GATEWAY
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-200/80 shadow-sm">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all"
              >
                <Icon className="w-3.5 h-3.5 opacity-70" />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* Right Actions (Lang & Resume) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Toggle */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
            title="Toggle Language / تغيير اللغة"
          >
            <Globe className="w-3.5 h-3.5 text-blue-600" />
            <span>{lang === 'en' ? 'العربية' : 'English'}</span>
          </button>

          {/* Resume Modal Trigger */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-slate-900 text-white hover:bg-blue-600 transition-colors shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{t.resume}</span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
            className="p-2 rounded-full bg-slate-100 text-slate-700 text-xs font-bold"
          >
            {lang === 'en' ? 'AR' : 'EN'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-slate-900 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-200 px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
            <img
              src={mahmoudPhoto}
              alt="Mahmoud El-Tantawy"
              className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-sm"
            />
            <div>
              <h4 className="font-extrabold text-slate-900 text-sm">{t.brand}</h4>
              <span className="text-xs font-mono text-blue-600">Flutter & API Gateway</span>
            </div>
          </div>

          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 text-left rtl:text-right"
              >
                <Icon className="w-4 h-4 text-blue-600" />
                <span>{link.label}</span>
              </button>
            );
          })}
          
          <button
            onClick={() => {
              onOpenResume();
              setMobileMenuOpen(false);
            }}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-blue-600 transition-colors mt-2"
          >
            <FileText className="w-4 h-4" />
            <span>{t.resume}</span>
          </button>
        </div>
      )}
    </nav>
  );
}
