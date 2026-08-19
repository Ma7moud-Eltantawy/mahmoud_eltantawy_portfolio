import React, { useState } from 'react';
import { 
  Wifi, 
  CreditCard, 
  Send, 
  ArrowUpRight, 
  ArrowDownLeft, 
  QrCode, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Scissors, 
  ShoppingBag, 
  Building2, 
  RefreshCw, 
  Check, 
  FileText, 
  Printer, 
  Sparkles,
  Smartphone,
  ShieldCheck,
  Zap,
  DollarSign
} from 'lucide-react';

export default function MobileMockupScreen({ project, lang }) {
  const [nfcTapped, setNfcTapped] = useState(false);
  const [qrScanned, setQrScanned] = useState(false);
  const [selectedFabric, setSelectedFabric] = useState('japanese');

  // Render specific simulated screen based on project id
  switch (project.id) {
    case 'saaed-pay':
      return (
        <div className="w-full h-full flex flex-col justify-between text-white p-4 font-sans select-none overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-blue-950">
          {/* Status Bar */}
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-white/10 pb-2">
            <span className="font-bold text-white">9:41</span>
            <div className="flex items-center gap-1.5 text-blue-400">
              <Zap className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span>NearPay NFC Active</span>
            </div>
          </div>

          {/* Saaed Pay Wallet Card */}
          <div className="my-auto flex flex-col gap-3">
            <div 
              onClick={() => setNfcTapped(!nfcTapped)}
              className="p-4 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 shadow-xl border border-blue-400/30 cursor-pointer relative overflow-hidden transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-200">Saaed Digital Wallet</span>
                <Wifi className="w-4 h-4 text-blue-200 rotate-90" />
              </div>
              <div className="text-[10px] text-blue-200">{lang === 'en' ? "Total Balance" : "الرصيد المتاح"}</div>
              <div className="text-2xl font-black tracking-tight text-white mb-2">
                14,850.00 <span className="text-xs font-bold text-blue-200">SAR</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-blue-200 font-mono">
                <span>•••• 8421</span>
                <span>EXP 08/28</span>
              </div>

              {/* Tap to Pay Pulse Overlay */}
              <div className="mt-3 pt-2 border-t border-white/20 flex items-center justify-between text-[10px] font-bold text-amber-300">
                <span>{nfcTapped ? (lang === 'en' ? "✓ NFC Tap Approved!" : "✓ تم تأكيد الدفع اللاتلامسي!") : (lang === 'en' ? "⚡ Tap card to simulate NFC" : "⚡ اضغط لتجربة الدفع بـ NFC")}</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
                <Send className="w-4 h-4 mx-auto text-blue-400 mb-1" />
                <span className="text-[10px] font-bold block">{lang === 'en' ? "Transfer" : "تحويل"}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
                <ArrowDownLeft className="w-4 h-4 mx-auto text-emerald-400 mb-1" />
                <span className="text-[10px] font-bold block">{lang === 'en' ? "Top-up" : "شحن"}</span>
              </div>
              <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/15 transition-colors">
                <FileText className="w-4 h-4 mx-auto text-purple-400 mb-1" />
                <span className="text-[10px] font-bold block">{lang === 'en' ? "Bills" : "سداد"}</span>
              </div>
            </div>

            {/* Recent NFC Transactions */}
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <div className="text-[10px] font-bold text-slate-400 mb-2 flex items-center justify-between">
                <span>{lang === 'en' ? "Recent POS Tap Transactions" : "أحدث عمليات الدفع اللاتلامسية"}</span>
                <span className="text-emerald-400">Live</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-[11px] p-1.5 rounded-lg bg-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="font-semibold text-slate-200">NearPay POS #341</span>
                  </div>
                  <span className="font-bold text-slate-100">-125.00 SAR</span>
                </div>
                <div className="flex items-center justify-between text-[11px] p-1.5 rounded-lg bg-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="font-semibold text-slate-200">Riyadh Bank Top-up</span>
                  </div>
                  <span className="font-bold text-emerald-400">+1,500.00 SAR</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-28 h-1 bg-white/30 rounded-full mx-auto" />
        </div>
      );

    case 'alfakhra':
      return (
        <div className="w-full h-full flex flex-col justify-between text-slate-900 p-4 font-sans select-none overflow-hidden bg-gradient-to-b from-amber-50/70 via-white to-slate-100">
          {/* Header */}
          <div className="flex items-center justify-between text-[11px] font-bold border-b border-amber-200/60 pb-2 text-amber-950">
            <span className="font-serif tracking-wider font-extrabold">{lang === 'en' ? "ALFAKHRA TAILORING" : "الفاخرة للخياطة الرجالية"}</span>
            <span className="px-2 py-0.5 rounded-full bg-amber-200/60 text-amber-900 text-[10px]">VIP</span>
          </div>

          {/* Thobe Customizer Preview */}
          <div className="my-auto flex flex-col gap-3">
            <div className="p-4 rounded-2xl bg-white shadow-lg border border-amber-200/70 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase text-amber-800 tracking-wider">
                  {lang === 'en' ? "Custom Thobe Profile" : "ملف المقاسات والتفصيل"}
                </span>
                <Scissors className="w-4 h-4 text-amber-600" />
              </div>

              <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-600 mb-3 bg-amber-50/50 p-2.5 rounded-xl border border-amber-100">
                <div>{lang === 'en' ? "Height:" : "الطول:"} <strong className="text-slate-900">146 cm</strong></div>
                <div>{lang === 'en' ? "Chest:" : "الصدر:"} <strong className="text-slate-900">58 cm</strong></div>
                <div>{lang === 'en' ? "Collar:" : "الياقة:"} <strong className="text-slate-900">قلاب رسمي</strong></div>
                <div>{lang === 'en' ? "Cuff:" : "الكم:"} <strong className="text-slate-900">سادة كبك</strong></div>
              </div>

              {/* Fabric Selector */}
              <div className="text-[10px] font-bold text-slate-700 mb-1.5">{lang === 'en' ? "Selected Fabric:" : "نوع القماش المختار:"}</div>
              <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                <button
                  onClick={() => setSelectedFabric('japanese')}
                  className={`p-1.5 rounded-lg border font-bold transition-all ${
                    selectedFabric === 'japanese' ? 'bg-amber-600 text-white border-amber-600' : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {lang === 'en' ? "Japanese Silk" : "ياباني سوبر فاخر"}
                </button>
                <button
                  onClick={() => setSelectedFabric('cotton')}
                  className={`p-1.5 rounded-lg border font-bold transition-all ${
                    selectedFabric === 'cotton' ? 'bg-amber-600 text-white border-amber-600' : 'bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {lang === 'en' ? "Natural Cotton" : "قطن سويسري طبيعي"}
                </button>
              </div>
            </div>

            {/* Branch Booking Card */}
            <div className="p-3 rounded-2xl bg-gradient-to-r from-slate-900 to-amber-950 text-white shadow-md flex items-center justify-between">
              <div>
                <span className="text-[10px] text-amber-300 font-bold block">{lang === 'en' ? "Home Tailor / Branch" : "الخياط المتنقل للمنزل"}</span>
                <span className="text-xs font-extrabold">{lang === 'en' ? "Ready for measurement" : "جاهز لأخذ المقاسات"}</span>
              </div>
              <button className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-[10px] font-black transition-colors">
                {lang === 'en' ? "Book Now" : "حجز موعد"}
              </button>
            </div>
          </div>

          <div className="w-28 h-1 bg-slate-300 rounded-full mx-auto" />
        </div>
      );

    case 'ezee-hr':
      return (
        <div className="w-full h-full flex flex-col justify-between text-slate-900 p-4 font-sans select-none overflow-hidden bg-gradient-to-b from-purple-50/80 via-white to-slate-100">
          {/* Header */}
          <div className="flex items-center justify-between text-[11px] font-bold border-b border-purple-200/60 pb-2 text-purple-950">
            <span className="font-extrabold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              Ezee HR Mobile
            </span>
            <span className="text-[10px] font-mono bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full font-bold">
              GPS VERIFIED
            </span>
          </div>

          {/* QR Attendance Scanner Preview */}
          <div className="my-auto flex flex-col gap-3">
            <div 
              onClick={() => setQrScanned(!qrScanned)}
              className="p-4 rounded-2xl bg-slate-950 text-white border border-purple-500/40 relative overflow-hidden text-center cursor-pointer shadow-lg group"
            >
              {/* Scan Overlay Lines */}
              <div className="w-24 h-24 mx-auto rounded-2xl border-2 border-dashed border-purple-400 flex items-center justify-center relative bg-purple-950/40 mb-2">
                <QrCode className="w-12 h-12 text-purple-300 animate-pulse" />
                <div className="absolute inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-bounce" />
              </div>

              <span className="text-[10px] font-mono text-purple-300 block mb-1">
                {qrScanned ? (lang === 'en' ? "✓ Check-in Verified at 08:30 AM" : "✓ تم تسجيل الحضور 08:30 صباحاً") : (lang === 'en' ? "Tap to Scan Attendance QR" : "اضغط لمسح رمز الحضور والانصراف")}
              </span>
              <span className="text-[9px] text-slate-400 block font-mono">Geo-Fence: HQ Branch (Accurate ±3m)</span>
            </div>

            {/* HR Dashboard Cards */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded-xl bg-white border border-purple-100 shadow-xs">
                <span className="text-[10px] text-slate-500 font-bold block mb-0.5">{lang === 'en' ? "Leave Balance" : "رصيد الإجازات"}</span>
                <span className="text-base font-black text-purple-950">21 <span className="text-[10px] font-normal text-slate-500">{lang === 'en' ? "Days" : "يوم"}</span></span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-purple-100 shadow-xs">
                <span className="text-[10px] text-slate-500 font-bold block mb-0.5">{lang === 'en' ? "This Month" : "ساعات الشهر"}</span>
                <span className="text-base font-black text-emerald-600">176.5 <span className="text-[10px] font-normal text-slate-500">Hrs</span></span>
              </div>
            </div>

            {/* Quick Action */}
            <div className="p-2.5 rounded-xl bg-purple-50 border border-purple-200/60 flex items-center justify-between text-[11px] font-bold text-purple-900">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-600" />
                <span>{lang === 'en' ? "Request Vacation / Permission" : "طلب إجازة / إذن خروج"}</span>
              </div>
              <span className="text-purple-600 text-xs">&gt;</span>
            </div>
          </div>

          <div className="w-28 h-1 bg-slate-300 rounded-full mx-auto" />
        </div>
      );

    case 'multi-tenant-erp':
      return (
        <div className="w-full h-full flex flex-col justify-between text-slate-900 p-4 font-sans select-none overflow-hidden bg-gradient-to-b from-indigo-50/70 via-white to-slate-100">
          {/* Header & Tenant Switcher */}
          <div className="flex items-center justify-between text-[11px] font-bold border-b border-indigo-200/60 pb-2 text-indigo-950">
            <div className="flex items-center gap-1.5">
              <Building2 className="w-3.5 h-3.5 text-indigo-600" />
              <span className="font-extrabold truncate max-w-[130px]">{lang === 'en' ? "Al-Madina Co. (Branch #01)" : "شركة المدينة - فرع الخبر"}</span>
            </div>
            <div className="flex items-center gap-1 text-[9px] font-mono text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              SQL SYNC
            </div>
          </div>

          {/* ERP Dashboard Preview */}
          <div className="my-auto flex flex-col gap-2.5">
            {/* Sales Summary Card */}
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-slate-900 to-indigo-950 text-white shadow-md">
              <span className="text-[10px] text-indigo-300 font-mono block mb-1">{lang === 'en' ? "Today's Invoiced Revenue" : "إجمالي المبيعات اليومية"}</span>
              <div className="text-xl font-black text-white mb-2">
                38,420.00 <span className="text-xs font-bold text-indigo-300">SAR</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-slate-300 border-t border-white/10 pt-1.5">
                <span>{lang === 'en' ? "Invoices Issued: 64" : "عدد الفواتير: 64"}</span>
                <span className="text-emerald-400 font-bold">+18.4%</span>
              </div>
            </div>

            {/* Offline Sync & Thermal Printer Module */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2.5 rounded-xl bg-white border border-indigo-100 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold">
                  <span>{lang === 'en' ? "Offline Queue" : "طابور الأوفلاين"}</span>
                  <RefreshCw className="w-3 h-3 text-indigo-500" />
                </div>
                <span className="text-xs font-bold text-slate-800 mt-1">{lang === 'en' ? "0 Pending (Synced)" : "0 معلقة (متزامن)"}</span>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-indigo-100 shadow-xs flex flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] text-slate-500 font-bold">
                  <span>{lang === 'en' ? "ESC/POS Print" : "طباعة حرارية"}</span>
                  <Printer className="w-3 h-3 text-indigo-500" />
                </div>
                <span className="text-xs font-bold text-slate-800 mt-1">{lang === 'en' ? "Bluetooth / Wi-Fi" : "جاهز للطباعة"}</span>
              </div>
            </div>

            {/* Quick Invoice Action */}
            <button className="w-full p-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors">
              <FileText className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? "Generate Tax Invoice (ZATCA)" : "إنشاء فاتورة ضريبية (زاتكا)"}</span>
            </button>
          </div>

          <div className="w-28 h-1 bg-slate-300 rounded-full mx-auto" />
        </div>
      );

    case 'ecommerce-multi-tenant':
      return (
        <div className="w-full h-full flex flex-col justify-between text-slate-900 p-4 font-sans select-none overflow-hidden bg-gradient-to-b from-emerald-50/70 via-white to-slate-100">
          {/* Header */}
          <div className="flex items-center justify-between text-[11px] font-bold border-b border-emerald-200/60 pb-2 text-emerald-950">
            <span className="font-black flex items-center gap-1">
              <ShoppingBag className="w-3.5 h-3.5 text-emerald-600" />
              {lang === 'en' ? "Tenant Storefront" : "متجر التاجر الإلكتروني"}
            </span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
              WHITE-LABEL
            </span>
          </div>

          {/* Products Grid */}
          <div className="my-auto flex flex-col gap-2.5">
            <div className="p-3 rounded-2xl bg-emerald-900 text-white flex items-center justify-between">
              <div>
                <span className="text-[10px] text-emerald-300 font-bold block">{lang === 'en' ? "Special Eid Offer" : "عروض خاصة وحصرية"}</span>
                <span className="text-xs font-black">{lang === 'en' ? "Free Express Shipping" : "شحن مجاني لكافة المدن"}</span>
              </div>
              <span className="text-xs bg-emerald-500/30 text-emerald-200 border border-emerald-400/40 px-2 py-1 rounded-lg font-mono font-bold">20% OFF</span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[10px]">
              <div className="p-2.5 rounded-xl bg-white border border-emerald-100 shadow-xs">
                <div className="w-full h-12 rounded-lg bg-emerald-50 mb-1.5 flex items-center justify-center font-bold text-emerald-700">
                  📦 Product #1
                </div>
                <span className="font-extrabold block text-slate-800 truncate">{lang === 'en' ? "Premium Coffee Beans" : "بن قهوة مختصة"}</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold text-emerald-700">45 SAR</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[9px] font-bold">+ Cart</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-white border border-emerald-100 shadow-xs">
                <div className="w-full h-12 rounded-lg bg-emerald-50 mb-1.5 flex items-center justify-center font-bold text-emerald-700">
                  ☕ Product #2
                </div>
                <span className="font-extrabold block text-slate-800 truncate">{lang === 'en' ? "Espresso Machine Kit" : "مجموعة تحضير الإسبريسو"}</span>
                <div className="flex items-center justify-between mt-1">
                  <span className="font-bold text-emerald-700">320 SAR</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[9px] font-bold">+ Cart</span>
                </div>
              </div>
            </div>

            <div className="p-2 rounded-xl bg-white border border-slate-200 flex items-center justify-between text-[10px] font-bold text-slate-700">
              <span>{lang === 'en' ? "Cart: 2 items (365 SAR)" : "السلة: منتجان (365 ر.س)"}</span>
              <button className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white font-bold text-[10px]">
                {lang === 'en' ? "Checkout" : "إتمام الطلب"}
              </button>
            </div>
          </div>

          <div className="w-28 h-1 bg-slate-300 rounded-full mx-auto" />
        </div>
      );

    default:
      return (
        <div className="w-full h-full flex flex-col justify-between text-white p-4 font-sans select-none overflow-hidden bg-slate-900">
          <div className="text-xs font-bold text-center border-b border-white/10 pb-2">{project.title[lang]}</div>
          <div className="text-center text-xs text-slate-300 my-auto">{project.tagline[lang]}</div>
          <div className="w-28 h-1 bg-white/30 rounded-full mx-auto" />
        </div>
      );
  }
}
