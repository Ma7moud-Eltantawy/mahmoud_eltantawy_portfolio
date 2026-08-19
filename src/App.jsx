import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import IntroSequence from './components/IntroSequence';
import ProjectShowcase from './components/ProjectShowcase';
import EngineeringPhilosophy from './components/EngineeringPhilosophy';
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

        {/* Adaptive Project & System Showcase (Mobile, APISIX Gateway, POS, QA) */}
        <ProjectShowcase lang={lang} />

        {/* Personal Engineering Philosophy & Mindset */}
        <EngineeringPhilosophy lang={lang} />

        {/* Clean Architecture & SOLID Deep Dive */}
        <Architecture lang={lang} />

        {/* Live APISIX API Gateway Simulator */}
        <ApiGateway lang={lang} />

        {/* Keycloak Authentication & Token Lifecycle */}
        <SecurityAuth lang={lang} />

        {/* Payment & Hardware Integration (NearPay NFC) */}
        <PaymentArchitecture lang={lang} />

        {/* Full Tech Ecosystem */}
        <TechEcosystem lang={lang} />

        {/* Career Timeline */}
        <ExperienceTimeline lang={lang} />

        {/* Key Metrics Banner */}
        <MetricsBanner lang={lang} />

        {/* About Mahmoud */}
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
