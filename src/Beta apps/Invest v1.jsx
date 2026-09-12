import React, { useState } from 'react';
import { Shield, Calculator, ArrowRight, TrendingUp, Landmark, AlertCircle } from 'lucide-react';

export default function BuickCityInvestorPortal() {
  const [investment, setInvestment] = useState(1500);

  // Core BCFC Parameter Calculations
  const sharePriceFloor = 500;
  const targetAnnualYield = 0.08;
  
  const sharesPurchased = Math.floor(investment / sharePriceFloor);
  const monthlyPayout = (investment * targetAnnualYield) / 12;
  const annualPayout = investment * targetAnnualYield;
  const fiveYearReturn = annualPayout * 5;

  return (
    <div className="min-h-screen bg-[#060b13] text-slate-100 font-sans antialiased selection:bg-sky-500/30">
      
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs font-medium mb-6 uppercase tracking-wider">
          <Landmark className="w-3 h-3" /> Dedicated Community Note Portal
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Buick City Financial Corporation
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Building generational wealth for local families across Metro Flint through asset-backed, stabilized commercial real estate debt.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-24">
        
        {/* INTERACTIVE RETURNS CALCULATOR SIMULATOR */}
        <div className="lg:col-span-7 bg-[#0b1320] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400">
                <Calculator className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">Community Wealth Simulator</h2>
            </div>

            <label className="block text-sm font-medium text-slate-400 mb-3">
              Enter Target Investment Capital (Base Price Floor: $500 per share)
            </label>
            <div className="relative mb-8">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg font-bold">$</span>
              <input
                type="number"
                min="500"
                step="500"
                value={investment}
                onChange={(e) => setInvestment(Number(e.target.value))}
                className="w-full bg-[#060b13] border border-slate-700 rounded-xl py-4 pl-8 pr-4 text-xl font-bold text-white focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>

            {/* LIVE DATA GRID DISPLAY */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-[#060b13] p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Shares Purchased</div>
                <div className="text-2xl font-black text-white">{sharesPurchased}</div>
                <div className="text-xs text-slate-400 mt-1">@ $500 / Share</div>
              </div>
              <div className="bg-[#060b13] p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">Guaranteed Yield</div>
                <div className="text-2xl font-black text-sky-400">8.00%</div>
                <div className="text-xs text-slate-400 mt-1">Fixed Annual Rate</div>
              </div>
            </div>
          </div>

          {/* DYNAMIC WATERFALL DIVIDEND DISPLAY */}
          <div className="border-t border-slate-800 pt-6">
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-medium">Monthly Passive Cash Check</span>
                <span className="text-xl font-bold text-emerald-400">${monthlyPayout.toFixed(2)} / mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-medium">Annual Passive Cash Check</span>
                <span className="text-xl font-bold text-white">${annualPayout.toFixed(2)} / yr</span>
              </div>
              <div className="flex justify-between items-center border-t border-dashed border-slate-800 pt-3">
                <span className="text-white font-semibold">5-Year Cumulative Return Total</span>
                <span className="text-2xl font-black text-white">${fiveYearReturn.toFixed(2)} Cash</span>
              </div>
            </div>

            <button className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 group transition-all shadow-lg shadow-sky-500/10">
              Join Note Pool Waitlist <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* FINANCIAL PROTOCOLS & DISCLOSURE CARD */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* THE ALTERNATIVE VALUATION FRAMEWORK */}
          <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 mt-1">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">Alternative Commercial Valuation</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Buick City Financial Corporation bypasses standard, backward-looking neighborhood sales comparisons. Note safety is underwritten strictly via the <strong>Income Capitalization Approach</strong>, anchored to real-time, active tenant rental streams.
                </p>
              </div>
            </div>
          </div>

          {/* THE 1.35x DSCR CAPITAL SHIELD */}
          <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 mt-1">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">The 1.35x DSCR Capital Shield</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Every asset backing an investor's note is legally bound to clear a strict <strong>1.35x Debt Service Coverage Ratio (DSCR)</strong>. The property generates 135% of the capital required to cover mortgage debts, protecting your monthly cash checks from vacancy drops.
                </p>
              </div>
            </div>
          </div>

          {/* THE 5+2 BRIDGE-TO-EXIT LIQUIDITY WINDOW */}
          <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400 mt-1">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">5+2 Bridge-to-Exit Covenants</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Notes carry a hard 5-year fixed maturity term with an optional 2-year extension loop. At Year 7, the loan triggers a mandatory external refinance or property cash sale, recovering 100% of your principal in a single cash lump sum.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
