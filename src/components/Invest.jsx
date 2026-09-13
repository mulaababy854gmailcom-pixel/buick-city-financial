import React, { useState } from 'react';
import { Shield, Lock, ArrowRight, CheckCircle, Calculator, Building2, UserCheck } from 'lucide-react';

export default function InvestPage({ onLoginClick, onNavigate }) {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    setShowLoginModal(false);
    if (onLoginClick) onLoginClick({ email: loginEmail });
  };

  return (
    <div className="min-h-screen bg-[#040910] text-slate-100 font-sans pb-20">
      {/* Secondary Sub-Navbar matching your exact screenshot */}
      <div className="border-b border-white/10 bg-[#07111f]/60 backdrop-blur-md sticky top-0 z-30">
        <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-300">
              <Building2 className="h-4 w-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-wider text-white">BUICK CITY</h2>
              <p className="text-[10px] tracking-widest text-slate-400">FINANCIAL CORPORATION</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-300">
            <button onClick={() => onNavigate && onNavigate('yield')} className="hover:text-sky-300 transition cursor-pointer">Yield Matrix</button>
            <button onClick={() => onNavigate && onNavigate('covenants')} className="hover:text-sky-300 transition cursor-pointer">Protective Covenants</button>
            <button onClick={() => onNavigate && onNavigate('faq')} className="hover:text-sky-300 transition cursor-pointer">Partnership FAQ</button>
          </div>

          <div>
            <button
              type="button"
              onClick={() => setShowLoginModal(true)}
              className="rounded-full border border-sky-300/40 bg-sky-300/10 px-5 py-2 text-xs font-semibold text-sky-300 transition hover:bg-sky-300/20 cursor-pointer shadow-sm flex items-center gap-2"
            >
              <Lock className="h-3.5 w-3.5" /> Portal Login
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section with exact styling and gradient text */}
      <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 text-center space-y-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-sky-300 uppercase">
          <Shield className="h-3.5 w-3.5 text-sky-400" /> Private Placement Limited Partnership Gate
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
          The Alternative Real Estate <br />
          <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-emerald-400 bg-clip-text text-transparent">
            Capital Engine
          </span>
        </h1>

        <p className="mx-auto max-w-2xl text-slate-400 text-sm md:text-base leading-relaxed">
          Bypassing Wall Street volatility. Buick City Financial Corporation connects direct, passive capital allocations to stabilized, high-yielding regional assets.
        </p>
      </div>

      {/* Main Co-Investment Matrix Card Area */}
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 rounded-3xl border border-white/10 bg-[#07111f] p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Calculator className="h-5 w-5 text-sky-300" /> Co-Investment Matrix
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">Model allocations, lock horizons, and preferred cash flows.</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="font-semibold text-slate-300">Target Capital Allocation Capital ($)</span>
              <span className="text-slate-400">Minimum Entrance Floor: $500</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#040910] p-4 flex items-center">
              <span className="text-xl font-bold text-sky-300 mr-3">$</span>
              <input 
                type="number" 
                defaultValue={25000}
                className="w-full bg-transparent text-xl font-bold text-white outline-none"
              />
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-[#07111f] p-8 shadow-2xl space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <Lock className="h-4 w-4 text-amber-300" /> Discretionary Liquidity Restriction
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Co-investment units are illiquid asset allocations locked for the selected term horizon. Early redemption requests are subject to GP approval and Right of First Refusal (ROFR) provisions.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-[#040910] p-3 text-[11px] text-slate-400">
            <strong className="text-slate-300 block mb-0.5">Note:</strong> Yield payouts originate from direct debt-service or net rental distributions across regional commercial and residential property holdings.
          </div>
        </div>
      </div>

      {/* Portal Login Modal Popup */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#07111f] p-8 shadow-2xl space-y-6 relative">
            <div className="space-y-2 text-center">
              <div className="h-12 w-12 rounded-full bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-300 mx-auto">
                <UserCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Investor Portal Login</h3>
              <p className="text-xs text-slate-400">Enter your credentials to access your active allocations and portfolio reporting.</p>
            </div>

            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Corporate Email</label>
                <input 
                  type="email" 
                  required
                  placeholder="investor@buickcityfinancial.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Portal Password / Passkey</label>
                <input 
                  type="password" 
                  required
                  placeholder="••••••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowLoginModal(false)}
                  className="w-1/2 rounded-full border border-white/10 bg-white/5 py-3 text-xs font-semibold text-slate-300 hover:bg-white/10 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 rounded-full bg-sky-300 py-3 text-xs font-semibold text-slate-950 hover:bg-sky-200 transition cursor-pointer shadow-lg shadow-sky-300/10"
                >
                  Sign In →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}