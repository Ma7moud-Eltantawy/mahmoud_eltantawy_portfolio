import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ShieldCheck, 
  Play, 
  RefreshCw, 
  FileCode2, 
  Check, 
  Lock, 
  Activity, 
  Layers 
} from 'lucide-react';

export default function QaMockupScreen({ project, lang }) {
  const [isRunning, setIsRunning] = useState(false);
  const [testsPassed, setTestsPassed] = useState(true);

  const testCases = [
    { name: "POST /auth/token (Validate JWT Signature & Expiry)", status: "PASS", latency: "24ms" },
    { name: "GET /api/v1/tenant/valuation (Verify Tenant Data Segregation)", status: "PASS", latency: "18ms" },
    { name: "POST /payments/webhook (3DS HMAC Signature Validation)", status: "PASS", latency: "32ms" },
    { name: "GET /swagger/v1/openapi.json (OpenAPI Schema Contract Compliance)", status: "PASS", latency: "12ms" }
  ];

  const triggerTestRun = () => {
    setIsRunning(true);
    setTimeout(() => {
      setIsRunning(false);
      setTestsPassed(true);
    }, 900);
  };

  return (
    <div className="w-full h-full bg-slate-950 text-slate-100 rounded-2xl p-5 font-mono text-xs flex flex-col justify-between border border-emerald-500/40 shadow-2xl select-none overflow-hidden">
      
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <FileCode2 className="w-4 h-4 text-emerald-400" />
          <span className="font-bold text-white text-[11px]">POSTMAN & OPENAPI TEST WORKBENCH</span>
        </div>

        <button
          onClick={triggerTestRun}
          disabled={isRunning}
          className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-[10px] transition-all disabled:opacity-50"
        >
          {isRunning ? (
            <>
              <RefreshCw className="w-3 h-3 animate-spin" />
              <span>Running Suite...</span>
            </>
          ) : (
            <>
              <Play className="w-3 h-3 fill-slate-950" />
              <span>{lang === 'en' ? "Run All Test Collections" : "تشغيل حزمة الاختبارات"}</span>
            </>
          )}
        </button>
      </div>

      {/* Test Runner Suite Results */}
      <div className="my-3 space-y-2">
        <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider">
          <span>Taqeem API Security & Integration Suite</span>
          <span className="text-emerald-400 font-bold">4/4 Passed (100%)</span>
        </div>

        {testCases.map((tc, idx) => (
          <div key={idx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="font-semibold text-slate-200 text-[11px] truncate max-w-[320px]">{tc.name}</span>
            </div>
            <div className="flex items-center gap-2 font-mono text-[10px]">
              <span className="text-slate-400">{tc.latency}</span>
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">{tc.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Assertions Banner */}
      <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center justify-between text-[10px] text-emerald-300">
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>{lang === 'en' ? "Zero Data Leaks: Multi-tenant tenant isolation assertion verified." : "تم التحقق التام من عزل وتشفير بيانات المستأجرين بنجاح."}</span>
        </div>
        <span className="font-bold text-white">STATUS: 200 OK</span>
      </div>

    </div>
  );
}
