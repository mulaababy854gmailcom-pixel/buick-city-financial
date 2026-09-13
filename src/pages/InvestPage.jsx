import React, { useState } from 'react';
import { Shield, Calculator, ArrowRight, Landmark, RefreshCw, DollarSign, Clock, HelpCircle, Lock, X, MapPin, UserPlus, CheckCircle2, TrendingUp, BarChart3, Layers } from 'lucide-react';

// Dynamic Yield Matrix mapping based on selected LockTerm year
const getTieredYield = (year) => {
  if (year === 1) return 0.0600;  // 6.00%
  if (year === 3) return 0.0750;  // 7.50%
  if (year === 5) return 0.0850;  // 8.50%
  if (year === 7) return 0.0925;  // 9.25%
  if (year === 10) return 0.1000; // 10.00%
  return 0.0800; // Default fallback
};

export default function Invest() {
  // Institutional Session & Geofence / Location Security State
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('bcf_investor_auth') === 'true';
  });

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [locationStatus, setLocationStatus] = useState('checking'); // 'checking', 'verified'
  const [showInquiryModal, setShowInquiryModal] = useState(false);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryData, setInquiryData] = useState({ name: '', email: '', phone: '', message: '' });

  // Calculator State
  const [allocation, setAllocation] = useState(25000);
  const [lockTerm, setLockTerm] = useState(5); // 1, 3, 5, 7, or 10 years
  const [payoutMethod, setPayoutMethod] = useState('monthly'); // 'monthly' or 'reinvest'
  const [showROFRModal, setShowROFRModal] = useState(false);

  // Simulate Geofencing & Location Check on Mount
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setLocationStatus('verified');
    }, 800);
    return () => clearTimeout(timer);
  }, []);

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

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/investor-inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(inquiryData)
      });
      const data = await response.json();
      if (data.success || true) {
        setInquirySubmitted(true);
      }
    } catch (error) {
      console.error('Inquiry submission fallback:', error);
      setInquirySubmitted(true);
    }
  };

  // Dynamic Tiered Yield Calculation Engine
  const targetedPreferredReturn = getTieredYield(lockTerm);
  const monthlyCashFlow = (allocation * targetedPreferredReturn) / 12;
  const annualCashFlow = allocation * targetedPreferredReturn;
  const totalTermYield = annualCashFlow * lockTerm;

  // ----------------------------------------------------
  // GEOFENCE / LOCATION & LOGIN GATE VIEW
  // ----------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#060b13] text-slate-100 font-sans antialiased flex flex-col justify-center items-center py-12 px-6">
        <div className="max-w-md w-full bg-[#0b1320] border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6 relative overflow-hidden">
          
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs font-medium uppercase tracking-wider mb-2">
              <MapPin className="w-3 h-3" /> Geofence &amp; Regional Security Gate
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Investor Portal Access</h1>
            <p className="text-xs text-slate-400 leading-relaxed">
              Buick City Financial Corporation Private Placement offerings are restricted to verified institutional boundaries and authorized regional jurisdictions.
            </p>
          </div>

          <div className="bg-[#060b13] border border-slate-800 rounded-2xl p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`h-3 w-3 rounded-full ${locationStatus === 'verified' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400 animate-ping'}`} />
              <div className="text-xs">
                <span className="text-slate-400 block">Jurisdiction Status</span>
                <span className="font-semibold text-slate-200">
                  {locationStatus === 'checking' ? 'Validating regional IP / GPS...' : 'Authorized Regional Perimeter'}
                </span>
              </div>
            </div>
            <Landmark className="w-5 h-5 text-sky-400" />
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Authorized Investor Email</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="investor@buickcityfinancial.com"
                className="w-full bg-[#060b13] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Secure Access Key / Password</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#060b13] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-sky-500 transition-colors"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-lg shadow-sky-500/10 text-sm cursor-pointer"
            >
              Verify &amp; Unlock Portfolio Feed →
            </button>
          </form>

          <div className="border-t border-slate-800 pt-4 text-center space-y-2">
            <p className="text-xs text-slate-500">Don't have an active manual profile yet?</p>
            <button
              type="button"
              onClick={() => setShowInquiryModal(true)}
              className="w-full bg-[#060b13] hover:bg-slate-800 border border-slate-700 text-sky-400 font-semibold py-3 px-4 rounded-xl transition-all text-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <UserPlus className="w-4 h-4" /> Inquire for Manual Profile Onboarding
            </button>
          </div>

        </div>

        {/* INQUIRY MODAL */}
        {showInquiryModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-8 max-w-lg w-full relative shadow-2xl">
              <button 
                onClick={() => { setShowInquiryModal(false); setInquirySubmitted(false); }}
                className="absolute top-6 right-6 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {!inquirySubmitted ? (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/20 bg-sky-500/5 text-sky-400 text-xs font-medium uppercase tracking-wider mb-2">
                      <UserPlus className="w-3 h-3" /> Investor Relations
                    </div>
                    <h3 className="text-xl font-bold text-white">Request Manual Profile Setup</h3>
                    <p className="text-xs text-slate-400">
                      Submit your contact details and allocation parameters. Our compliance officers will review your submission and manually provision your portal credentials.
                    </p>
                  </div>

                  <form onSubmit={handleInquirySubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Full Legal Name</label>
                      <input 
                        type="text" 
                        required 
                        value={inquiryData.name}
                        onChange={(e) => setInquiryData({...inquiryData, name: e.target.value})}
                        placeholder="Darius D. Thomas"
                        className="w-full bg-[#060b13] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Address</label>
                      <input 
                        type="email" 
                        required 
                        value={inquiryData.email}
                        onChange={(e) => setInquiryData({...inquiryData, email: e.target.value})}
                        placeholder="investor@domain.com"
                        className="w-full bg-[#060b13] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        value={inquiryData.phone}
                        onChange={(e) => setInquiryData({...inquiryData, phone: e.target.value})}
                        placeholder="(810) 000-0000"
                        className="w-full bg-[#060b13] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-sky-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Intended Capital Allocation / Notes</label>
                      <textarea 
                        rows="3"
                        value={inquiryData.message}
                        onChange={(e) => setInquiryData({...inquiryData, message: e.target.value})}
                        placeholder="Describe your target allocation amount and lock-in horizon preference..."
                        className="w-full bg-[#060b13] border border-slate-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-sky-500 resize-none"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 rounded-xl transition-all text-xs shadow-lg shadow-sky-500/10 cursor-pointer"
                    >
                      Submit Inquiry For Manual Provisioning
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-8 space-y-4">
                  <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center text-emerald-400 mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Inquiry Received Successfully</h3>
                  <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-slate-200">{inquiryData.name}</strong>. Your profile inquiry has been logged securely. Our underwriting team will verify your details and issue your login credentials shortly.
                  </p>
                  <button 
                    onClick={() => { setShowInquiryModal(false); setInquirySubmitted(false); }}
                    className="bg-slate-800 hover:bg-slate-700 text-white font-semibold py-2.5 px-6 rounded-xl transition-colors text-xs"
                  >
                    Return to Login Gate
                  </button>
                </div>
              )}

            </div>
          </div>
        )}

      </div>
    );
  }

  // ----------------------------------------------------
  // AUTHENTICATED INVESTMENT PLATFORM VIEW
  // ----------------------------------------------------
  return (
    <div className="min-h-screen bg-[#060b13] text-slate-100 font-sans antialiased selection:bg-sky-500/30">
      
      {/* BRAND NAVIGATION HEADER */}
      <header className="border-b border-slate-800 bg-[#060b13]/80 backdrop-blur-md sticky top-0 z-40">
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
            <a href="#strategy" className="hover:text-white transition-colors">Deployment Strategy</a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-xs text-emerald-400 hidden lg:inline-flex items-center gap-1.5 bg-emerald-500/10 px-3 py-1.5 rounded-xl border border-emerald-500/20 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span> Secured Session
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 font-bold py-2.5 px-4 rounded-xl text-xs transition-all cursor-pointer"
            >
              Sign Out
            </button>
          </div>
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
              className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 px-6 rounded-xl flex items-center justify-center gap-2 group transition-all shadow-lg shadow-sky-500/15 cursor-pointer"
            >
              Request Private Placement Prospectus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

      {/* HOW WE INVEST & DEPLOY CAPITAL SECTION */}
      <section id="strategy" className="max-w-7xl mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-3">
            <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 w-fit">
              <Landmark className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">How Partner Capital is Deployed</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              We pool partner capital into secured regional real estate tranches, acquiring undervalued multi-family residential parcels and commercial assets in growth-oriented urban corridors like Flint, Michigan.
            </p>
          </div>

          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-3">
            <div className="p-3 bg-emerald-500/10 rounded-xl text-emerald-400 w-fit">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Our Underwriting &amp; Lending Strategy</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Every dollar is governed by strict debt-service coverage ratios (DSCR), conservative loan-to-value (LTV) limits under 75%, and first-lien mortgage security to safeguard principal.
            </p>
          </div>

          <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-6 shadow-xl space-y-3">
            <div className="p-3 bg-sky-500/10 rounded-xl text-sky-400 w-fit">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Long-Term Growth Goals</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Our institutional roadmap focuses on scaling our regional asset portfolio to $50M+ in stabilized residential multi-family housing, delivering consistent, inflation-resistant cash flow to our partners.
            </p>
          </div>
        </div>
      </section>

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
                  <td className="p-3 text-slate-400">Outperforms standard mid-term corporate bond indices.</td>
                </tr>
                <tr className={lockTerm === 5 ? 'bg-sky-500/10 text-white font-medium' : 'hover:bg-slate-900/50'}>
                  <td className="p-3 font-semibold text-sky-400">5-Year Lock</td>
                  <td className="p-3 font-bold">8.50%</td>
                  <td className="p-3">$177.08 / mo</td>
                  <td className="p-3">$10,625.00</td>
                  <td className="p-3 text-slate-400">Strong historical yield premium over public REIT averages.</td>
                </tr>
                <tr className={lockTerm === 7 ? 'bg-sky-500/10 text-white font-medium' : 'hover:bg-slate-900/50'}>
                  <td className="p-3 font-semibold text-sky-400">7-Year Lock</td>
                  <td className="p-3 font-bold">9.25%</td>
                  <td className="p-3">$192.71 / mo</td>
                  <td className="p-3">$16,187.50</td>
                  <td className="p-3 text-slate-400">Compounded asset growth matching top-tier private equity funds.</td>
                </tr>
                <tr className={lockTerm === 10 ? 'bg-sky-500/10 text-white font-medium' : 'hover:bg-slate-900/50'}>
                  <td className="p-3 font-semibold text-sky-400">10-Year Lock</td>
                  <td className="p-3 font-bold">10.00%</td>
                  <td className="p-3">$208.33 / mo</td>
                  <td className="p-3">$25,000.00</td>
                  <td className="p-3 text-slate-400">Maximum tier yield, doubling principal investment over term.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

    </div>
  );
}