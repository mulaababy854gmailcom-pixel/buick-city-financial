import React, { useState } from 'react';
import { Lock, LogOut, ShieldCheck, TrendingUp, DollarSign, FileText, CheckCircle2 } from 'lucide-react';

export default function InvestPage({ onApplyForProduct }) {
  // Institutional session persistence via browser session storage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('bcf_investor_auth') === 'true';
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [targetCapital, setTargetCapital] = useState(25000);
  const [selectedLockTerm, setSelectedLockTerm] = useState('36'); // '12', '36', '60'
  const [distributionMode, setDistributionMode] = useState('compound'); // 'compound' or 'payout'
  const [submitted, setSubmitted] = useState(false);

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

  // Dynamic Yield Escalation Logic based on Capital Tier & Term
  const getYieldRate = () => {
    let base = 9.5;
    if (targetCapital >= 50000) base = 10.5;
    if (targetCapital >= 100000) base = 11.8;
    if (targetCapital >= 250000) base = 13.2;

    if (selectedLockTerm === '36') base += 1.0;
    if (selectedLockTerm === '60') base += 2.2;
    return base;
  };

  const annualYieldPercent = getYieldRate();
  const annualReturnAmount = (targetCapital * (annualYieldPercent / 100));
  const quarterlyPayout = annualReturnAmount / 4;

  const handleAllocationSubmit = () => {
    setSubmitted(true);
    const payload = {
      id: Date.now(),
      title: `Co-Investment Allocation ($${Number(targetCapital).toLocaleString()})`,
      type: 'Private Placement LP',
      amount: Number(targetCapital),
      yield: `${annualYieldPercent.toFixed(1)}%`,
      term: `${selectedLockTerm} Months`,
      mode: distributionMode,
      date: new Date().toLocaleDateString()
    };
    if (onApplyForProduct) {
      // Passes payload and simulates routing/syncing to investor workspace
      onApplyForProduct(payload);
    }
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

  // If authenticated, render the fully unlocked, dynamic interactive investment platform & dashboard
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

          {/* Allocation Slider */}
          <div className="space-y-3 pt-2">
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
              onChange={(e) => {
                setTargetCapital(Number(e.target.value));
                setSubmitted(false);
              }}
              className="w-full accent-sky-300 bg-[#040910] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500 font-mono">
              <span>$500 (Floor)</span>
              <span>$50,000</span>
              <span>$100,000</span>
              <span>$250,000+</span>
            </div>
          </div>

          {/* Lock Horizon Selector */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">Lock Horizon Term</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { months: '12', label: '12 Months', desc: 'Standard Yield' },
                { months: '36', label: '36 Months', desc: '+1.0% Bonus' },
                { months: '60', label: '60 Months', desc: '+2.2% Max Yield' },
              ].map((term) => (
                <button
                  key={term.months}
                  type="button"
                  onClick={() => {
                    setSelectedLockTerm(term.months);
                    setSubmitted(false);
                  }}
                  className={`rounded-2xl border p-3 text-left transition cursor-pointer ${
                    selectedLockTerm === term.months 
                      ? 'border-sky-300 bg-sky-500/10 text-white shadow-lg shadow-sky-500/10' 
                      : 'border-white/10 bg-[#040910] text-slate-400 hover:border-white/30'
                  }`}
                >
                  <p className="text-xs font-bold text-white">{term.label}</p>
                  <p className="text-[10px] text-sky-300 mt-0.5">{term.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Distribution Mode Toggle */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block">Distribution Preference</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setDistributionMode('compound')}
                className={`rounded-xl border p-2.5 text-xs font-semibold transition cursor-pointer ${
                  distributionMode === 'compound' 
                    ? 'border-sky-300 bg-sky-500/10 text-white' 
                    : 'border-white/10 bg-[#040910] text-slate-400 hover:border-white/30'
                }`}
              >
                🔄 Compound Quarterly Reinvestment
              </button>
              <button
                type="button"
                onClick={() => setDistributionMode('payout')}
                className={`rounded-xl border p-2.5 text-xs font-semibold transition cursor-pointer ${
                  distributionMode === 'payout' 
                    ? 'border-sky-300 bg-sky-500/10 text-white' 
                    : 'border-white/10 bg-[#040910] text-slate-400 hover:border-white/30'
                }`}
              >
                💵 Direct Quarterly Cash Payout
              </button>
            </div>
          </div>

          {/* Metrics Output Bar */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="rounded-2xl border border-white/10 bg-[#040910] p-4 space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Est. Annual Yield</span>
              <span className="text-xl font-bold text-emerald-400">{annualYieldPercent.toFixed(1)}%</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#040910] p-4 space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Quarterly Payout</span>
              <span className="text-xl font-bold text-white">${Math.round(quarterlyPayout).toLocaleString()}</span>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#040910] p-4 space-y-1">
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-semibold block">Selected Horizon</span>
              <span className="text-xl font-bold text-sky-300">{selectedLockTerm} Months</span>
            </div>
          </div>

          {/* Allocation Submission CTA */}
          <div className="pt-2">
            {submitted ? (
              <div className="flex items-center justify-center gap-2 w-full rounded-2xl bg-emerald-500/10 border border-emerald-500/30 py-4 text-xs font-bold text-emerald-300">
                <CheckCircle2 className="h-4 w-4" /> Allocation Subscribed & Synced to Investor Workspace
              </div>
            ) : (
              <button
                type="button"
                onClick={handleAllocationSubmit}
                className="w-full rounded-2xl bg-sky-300 py-4 text-xs font-bold text-slate-950 hover:bg-sky-200 transition shadow-lg shadow-sky-300/10 cursor-pointer"
              >
                Lock In ${Number(targetCapital).toLocaleString()} Allocation at {annualYieldPercent.toFixed(1)}% Yield →
              </button>
            )}
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

      {/* Tiered Yield Escalation Reference Table */}
      <div className="mx-auto max-w-7xl px-6 mt-12">
        <div className="rounded-3xl border border-white/10 bg-[#07111f] p-8 shadow-2xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-300">
                <FileText className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Tiered Yield Escalation Matrix</h3>
                <p className="text-xs text-slate-400">Referential breakdown of return ceilings by capital tier and commitment length.</p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-white/10 text-slate-400 uppercase tracking-wider">
                  <th className="pb-3 font-semibold">Capital Tier</th>
                  <th className="pb-3 font-semibold">12-Month Horizon</th>
                  <th className="pb-3 font-semibold">36-Month Horizon</th>
                  <th className="pb-3 font-semibold">60-Month Horizon</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="py-3 font-medium text-white">$500 – $49,995 (Standard)</td>
                  <td className="py-3 text-slate-400">9.5%</td>
                  <td className="py-3 text-sky-300">10.5%</td>
                  <td className="py-3 text-emerald-400 font-bold">11.7%</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">$50,000 – $99,995 (Growth)</td>
                  <td className="py-3 text-slate-400">10.5%</td>
                  <td className="py-3 text-sky-300">11.5%</td>
                  <td className="py-3 text-emerald-400 font-bold">12.7%</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">$100,000 – $249,995 (Premier)</td>
                  <td className="py-3 text-slate-400">11.8%</td>
                  <td className="py-3 text-sky-300">12.8%</td>
                  <td className="py-3 text-emerald-400 font-bold">14.0%</td>
                </tr>
                <tr>
                  <td className="py-3 font-medium text-white">$250,000+ (Institutional)</td>
                  <td className="py-3 text-slate-400">13.2%</td>
                  <td className="py-3 text-sky-300">14.2%</td>
                  <td className="py-3 text-emerald-400 font-bold">15.4%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}