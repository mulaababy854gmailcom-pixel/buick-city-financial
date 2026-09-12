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
  const [projectCost, setProjectCost] = useState(150000);
  const [partnerCapitalPct, setPartnerCapitalPct] = useState(30); // Partner contributes 30% capital
  const [equitySplit, setEquitySplit] = useState(50); // 50/50 Equity Split
  const [showCriteriaModal, setShowCriteriaModal] = useState(false);

  // Dynamic Financial Modeling Calculations
  const partnerCapitalInput = (projectCost * (partnerCapitalPct / 100));
  const bcfcCapitalContribution = projectCost - partnerCapitalInput;
  const partnerEquityShare = equitySplit;
  const bcfcEquityShare = 100 - equitySplit;

  return (
    <div className="min-h-screen bg-[#060b13] text-slate-100 font-sans antialiased selection:bg-sky-500/30">
      
      {/* BRAND NAVIGATION HEADER */}
      <header className="border-b border-slate-800 bg-[#060b13]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-sky-500/10 rounded-xl text-sky-400 border border-sky-500/20">
              <Building2 className="w-6 h-6" />
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
            <a href="#overview" className="hover:text-white transition-colors">Program Overview</a>
            <a href="#simulator" className="hover:text-white transition-colors">JV Modeling Tool</a>
            <a href="#pillars" className="hover:text-white transition-colors">Developer Mentorship</a>
          </nav>
          <button type="button" className="bg-sky-500/10 hover:bg-sky-500/20 text-sky-400 border border-sky-500/30 font-bold py-2.5 px-5 rounded-xl text-sm transition-all">
            Submit Pitch
          </button>
        </div>
      </header>

      {/* HERO BANNER */}
      <section id="overview" className="max-w-7xl mx-auto px-6 pt-16 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 text-xs font-semibold mb-6 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> The Developer Enabler Track
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 max-w-4xl mx-auto leading-tight">
          Incubating the Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-emerald-400">Real Estate Developers</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
          Pool capital, operational talent, and institutional expertise with Buick City Financial Corporation. We lower barriers to entry by providing mentorship, flexible equity structures, and institutional guidance for local builders and operators.
        </p>
      </section>

      {/* CORE PROGRAM VALUE PILLARS */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
            <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 w-fit mb-4 border border-sky-500/20">
              <Handshake className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Co-Active Management</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Maintain active decision-making rights. We partner alongside you in acquisition, rehabilitation, lease-up, and long-term asset management.
            </p>
          </div>

          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 w-fit mb-4 border border-emerald-500/20">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Flexible Equity Structures</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Lowering entry barriers with customized capital-to-equity ratios. Get credit for on-the-ground sweat equity and local project oversight.
            </p>
          </div>

          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 relative overflow-hidden">
            <div className="p-3 bg-amber-500/10 rounded-xl text-amber-400 w-fit mb-4 border border-amber-500/20">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Institutional Mentorship</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Gain direct access to underwriting frameworks, construction oversight, legal deal structures, and institutional exit strategies.
            </p>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKFLOW GRID */}
      <main id="simulator" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16">
        
        {/* LEFT COLUMN: JV STRUCTURING MODELER */}
        <div className="lg:col-span-7 bg-[#0b1320] border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl flex flex-col justify-between border-t-2 border-t-emerald-500">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Joint Venture Structuring Matrix</h2>
                <p className="text-xs text-slate-400 mt-0.5">Model capital contributions, sweat equity offsets, and profit participation.</p>
              </div>
            </div>

            {/* TOTAL ACQUISITION & REHAB COST */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-semibold text-slate-300">
                  Estimated Total Capital Required ($)
                </label>
                <span className="text-xs font-bold text-slate-500">Acquisition + Rehab</span>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg font-bold">$</span>
                <input
                  type="number"
                  min="25000"
                  step="5000"
                  value={projectCost}
                  onChange={(e) => setProjectCost(Number(e.target.value))}
                  className="w-full bg-[#060b13] border border-slate-700 rounded-xl py-4 pl-9 pr-4 text-xl font-black text-white focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            {/* PARTNER CAPITAL CONTRIBUTION SLIDER */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-300">
                  Partner Capital Contribution: <span className="text-emerald-400 font-bold">{partnerCapitalPct}%</span>
                </label>
                <span className="text-xs text-slate-400 font-medium">
                  ${partnerCapitalInput.toLocaleString()}
                </span>
              </div>
              <input 
                type="range" 
                min="10" 
                max="50" 
                step="5"
                value={partnerCapitalPct}
                onChange={(e) => setPartnerCapitalPct(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-[#060b13] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>10% (High Sweat Equity)</span>
                <span>50% (Equal Capital)</span>
              </div>
            </div>

            {/* EQUITY SPLIT SLIDER */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-slate-300">
                  Agreed Equity / Upside Split: <span className="text-sky-400 font-bold">{partnerEquityShare}% Partner / {bcfcEquityShare}% BCFC</span>
                </label>
              </div>
              <input 
                type="range" 
                min="30" 
                max="70" 
                step="5"
                value={equitySplit}
                onChange={(e) => setEquitySplit(Number(e.target.value))}
                className="w-full accent-sky-500 bg-[#060b13] h-2 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-500 mt-1">
                <span>30% Partner Share</span>
                <span>70% Partner Share</span>
              </div>
            </div>

            {/* DYNAMIC SPLIT BREAKDOWN DISPLAY */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="bg-[#060b13] p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Partner Out-of-Pocket</div>
                <div className="text-2xl font-black text-emerald-400">${partnerCapitalInput.toLocaleString()}</div>
                <div className="text-xs text-slate-400 mt-1">{partnerEquityShare}% Total Equity Ownership</div>
              </div>
              <div className="bg-[#060b13] p-4 rounded-xl border border-slate-800">
                <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1">BCFC Co-Investment</div>
                <div className="text-2xl font-black text-sky-400">${bcfcCapitalContribution.toLocaleString()}</div>
                <div className="text-xs text-slate-400 mt-1">{bcfcEquityShare}% Total Equity Ownership</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 mt-6">
            <button 
              type="button" 
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 group transition-all shadow-lg shadow-emerald-500/10"
            >
              Apply as Operational Developer Partner <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: CO-DEVELOPMENT GUIDELINES */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400 mt-1">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-base font-bold text-white">Who Is This Track For?</h3>
                  <button 
                    type="button" 
                    onClick={() => setShowCriteriaModal(true)}
                    className="text-slate-500 hover:text-sky-400 transition-colors"
                  >
                    <HelpCircle className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  Ideal for local contractors, property managers, and aspiring investors who have deal flow or operational capacity, but lack capital or institutional underwriting background.
                </p>
                <div className="p-3 bg-[#060b13] rounded-lg border border-slate-800 text-xs text-slate-500">
                  <span className="text-slate-300 font-semibold">Goal:</span> Build local property ownership while co-creating institutional-grade housing and commercial assets.
                </div>
              </div>
            </div>
          </div>

          <div id="pillars" className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-emerald-500/10 rounded-lg text-emerald-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">The BCFC Mentorship Commitment</h3>
            </div>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Full Underwriting Support:</strong> We evaluate budget feasibility, contractor bids, and exit valuation models before closing.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Shared Project Management:</strong> Integrated software tracking for draw schedules, material orders, and timeline enforcement.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-slate-200">Capital Protection Framework:</strong> Joint bank account sign-offs ensure full transparency for all project disbursements.</span>
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
              <h3 className="text-lg font-bold text-white">JV Selection Criteria</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              We look for partners who bring localized market insight, clear deal sourcing, or direct construction capability. Projects must fall within targeted growth corridors and demonstrate strong cash-flow or value-add margins.
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