import React from 'react';
import { CreditCard, Cpu, ShieldCheck, RefreshCw, CheckCircle2, Smartphone, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

export default function PaymentArchitecture({ lang }) {
  const t = translations[lang].paymentSection;

  const flowSteps = [
    {
      step: "01",
      title: t.nfcTap,
      desc: lang === 'en' ? 'User taps contactless card or phone via NearPay NFC SDK on Flutter client.' : 'إتمام الدفع اللاتلامسي عبرNearPay NFC على تطبيق الفلاتر.',
      icon: Smartphone,
      color: '#0071E3'
    },
    {
      step: "02",
      title: t.adapterPattern,
      desc: lang === 'en' ? 'Adapter Pattern normalizes payload data across NearPay, Mada, and Visa channels.' : 'نمط المحول (Adapter) الذي يوحّد معاملاتNearPay و Mada و Visa.',
      icon: Cpu,
      color: '#6E44FF'
    },
    {
      step: "03",
      title: t.threeDS,
      desc: lang === 'en' ? 'Cardholder verification via 3-Domain Secure OTP challenge.' : 'مصادقة حماية حامل البطاقة عبر تحدي الـ 3DS OTP.',
      icon: ShieldCheck,
      color: '#10B981'
    },
    {
      step: "04",
      title: t.webhook,
      desc: lang === 'en' ? 'Asynchronous webhook event mutates database payment state securely.' : 'إشعار الـ Webhook اللحظي لمعالجة حالة المعاملة في قاعدة البيانات.',
      icon: RefreshCw,
      color: '#10B981'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#FBFBFD] to-[#F5F5F7] border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-blue-50 text-blue-700 border border-blue-200/60 mb-4">
            <CreditCard className="w-3.5 h-3.5" />
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-6">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base sm:text-lg font-medium leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Payment System Pipeline Flow */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {flowSteps.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-bold shadow-md"
                      style={{ backgroundColor: item.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-black text-slate-400">STEP {item.step}</span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-xs leading-relaxed font-medium">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>STATE: SECURE</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
