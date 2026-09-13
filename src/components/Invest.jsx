import React, { useState } from 'react';
import { Shield, Calculator, ArrowRight, Landmark, Percent, RefreshCw, DollarSign, Clock, HelpCircle, Lock, X, CheckCircle, ChevronLeft, Layers } from 'lucide-react';

// Institutional Tiered Yield Matrix Mapping
const getTieredYield = (year) => {
  if (year === 1) return 0.0600;  // 6.00%
  if (year === 3) return 0.0750;  // 7.50%
  if (year === 5) return 0.0850;  // 8.50%
  if (year === 7) return 0.0925;  // 9.25%
  if (year === 10) return 0.1000; // 10.00%
  return 0.0800; // Fallback
};

export default function Invest({ onNavigateToPortal, onApplyForProduct }) {
  const [allocation, setAllocation] = useState(25000);
  const [lockTerm, setLockTerm] = useState(5);
  const [payoutMethod, setPayoutMethod] = useState('monthly');
  const [showROFRModal, setShowROFRModal] = useState(false);
  const [isApplying, setIsApplying] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Dynamic Financial Engines
  const minimumEntryFloor = 500;
  const targetedPreferredReturn = getTieredYield(lockTerm);
  const monthlyCashFlow = (allocation * targetedPreferredReturn) / 12;
  const annualCashFlow = allocation * targetedPreferredReturn;
  const totalTermYield = annualCashFlow * lockTerm;

  const handleApplyClick = () => {
    const productPayload = {
      productName: 'Alternative Real Estate Capital Engine - LP Co-Investment',
      allocation,
      lockTerm,
      payoutMethod,
      targetedPreferredReturn,
      monthlyCashFlow,
      annualCashFlow,
      totalTermYield
    };

    if (onApplyForProduct) {
      onApplyForProduct(productPayload);
    } else {
      setIsApplying(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // RENDER APPLICATION VIEW WITH PRODUCT REQUIREMENTS & INFO
  if (isApplying) {
    return (
      <div className="min-h-screen bg-[#060b13] text-slate-100 font-sans antialiased py-12 px-6">
        <div className="max-w-3xl mx-auto">
          <button 
            type="button"
            onClick={() => { setIsApplying(false); setSubmitted(false); }}
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Matrix Simulator
          </button>

          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 border border-sky-500/20">
                <Landmark className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold tracking-widest text-sky-400 uppercase block">Formal Subscription Portal</span>
                <h1 className="text-2xl font-black text-white">Limited Partnership Application</h1>
              </div>
            </div>

            {/* SELECTED PRODUCT SUMMARY CARD */}
            <div className="bg-[#060b13] border border-slate-800 rounded-2xl p-6 mb-8">
              <h3 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
                Selected Product Parameters &amp; Terms
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-slate-500 block text-xs">Target Allocation</span>
                  <span className="text-white font-black text-lg">${allocation.toLocaleString()}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Lock-In Horizon</span>
                  <span className="text-sky-400 font-black text-lg">{lockTerm} Years ({(targetedPreferredReturn * 100).toFixed(2)}%)</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-xs">Distribution Track</span>
                  <span className="text-emerald-400 font-black text-lg capitalize">{payoutMethod === 'monthly' ? 'Monthly Dividend' : 'Equity Reinvestment'}</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800/60 grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500">Projected Monthly Payout:</span> <span className="text-slate-200 font-bold">${monthlyCashFlow.toFixed(2)} / mo</span>
                </div>
                <div>
                  <span className="text-slate-500">Cumulative Term Yield:</span> <span className="text-slate-200 font-bold">${totalTermYield.toFixed(2)}</span>
                </div>
              </div>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-bold text-white">Application Received</h2>
                <p className="text-slate-400 max-w-md mx-auto text-sm">
                  Your formal subscription packet for the {lockTerm}-Year LP Track has been logged. Compliance and underwriting will review your documentation shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setIsApplying(false)}
                  className="mt-4 bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-6 rounded-xl text-sm transition-all"
                >
                  Return to Dashboard
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Legal Full Name / Entity</label>
                    <input required type="text" placeholder="Darius D. Thomas" className="w-full bg-[#060b13] border border-slate-700 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-sky-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Primary Email Address</label>
                    <input required type="email" placeholder="investor@buickcityfinancial.com" className="w-full bg-[#060b13] border border-slate-700 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-sky-500" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Accredited Investor Status</label>
                    <select className="w-full bg-[#060b13] border border-slate-700 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-sky-500">
                      <option>Accredited Investor (Income / Net Worth)</option>
                      <option>Qualified Purchaser</option>
                      <option>Sophisticated Entity / Institutional</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Funding Source</label>
                    <select className="w-full bg-[#060b13] border border-slate-700 rounded-xl p-3.5 text-sm text-white focus:outline-none focus:border-sky-500">
                      <option>Direct Wire Transfer (ACH / Fedwire)</option>
                      <option>Self-Directed IRA / LLC Custodian</option>
                      <option>Corporate Treasury Account</option>
                    </select>
                  </div>
                </div>

                <div className="p-4 bg-[#060b13] rounded-xl border border-slate-800 text-xs text-slate-400 space-y-2">
                  <span className="font-bold text-slate-200 block uppercase tracking-wider">Product Compliance &amp; Requirements Note:</span>
                  <p>By submitting this application, you acknowledge that capital allocations are locked for the selected {lockTerm}-year horizon, subject to Right of First Refusal (ROFR) provisions and first-position asset security covenants.</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-500/10 cursor-pointer text-sm"
                >
                  Execute Subscription Application <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#060b13] text-slate-100 font-sans antialiased selection:bg-sky-500/30">
      
      {/* BRAND NAVIGATION HEADER */}
      <header className="border-b border-slate-800 bg-[#060b13]/85 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-sky-500/10 rounded-xl text-sky-400 border border-sky-500/20">
              <Landmark className="w-6 h-6" />
            </div>
            <div>
              <span className="text-lg font-black tracking-tight text-white block uppercase">
                Buick City
              </span>
              <span className="text-xs font-bold tracking-widest text-slate-400 block uppercase -mt-1">
                Financial Corporation
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-400">
            <a href="#matrix" className="hover:text-white transition-colors">Yield Matrix</a>
            <a href="#covenants" className="hover:text-white transition-colors">Protective Covenants</a>
            <a href="#faq" className="hover:text-white transition-colors">Partnership FAQ</a>
          </nav>
          <button 
            type="button" 
            onClick={onNavigateToPortal}
            className="bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 font-bold py-2.5 px-5 rounded-xl text-sm transition-all shadow-md cursor-pointer"
          >
            Portal Login
          </button>
        </div>
      </header>

      {/* CORE MANIFESTO HERO BANNER */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs font-medium mb-6 uppercase tracking-wider">
          <Layers className="w-3 h-3" /> Private Placement Limited Partnership Gate
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
          The Alternative Real Estate <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Capital Engine</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
          Bypassing Wall Street volatility. Buick City Financial Corporation connects direct, passive capital allocations to stabilized, high-yielding regional assets.
        </p>
      </div>

      {/* PRIMARY WORKFLOW MATRIX GRID */}
      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16">
        
        {/* LEFT COLUMN: INTERACTIVE INPUT SIMULATOR & CONTROL NODES */}
        <div id="calculator" className="lg:col-span-7 bg-[#0b1320] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col justify-between border-t-2 border-t-sky-500">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Co-Investment Matrix</h2>
                <p className="text-xs text-slate-400 mt-0.5">Model allocations, lock horizons, and preferred cash flows.</p>
              </div>
            </div>

            {/* CAPITAL ALLOCATION NODE */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-slate-300">
                  Target Capital Allocation Capital ($)
                </label>
                <span className="text-xs font-bold text-slate-500">Minimum Entrance Floor: $500</span>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg font-bold">$</span>
                <input
                  type="number"
                  min="500"
                  step="500"
                  value={allocation}
                  onChange={(e) => setAllocation(Number(e.target.value))}
                  className="w-full bg-[#060b13] border border-slate-700 rounded-xl py-4 pl-9 pr-4 text-xl font-black text-white focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>
            </div>

            {/* HORIZON LIFECYCLE DURATION NODES */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-slate-300">
                  Select Partnership Lock-In Horizon
                </label>
                <span className="text-xs text-amber-400 flex items-center gap-1 font-bold bg-amber-500/5 px-2 py-0.5 rounded-full border border-amber-500/10">
                  <Lock className="w-3 h-3" /> Term Commitments Enforced
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 3, 5, 7, 10].map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setLockTerm(year)}
                    className={`py-3.5 px-2 rounded-xl border font-black text-center text-sm transition-all flex flex-col items-center justify-center gap-1 cursor-pointer ${
                      lockTerm === year
                        ? 'bg-sky-500/20 border-sky-500 text-white shadow-lg scale-[1.02]'
                        : 'bg-[#060b13] border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <span className="tracking-tight">{year} Yr{year > 1 ? 's' : ''}</span>
                    <span className="text-[10px] text-emerald-400 font-bold">{(getTieredYield(year) * 100).toFixed(2)}%</span>
                  </button>
                ))}
              </div>
            </div>

            {/* DISTRIBUTION SELECTION MATRIX */}
            <div>
              <label className="block text-sm font-semibold text-slate-300 mb-3">
                Select Your Yield Distribution Preference
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPayoutMethod('monthly')}
                  className={`p-4 rounded-xl border flex flex-col gap-2 text-left transition-all cursor-pointer ${
                    payoutMethod === 'monthly'
                      ? 'bg-sky-500/10 border-sky-500 text-white shadow-lg ring-1 ring-sky-500/30'
                      : 'bg-[#060b13] border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 font-black text-sm text-slate-200">
                    <DollarSign className="w-4 h-4 text-emerald-400" /> Dividend Income LP Track
                  </div>
                  <span className="text-xs text-slate-400 leading-relaxed">Receive your tiered preferred cash yields wired programmatically via ACH directly to your bank account on the 1st of every calendar month.</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPayoutMethod('reinvest')}
                  className={`p-4 rounded-xl border flex flex-col gap-2 text-left transition-all cursor-pointer ${
                    payoutMethod === 'reinvest'
                      ? 'bg-sky-500/10 border-sky-500 text-white shadow-lg ring-1 ring-sky-500/30'
                      : 'bg-[#060b13] border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 font-black text-sm text-slate-200">
                    <RefreshCw className="w-4 h-4 text-sky-400" /> Equity Accumulator LP Track
                  </div>
                  <span className="text-xs text-slate-400 leading-relaxed">Compound your regional real estate footprint by automatically reallocating distributions to acquire additional property equity blocks.</span>
                </button>
              </div>
            </div>

            {/* SUMMARY STAT METRICS */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-[#060b13] p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Preferred Return Rate</div>
                <div className="text-2xl font-black text-sky-400">{(targetedPreferredReturn * 100).toFixed(2)}%</div>
                <div className="text-xs text-slate-400 mt-1">Tiered Horizon Rate</div>
              </div>
              <div className="bg-[#060b13] p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">Partnership Status</div>
                <div className="text-2xl font-black text-sky-400">LP Partner</div>
                <div className="text-xs text-slate-400 mt-1">Passive Limited Partner</div>
              </div>
            </div>
          </div>

          {/* DYNAMIC WATERFALL CASH FLOW DISPLAY */}
          <div className="border-t border-slate-800 pt-6 mt-6">
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-medium">Estimated Monthly Cash Flow</span>
                <span className="text-xl font-bold text-emerald-400">${monthlyCashFlow.toFixed(2)} / mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-medium">Annualized Preferred Yield</span>
                <span className="text-xl font-bold text-white">${annualCashFlow.toFixed(2)} / yr</span>
              </div>
              <div className="flex justify-between items-center border-t border-dashed border-slate-800 pt-3">
                <span className="text-white font-semibold">{lockTerm}-Year Cumulative Return Projection</span>
                <span className="text-2xl font-black text-white">${totalTermYield.toFixed(2)} Cash</span>
              </div>
            </div>

            <button 
              type="button" 
              onClick={handleApplyClick}
              className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 group transition-all shadow-lg shadow-sky-500/10 cursor-pointer"
            >
              Apply For This Product <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: COVENANTS & LIQUIDITY DISCLOSURES */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 mt-1">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-bold text-white">Discretionary Liquidity Restriction</h3>
                  <button 
                    type="button" 
                    onClick={() => setShowROFRModal(true)}
                    className="text-slate-500 hover:text-sky-400 transition-colors cursor-pointer"
                  >
                    <HelpCircle className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Co-investment units are illiquid asset allocations locked for the selected term horizon. Early redemption requests are subject to GP approval and Right of First Refusal (ROFR) provisions.
                </p>
                <div className="p-3 bg-[#060b13] rounded-lg border border-slate-800 text-xs text-slate-500">
                  <span className="text-slate-300 font-semibold">Note:</span> Yield payouts originate from direct debt-service or net rental distributions across regional commercial and residential property holdings.
                </div>
              </div>
            </div>
          </div>

          <div id="covenants" className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">Investor Protection Covenants</h3>
            </div>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span><strong className="text-slate-200">First-Position Asset Security:</strong> Capital allocations are collateralized against real property deeds or Senior Secured Mortgages.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span><strong className="text-slate-200">Tiered Preferred Yield Priority:</strong> LPs receive distributions up to their tiered horizon return before Sponsor equity profit participation.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span><strong className="text-slate-200">Quarterly Audited Statements:</strong> Fully transparent asset level accounting and occupancy performance reporting.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* MATRIX REFERENCE TABLE */}
      <section id="matrix" className="max-w-7xl mx-auto px-6 pb-16">
        <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-2">The Tiered Yield Escalation Matrix</h3>
            <p className="text-sm text-slate-400">
              By scaling preferred returns upward based on lock-in duration, longer terms are incentivized to provide stable, long-term treasury reserves.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-[#060b13] text-slate-400 uppercase border-b border-slate-800">
                <tr>
                  <th className="p-3">Lock-In Horizon</th>
                  <th className="p-3">Annual Preferred Yield</th>
                  <th className="p-3">Monthly Payout (on $25,000)</th>
                  <th className="p-3">Total Term Net Profit</th>
                  <th className="p-3">Market Comparison Position</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className={lockTerm === 1 ? 'bg-sky-500/10 text-white font-medium' : 'hover:bg-slate-900/50'}>
                  <td className="p-3 font-semibold text-sky-400">1-Year Lock</td>
                  <td className="p-3 font-bold">6.00%</td>
                  <td className="p-3">$125.00 / mo</td>
                  <td className="p-3">$1,500.00</td>
                  <td className="p-3 text-slate-400">Beats standard high-yield savings accounts and 12-month CDs.</td>
                </tr>
                <tr className={lockTerm === 3 ? 'bg-sky-500/10 text-white font-medium' : 'hover:bg-slate-900/50'}>
                  <td className="p-3 font-semibold text-sky-400">3-Year Lock</td>
                  <td className="p-3 font-bold">7.50%</td>
                  <td className="p-3">$156.25 / mo</td>
                  <td className="p-3">$5,625.00</td>
                  <td className="p-3 text-slate-400">Highly competitive with regional real estate notes.</td>
                </tr>
                <tr className={lockTerm === 5 ? 'bg-sky-500/10 text-white font-medium' : 'hover:bg-slate-900/50'}>
                  <td className="p-3 font-semibold text-sky-400">5-Year Lock</td>
                  <td className="p-3 font-bold">8.50%</td>
                  <td className="p-3">$177.08 / mo</td>
                  <td className="p-3">$10,625.00</td>
                  <td className="p-3 text-slate-400">Your core sweet-spot volume driver.</td>
                </tr>
                <tr className={lockTerm === 7 ? 'bg-sky-500/10 text-white font-medium' : 'hover:bg-slate-900/50'}>
                  <td className="p-3 font-semibold text-sky-400">7-Year Lock</td>
                  <td className="p-3 font-bold">9.25%</td>
                  <td className="p-3">$192.70 / mo</td>
                  <td className="p-3">$16,187.50</td>
                  <td className="p-3 text-slate-400">Matches maximum life of standard lending exit timelines.</td>
                </tr>
                <tr className={lockTerm === 10 ? 'bg-sky-500/10 text-white font-medium' : 'hover:bg-slate-900/50'}>
                  <td className="p-3 font-semibold text-sky-400">10-Year Lock</td>
                  <td className="p-3 font-bold">10.00%</td>
                  <td className="p-3">$208.33 / mo</td>
                  <td className="p-3">$25,000.00</td>
                  <td className="p-3 text-slate-400">Institutional-grade double-digit threshold. Doubles initial capital.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ROFR EXPLANATION MODAL */}
      {showROFRModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 max-w-md w-full relative shadow-2xl">
            <button 
              type="button"
              onClick={() => setShowROFRModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Right of First Refusal (ROFR)</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              If an LP requests an early exit before the term lock-in period concludes, Buick City Financial Corporation maintains the right to purchase or match third-party transfer offers for the unit allocation before outside sales occur.
            </p>
            <button 
              type="button"
              onClick={() => setShowROFRModal(false)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 rounded-xl transition-colors text-sm cursor-pointer"
            >
              Understand &amp; Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}