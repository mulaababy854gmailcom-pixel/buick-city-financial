import React, { useState } from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SubmitDealPage() {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [dealData, setDealData] = useState({
    projectName: '',
    address: '',
    loanAmount: '',
    productType: 'ceys',
    notes: ''
  });

  const handleDealSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#040910] text-slate-100 font-sans pb-24">
      {/* Top Header / Banner Area */}
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-8 text-center space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1.5 text-[11px] font-semibold tracking-[0.2em] text-sky-300 uppercase">
          <FileText className="h-3.5 w-3.5 text-sky-400" /> Intake & Underwriting
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
          Submit Your Deal Specs
        </h1>
        <p className="mx-auto max-w-xl text-slate-400 text-sm">
          Provide your project address, financial requirements, and scope details to begin an initial automated underwriting evaluation.
        </p>
      </div>

      {/* Main Form Container */}
      <div className="mx-auto max-w-2xl px-6">
        {submitted ? (
          <div className="rounded-3xl border border-white/10 bg-[#07111f] p-12 text-center space-y-6 shadow-2xl animate-fadeIn">
            <div className="h-16 w-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <div className="space-y-2 max-w-md mx-auto">
              <h3 className="text-2xl font-bold text-white">Underwriting Package Submitted</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Your specifications for <span className="text-white font-semibold">{dealData.projectName}</span> have been successfully transmitted for preliminary financial review.
              </p>
            </div>
            <div className="pt-4 flex justify-center gap-4">
              <button
                onClick={() => navigate('/portal')}
                className="rounded-full bg-sky-300 px-6 py-3 text-xs font-semibold text-slate-950 hover:bg-sky-200 transition shadow-lg shadow-sky-300/10"
              >
                View in Client Portal →
              </button>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-white/10 bg-[#07111f] p-8 md:p-10 shadow-2xl space-y-6">
            <form onSubmit={handleDealSubmit} className="space-y-5">
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Project / Entity Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Saginaw Fourplex Project"
                  value={dealData.projectName}
                  onChange={(e) => setDealData({...dealData, projectName: e.target.value})}
                  className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3.5 text-sm text-white focus:border-sky-300 outline-none transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Property Address (Flint / MI) *</label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. 700 S. Saginaw St, Flint, MI"
                  value={dealData.address}
                  onChange={(e) => setDealData({...dealData, address: e.target.value})}
                  className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3.5 text-sm text-white focus:border-sky-300 outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Requested Capital ($) *</label>
                  <input 
                    type="number" 
                    required
                    placeholder="125000"
                    value={dealData.loanAmount}
                    onChange={(e) => setDealData({...dealData, loanAmount: e.target.value})}
                    className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3.5 text-sm text-white focus:border-sky-300 outline-none transition"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Product Program *</label>
                  <select
                    value={dealData.productType}
                    onChange={(e) => setDealData({...dealData, productType: e.target.value})}
                    className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3.5 text-sm text-white focus:border-sky-300 outline-none transition"
                  >
                    <option value="ceys">CEYS Flagship Program</option>
                    <option value="rehab">Cost-Plus Rehab Bridge</option>
                    <option value="ground-up">Ground-Up Construction</option>
                    <option value="micro-dscr">Flint Micro-DSCR Addendum</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">Project Notes & Scope</label>
                <textarea 
                  rows="4"
                  placeholder="Briefly describe renovation plan, target metrics, or operational goals..."
                  value={dealData.notes}
                  onChange={(e) => setDealData({...dealData, notes: e.target.value})}
                  className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3.5 text-sm text-white focus:border-sky-300 outline-none resize-none transition"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full rounded-full bg-sky-300 py-4 text-sm font-bold text-slate-950 hover:bg-sky-200 transition shadow-lg shadow-sky-300/10 cursor-pointer"
                >
                  Submit for Underwriting →
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}