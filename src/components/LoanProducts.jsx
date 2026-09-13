import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, Send, Building2, Shield, ArrowRight } from 'lucide-react';

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

  const products = [
    {
      id: 'ceys',
      category: 'Community Equity (CEYS)',
      title: 'Community Equity-Yield Swap (CEYS)',
      badge: 'Flagship Product • High-Impact Option',
      description: 'Deep debt service subsidies engineered for urban revitalization. Discounts baseline monthly debt service down to a 4.50% interest-only floor—reducing debt overhead by over 55%. Designed to make urban redevelopment viable while maintaining affordable community rents.',
      details: [
        { label: 'INTEREST RATE FLOOR', value: '4.50% Interest-Only' },
        { label: 'EQUITY STRUCTURE', value: '20% Passive Equity (Holding LLC)' },
        { label: 'DEBT OVERHEAD CUT', value: '55%+ Monthly Savings' },
        { label: 'SOFTWARE REQUIREMENT', value: 'Integrated App Platform Covenant' }
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
        { label: 'MAX LOAN-TO-COST (LTC)', value: 'Up to 85%' },
        { label: 'MAX AFTER-REPAIR VALUE (ARV)', value: 'Up to 75%' },
        { label: 'INTEREST RATE RANGE', value: '9.50% - 11.50% (IO)' },
        { label: 'DISBURSEMENT MODEL', value: 'Escrowed Milestone Draws' }
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
        { label: 'MAX LOAN-TO-COST (LTC)', value: 'Up to 75%' },
        { label: 'FUNDING BASIS', value: 'Physical Milestone Validation' },
        { label: 'MILESTONES TRACKED', value: 'Grading, Shell Framing, Mechanicals' },
        { label: 'TERM', value: 'Short-Term Construction / Bridge' }
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
        { label: 'TARGET DSCR FLOOR', value: '1.20x - 1.25x DSCR' },
        { label: 'AMORTIZATION', value: '30-Year Amortization Schedule' },
        { label: 'EQUITY SPLIT', value: '0% (100% Borrower Retained)' },
        { label: 'UNDERWRITING BASIS', value: 'Property Cash Flow Only' }
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

  if (selectedProduct) {
    return (
      <div className="mx-auto max-w-5xl px-6 py-8 space-y-8 animate-fadeIn">
        <button 
          type="button"
          onClick={() => { setSelectedProduct(null); setSubmitted(false); }}
          className="inline-flex items-center gap-2 rounded-full border border-sky-300/40 bg-sky-300/10 px-5 py-2.5 text-sm font-semibold text-sky-300 transition hover:bg-sky-300/20 cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" /> Back to All Products
        </button>

        <div className="rounded-3xl border border-white/10 bg-[#07111f] p-8 md:p-10 shadow-2xl space-y-6">
          <div className="space-y-3">
            <span className="rounded-full border border-sky-300/40 bg-sky-300/10 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-sky-300 uppercase inline-block">
              {selectedProduct.badge}
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white">{selectedProduct.title}</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{selectedProduct.description}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-white/10">
            {selectedProduct.details.map((detail, idx) => (
              <div key={idx} className="rounded-2xl border border-white/10 bg-[#040910] p-4 flex justify-between items-center">
                <span className="text-[11px] font-semibold tracking-wider text-slate-400">{detail.label}</span>
                <span className="text-xs font-bold text-white">{detail.value}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold tracking-wider text-slate-300 uppercase">Underwriting Highlights</h4>
            <ul className="space-y-2">
              {selectedProduct.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="flex items-center gap-2 text-sm text-slate-300">
                  <CheckCircle className="h-4 w-4 text-sky-300 shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-[#07111f] p-8 md:p-10 shadow-2xl space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Commercial Product Application</h3>
            <p className="text-slate-400 text-sm">
              Submit entity details and capital parameters for immediate underwriting review by Buick City Financial Corporation.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center space-y-3">
              <CheckCircle className="h-10 w-10 text-emerald-400 mx-auto" />
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
                    className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none"
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
                    className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none"
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
                    className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none"
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
                    className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none"
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
                  className="w-full rounded-xl border border-white/10 bg-[#040910] px-4 py-3 text-sm text-white focus:border-sky-300 outline-none"
                />
              </div>

              <div className="pt-4">
                <button 
                  type="submit"
                  className="w-full rounded-full bg-sky-300 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-200 cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" /> Submit Official Product Application
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-8 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="rounded-3xl border border-white/10 bg-[#07111f] p-8 shadow-xl flex flex-col justify-between hover:border-sky-300/40 transition-all group">
            <div className="space-y-4">
              <span className="rounded-full border border-sky-300/40 bg-sky-300/10 px-3 py-1 text-[10px] font-semibold tracking-[0.2em] text-sky-300 uppercase inline-block">
                {product.category}
              </span>
              <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-sky-300 transition-colors">{product.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{product.description}</p>

              <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10">
                {product.details.slice(0, 2).map((det, dIdx) => (
                  <div key={dIdx} className="rounded-xl border border-white/10 bg-[#040910] p-3">
                    <span className="text-[10px] font-semibold tracking-wider text-slate-400 block">{det.label}</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">{det.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10">
              <button
                type="button"
                onClick={() => setSelectedProduct(product)}
                className="w-full rounded-full bg-sky-300 py-3 text-center text-sm font-semibold text-slate-950 transition hover:bg-sky-200 cursor-pointer flex items-center justify-center gap-2"
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