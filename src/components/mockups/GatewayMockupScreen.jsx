import React, { useState } from 'react';
import { 
  Network, 
  ShieldCheck, 
  Key, 
  Layers, 
  Check, 
  Terminal, 
  Cpu, 
  Zap, 
  Lock, 
  Server, 
  Activity, 
  Play, 
  RefreshCw 
} from 'lucide-react';

export default function GatewayMockupScreen({ project, lang }) {
  const [activeRoute, setActiveRoute] = useState('reports');
  const [isLiveTracing, setIsLiveTracing] = useState(false);
  const [traceLogs, setTraceLogs] = useState([
    "GET /api/v1/qiyasi/reports/summary HTTP/1.1",
    "→ Intercepted by APISIX Gateway on port 443 (HTTPS)",
    "→ Keycloak Plugin: JWT Verified for sub='user_sa_8849'",
    "→ Proxy-Rewrite: Injected X-Consumer-ID='tenant_saudi_01'",
    "→ Forwarded to upstream: http://report-engine-svc:8080 (14ms)",
    "← 200 OK (Content-Type: application/json)"
  ]);

  const simulateRequest = () => {
    setIsLiveTracing(true);
    setTraceLogs(["[APISIX Gateway] Received inbound client request..."]);

    const newLogs = [
      `POST /api/v1/qiyasi/${activeRoute} HTTP/1.1`,
      "→ APISIX Match: Route ID #1042 (Host: api.qiyasi.sa)",
      "→ Plugin [keycloak-auth]: Token Signature Verified",
      "→ Plugin [proxy-rewrite]: Injected 'X-Consumer-ID: tenant_saudi_01'",
      "→ Upstream Health Check: 100% OK (Latency: 12ms)",
      "← Upstream Response: 200 OK (1.4 KB transferred)"
    ];

    let i = 0;
    const interval = setInterval(() => {
      if (i < newLogs.length) {
        setTraceLogs((prev) => [...prev, newLogs[i]]);
        i++;
      } else {
        clearInterval(interval);
        setIsLiveTracing(false);
      }
    }, 400);
  };

  return (
    <div className="w-full h-full bg-slate-950 text-slate-100 rounded-2xl p-5 font-mono text-xs flex flex-col justify-between border border-slate-800 shadow-2xl overflow-hidden select-none">
      
      {/* Top Gateway Dashboard Bar */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-rose-500" />
          <div className="w-3 h-3 rounded-full bg-amber-500" />
          <div className="w-3 h-3 rounded-full bg-emerald-500" />
          <span className="text-slate-400 font-bold ml-2 text-[11px]">
            APACHE APISIX // TOPOLOGY INSPECTOR
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">
            CLUSTER: PROD-ONLINE
          </span>
          <span className="text-[10px] text-slate-400">LATENCY: 14ms</span>
        </div>
      </div>

      {/* APISIX Route Visualizer Pipeline */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* Node 1: Mobile/Web Client */}
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 flex flex-col justify-between">
          <div className="flex items-center justify-between text-slate-400 text-[10px]">
            <span>CLIENT</span>
            <Network className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <span className="font-bold text-white text-[11px] mt-1">Flutter / Web</span>
          <span className="text-[9px] text-blue-300 font-mono">Bearer JWT</span>
        </div>

        {/* Node 2: APISIX Gateway */}
        <div className="p-3 rounded-xl bg-gradient-to-br from-amber-950/40 to-slate-900 border border-amber-500/50 shadow-md flex flex-col justify-between">
          <div className="flex items-center justify-between text-amber-400 text-[10px]">
            <span>GATEWAY LAYER</span>
            <Zap className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <span className="font-bold text-amber-300 text-[11px] mt-1">Apache APISIX</span>
          <span className="text-[9px] text-amber-400/80 font-mono">Dynamic Routing</span>
        </div>

        {/* Node 3: Keycloak IAM */}
        <div className="p-3 rounded-xl bg-slate-900 border border-emerald-500/40 flex flex-col justify-between">
          <div className="flex items-center justify-between text-emerald-400 text-[10px]">
            <span>AUTH / IAM</span>
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <span className="font-bold text-emerald-300 text-[11px] mt-1">Keycloak</span>
          <span className="text-[9px] text-emerald-400/80 font-mono">Token Validation</span>
        </div>

        {/* Node 4: Microservice Engine */}
        <div className="p-3 rounded-xl bg-slate-900 border border-purple-500/40 flex flex-col justify-between">
          <div className="flex items-center justify-between text-purple-400 text-[10px]">
            <span>BACKEND</span>
            <Server className="w-3.5 h-3.5 text-purple-400" />
          </div>
          <span className="font-bold text-purple-300 text-[11px] mt-1">Microservices</span>
          <span className="text-[9px] text-purple-400/80 font-mono">X-Consumer Tenant</span>
        </div>
      </div>

      {/* Terminal Live Trace Inspector */}
      <div className="bg-slate-900/90 rounded-xl border border-slate-800 p-3.5 flex flex-col justify-between my-1">
        <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800/80 pb-2 mb-2">
          <div className="flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-white font-bold">{lang === 'en' ? "Live APISIX Route Tracer" : "متتبع مسارات APISIX المباشر"}</span>
          </div>

          <button
            onClick={simulateRequest}
            disabled={isLiveTracing}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-[10px] transition-all disabled:opacity-50"
          >
            {isLiveTracing ? (
              <>
                <RefreshCw className="w-3 h-3 animate-spin" />
                <span>Tracing...</span>
              </>
            ) : (
              <>
                <Play className="w-3 h-3 fill-slate-950" />
                <span>{lang === 'en' ? "Dispatch Test Request" : "إرسال طلب تجريبي"}</span>
              </>
            )}
          </button>
        </div>

        {/* Real-time Trace Log lines */}
        <div className="space-y-1 text-[11px] font-mono text-slate-300 min-h-[90px] overflow-y-auto">
          {traceLogs.map((log, idx) => (
            <div key={idx} className="flex items-start gap-1.5">
              <span className="text-amber-400 font-bold">&gt;</span>
              <span className={idx === traceLogs.length - 1 ? "text-emerald-400 font-bold" : "text-slate-300"}>
                {log}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Header Injection Specs */}
      <div className="mt-2 pt-2 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[10px] text-slate-400">
        <div className="flex items-center gap-2">
          <span className="text-blue-400 font-bold">X-Consumer-ID:</span>
          <span className="text-white font-mono">"tenant_saudi_01"</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-emerald-400 font-bold">Keycloak Scope:</span>
          <span className="text-white font-mono">"roles: [admin, reporter]"</span>
        </div>
      </div>

    </div>
  );
}
