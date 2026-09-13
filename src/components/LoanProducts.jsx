import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Shield, Building2, Send } from 'lucide-react';

export default function LoanProducts({ onApplyForProduct }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    entityName: '',
    requestedAmount: '',
    propertyAddress: '',
    phone: '',
    email: '',
    notes: ''
  });

  // Your product catalog data
  const products = [
    {
      id: 'ceys',
      category: 'Community Equity (CEYS)',
      title: 'Community Equity-Yield Swap (CEYS)',
      badge: 'Flagship Product • High-Impact Option',
      description: 'Deep debt service subsidies engineered for urban revitalization. Discounts baseline monthly debt service down to a 4.50% interest-only floor—reducing debt overhead by over 55%. Designed to make urban redevelopment viable while maintaining affordable community rents.',
      details: [
        { label: 'Interest Rate Floor', value: '4.50% Interest-Only' },
        { label: 'Equity Structure', value: '20% Passive Equity (Holding LLC)' },
        { label: 'Debt Overhead Cut', value: '55%+ Monthly Savings' },
        { label: 'Software Requirement', value: 'Integrated App Platform Covenant' }
      ],
      bullets: [
        'Deep front-end interest rate subsidy for developers',
        'Enables viable community-affordable rent structures',
        'Full integration with BCFC operational software marketplace'
      ]
    },
    {
      id: 'rehab',
      category: 'Cost-Plus Rehab',
      title: 'Cost-Plus Rehab Bridge Loan',
      badge: 'Fix & Flip / Reposition',
      description: 'Short-term capital for property acquisition and full rehab. Flexible, fast-closing capital for commercial fix-and-flip, repositioning, and value-add projects. Funds released programmatically via escrowed milestone draws.',
      details: [
        { label: 'Max Loan-to-Cost (LTC)', value: 'Up to 85%' },
        { label: 'Max After-Repair Value (ARV)', value: 'Up to 75%' },
        { label: 'Interest Rate Range', value: '9.50% - 11.50% (IO)' },
        { label: 'Disbursement Model', value: 'Escrowed Milestone Draws' }
      ],
      bullets: [
        'Fast programmatic capital releases upon milestone validation',
        'Short-term bridge flexibility with 3+2 extension options',
        'Designed for quick turnaround and strategic repositioning'
      ]
    },
    {
      id: 'ground-up',
      category: 'Development Funding',
      title: 'Standard Ground-Up Construction',
      badge: 'Full Project Capitalization',
      description: 'Complete ground-up development capital disbursed against physical validation of site grading, shell framing, and mechanical milestones.',
      details: [
        { label: 'Max Loan-to-Cost (LTC)', value: 'Up to 75%' },
        { label: 'Funding Basis', value: 'Physical Milestone Validation' },
        { label: 'Milestones Tracked', value: 'Grading, Shell Framing, Mechanicals' },
        { label: 'Term', value: 'Short-Term Construction / Bridge' }
      ],
      bullets: [
        'Structured milestone draw schedule',
        'Direct underwriting on site readiness and execution capacity',
        'Seamless conversion path to permanent DSCR financing upon stabilization'
      ]
    },
    {
      id: 'dscr',
      category: 'Permanent Portfolio Financing',
      title: 'Standard Institutional DSCR',
      badge: 'Long-term Cash-Flow Lending',
      description: 'Traditional long-term commercial financing underwritten purely against property cash flow. No tax returns or equity splits required.',
      details: [
        { label: 'Target DSCR Floor', value: '1.20x - 1.25x DSCR' },
        { label: 'Amortization', value: '30-Year Amortization Schedule' },
        { label: 'Equity Split', value: '0% (100% Borrower Retained)' },
        { label: 'Underwriting Basis', value: 'Property Cash Flow Only' }
      ],
      bullets: [
        'No personal tax return or W-2 verification required',
        'Long-term 30-year amortization for maximum stability',
        'Ideal for stabilized multi-family and residential rental portfolios'
      ]
    }
  ];

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    const payload = {
      productName: selectedProduct.title,
      allocation: parseFloat(formData.requestedAmount) || 50000,
      lockTerm: 3,
      payoutMethod: 'monthly',
      targetedPreferredReturn: 0.085,
      monthlyCashFlow: 350.00,
      entityName: formData.entityName,
      propertyAddress: formData.propertyAddress,
      timestamp: new Date().toISOString()
    };

    setSubmitted(true);
    if (onApplyForProduct) {
      setTimeout(() => {
        onApplyForProduct(payload);
      }, 1200);
    }
  };

  // IF A PRODUCT IS SELECTED, SHOW THE DEDICATED APPLICATION / INFO VIEW
  if (selectedProduct) {
    return (
      <div className="max-w-5xl mx-auto px-6 py-8 space-y-8 animate-fadeIn">
        <button 
          type="button"
          onClick={() => { setSelectedProduct(null); setSubmitted(false); }}
          className="inline-flex items-center gap-2 text-sm text-sky-400 hover:text-sky-300 font-semibold cursor-pointer bg-sky-500/10 px-4 py-2 rounded-xl border border-sky-500/20 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Products
        </button>

        <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 inline-block">
              {selectedProduct.badge}
            </span>
            <h2 className="text-3xl font-black text-white">{selectedProduct.title}</h2>
            <p className="text-slate-300 text-base leading-relaxed">{selectedProduct.description}</p>
          </div>

          {/* PRODUCT SPECIFIC METRICS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
            {selectedProduct.details.map((detail, idx) => (
              <div key={idx} className="bg-[#060b13] p-4 rounded-2xl border border-slate-800/80 flex justify-between items-center">
                <span className="text-xs text-slate-400 font-medium">{detail.label}</span>
                <span className="text-sm font-bold text-white">{detail.value}</span>
              </div>
            ))}
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-sm font-bold text-slate-200 uppercase tracking-wider">Underwriting Highlights</h4>
            <ul className="space-y-2">
              {selectedProduct.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* APPLICATION FORM CONTAINER */}
        <div className="bg-[#0b1320] border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white">Commercial Product Application</h3>
            <p className="text-slate-400 text-sm">
              Submit entity details and capital parameters for immediate underwriting review by Buick City Financial Corporation.
            </p>
          </div>

          {submitted ? (
            <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-3">
              <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
              <h4 className="text-lg font-bold text-white">Application Successfully Submitted!</h4>
              <p className="text-xs text-slate-300">Routing to your Investor Portal Dashboard...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmitApplication} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Entity / Borrower Name *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. Flint Holdings LLC"
                    value={formData.entityName}
                    onChange={(e) => setFormData({...formData, entityName: e.target.value})}
                    className="w-full bg-[#060b13] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Requested Capital Amount ($) *</label>
                  <input 
                    type="number" 
                    required
                    placeholder="e.g. 150000"
                    value={formData.requestedAmount}
                    onChange={(e) => setFormData({...formData, requestedAmount: e.target.value})}
                    className="w-full bg-[#060b13] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Target Property Address (Flint / MI) *</label>
                  <input 
                    type="text" 
                    required
                    placeholder="e.g. 500 S. Saginaw St, Flint, MI"
                    value={formData.propertyAddress}
                    onChange={(e) => setFormData({...formData, propertyAddress: e.target.value})}
                    className="w-full bg-[#060b13] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300">Contact Phone *</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="(810) 555-0199"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-[#060b13] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-300">Corporate Email *</label>
                <input 
                  type="email" 
                  required
                  placeholder="investor@buickcityfinancial.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#060b13] border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:border-sky-500 outline-none"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-4 rounded-xl shadow-lg shadow-sky-500/10 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  <Send className="w-4 h-4" /> Submit Official Product Application
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  // DEFAULT VIEW: LIST OF ALL PRODUCTS WITH WORKING "APPLY" BUTTONS
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-[#0b1320] border border-slate-800 rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:border-sky-500/50 transition-all group">
            <div className="space-y-4">
              <span className="text-[10px] font-bold tracking-widest text-sky-400 uppercase bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20 inline-block">
                {product.category}
              </span>
              <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">{product.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{product.description}</p>

              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-800">
                {product.details.slice(0, 2).map((det, dIdx) => (
                  <div key={dIdx} className="bg-[#060b13] p-3 rounded-xl border border-slate-800/60">
                    <span className="text-[10px] text-slate-500 block uppercase font-medium">{det.label}</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">{det.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800">
              <button
                type="button"
                onClick={() => setSelectedProduct(product)}
                className="w-full bg-sky-500 hover:bg-sky-400 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-sky-500/10 cursor-pointer text-sm"
              >
                Apply for this product →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}