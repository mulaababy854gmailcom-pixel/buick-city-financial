import React, { useState } from 'react';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Compass, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  Handshake, 
  Briefcase, 
  Sparkles,
  HelpCircle,
  X
} from 'lucide-react';

export default function JointVentures() {
  const [projectCost, setProjectCost] = useState(1000000);
  const [grantCapital, setGrantCapital] = useState(100000); // Grants / Non-dilutive
  const [bcfcCapitalPct, setBcfcCapitalPct] = useState(60); // BCFC Share of Equity Capital
  const [thirdPartyPct, setThirdPartyPct] = useState(20); // Third Party LP Share
  const [showCriteriaModal, setShowCriteriaModal] = useState(false);

  // Capital Stack Modeling Calculations
  const effectiveGrant = Math.min(grantCapital, projectCost);
  const netEquityRequired = Math.max(0, projectCost - effectiveGrant);

  // Capital Shares (Constrained to 100% total)
  const bcfcPct = Math.min(bcfcCapitalPct, 100);
  const maxThirdParty = 100 - bcfcPct;
  const lpPct = Math.min(thirdPartyPct, maxThirdParty);
  const sponsorPct = Math.max(0, 100 - (bcfcPct + lpPct));

  // Dollar Amount Calculations
  const bcfcDollar = (netEquityRequired * bcfcPct) / 100;
  const lpDollar = (netEquityRequired * lpPct) / 100;
  const sponsorDollar = (netEquityRequired * sponsorPct) / 100;

  return (
    <div className="min-h-screen bg-[#060b13] text-slate-100 font-sans antialiased selection:bg-sky-500/30">
      {/* HERO BANNER */}
      <section id="overview" className="max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold mb-6 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> Structured B2B Equity & Capital Stacks
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
          Flexible Capital & <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Pro-Rata Equity Structuring</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
          Buick City Financial Corporation provides co-investment equity structures where ownership correlates directly with capital placement. Combine BCFC equity, sponsor capital, third-party LPs, and non-dilutive grants into a single cohesive project capital stack.
        </p>
      </section>

      {/* CORE VALUE PILLARS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
            <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 w-fit mb-4 border border-sky-500/20">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Pro-Rata Equity Alignment</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Equity participation matches financial exposure directly, ensuring complete transparency across all equity partners and sponsors.
            </p>
          </div>

          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 w-fit mb-4 border border-emerald-500/20">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Capital Stack Flexibility</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Incorporate public grants, municipal subsidies, sponsor cash equity, and third-party LPs without distorting ownership formulas.
            </p>
          </div>

          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 w-fit mb-4 border border-amber-500/20">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Institutional B2B Mentorship</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Direct access to professional underwriting, draw oversight, legal structuring, and commercial refinancing routes.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW GRID */}
      <main id="simulator" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16">
        
        {/* LEFT COLUMN: CAPITAL STACK SIMULATOR */}
        <div className="lg:col-span-7 bg-[#0b1320] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col justify-between border-t-2 border-t-emerald-500">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Capital Stack & Equity Matrix</h2>
                <p className="text-xs text-slate-400 mt-0.5">Model grants, sponsor equity, third-party LPs, and BCFC funding.</p>
              </div>
            </div>

            {/* TOTAL PROJECT COST */}
            <div>
              <label className="text-sm font-semibold text-slate-300 block mb-2">
                Total Project Cost ($)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg font-bold">$</span>
                <input
                  type="number"
                  min="50000"
                  step="25000"
                  value={projectCost}
                  onChange={(e) => setProjectCost(Number(e.target.value))}
                  className="w-full bg-[#060b13] border border-slate-700 rounded-xl py-3.5 pl-9 pr-4 text-xl font-black text-white focus:outline-none focus:border-emerald-500"
                />
              </div>
            </div>

            {/* GRANTS & NON-DILUTIVE CAPITAL */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-300">
                  Grants / Subsidies (Non-Dilutive)
                </label>
                <span className="text-xs text-emerald-400 font-bold">0% Equity Dilution</span>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg font-bold">$</span>
                <input
                  type="number"
                  min="0"
                  step="10000"
                  value={grantCapital}
                  onChange={(e) => setGrantCapital(Number(e.target.value))}
                  className="w-full bg-[#060b13] border border-slate-700 rounded-xl py-3.5 pl-9 pr-4 text-lg font-bold text-emerald-400 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Net equity capital needed after grants: <strong className="text-slate-300">${netEquityRequired.toLocaleString()}</strong>
              </p>
            </div>

            {/* BCFC EQUITY CONTRIBUTION SLIDER */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-semibold text-slate-300">
                  BCFC Equity Share: <span className="text-sky-400 font-bold">{bcfcPct}%</span>
                </label>
                <span className="text-xs text-slate-400">${bcfcDollar.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="90" 
                step="5"
                value={bcfcPct}
                onChange={(e) => setBcfcCapitalPct(Number(e.target.value))}
                className="w-full accent-sky-500 bg-[#060b13] h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* THIRD PARTY LP SLIDER */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-sm font-semibold text-slate-300">
                  Third-Party LP Share: <span className="text-amber-400 font-bold">{lpPct}%</span>
                </label>
                <span className="text-xs text-slate-400">${lpDollar.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="0" 
                max={maxThirdParty} 
                step="5"
                value={lpPct}
                onChange={(e) => setThirdPartyPct(Number(e.target.value))}
                className="w-full accent-amber-500 bg-[#060b13] h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* DYNAMIC BREAKDOWN DISPLAY */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="bg-[#060b13] p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Sponsor Equity</div>
                <div className="text-lg font-black text-emerald-400">${sponsorDollar.toLocaleString()}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{sponsorPct}% Equity</div>
              </div>

              <div className="bg-[#060b13] p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] font-bold text-sky-400 uppercase tracking-wider">BCFC Capital</div>
                <div className="text-lg font-black text-sky-400">${bcfcDollar.toLocaleString()}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{bcfcPct}% Equity</div>
              </div>

              <div className="bg-[#060b13] p-3 rounded-xl border border-slate-800">
                <div className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">Third-Party LP</div>
                <div className="text-lg font-black text-amber-400">${lpDollar.toLocaleString()}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{lpPct}% Equity</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 mt-6">
            <button 
              type="button" 
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 group transition-all shadow-lg shadow-emerald-500/10"
            >
              Submit B2B Project Deal Sheet <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: GUIDELINES */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400 mt-1">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-bold text-white">Target Corporate Partners</h3>
                  <button 
                    type="button" 
                    onClick={() => setShowCriteriaModal(true)}
                    className="text-slate-500 hover:text-sky-400 transition-colors"
                  >
                    <HelpCircle className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  For corporate real estate entities, developers, and general partners seeking structured debt or pro-rata co-investment equity.
                </p>
                <div className="p-3 bg-[#060b13] rounded-lg border border-slate-800 text-xs text-slate-500">
                  <span className="text-slate-300 font-semibold">Strict Standard:</span> All deals must be originated under a valid corporate entity (LLC, Corp) for commercial purpose only.
                </div>
              </div>
            </div>
          </div>

          <div id="pillars" className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">The BCFC B2B Framework</h3>
            </div>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Pro-Rata Capital Match:</strong> Equity and risk exposure strictly align with invested dollar amounts.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Non-Dilutive Grant Recognition:</strong> Subsidies and grants directly offset required equity without diluting ownership.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Transparent Governance:</strong> Dual-signature draw accounts and transparent accounting software.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* CRITERIA MODAL */}
      {showCriteriaModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0b1320] border border-slate-800 rounded-2xl p-6 max-w-md w-full relative shadow-2xl">
            <button 
              type="button"
              onClick={() => setShowCriteriaModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white">Underwriting & Entity Criteria</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Buick City Financial Corporation operates strictly as a B2B private lender. Applicants must hold an active business entity (LLC, S-Corp, C-Corp) and demonstrate clear property control, executable scope of work, or verified project deal flow.
            </p>
            <button 
              type="button"
              onClick={() => setShowCriteriaModal(false)}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2 rounded-xl transition-colors text-sm"
            >
              Understood
            </button>
          </div>
        </div>
      )}
    </div>
  );
}