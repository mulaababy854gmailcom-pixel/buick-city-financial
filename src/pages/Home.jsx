import { ArrowRight, Compass, Layers3, MapPinned, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  [MapPinned, "Start with a parcel", "Review parcel boundaries and the records currently available for a site."],
  [Layers3, "Understand the context", "Bring nearby infrastructure, buildings, schools, and other mapped information into the same review."],
  [TrendingUp, "Model a project", "Explore acquisition, renovation, or new-build assumptions with editable scenarios."],
];

export default function Home() {
  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10 bg-[#091626]">
        <div className="absolute -right-24 -top-32 -z-10 h-[34rem] w-[34rem] rounded-full bg-emerald-300/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 sm:py-28 lg:grid-cols-[1.1fr_0.7fr] lg:items-center lg:px-8">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/5 px-4 py-2 text-xs font-medium tracking-[0.14em] text-emerald-200"><Compass className="h-4 w-4" /> PROPERTY RESEARCH · FLINT, MICHIGAN</p>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">See the whole opportunity in a property.</h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Ground Lens brings parcel information, neighborhood context, and project assumptions together to help property owners and developers decide what to investigate next.</p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link to="/login" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-200">Open the private workspace <ArrowRight className="h-4 w-4" /></Link>
              <a href="#how-it-works" className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-emerald-300/60 hover:bg-white/5">How it works</a>
            </div>
            <p className="mt-5 text-xs leading-5 text-slate-500">Ground Lens is in private development. Analyses are estimates based on available records and user-provided assumptions, not verified valuations, appraisals, or investment advice.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-[#0d1d2d] p-6 shadow-2xl shadow-black/20 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">A practical property workflow</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">From map to a decision you can examine.</h2>
            <div className="mt-7 space-y-5">
              {steps.map(([Icon, title, copy], index) => <div className="flex gap-4" key={title}><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-emerald-300/20 bg-emerald-300/10 text-emerald-300"><Icon className="h-5 w-5" /></span><div><p className="text-xs font-medium uppercase tracking-widest text-slate-500">0{index + 1}</p><h3 className="mt-1 font-semibold text-white">{title}</h3><p className="mt-1 text-sm leading-6 text-slate-400">{copy}</p></div></div>)}
            </div>
            <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.035] p-4 text-sm leading-6 text-slate-400">The workspace is a research aid. Check source dates, confirm important property facts independently, and treat scenario results as directional until verified.</div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Built for hands-on local development</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">A clearer starting point for property research.</h2></div>
          <div className="space-y-5 text-base leading-7 text-slate-400"><p>Ground Lens is being developed first for internal property research and project planning in Flint. It is designed to help compare individual sites and explore how coordinated work across nearby parcels might affect a project.</p><p>Parcel records and selected public context layers are available in the private workspace. Scores, market value estimates, prototype budgets, and saved pro formas are still being developed; the workspace does not present those as pre-verified facts.</p><div className="pt-2"><Link to="/login" className="inline-flex items-center gap-2 font-semibold text-emerald-300 hover:text-emerald-200">Go to workspace sign in <ArrowRight className="h-4 w-4" /></Link></div></div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1728]"><div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Separate affiliated business</p><h2 className="mt-2 text-xl font-semibold text-white">Buick City Financial Corporation</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">BCFC is a separately operated B2B private lender that accepts business-purpose financing inquiries.</p></div><Link to="/financing" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-sky-300/40 px-5 py-3 text-sm font-semibold text-sky-200 transition hover:bg-sky-300/10">Explore BCFC <ArrowRight className="h-4 w-4" /></Link></div></section>
    </main>
  );
}

