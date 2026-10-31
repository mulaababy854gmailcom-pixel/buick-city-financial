import { ArrowRight, Compass, MapPinned, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  [MapPinned, "01", "Start with the parcel", "Bring parcel records and mapped context together for early property research."],
  [Compass, "02", "See what needs checking", "Keep source dates, missing details, and due-diligence questions visible as research develops."],
  [SlidersHorizontal, "03", "Explore project scenarios", "Compare possible paths using your own acquisition, construction, rent, and value assumptions."],
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative border-b border-white/10 bg-[#07111f]">
        <div className="absolute -right-36 -top-28 h-[30rem] w-[30rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.1fr_0.75fr] lg:items-center lg:px-8 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/5 px-4 py-2 text-xs font-medium tracking-[0.14em] text-emerald-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> PROPERTY RESEARCH · FLINT, MICHIGAN
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              See the parcel.<br /><span className="text-emerald-300">Understand the possibility.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Ground Lens brings property records, site context, and project assumptions into one place, helping local builders investigate opportunities with more clarity.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#research" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-200">
                Explore Ground Lens <ArrowRight className="h-4 w-4" />
              </a>
              <Link to="/financing" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-emerald-300/60 hover:bg-white/5">
                Business financing <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-8 max-w-2xl text-xs leading-5 text-slate-500">
              Ground Lens is in private development. Property data can be incomplete or dated, and scenario results are planning estimates based on stated assumptions—not appraisals, offers, or guarantees.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-[#0c1a2a]/90 p-6 shadow-2xl shadow-emerald-950/30 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div><p className="text-xs font-medium tracking-[0.18em] text-emerald-300">GROUND LENS / FLINT</p><p className="mt-1 text-sm text-slate-400">A grounded research workflow</p></div>
              <MapPinned className="h-5 w-5 text-emerald-300" />
            </div>
            <div className="mt-7 space-y-5">
              {[["01", "Parcel", "Find the site and inspect the available record."], ["02", "Context", "Review nearby conditions and identify open questions."], ["03", "Scenario", "Make your project assumptions explicit and comparable."]].map(([n, title, text]) => (
                <div key={n} className="flex gap-4">
                  <span className="pt-0.5 text-sm font-semibold text-emerald-300">{n}</span>
                  <div><h2 className="font-semibold text-white">{title}</h2><p className="mt-1 text-sm leading-6 text-slate-400">{text}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-8 rounded-xl border border-emerald-300/15 bg-emerald-300/[0.04] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-200">Separate roles</p>
              <p className="mt-2 text-sm leading-6 text-slate-300">Ground Lens supports research. Affiliated Buick City Financial Corporation independently reviews commercial financing inquiries.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="research" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">The research workspace</p><h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">From a location to a working plan.</h2><p className="mt-4 text-base leading-7 text-slate-400">A practical place to organize what is known, what is estimated, and what still needs to be verified.</p></div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {capabilities.map(([Icon, number, title, description]) => <article key={number} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-7"><div className="flex items-center justify-between"><span className="text-xs font-semibold tracking-widest text-emerald-300">{number}</span><Icon className="h-5 w-5 text-emerald-300" aria-hidden="true" /></div><h3 className="mt-9 text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p></article>)}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1728]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.65fr_1fr] lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">How we work</p>
          <div className="space-y-5">
            <div><h2 className="text-xl font-semibold text-white">Show the source and the date.</h2><p className="mt-2 text-sm leading-6 text-slate-400">Public records and mapped layers can be incomplete or out of date. Ground Lens is designed to keep their provenance visible.</p></div>
            <div><h2 className="text-xl font-semibold text-white">Keep assumptions in view.</h2><p className="mt-2 text-sm leading-6 text-slate-400">Scenario outputs depend on user-entered assumptions. They are tools for planning and comparison, not verified market facts.</p></div>
            <div><h2 className="text-xl font-semibold text-white">Verify before acting.</h2><p className="mt-2 text-sm leading-6 text-slate-400">Confirm material property, zoning, title, utility, cost, and value information with the appropriate sources and qualified professionals.</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">An affiliated business</p><h2 className="mt-3 text-2xl font-semibold text-white">Need commercial project financing?</h2><p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">Buick City Financial Corporation is a B2B private lender for business-purpose requests. It operates separately from Ground Lens and reviews each inquiry independently.</p></div>
        <Link to="/financing" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/60 hover:bg-white/5">Meet BCFC <ArrowRight className="h-4 w-4" /></Link>
      </section>
    </main>
  );
}
