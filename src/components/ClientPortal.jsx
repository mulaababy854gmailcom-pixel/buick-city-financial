import React, { useState } from 'react';

export default function ClientPortal() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [applications, setApplications] = useState([]); // Simulated active applications

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate successful login
    if (email) setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070b12] text-white flex flex-col items-center justify-center px-4">
        <div className="max-w-md w-full bg-[#0e1626] border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold tracking-tight">Client Portal Login</h2>
            <p className="text-slate-400 text-sm mt-2">Access your active commercial loan applications and underwriting status.</p>
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
                className="w-full bg-[#070b12] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
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
                className="w-full bg-[#070b12] border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500"
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-lg transition-all shadow-lg shadow-cyan-500/20 mt-2"
            >
              Sign In to Portal
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#070b12] text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8 border-b border-slate-800 pb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Client Portal Dashboard</span>
            <h1 className="text-3xl font-extrabold mt-1">Active Loan Applications</h1>
          </div>
        </div>

        {applications.length === 0 ? (
          <div className="bg-[#0e1626] border border-slate-800/80 rounded-2xl p-16 text-center max-w-2xl mx-auto my-12">
            <div className="w-16 h-16 bg-slate-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-cyan-400">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/></svg>
            </div>
            <h3 className="text-xl font-bold mb-2">No Applications Found</h3>
            <p className="text-slate-400 text-sm">You haven't submitted any commercial real estate deals yet. Launch the deal wizard to configure your first underwriting package.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {/* Render active applications list here when available */}
          </div>
        )}
      </div>
    </div>
  );
}