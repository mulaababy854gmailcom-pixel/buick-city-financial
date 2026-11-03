import { ArrowRight, Building2, FileText, Handshake } from "lucide-react";
import { Link } from "react-router-dom";

const preparation = [
  [Building2, "The business and the site", "Who is sponsoring the project, where is it, and what kind of property work is planned?"],
  [FileText, "The project plan", "A short scope, current stage, target schedule, and the next decision or funding need."],
  [Handshake, "The capital question", "The amount or type of financing being explored, plus any available budget, bids, or supporting records."],
];

export default function FinancingPage() {
  return <main className="bg-[#f3f1e8] text-[#1c2c26]">
    <section className="border-b border-[#d8d6ca] bg-[#ebe9df]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6234]">A related company · a separate process</p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[1.05fr_0.7fr] lg:items-end">
          <div><h1 className="max-w-4xl font-serif text-4xl font-medium leading-[1.06] tracking-[-0.04em] text-[#142720] sm:text-6xl">Buick City Financial Corporation</h1><p className="mt-6 max-w-2xl text-xl leading-8 text-[#53645c]">Business-purpose financing conversations for real estate projects.</p></div>
          <p className="max-w-xl text-base leading-7 text-[#53645c]">BCFC is an affiliated, separately operated B2B private lender. It welcomes inquiries from businesses, developers, and real estate sponsors exploring capital for a project.</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/financing/inquiry" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#27674f] px-6 py-3.5 font-semibold text-white hover:bg-[#1e543f]">Start a project inquiry <ArrowRight className="h-4 w-4" /></Link><Link to="/platform" className="inline-flex min-h-14 items-center justify-center border border-[#aeb8ae] px-6 py-3.5 font-semibold text-[#294739] hover:bg-white/60">See how Ground Lens works</Link></div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6234]">How the relationship works</p><h2 className="mt-4 max-w-md font-serif text-3xl font-medium leading-tight text-[#142720] sm:text-4xl">Connected context. Independent decisions.</h2></div><div className="space-y-5 text-base leading-8 text-[#53645c]"><p>Ground Lens is the property research and project workspace. BCFC is a separate business with its own financing inquiry and review process. Using Ground Lens does not submit an application to BCFC, and information in the workspace is not a lending decision.</p><p>If a project merits a conversation, BCFC will review the inquiry independently and explain any next steps. Financing availability, structure, and terms depend on that review and definitive written documents.</p></div></div>
      <div className="mt-12 grid gap-px border border-[#d0d1c5] bg-[#d0d1c5] md:grid-cols-3">{preparation.map(([Icon, title, body]) => <article key={title} className="bg-[#f8f7f1] p-6 sm:p-8"><Icon className="h-5 w-5 text-[#8a6234]" aria-hidden="true" /><h3 className="mt-6 font-serif text-xl font-medium text-[#1d3329]">{title}</h3><p className="mt-3 text-base leading-7 text-[#5e6d64]">{body}</p></article>)}</div>
    </section>
    <section className="border-y border-[#d8d6ca] bg-[#f8f7f1]"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:py-16 lg:grid-cols-[0.55fr_1fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6234]">A note about inquiries</p><h2 className="mt-3 font-serif text-2xl font-medium text-[#142720]">A conversation is a first step.</h2></div><p className="text-sm leading-7 text-[#68766e]">Submitting an inquiry is not an offer, approval, or commitment to lend. Any financing would be subject to BCFC’s independent review, underwriting, availability, applicable law, and executed documents. BCFC focuses on business-purpose lending and does not offer consumer residential mortgages.</p></div></section>
    <section className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-14 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6234]">For business-purpose projects</p><h2 className="mt-3 font-serif text-2xl font-medium text-[#142720] sm:text-3xl">Tell BCFC what you’re working on.</h2></div><Link to="/financing/inquiry" className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 bg-[#27674f] px-5 py-3 font-semibold text-white hover:bg-[#1e543f]">Share project details <ArrowRight className="h-4 w-4" /></Link></section>
  </main>;
}

