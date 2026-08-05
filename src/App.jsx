import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSequence from './components/IntroSequence';
import MobileShowcase from './components/MobileShowcase';
import Architecture from './components/Architecture';
import ApiGateway from './components/ApiGateway';
import SecurityAuth from './components/SecurityAuth';
import PaymentArchitecture from './components/PaymentArchitecture';
import TechEcosystem from './components/TechEcosystem';
import ExperienceTimeline from './components/ExperienceTimeline';
import MetricsBanner from './components/MetricsBanner';
import AboutSection from './components/AboutSection';
import ContactFooter from './components/ContactFooter';
import ResumeModal from './components/ResumeModal';
import CustomCursor from './components/CustomCursor';

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' | 'ar'
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    // Update HTML dir attribute for RTL support when Arabic is active
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className={`min-h-screen bg-[#FBFBFD] text-[#1D1D1F] selection:bg-blue-500 selection:text-white ${lang === 'ar' ? 'font-tajawal' : ''}`}>
      
      {/* Custom Interactive Identity Cursor */}
      <CustomCursor />

      {/* Sticky Navigation Bar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Flow */}
      <main>
        <Hero
          lang={lang}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <IntroSequence lang={lang} />

        <MobileShowcase lang={lang} />

        <Architecture lang={lang} />

        <ApiGateway lang={lang} />

        <SecurityAuth lang={lang} />

        <PaymentArchitecture lang={lang} />

        <TechEcosystem lang={lang} />

        <ExperienceTimeline lang={lang} />

        <MetricsBanner lang={lang} />

        <AboutSection lang={lang} />
      </main>

      {/* Footer & CTA */}
      <ContactFooter
        lang={lang}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Formatted CV Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />
    </div>
  );
}
