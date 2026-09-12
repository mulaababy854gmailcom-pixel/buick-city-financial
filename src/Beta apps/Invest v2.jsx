import React, { useState } from 'react';
import { Shield, Calculator, ArrowRight, Landmark, Percent, RefreshCw, DollarSign, Activity } from 'lucide-react';

export default function BuickCityCoInvestmentPortal() {
  const [allocation, setAllocation] = useState(1500);
  const [payoutMethod, setPayoutMethod] = useState('monthly'); // 'monthly' or 'reinvest'

  // Core Co-Investing Parameters
  const minimumEntryFloor = 500;
  const targetedPreferredReturn = 0.08;
  
  const monthlyCashFlow = (allocation * targetedPreferredReturn) / 12;
  const annualCashFlow = allocation * targetedPreferredReturn;
  const projectedFiveYearYield = annualCashFlow * 5;

  return (
    <div className="min-h-screen bg-[#060b13] text-slate-100 font-sans antialiased selection:bg-sky-500/30">
      
      {/* SECTION HEADER */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs font-medium mb-6 uppercase tracking-wider">
          <Landmark className="w-3 h-3" /> Retail Co-Investment &amp; Equity Gateway
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
          Buick City Financial Corporation
        </h1>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Accessible Real Estate Co-Investing. Earn an 8.00% preferred return with direct passive equity ownership advantages starting at just $500.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-24">
        
        {/* INTERACTIVE VALUE SIMULATOR AND DISTRIBUTION CONTROLS */}
        <div className="lg:col-span-7 bg-[#0b1320] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-2xl flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400">
                <Calculator className="w-6 h-6" />
              </div>
              <h2 className="text-xl font-bold text-white">Co-Investment Dashboard Simulator</h2>
            </div>

            {/* CAPITAL INPUT */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-400 mb-3">
                Enter Your Capital Allocation Amount (Minimum Floor: $500)
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
              </div>
            </div>

            {/* DISTRIBUTION TOGGLE INTERFACE */}
            <div className="mb-8">
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
                  <span className="text-xs text-slate-400">Compound your returns monthly by automatically buying more asset pool equity.</span>
                </button>
              </div>
            </div>

            {/* PERFORMANCE METRICS OVERVIEW */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#060b13] p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Targeted Preferred Return</div>
                <div className="text-2xl font-black text-white">8.00%</div>
                <div className="text-xs text-slate-400 mt-1">Asset-Backed Cushion</div>
              </div>
              <div className="bg-[#060b13] p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-semibold text-sky-400 uppercase tracking-wider mb-1">Investment Status</div>
                <div className="text-2xl font-black text-sky-400">LP Partner</div>
                <div className="text-xs text-slate-400 mt-1">Passive Equity Allocation</div>
              </div>
            </div>
          </div>

          {/* DYNAMIC WATERFALL CASH OUTPUT TRACKER */}
          <div className="border-t border-slate-800 pt-6">
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-medium">Projected Monthly Yield</span>
                <span className="text-xl font-bold text-emerald-400">${monthlyCashFlow.toFixed(2)} / mo</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-medium">Annualized Distribution</span>
                <span className="text-xl font-bold text-white">${annualCashFlow.toFixed(2)} / yr</span>
              </div>
              <div className="flex justify-between items-center border-t border-dashed border-slate-800 pt-3">
                <span className="text-white font-semibold">5-Year Accumulated Return Projections</span>
                <span className="text-2xl font-black text-white">${projectedFiveYearYield.toFixed(2)} Cash</span>
              </div>
            </div>

            <button className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 group transition-all shadow-lg shadow-sky-500/10">
              Create Account &amp; Access Dashboard <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ECOSYSTEM VALUE PROP TILES */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* THE DIGITAL MANAGEMENT DASHBOARD */}
          <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400 mt-1">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">Real-Time Performance Tracking</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Log into your secure portal from any mobile device to monitor asset cash flows, review active property developments, audit your accrued profits, and track your local community wealth impact metrics in real time.
                </p>
              </div>
            </div>
          </div>

          {/* THE K-1 DEPRECIATION EXEMPTION */}
          <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400 mt-1">
                <Percent className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">Direct Equity Tax Advantages</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  By utilizing a direct co-investment structure instead of traditional retail notes, your capital unlocks actual real estate depreciation benefits. Even at a $500 allocation level, partners receive a standard corporate Schedule K-1 to legally write off losses against income.
                </p>
              </div>
            </div>
          </div>

          {/* THE 1.35x DSCR REVENUE SAFETY BUFFER */}
          <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-amber-500/10 rounded-lg text-amber-400 mt-1">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">Stabilized Income Security</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  All asset offerings are underwritten to maintain a minimum 1.35x Debt Service Coverage Ratio (DSCR), ensuring substantial operational cash flow buffers before returns are distributed.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}