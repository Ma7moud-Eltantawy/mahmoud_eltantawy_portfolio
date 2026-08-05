import React, { useState } from 'react';
import { ShieldCheck, RefreshCw, Key, Lock, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import { translations } from '../data/translations';

export default function SecurityAuth({ lang }) {
  const [tokenState, setTokenState] = useState('valid'); // 'valid' | 'refreshing' | 'failed'
  const t = translations[lang].securitySection;

  return (
    <section className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            {t.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight mb-4">
            {t.title}
          </h2>
          <p className="text-slate-400 text-base font-medium leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Interactive Token Lifecycle Card */}
        <div className="bg-slate-900 rounded-3xl border border-slate-800 p-8 shadow-2xl">
          
          {/* Action Trigger Buttons */}
          <div className="flex flex-wrap items-center gap-3 border-b border-slate-800 pb-6 mb-8">
            <button
              onClick={() => setTokenState('valid')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                tokenState === 'valid'
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {t.validToken}
            </button>

            <button
              onClick={() => setTokenState('refreshing')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                tokenState === 'refreshing'
                  ? 'bg-blue-500 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {t.refreshTrigger}
            </button>

            <button
              onClick={() => setTokenState('failed')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                tokenState === 'failed'
                  ? 'bg-rose-500 text-white shadow-md shadow-rose-500/20'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {t.authFailure}
            </button>
          </div>

          {/* Interactive Flow Visual */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Step 1: Access Token Status */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4">
                  <span>STEP 01</span>
                  <span>ACCESS TOKEN</span>
                </div>
                <h4 className="text-base font-extrabold text-white mb-2">JWT Signature & Expiry</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Short-lived Access Token attached in Authorization Header (`Bearer eyJ...`).
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                {tokenState === 'valid' && (
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-mono text-xs font-bold">
                    <CheckCircle className="w-4 h-4" /> TOKEN VALID (EXP: 15m)
                  </span>
                )}
                {tokenState === 'refreshing' && (
                  <span className="inline-flex items-center gap-1.5 text-amber-400 font-mono text-xs font-bold">
                    <AlertTriangle className="w-4 h-4" /> TOKEN EXPIRED (401)
                  </span>
                )}
                {tokenState === 'failed' && (
                  <span className="inline-flex items-center gap-1.5 text-rose-400 font-mono text-xs font-bold">
                    <AlertTriangle className="w-4 h-4" /> INVALID TOKEN (403)
                  </span>
                )}
              </div>
            </div>

            {/* Step 2: Refresh Token Swap */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4">
                  <span>STEP 02</span>
                  <span>REFRESH TOKEN</span>
                </div>
                <h4 className="text-base font-extrabold text-white mb-2">Keycloak Introspection</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Silent background interceptor dispatches Refresh Token payload to issue new pair.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                {tokenState === 'valid' && (
                  <span className="text-slate-500 font-mono text-xs">IDLE (STANDBY)</span>
                )}
                {tokenState === 'refreshing' && (
                  <span className="inline-flex items-center gap-1.5 text-blue-400 font-mono text-xs font-bold">
                    <RefreshCw className="w-4 h-4 animate-spin" /> ROTATING TOKEN PAIR...
                  </span>
                )}
                {tokenState === 'failed' && (
                  <span className="inline-flex items-center gap-1.5 text-rose-400 font-mono text-xs font-bold">
                    <Lock className="w-4 h-4" /> REFRESH EXPIRED
                  </span>
                )}
              </div>
            </div>

            {/* Step 3: Result Action */}
            <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-4">
                  <span>STEP 03</span>
                  <span>STATE OUTCOME</span>
                </div>
                <h4 className="text-base font-extrabold text-white mb-2">System Continuation</h4>
                <p className="text-slate-400 text-xs leading-relaxed">
                  Retry original request transparently or redirect to Secure Keycloak Login screen.
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800">
                {tokenState === 'valid' && (
                  <span className="text-emerald-400 font-mono text-xs font-bold">200 OK — REQUEST PROCESSED</span>
                )}
                {tokenState === 'refreshing' && (
                  <span className="text-blue-400 font-mono text-xs font-bold">NEW TOKEN ISSUED & RETRIED</span>
                )}
                {tokenState === 'failed' && (
                  <span className="text-rose-400 font-mono text-xs font-bold">REDIRECT TO /LOGIN (SAFE EXIT)</span>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
