import React, { useState } from 'react';
import { Building2, FileText, FolderKanban, ShieldCheck, UserCog } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ClientPortal() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('applications');

  // Simulated state data containers
  const [applications] = useState([]); 
  const [activeLoans] = useState([]); 
  const [jointVentures] = useState([]); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070b12] text-white flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#0e1626] border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Client Portal Login</h2>
            <p className="text-slate-400 text-sm mt-2">Access your commercial loan applications, joint ventures, and asset portfolio.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Email Address</label>
              <input 
                type="email" 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@buickcityfinancial.com"
                className="w-full bg-[#070b12] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-300"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Password</label>
              <input 
                type="password" 
                required 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#070b12] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-sky-300"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-sky-300 hover:bg-sky-200 text-slate-950 font-bold py-3 rounded-lg transition-all shadow-lg shadow-sky-300/10 mt-2 cursor-pointer"
            >
              Sign In to Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#040910] text-slate-100 py-12 px-6 pb-24">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header and Quick Navigation Tabs */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/10 pb-6 gap-4">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-sky-300 font-semibold block mb-1">Client Portfolio Hub</span>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Dashboard Overview</h1>
          </div>
          <button 
            onClick={() => navigate('/submit-deal')}
            className="rounded-full bg-sky-300 hover:bg-sky-200 text-slate-950 font-semibold px-5 py-2.5 text-xs transition shadow-lg shadow-sky-300/10 cursor-pointer"
          >
            + Submit New Project
          </button>
        </div>

        {/* Tab Navigation Bar */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab('applications')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
              activeTab === 'applications' ? 'bg-sky-500/10 text-sky-300 border border-sky-500/30' : 'text-slate-400 hover:text-white bg-white/5 border border-transparent'
            }`}
          >
            <FileText className="h-3.5 w-3.5" /> Active Applications ({applications.length})
          </button>
          <button
            onClick={() => setActiveTab('loans')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
              activeTab === 'loans' ? 'bg-sky-500/10 text-sky-300 border border-sky-500/30' : 'text-slate-400 hover:text-white bg-white/5 border border-transparent'
            }`}
          >
            <Building2 className="h-3.5 w-3.5" /> Funded Loans ({activeLoans.length})
          </button>
          <button
            onClick={() => setActiveTab('jv')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
              activeTab === 'jv' ? 'bg-sky-500/10 text-sky-300 border border-sky-500/30' : 'text-slate-400 hover:text-white bg-white/5 border border-transparent'
            }`}
          >
            <FolderKanban className="h-3.5 w-3.5" /> Joint Ventures ({jointVentures.length})
          </button>
          <button
            onClick={() => setActiveTab('docs')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition cursor-pointer ${
              activeTab === 'docs' ? 'bg-sky-500/10 text-sky-300 border border-sky-500/30' : 'text-slate-400 hover:text-white bg-white/5 border border-transparent'
            }`}
          >
            <ShieldCheck className="h-3.5 w-3.5" /> Compliance & Docs
          </button>
        </div>

        {/* Dynamic Tab Content Area */}
        {activeTab === 'applications' && (
          <div className="rounded-3xl border border-white/10 bg-[#07111f] p-12 text-center space-y-6 shadow-2xl max-w-3xl mx-auto">
            <div className="h-16 w-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-300 mx-auto">
              <FileText className="h-8 w-8" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-lg font-bold text-white">No Active Applications</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                You currently have no pending underwriting packages under review. Submit a project to start tracking milestones.
              </p>
            </div>
            <button
              onClick={() => navigate('/submit-deal')}
              className="rounded-full bg-sky-300 px-6 py-3 text-xs font-semibold text-slate-950 hover:bg-sky-200 transition shadow-lg shadow-sky-300/10 cursor-pointer"
            >
              Launch Deal Wizard →
            </button>
          </div>
        )}

        {activeTab === 'loans' && (
          <div className="rounded-3xl border border-white/10 bg-[#07111f] p-12 text-center space-y-4 shadow-2xl max-w-3xl mx-auto">
            <Building2 className="h-12 w-12 text-sky-300 mx-auto opacity-80" />
            <h3 className="text-lg font-bold text-white">Funded Portfolios & Debt Instruments</h3>
            <p className="text-xs text-slate-400">Active commercial mortgages, DSCR credit lines, and repayment ledgers will appear here upon closing.</p>
          </div>
        )}

        {activeTab === 'jv' && (
          <div className="rounded-3xl border border-white/10 bg-[#07111f] p-12 text-center space-y-4 shadow-2xl max-w-3xl mx-auto">
            <FolderKanban className="h-12 w-12 text-sky-300 mx-auto opacity-80" />
            <h3 className="text-lg font-bold text-white">Joint Venture Assets</h3>
            <p className="text-xs text-slate-400">Track equity participation, capital contributions, and multi-family development performance metrics.</p>
          </div>
        )}

        {activeTab === 'docs' && (
          <div className="rounded-3xl border border-white/10 bg-[#07111f] p-12 text-center space-y-4 shadow-2xl max-w-3xl mx-auto">
            <ShieldCheck className="h-12 w-12 text-sky-300 mx-auto opacity-80" />
            <h3 className="text-lg font-bold text-white">Secure Document Repository</h3>
            <p className="text-xs text-slate-400">Upload operating agreements, entity formation filings, tax records, and environmental site assessments.</p>
          </div>
        )}

      </div>
    </div>
  );
}