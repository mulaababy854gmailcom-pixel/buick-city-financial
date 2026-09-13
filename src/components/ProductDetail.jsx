import React from 'react';

export default function ProductDetail({ product, onBack, onApply }) {
  if (!product) return null;

  return (
    <div className="min-h-screen bg-[#070b12] text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold mb-6 flex items-center gap-2"
        >
          ← Back to Loan Products
        </button>

        <div className="bg-[#0e1626] border border-slate-800 rounded-2xl p-8 shadow-2xl">
          <div className="flex justify-between items-start mb-6 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">{product.category || 'Commercial Loan Product'}</span>
              <h1 className="text-3xl font-extrabold mt-1">{product.title}</h1>
              <p className="text-slate-400 text-sm mt-2">{product.description}</p>
            </div>
            <button 
              onClick={onApply}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-xl transition-all shadow-lg shadow-cyan-500/20"
            >
              Start Application
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#070b12] border border-slate-800/80 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Key Financial Metrics</h3>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Max Leverage:</span>
                  <span className="font-semibold">{product.maxLTV || 'Up to 85% LTC / ARV'}</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Interest Rate Range:</span>
                  <span className="font-semibold">{product.rate || '4.50% - 11.50%'}</span>
                </li>
                <li className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Target DSCR / Floor:</span>
                  <span className="font-semibold">{product.dscr || '1.15x minimum'}</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#070b12] border border-slate-800/80 rounded-xl p-6">
              <h3 className="text-lg font-bold mb-4 text-cyan-400">Required Documentation</h3>
              <ul className="space-y-2 text-sm text-slate-300 list-disc list-inside">
                <li>Schedule of Real Estate Owned (SREO)</li>
                <li>Trailing 12-Month Operating Statements & Rent Roll</li>
                <li>Entity Documents (Articles of Organization, Operating Agreement)</li>
                <li>Detailed Scope of Work & Contractor Bids (if rehab)</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3 text-cyan-400">Underwriting Guidelines & Covenants</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              All transactions are subject to standard verification of borrower liquidity, credit underwriting, and property appraisal valuation. Capital is disbursed programmatically through escrowed milestone draws or direct equity-yield alignment terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}