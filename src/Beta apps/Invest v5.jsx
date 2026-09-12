import React, { useState } from 'react';
import { Shield, Calculator, ArrowRight, Landmark, Percent, RefreshCw, DollarSign, Clock, HelpCircle, Lock, X } from 'lucide-react';

// Dynamic Yield Matrix mapping based on selected LockTerm year
const getTieredYield = (year) => {
  if (year === 1) return 0.0600; // 6.00%
  if (year === 3) return 0.0750; // 7.50%
  if (year === 5) return 0.0850; // 8.50%
  if (year === 7) return 0.0925; // 9.25%
  if (year === 10) return 0.1000; // 10.00%
  return 0.0800; // Default fallback
};

export default function Invest() {
  const [allocation, setAllocation] = useState(25000);
  const [lockTerm, setLockTerm] = useState(5); // 1, 3, 5, 7, or 10 years
  const [payoutMethod, setPayoutMethod] = useState('monthly'); // 'monthly' or 'reinvest'
  const [showROFRModal, setShowROFRModal] = useState(false);

  // Dynamic Tiered Yield Calculation Engine
  const minimumEntryFloor = 500;
  const targetedPreferredReturn = getTieredYield(lockTerm);
  
  const monthlyCashFlow = (allocation * targetedPreferredReturn) / 12;
  const annualCashFlow = allocation * targetedPreferredReturn;
  const totalTermYield = annualCashFlow * lockTerm;

  return (
    <div className="min-h-screen bg-[#060b13] text-slate-100 font-sans antialiased selection:bg-sky-500/30 py-12">
      
      {/* COMPONENT HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs font-medium mb-6 uppercase tracking-wider">
          <Landmark className="w-3 h-3" /> Private Placement Partnership Gate
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Buick City Financial Corporation
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Direct Real Estate Co-Investing &amp; Passive Capital Partnership Portfolios. Capitalizing stabilized, cash-flowing regional assets.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12">
        
        {/* INTERACTIVE VALUE SIMULATOR AND DISTRIBUTION CONTROLS */}
        <div className="lg:col-span-7 bg-[#0b1320] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col justify-between">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400">
                <Calculator className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">Co-Investment Matrix</h2>
            </div>

            {/* CAPITAL INPUT */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-3">
                Target Co-Investment Capital Allocation Amount ($)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg font-bold">$</span>
                <input
                  type="number"
                  min="500"
                  step="500"
                  value={allocation}
                  onChange={(e) => setAllocation(Number(e.target.value))}
                  className="w-full bg-[#060b13] border border-slate-700 rounded-xl py-4 pl-8 pr-4 text-xl font-bold text-white focus:outline-none focus:border-sky-500 transition-colors"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-500">Minimum: $500</span>
              </div>
            </div>

            {/* DURATION LOCK-IN SELECTOR */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-slate-400">
                  Select Partnership Lock-In Horizon
                </label>
                <span className="text-xs text-amber-400 flex items-center gap-1 font-medium">
                  <Lock className="w-3 h-3" /> Strict Term Commitments Apply
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {[1, 3, 5, 7, 10].map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => setLockTerm(year)}
                    className={`py-3 px-2 rounded-xl border font-bold text-center text-sm transition-all ${
                      lockTerm === year
                        ? 'bg-sky-500/20 border-sky-500 text-white shadow-lg'
                        : 'bg-[#060b13] border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div>{year} Yr{year > 1 ? 's' : ''}</div>
                    <div className="text-[10px] text-sky-400 font-normal mt-0.5">
                      {(getTieredYield(year) * 100).toFixed(2)}%
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* YIELD DISTRIBUTION TOGGLE INTERFACE */}
            <div>
              <label className="block text-sm font-medium text-slate-400 mb-3">
                Select Your Yield Distribution Preference
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPayoutMethod('monthly')}
                  className={`p-4 rounded-xl border flex flex-col gap-2 text-left transition-all ${
                    payoutMethod === 'monthly'
                      ? 'bg-sky-500/10 border-sky-500 text-white shadow-lg'
                      : 'bg-[#060b13] border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold">
                    <DollarSign className="w-4 h-4 text-emerald-400" /> Monthly Payout
                  </div>
                  <span className="text-xs text-slate-400">Receive cash yields directly to your bank account every month.</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPayoutMethod('reinvest')}
                  className={`p-4 rounded-xl border flex flex-col gap-2 text-left transition-all ${
                    payoutMethod === 'reinvest'
                      ? 'bg-sky-500/10 border-sky-500 text-white shadow-lg'
                      : 'bg-[#060b13] border-slate-800 text-slate-400 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold">
                    <RefreshCw className="w-4 h-4 text-sky-400" /> Auto-Reinvest
                  </div>
                  <span className="text-xs text-slate-400">Compound your returns monthly by automatically acquiring more portfolio equity.</span>
                </button>
              </div>
            </div>

            {/* PLATFORM METRICS SUMMARY */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#060b13] p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Targeted Preferred Return</div>
                <div className="text-2xl font-black text-sky-400">{(targetedPreferredReturn * 100).toFixed(2)}%</div>
                <div className="text-xs text-slate-400 mt-1">Tiered Horizon Rate</div>
              </div>
              <div className="bg-[#060b13] p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">Partnership Status</div>
                <div className="text-2xl font-black text-sky-400">LP Partner</div>
                <div className="text-xs text-slate-400 mt-1">Passive Limited Partner</div>
              </div>
            </div>
          </div>

          {/* DYNAMIC WATERFALL DISTRIBUTION CASH FLOW */}
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

            <button className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 group transition-all shadow-lg shadow-sky-500/10">
              Request Private Placement Prospectus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* LEGAL DISCLOSURES & ASSET COVENANTS */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
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
                    className="text-slate-500 hover:text-sky-400 transition-colors"
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

          <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-4">
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
      </div>

      {/* TIERED YIELD ESCALATION MATRIX REFERENCE TABLE */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl">
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
                  <td className="p-3 text-slate-400">Matches the maximum life of our CEYS lending exit timelines.</td>
                </tr>
                <tr className={lockTerm === 10 ? 'bg-sky-500/10 text-white font-medium' : 'hover:bg-slate-900/50'}>
                  <td className="p-3 font-semibold text-sky-400">10-Year Lock</td>
                  <td className="p-3 font-bold">10.00%</td>
                  <td className="p-3">$208.33 / mo</td>
                  <td className="p-3">$25,000.00</td>
                  <td className="p-3 text-slate-400">Institutional-grade double-digit threshold. Doubles your money.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ROFR EXPLANATION MODAL */}
      {showROFRModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 max-w-md w-full relative shadow-2xl">
            <button 
              onClick={() => setShowROFRModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
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
              onClick={() => setShowROFRModal(false)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 rounded-xl transition-colors text-sm"
            >
              Understand &amp; Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}