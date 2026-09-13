import React from 'react';
import { TrendingUp, ShieldCheck, BarChart3, ArrowRight, Lock } from 'lucide-react';

export default function InvestorPerformanceView({ onOpenInquiry }) {
  return (
    <div className="min-h-screen bg-[#070b12] text-slate-100 px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-medium tracking-wide uppercase mb-4">
              <TrendingUp className="w-3.5 h-3.5" /> Track Record & Performance
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white">Historical Yield & Asset Performance</h1>
            <p className="text-slate-400 mt-2 max-w-2xl">
              Transparent, asset-backed metrics reflecting Buick City Financial Corporation’s disciplined capital deployment across regional commercial and residential holdings.
            </p>
          </div>
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
          >
            Submit Investment Inquiry <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden">
            <div className="text-slate-400 text-sm font-medium">Target Net Yield Range</div>
            <div className="text-3xl font-extrabold text-cyan-400 mt-2">6.00% – 10.00%</div>
            <div className="text-xs text-slate-500 mt-1">Based on 1 to 10-yr lock horizons</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden">
            <div className="text-slate-400 text-sm font-medium">Asset Backing</div>
            <div className="text-3xl font-extrabold text-white mt-2">1st Position</div>
            <div className="text-xs text-slate-500 mt-1">Secured by real estate collateral</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden">
            <div className="text-slate-400 text-sm font-medium">Default Rate</div>
            <div className="text-3xl font-extrabold text-emerald-400 mt-2">0.00%</div>
            <div className="text-xs text-slate-500 mt-1">Historical portfolio track record</div>
          </div>
          <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-6 relative overflow-hidden">
            <div className="text-slate-400 text-sm font-medium">Minimum Entrance Floor</div>
            <div className="text-3xl font-extrabold text-white mt-2">$25,000</div>
            <div className="text-xs text-slate-500 mt-1">Co-investment capital tier</div>
          </div>
        </div>

        {/* Performance Breakdown Table / Chart Area */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-cyan-400" /> Lock-In Horizon vs. Target Yield Matrix
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400 text-sm">
                  <th className="pb-4 font-semibold">Commitment Horizon</th>
                  <th className="pb-4 font-semibold">Target Annualized Yield</th>
                  <th className="pb-4 font-semibold">Distribution Schedule</th>
                  <th className="pb-4 font-semibold">Liquidity Terms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                <tr>
                  <td className="py-4 font-medium text-white">1 Year</td>
                  <td className="py-4 text-cyan-400 font-bold">6.00%</td>
                  <td className="py-4 text-slate-300">Quarterly</td>
                  <td className="py-4 text-slate-400">Standard Lock</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-white">3 Years</td>
                  <td className="py-4 text-cyan-400 font-bold">7.50%</td>
                  <td className="py-4 text-slate-300">Quarterly</td>
                  <td className="py-4 text-slate-400">Standard Lock</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-white">5 Years</td>
                  <td className="py-4 text-cyan-400 font-bold">8.50%</td>
                  <td className="py-4 text-slate-300">Monthly / Quarterly</td>
                  <td className="py-4 text-slate-400">Standard Lock</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-white">7 Years</td>
                  <td className="py-4 text-cyan-400 font-bold">9.25%</td>
                  <td className="py-4 text-slate-300">Monthly / Quarterly</td>
                  <td className="py-4 text-slate-400">Standard Lock</td>
                </tr>
                <tr>
                  <td className="py-4 font-medium text-white">10 Years</td>
                  <td className="py-4 text-cyan-400 font-bold">10.00%</td>
                  <td className="py-4 text-slate-300">Monthly / Quarterly</td>
                  <td className="py-4 text-slate-400">Standard Lock + Priority GP Allocation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}