import React, { useState } from 'react';
import { 
  Database, 
  Printer, 
  Utensils, 
  WifiOff, 
  Check, 
  Activity, 
  CreditCard, 
  DollarSign, 
  Clock,
  Sparkles,
  Zap
} from 'lucide-react';

export default function PosMockupScreen({ project, lang }) {
  const [selectedTable, setSelectedTable] = useState(4);
  const [isPrinted, setIsPrinted] = useState(false);

  const menuItems = [
    { name: lang === 'en' ? "Saudi Kabsa Special" : "كبسة سعودية فاخرة", price: 65, qty: 2 },
    { name: lang === 'en' ? "Mixed Grills Platter" : "مشاوي مشكلة عائلية", price: 120, qty: 1 },
    { name: lang === 'en' ? "Fresh Lemon Mint" : "عصير ليمون بالنعناع", price: 18, qty: 3 }
  ];

  const totalAmount = menuItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="w-full h-full bg-slate-900 text-white rounded-2xl p-5 font-sans flex flex-col justify-between border border-amber-500/40 shadow-2xl select-none overflow-hidden">
      
      {/* Top POS Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <Utensils className="w-4 h-4 text-amber-400" />
          <span className="font-extrabold text-xs text-white">Ezee Restaurant POS Engine</span>
          <span className="text-[10px] bg-amber-500/20 text-amber-300 font-mono px-2 py-0.5 rounded font-bold">
            TABLE #{selectedTable}
          </span>
        </div>

        {/* Direct SQL Server Socket Latency Pill */}
        <div className="flex items-center gap-2 bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold">
          <Database className="w-3 h-3 text-emerald-400" />
          <span>DIRECT SQL SOCKET: 0.8ms</span>
        </div>
      </div>

      {/* Main Grid: Left Table Selector & Order Items | Right Receipt & Actions */}
      <div className="my-3 grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
        
        {/* Left: Active Order Items */}
        <div className="md:col-span-7 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-2 uppercase tracking-wider">
              <span>{lang === 'en' ? "Current Kitchen Order Ticket" : "طلبات المطبخ الحالية"}</span>
              <span className="text-amber-400">Live POS Sync</span>
            </div>

            <div className="space-y-1.5 text-xs">
              {menuItems.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2 rounded-lg bg-slate-900 border border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-md bg-amber-500/20 text-amber-300 font-bold text-[10px] flex items-center justify-center font-mono">
                      {item.qty}x
                    </span>
                    <span className="font-bold text-slate-200">{item.name}</span>
                  </div>
                  <span className="font-bold font-mono text-amber-400">{item.price * item.qty} SAR</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
            <span className="text-slate-400 font-bold">{lang === 'en' ? "Total with VAT (15%):" : "الإجمالي شامل الضريبة:"}</span>
            <span className="text-base font-black text-amber-400 font-mono">{totalAmount * 1.15} SAR</span>
          </div>
        </div>

        {/* Right: Thermal Receipt & Printing module */}
        <div className="md:col-span-5 bg-slate-950/80 p-3.5 rounded-xl border border-slate-800 flex flex-col justify-between text-center">
          <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] flex flex-col items-center gap-1">
            <WifiOff className="w-4 h-4 text-emerald-400" />
            <span className="font-bold">{lang === 'en' ? "100% Offline Capable" : "يعمل بدون إنترنت بالكامل"}</span>
            <span className="text-[9px] text-slate-400 font-mono">Direct SQL connection eliminates API overhead</span>
          </div>

          <button
            onClick={() => setIsPrinted(true)}
            className="w-full mt-3 py-2.5 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Printer className="w-3.5 h-3.5 text-slate-950" />
            <span>{isPrinted ? (lang === 'en' ? "✓ Thermal ESC/POS Printed" : "✓ تمت طباعة الفاتورة الحرارية") : (lang === 'en' ? "Print ESC/POS Receipt" : "طباعة إيصال كاشير")}</span>
          </button>
        </div>

      </div>

      {/* Footer Table Selector Tabs */}
      <div className="flex items-center justify-between text-[10px] text-slate-400 border-t border-slate-800 pt-2 font-mono">
        <div className="flex items-center gap-1.5">
          <span>TABLES:</span>
          {[1, 2, 3, 4, 5, 6].map((tbl) => (
            <button
              key={tbl}
              onClick={() => { setSelectedTable(tbl); setIsPrinted(false); }}
              className={`px-2 py-0.5 rounded font-bold transition-all ${
                selectedTable === tbl ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              #{tbl}
            </button>
          ))}
        </div>

        <span className="text-emerald-400 font-bold">SQL SERVER: CONNECTED</span>
      </div>

    </div>
  );
}
