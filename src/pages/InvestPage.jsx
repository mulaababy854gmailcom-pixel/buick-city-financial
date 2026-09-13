import React, { useState } from 'react';
import { Lock, LogOut, ShieldCheck, TrendingUp, DollarSign, FileText } from 'lucide-react';

export default function InvestPage() {
  // Institutional session persistence via browser session storage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('bcf_investor_auth') === 'true';
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targetCapital, setTargetCapital] = useState(25000);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) {
      setIsAuthenticated(true);
      sessionStorage.setItem('bcf_investor_auth', 'true');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem('bcf_investor_auth');
  };

  // If NOT authenticated, show the login gate overlay or view
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#040910] text-slate-100 font-sans pb-24">
        {/* Subheader / Gateway Banner */}
        <div className="border-b border-white/10 bg-[#07111f]/50 py-3 px-6">
          <div className="mx-auto max-w-7xl flex items-center justify-between">
            <span className="text-[10px] font-semibold tracking-[0.2em] text-sky-300 uppercase">
              Private Placement Limited Partnership Gate
            </span>
          </div>
        </div>

        {/* Login Container */}
        <div className="mx-auto max-w-md px-6 pt-20">
          <div className="rounded-3xl border border-white/10 bg-[#07111f] p-8 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="h-12 w-12 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-300 mx-auto">
                <Lock className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-white">Investor Portal Login</h2>
              <p className="text-xs text-slate-400">Authenticate to access restricted co-investment yield matrices and private placement documents.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Investor Email</label>
                <input 
                  type="email" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="investor@buickcityfinancial.com"
                  className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none transition"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Password / Key</label>
                <input 
                  type="password" 
                  required 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none transition"
                />
              </div>
              <button 
                type="submit"
                className="w-full rounded-full bg-sky-300 py-3 text-xs font-bold text-slate-950 hover:bg-sky-200 transition shadow-lg shadow-sky-300/10 cursor-pointer mt-2"
              >
                Authenticate Session →
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // If authenticated, render the full interactive investment platform & dashboard
  return (
    <div className="min-h-screen bg-[#040910] text-slate-100 font-sans pb-24">
      {/* Subheader with Secure Logout */}
      <div className="border-b border-white/10 bg-[#07111f]/50 py-3 px-6">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-sky-300 uppercase">
            Private Placement Limited Partnership Gate • Authorized
          </span>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-slate-300 hover:bg-white/10 transition cursor-pointer"
          >
            <LogOut className="h-3.5 w-3.5 text-slate-400" /> Secure Sign Out
          </button>
        </div>
      </div>

      {/* Hero Header */}
      <div className="mx-auto max-w-5xl px-6 pt-16 pb-12 text-center space-y-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-sky-300 uppercase">
          <ShieldCheck className="h-3.5 w-3.5 text-sky-400" /> Secured Investor Workspace
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
          The Alternative Real Estate <span className="text-sky-300">Capital Engine</span>
        </h1>
        <p className="mx-auto max-w-2xl text-slate-400 text-sm leading-relaxed">
          Bypassing Wall Street volatility. Buick City Financial Corporation connects direct, passive capital allocations to stabilized, high-yielding regional assets.
        </p>
      </div>

      {/* Interactive Co-Investment & Liquidity Section */}
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Co-Investment Calculator Matrix */}
        <div className="lg:col-span-2 rounded-3xl border border-white/10 bg-[#07111f] p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-300">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Co-Investment Matrix</h3>
                <p className="text-xs text-slate-400">Model allocations, lock horizons, and preferred cash flows.</p>
              </div>
            </div>
            <span className="text-xs font-semibold text-sky-300 bg-sky-500/10 border border-sky-500/30 px-3 py-1 rounded-full">
              Minimum Floor: $500
            </span>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex justify-between text-xs font-semibold text-slate-300 uppercase tracking-wider">
              <span>Target Capital Allocation Capital ($)</span>
              <span className="text-sky-300 text-base font-bold">${Number(targetCapital).toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="500" 
              max="250000" 
              step="500"
              value={targetCapital}
              onChange={(e) => setTargetCapital(e.target.value)}
              className="w-full accent-sky-300 bg-[#040910] cursor-pointer"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="rounded-2xl border border-white/10 bg-[#040910] p-4 space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Est. Annual Yield</span>
              <span className="text-xl font-bold text-emerald-400">11.8%</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#040910] p-4 space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Quarterly Payout</span>
              <span className="text-xl font-bold text-white">${Math.round((targetCapital * 0.118) / 4).toLocaleString()}</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#040910] p-4 space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Lock Horizon</span>
              <span className="text-xl font-bold text-sky-300">36 Months</span>
            </div>
          </div>
        </div>

        {/* Discretionary Liquidity & Covenants */}
        <div className="rounded-3xl border border-white/10 bg-[#07111f] p-8 shadow-2xl space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-300">
                <Lock className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Discretionary Liquidity Restriction</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Co-investment units are illiquid asset allocations locked for the selected term horizon. Early redemption requests are subject to GP approval and Right of First Refusal (ROFR) provisions.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#040910] p-4 space-y-2">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-300 block">Note:</span>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Yield payouts originate from direct debt-service or net rental distributions across regional commercial and residential property holdings.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}