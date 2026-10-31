import { ArrowRight, BriefcaseBusiness, FileSearch, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const principles = [
  [FileSearch, "Project-specific review", "BCFC considers each business-purpose request on its own merits, based on the project information and supporting materials provided."],
  [BriefcaseBusiness, "Business borrowers", "The lending focus is commercial-purpose financing for eligible businesses, developers, and real estate sponsors—not consumer residential mortgages."],
  [Handshake, "Direct conversation", "An inquiry starts a discussion. It does not create a commitment to lend, approval, or a promise of specific terms."],
];

export default function FinancingPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative border-b border-white/10 bg-[#091626]">
        <div className="absolute -right-36 -top-28 h-[28rem] w-[28rem] rounded-full bg-sky-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/5 px-4 py-2 text-xs font-medium tracking-[0.14em] text-sky-200">
            <span className="h-2 w-2 rounded-full bg-sky-300" /> AN AFFILIATED BUSINESS · COMMERCIAL FINANCING
          </div>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">Buick City Financial Corporation</p>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">Capital conversations for business projects.</h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                BCFC is an affiliated, separately operated B2B private lender. It accepts inquiries from businesses, developers, and sponsors seeking financing for commercial-purpose projects.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link to="/submit-deal" className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-200">Start an inquiry <ArrowRight className="h-4 w-4" /></Link>
                <Link to="/products" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-sky-300/60 hover:bg-white/5">Review financing information <ArrowRight className="h-4 w-4" /></Link>
              </div>
              <p className="mt-7 max-w-3xl text-xs leading-5 text-slate-500">An inquiry is not an offer or commitment to lend. Any financing is subject to independent review, underwriting, borrower and project eligibility, documentation, availability of capital, and applicable law. No consumer residential mortgages are offered.</p>
            </div>
            <aside className="rounded-2xl border border-white/10 bg-[#0c1a2a] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Two businesses · distinct roles</p>
              <div className="mt-6 border-l border-emerald-300/40 pl-5"><h2 className="text-lg font-semibold text-white">Ground Lens</h2><p className="mt-2 text-sm leading-6 text-slate-400">Property research and project planning tools. Ground Lens does not make lending decisions.</p></div>
              <div className="my-5 ml-5 h-7 border-l border-dashed border-white/20" />
              <div className="border-l border-sky-300/40 pl-5"><h2 className="text-lg font-semibold text-white">Buick City Financial Corporation</h2><p className="mt-2 text-sm leading-6 text-slate-400">Commercial financing inquiries reviewed through a separate BCFC process.</p></div>
            </aside>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">How BCFC approaches an inquiry</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Start with the project details.</h2><p className="mt-4 text-base leading-7 text-slate-400">Share the basics so BCFC can determine whether a follow-up conversation makes sense.</p></div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {principles.map(([Icon, title, description]) => <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-7"><Icon className="h-5 w-5 text-sky-300" aria-hidden="true" /><h3 className="mt-7 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p></article>)}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1728]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.65fr_1fr] lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Important information</p>
          <p className="text-sm leading-7 text-slate-400">Information on this site is for general discussion only. It is not a loan offer, credit decision, commitment, or guarantee. Financing availability, structure, costs, collateral requirements, and other terms—if any—depend on individual review and definitive written documentation. Do not rely on Ground Lens analysis as underwriting or as a substitute for independent legal, tax, financial, title, or property advice.</p>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">For business-purpose requests</p><h2 className="mt-3 text-2xl font-semibold text-white">Tell us about the project.</h2><p className="mt-2 text-sm text-slate-400">Submitting information does not guarantee a response, approval, or financing.</p></div>
        <Link to="/submit-deal" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sky-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-200">Submit project details <ArrowRight className="h-4 w-4" /></Link>
      </section>
    </main>
  );
}
