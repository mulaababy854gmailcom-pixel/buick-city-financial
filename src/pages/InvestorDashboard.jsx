import React, { useState } from 'react';
import { Landmark, DollarSign, Shield, ArrowUpRight, FileText, CheckCircle2, Clock, LogOut, Layers, AlertCircle } from 'lucide-react';

export default function InvestorDashboard({ activeApplications = [], onNavigateBack }) {
  const [activeTab, setActiveTab] = useState('portfolio');

  // Calculate aggregate portfolio metrics from active applications/investments
  const totalAllocated = activeApplications.reduce((sum, app) => sum + (app.allocation || 0), 0) || 25000;
  const projectedMonthlyIncome = activeApplications.reduce((sum, app) => sum + (app.monthlyCashFlow || 0), 177.08);
  const weightedReturn = activeApplications.length > 0 
    ? (activeApplications.reduce((sum, app) => sum + (app.targetedPreferredReturn * (app.allocation || 25000)), 0) / totalAllocated) * 100 
    : 8.50;

  return (
    <div className="min-h-screen bg-[#060b13] text-slate-100 font-sans antialiased selection:bg-sky-500/30">
      
      {/* DASHBOARD TOP NAVIGATION */}
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
                Investor Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex flex-col text-right">
              <span className="text-sm font-bold text-white">Darius D. Thomas</span>
              <span className="text-xs text-emerald-400 font-medium">Verified LP Partner</span>
            </div>
            <button 
              type="button"
              onClick={onNavigateBack}
              className="bg-slate-800/60 hover:bg-slate-800 text-slate-300 border border-slate-700 font-semibold py-2 px-4 rounded-xl text-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <LogOut className="w-4 h-4 text-slate-400" /> Exit Portal
            </button>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-8">
        
        {/* PORTFOLIO METRICS OVERVIEW */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 shadow-xl border-t-2 border-t-sky-500">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total Active Capital</span>
              <div className="p-2 bg-sky-500/10 rounded-xl text-sky-400"><DollarSign className="w-5 h-5" /></div>
            </div>
            <div className="text-3xl font-black text-white">${totalAllocated.toLocaleString()}</div>
            <div className="text-xs text-emerald-400 font-semibold mt-2 flex items-center gap-1">
              <ArrowUpRight className="w-3.5 h-3.5" /> 100% First-Position Secured
            </div>
          </div>

          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 shadow-xl border-t-2 border-t-emerald-500">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Projected Monthly Payout</span>
              <div className="p-2 bg-emerald-500/10 rounded-xl text-emerald-400"><Layers className="w-5 h-5" /></div>
            </div>
            <div className="text-3xl font-black text-emerald-400">${projectedMonthlyIncome.toFixed(2)} <span className="text-xs text-slate-500 font-normal">/ mo</span></div>
            <div className="text-xs text-slate-400 mt-2">Wired via ACH on the 1st</div>
          </div>

          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 shadow-xl border-t-2 border-t-amber-500">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Blended Preferred Yield</span>
              <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400"><Shield className="w-5 h-5" /></div>
            </div>
            <div className="text-3xl font-black text-white">{weightedReturn.toFixed(2)}%</div>
            <div className="text-xs text-amber-400 mt-2">Tiered Horizon Average</div>
          </div>
        </div>

        {/* NAVIGATION SUB-TABS */}
        <div className="flex border-b border-slate-800 gap-8">
          <button 
            type="button"
            onClick={() => setActiveTab('portfolio')}
            className={`pb-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab === 'portfolio' ? 'border-sky-500 text-white' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            Active Holdings &amp; Applications
          </button>
          <button 
            type="button"
            onClick={() => setActiveTab('reports')}
            className={`pb-4 text-sm font-bold border-b-2 transition-all cursor-pointer ${activeTab === 'reports' ? 'border-sky-500 text-white' : 'border-transparent text-slate-400 hover:text-slate-200'}`}
          >
            Asset Audits &amp; Tax Documents
          </button>
        </div>

        {/* TAB CONTENT: PORTFOLIO & APPLICATIONS */}
        {activeTab === 'portfolio' ? (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">Submitted Subscriptions &amp; Holdings</h3>
              <span className="text-xs text-slate-400">Showing all asset allocations</span>
            </div>

            {activeApplications.length === 0 ? (
              <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-12 text-center space-y-4 shadow-xl">
                <div className="w-12 h-12 bg-sky-500/10 text-sky-400 rounded-full flex items-center justify-center mx-auto border border-sky-500/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Default Core Holding Active</h4>
                <p className="text-sm text-slate-400 max-w-md mx-auto">
                  Your primary 5-Year LP Co-Investment Track ($25,000 allocation at 8.50% preferred return) is actively generating monthly dividends.
                </p>
                <div className="inline-block p-4 bg-[#060b13] rounded-2xl border border-slate-800 text-left text-xs space-y-2 mt-4 max-w-md w-full">
                  <div className="flex justify-between"><span className="text-slate-500">Asset Engine:</span> <span className="text-slate-200 font-bold">Alternative Real Estate LP Track</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Lock Horizon:</span> <span className="text-sky-400 font-bold">5 Years (8.50%)</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Status:</span> <span className="text-emerald-400 font-bold">Active &amp; Performing</span></div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
                {activeApplications.map((app, index) => (
                  <div key={index} className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-xl">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[10px] font-bold uppercase tracking-wider">Underwriting Review</span>
                        <span className="text-xs text-slate-500">Submitted via Portal</span>
                      </div>
                      <h4 className="text-lg font-bold text-white">{app.productName}</h4>
                      <p className="text-xs text-slate-400">Lock Horizon: <strong className="text-slate-200">{app.lockTerm} Years</strong> | Payout: <strong className="text-slate-200 capitalize">{app.payoutMethod}</strong></p>
                    </div>

                    <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end border-t md:border-t-0 pt-4 md:pt-0 border-slate-800">
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">Allocation Target</span>
                        <span className="text-lg font-black text-white">${app.allocation.toLocaleString()}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-slate-500 block">Projected Yield</span>
                        <span className="text-lg font-black text-emerald-400">{(app.targetedPreferredReturn * 100).toFixed(2)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Quarterly Audited Reports &amp; Tax Documents</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400"><FileText className="w-6 h-6" /></div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Q2 2026 Asset-Level Audit</h4>
                    <p className="text-xs text-slate-400">Flint Regional Residential Portfolio Statement</p>
                  </div>
                </div>
                <button type="button" className="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 px-3.5 py-2 rounded-xl font-semibold transition-colors cursor-pointer">Download PDF</button>
              </div>

              <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 flex items-center justify-between shadow-xl">
                <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400"><FileText className="w-6 h-6" /></div>
                <div>
                  <h4 className="text-sm font-bold text-white">Schedule K-1 Tax Package (2025)</h4>
                  <p className="text-xs text-slate-400">Partnership Income Reporting Statement</p>
                </div>
                <button type="button" className="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 px-3.5 py-2 rounded-xl font-semibold transition-colors cursor-pointer">Download PDF</button>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}