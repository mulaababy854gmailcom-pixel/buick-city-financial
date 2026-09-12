import {
  ArrowRight,
  Building,
  Building2,
  CheckCircle2,
  Coins,
  FileText,
  Hammer,
  HelpCircle,
  Percent,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoanProducts() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const navigate = useNavigate();

  const handleApply = (productName) => {
    // Navigates to submit-deal and passes the product name in state
    navigate("/submit-deal", { state: { selectedProduct: productName } });
  };

  const products = [
    {
      id: "ceys",
      category: "specialty",
      name: "Community Equity-Yield Swap (CEYS)",
      badge: "Flagship Product",
      tagline: "Deep debt service subsidies engineered for urban revitalization.",
      description:
        "Discounts baseline monthly debt service down to a 4.50% interest-only floor—reducing debt overhead by over 55%. Designed to make urban redevelopment viable while maintaining affordable community rents.",
      specs: [
        { label: "Interest Rate Floor", value: "4.50% Interest-Only" },
        { label: "Equity Structure", value: "20% Passive Equity (Holding LLC)" },
        { label: "Debt Overhead Cut", value: "55%+ Monthly Savings" },
        { label: "Software Requirement", value: "Integrated App Platform Covenant" },
      ],
      highlights: [
        "Deep front-end interest rate subsidy for developers",
        "Enables viable community-affordable rent structures",
        "Full integration with BCFC operational software marketplace",
      ],
    },
    {
      id: "cost-plus-rehab",
      category: "bridge",
      name: "Cost-Plus Rehab Bridge Loan",
      badge: "Fix & Flip / Reposition",
      tagline: "Short-term capital for property acquisition and full rehab.",
      description:
        "Flexible, fast-closing capital for commercial fix-and-flip, repositioning, and value-add projects. Funds released programmatically via escrowed milestone draws.",
      specs: [
        { label: "Max Loan-to-Cost (LTC)", value: "Up to 85%" },
        { label: "Max After-Repair Value (ARV)", value: "Up to 75%" },
        { label: "Interest Rate Range", value: "9.50% – 11.50% (IO)" },
        { label: "Disbursement Model", value: "Escrowed Milestone Draws" },
      ],
      highlights: [
        "Fast programmatic capital releases upon milestone validation",
        "Short-term bridge flexibility with 5+2 extension options",
        "Designed for quick turnarounds and strategic repositioning",
      ],
    },
    {
      id: "ground-up",
      category: "construction",
      name: "Standard Ground-Up Construction",
      badge: "Development Funding",
      tagline: "Full project capitalization for new commercial development.",
      description:
        "Complete ground-up development capital disbursed against physical validation of site grading, shell framing, and mechanical milestones.",
      specs: [
        { label: "Max Loan-to-Cost (LTC)", value: "Up to 75%" },
        { label: "Funding Basis", value: "Physical Milestone Validation" },
        { label: "Milestones Tracked", value: "Grading, Shell Framing, Mechanicals" },
        { label: "Term", value: "Short-Term Construction / Bridge" },
      ],
      highlights: [
        "Structured milestone draw schedule",
        "Direct underwriting on site readiness and execution capacity",
        "Seamless conversion path to permanent DSCR financing upon stabilization",
      ],
    },
    {
      id: "standard-dscr",
      category: "dscr",
      name: "Standard Institutional DSCR",
      badge: "Permanent Portfolio Financing",
      tagline: "Long-term cash-flow lending for stabilized residential & multifamily.",
      description:
        "Traditional long-term commercial financing underwritten purely against property cash flow. No tax returns or equity splits required.",
      specs: [
        { label: "Target DSCR Floor", value: "1.20x – 1.25x DSCR" },
        { label: "Amortization", value: "30-Year Amortization Schedule" },
        { label: "Equity Split", value: "0% (100% Borrower Retained)" },
        { label: "Underwriting Basis", value: "Property Cash Flow Only" },
      ],
      highlights: [
        "No personal tax return or W-2 verification required",
        "Long-term 30-year amortization for maximum stability",
        "Ideal for stabilized multi-family and residential rental portfolios",
      ],
    },
    {
      id: "flint-micro-dscr",
      category: "dscr",
      name: "Flint Micro-DSCR Addendum",
      badge: "Urban Core Special",
      tagline: "Commercial debt starting down to a $25,000 minimum loan balance.",
      description:
        "Bypasses traditional $100,000 national commercial lending floors to support small-balance urban property investors by anchoring to a 1.35x DSCR risk premium.",
      specs: [
        { label: "Minimum Loan Amount", value: "$25,000 (Floor Bypassed)" },
        { label: "Required DSCR Floor", value: "1.35x DSCR" },
        { label: "Target Market", value: "Flint & Metro Regional Matrix" },
        { label: "Underwriting Basis", value: "Alternative Income Capitalization" },
      ],
      highlights: [
        "Unlocks commercial financing for small-scale turnkey properties",
        "Overcomes frozen residential sales comp bottlenecks",
        "Creates clear entry path for community real estate operators",
      ],
    },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100 py-16 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300 mb-4">
            <Coins className="h-4 w-4" /> B2B Commercial Capital Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight">
            Commercial Loan Products & Structured Debt
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Disciplined capital solutions engineered exclusively for registered business entities, property developers, and real estate portfolio operators.
          </p>
        </div>

        {/* Legal & Regulatory Safeguards Banner */}
        <div className="mb-16 rounded-3xl border border-sky-300/20 bg-gradient-to-r from-sky-950/40 via-slate-900 to-sky-950/40 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-4 text-sky-300">
            <ShieldCheck className="h-6 w-6" />
            <h2 className="text-xl font-semibold text-white">
              Institutional Lending Guardrails
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="font-semibold text-sky-200 block mb-1">Strict Entity Borrowing</span>
              <p className="text-slate-400 text-xs">Closed exclusively to registered entities (LLC, S-Corp, C-Corp). No individual consumer borrowing.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="font-semibold text-sky-200 block mb-1">Non-Owner Occupied</span>
              <p className="text-slate-400 text-xs">Notarized Business Purpose Affidavit required. Zero consumer mortgage originations.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="font-semibold text-sky-200 block mb-1">1st Lien Position</span>
              <p className="text-slate-400 text-xs">BCFC mandates an absolute primary lien on real estate titles. Second positions barred.</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span className="font-semibold text-sky-200 block mb-1">Personal Guarantee (PG)</span>
              <p className="text-slate-400 text-xs">Unconditional PG required for all owners holding a 20%+ stake in the borrowing entity.</p>
            </div>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { id: "all", label: "All Products" },
            { id: "specialty", label: "Community Equity (CEYS)" },
            { id: "bridge", label: "Cost-Plus Rehab" },
            { id: "construction", label: "Ground-Up Construction" },
            { id: "dscr", label: "DSCR & Micro-DSCR" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition ${
                selectedCategory === cat.id
                  ? "bg-sky-300 text-slate-950 font-semibold shadow-lg shadow-sky-300/20"
                  : "border border-white/15 bg-white/[0.04] text-slate-300 hover:border-sky-300/50 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`rounded-3xl border p-8 flex flex-col justify-between transition hover:border-sky-300/50 ${
                product.id === "ceys"
                  ? "border-sky-300/40 bg-gradient-to-b from-sky-950/30 to-slate-900 shadow-xl shadow-sky-950/40"
                  : "border-white/10 bg-white/[0.03]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="rounded-full border border-sky-300/30 bg-sky-300/10 px-3 py-1 text-xs font-semibold text-sky-200">
                    {product.badge}
                  </span>
                  {product.id === "ceys" && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-amber-300">
                      <Sparkles className="h-3.5 w-3.5" /> High-Impact Option
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-semibold text-white">{product.name}</h3>
                <p className="text-sm font-medium text-sky-300 mt-1">{product.tagline}</p>
                <p className="text-sm leading-6 text-slate-300 mt-4">{product.description}</p>

                {/* Specs Grid */}
                <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl border border-white/10 bg-black/20 p-4">
                  {product.specs.map((spec) => (
                    <div key={spec.label}>
                      <span className="text-[11px] uppercase tracking-wider text-slate-400 block">
                        {spec.label}
                      </span>
                      <span className="text-sm font-semibold text-white mt-0.5 block">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Key Highlights */}
                <div className="mt-6 space-y-2">
                  {product.highlights.map((item) => (
                    <div key={item} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => handleApply(product.name)}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-300 px-5 py-2.5 text-xs font-semibold text-slate-950 transition hover:bg-sky-200"
                >
                  Apply for this product <ArrowRight className="h-3.5 w-3.5" />
                </button>
                <span className="text-[11px] text-slate-500">B2B Only • 1st Lien Mandatory</span>
              </div>
            </div>
          ))}
        </div>

        {/* 5+2 Protocol Note */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-slate-400 text-xs leading-relaxed">
          <p className="font-semibold text-slate-200 mb-1 flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-sky-300" /> Capital Structure & Maturity Exit Policy (5+2 Protocol)
          </p>
          All short-term bridge and CEYS debt structures carry a initial 5-year term with a maximum 24-month extension option subject to underwriting approval and a 1.0% extension fee. At Year 7 maturity, full exit via property disposition or commercial institutional refinance is required.
        </div>
      </div>
    </div>
  );
}