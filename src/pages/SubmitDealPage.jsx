import React, { useState } from 'react';
import { Building2, FileText } from 'lucide-react';

export default function SubmitDealPage() {
  const [isWizardOpen, setIsWizardOpen] = useState(false);
  const [dealData, setDealData] = useState({
    projectName: '',
    address: '',
    loanAmount: '',
    productType: 'ceys',
    notes: ''
  });
  const [submittedDeals, setSubmittedDeals] = useState([]);

  const handleDealSubmit = (e) => {
    e.preventDefault();
    setSubmittedDeals([
      ...submittedDeals, 
      { ...dealData, id: Date.now(), status: 'Underwriting Review' }
    ]);
    setIsWizardOpen(false);
    setDealData({ projectName: '', address: '', loanAmount: '', productType: 'ceys', notes: '' });
  };

  return (
    <div className="min-h-screen bg-[#040910] text-slate-100 font-sans pb-20">
      {/* Top Header / Banner Area */}
      <div className="mx-auto max-w-6xl px-6 pt-12 pb-8 text-center space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-sky-300 uppercase">
          <FileText className="h-3.5 w-3.5 text-sky-400" /> Intake & Underwriting
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Submit Your Deal Specs
        </h1>
        <p className="mx-auto max-w-xl text-slate-400 text-sm">
          Provide your project address, financial requirements, and contact information to begin an initial underwriting evaluation.
        </p>
      </div>

      {/* Main Dashboard Box */}
      <div className="mx-auto max-w-6xl px-6 space-y-6">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] font-semibold tracking-[0.2em] text-sky-300 uppercase block mb-1">Client Portal Dashboard</span>
            <h2 className="text-xl font-bold text-white">Active Loan Applications</h2>
            <p className="text-xs text-slate-400">Track underwriting progress, decision statuses, and portfolio documentation.</p>
          </div>
        </div>

        {/* Conditional View: Show empty state or active list */}
        {submittedDeals.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-[#07111f] p-12 text-center space-y-6 shadow-2xl">
            <div className="h-16 w-16 rounded-2xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-300 mx-auto">
              <Building2 className="h-8 w-8" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-lg font-bold text-white">No Applications Found</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                You haven't submitted any commercial real estate deals yet. Launch the deal wizard to configure your first underwriting package.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {submittedDeals.map((deal) => (
              <div key={deal.id} className="rounded-2xl border border-white/10 bg-[#07111f] p-6 space-y-3 shadow-xl">
                <div className="flex justify-between items-start">
                  <h4 className="text-base font-bold text-white">{deal.projectName}</h4>
                  <span className="rounded-full bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 text-[10px] font-semibold text-amber-300">
                    {deal.status}
                  </span>
                </div>
                <p className="text-xs text-slate-400">{deal.address}</p>
                <div className="pt-2 border-t border-white/10 flex justify-between text-xs font-semibold">
                  <span className="text-slate-400">Requested Capital:</span>
                  <span className="text-sky-300">${Number(deal.loanAmount).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Deal Wizard Modal Form (kept functional if triggered elsewhere) */}
      {isWizardOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#07111f] p-8 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            <div className="space-y-1">
              <span className="text-[10px] font-semibold tracking-widest text-sky-300 uppercase">Underwriting Intake</span>
              <h3 className="text-2xl font-bold text-white">Deal Submission Wizard</h3>
              <p className="text-xs text-slate-400">Fill out your project specifications to begin automated financial underwriting.</p>
            </div>

            <form onSubmit={handleDealSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Project / Entity Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Saginaw Fourplex Project"
                  value={dealData.projectName}
                  onChange={(e) => setDealData({...dealData, projectName: e.target.value})}
                  className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Property Address (Flint / MI) *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 700 S. Saginaw St, Flint, MI"
                  value={dealData.address}
                  onChange={(e) => setDealData({...dealData, address: e.target.value})}
                  className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Requested Capital ($) *</label>
                  <input 
                    type="number" 
                    required
                    placeholder="125000"
                    value={dealData.loanAmount}
                    onChange={(e) => setDealData({...dealData, loanAmount: e.target.value})}
                    className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Product Program *</label>
                  <select
                    value={dealData.productType}
                    onChange={(e) => setDealData({...dealData, productType: e.target.value})}
                    className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none"
                  >
                    <option value="ceys">CEYS Flagship Program</option>
                    <option value="rehab">Cost-Plus Rehab Bridge</option>
                    <option value="ground-up">Ground-Up Construction</option>
                    <option value="micro-dscr">Flint Micro-DSCR Addendum</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Project Notes & Scope</label>
                <textarea 
                  rows="3"
                  placeholder="Briefly describe renovation plan or operational targets..."
                  value={dealData.notes}
                  onChange={(e) => setDealData({...dealData, notes: e.target.value})}
                  className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none resize-none"
                />
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsWizardOpen(false)}
                  className="w-1/2 rounded-full border border-white/10 bg-white/5 py-3 text-xs font-semibold text-slate-300 hover:bg-white/10 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 rounded-full bg-sky-300 py-3 text-xs font-semibold text-slate-950 hover:bg-sky-200 transition cursor-pointer shadow-lg shadow-sky-300/10"
                >
                  Submit for Underwriting →
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}