import { ArrowRight, ArrowUpRight, ClipboardCheck, MapPinned, SlidersHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  {
    icon: MapPinned,
    number: "01",
    title: "Start with the parcel",
    description: "Search mapped parcels and review the property details and source context available for early research.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Organize what needs checking",
    description: "Keep site questions, source dates, and due-diligence notes together as research develops.",
  },
  {
    icon: SlidersHorizontal,
    number: "03",
    title: "Explore project scenarios",
    description: "Compare possible paths using your own acquisition, construction, rent, and value assumptions.",
  },
];

export default function GroundLensPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative border-b border-white/10 bg-[#091626]">
        <div className="absolute -right-36 -top-28 h-[28rem] w-[28rem] rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/5 px-4 py-2 text-xs font-medium tracking-[0.14em] text-emerald-200">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            GROUND LENS · PROPERTY RESEARCH
          </div>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.7fr] lg:items-end">
            <div>
              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                A clearer view of the ground behind the deal.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Ground Lens is a sister company developing a Flint-first workspace for property research, site context, and project planning.
              </p>
              <a
                href="https://www.thegroundlens.com"
                target="_blank"
                rel="noreferrer"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-emerald-200"
              >
                Visit Ground Lens <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="mt-4 text-xs text-slate-500">The analysis workspace is in private development.</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-[#0c1a2a] p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Two distinct roles</p>
              <div className="mt-6 border-l border-emerald-300/40 pl-5">
                <h2 className="text-lg font-semibold text-white">Ground Lens</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">Property research and project scenario tools.</p>
              </div>
              <div className="my-5 ml-5 h-7 border-l border-dashed border-white/20" />
              <div className="border-l border-sky-300/40 pl-5">
                <h2 className="text-lg font-semibold text-white">Buick City Financial</h2>
                <p className="mt-2 text-sm leading-6 text-slate-400">Commercial project financing, subject to separate review and underwriting.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">The research workflow</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">From a location to a working plan.</h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {capabilities.map(({ icon: Icon, number, title, description }) => (
            <article key={number} className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold tracking-widest text-emerald-300">{number}</span>
                <Icon className="h-5 w-5 text-emerald-300" aria-hidden="true" />
              </div>
              <h3 className="mt-9 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a1728]">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.65fr_1fr] lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Use with care</p>
          <div>
            <h2 className="text-2xl font-semibold text-white">Research support, not a substitute for verification.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-400">
              Source records can be incomplete or dated. Scenario outputs depend on user-entered assumptions and are planning estimates, not appraisals, contractor quotes, loan approvals, investment recommendations, or guarantees. Confirm material property, zoning, title, utility, cost, and value information with the appropriate source and qualified professionals.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-16 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">Explore Buick City Financial</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Financing is a separate conversation.</h2>
          <p className="mt-2 text-sm text-slate-400">Any financing request is evaluated independently through Buick City Financial’s process.</p>
        </div>
        <Link to="/financing#pathways" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-emerald-300/60 hover:bg-white/5">
          Explore BCFC project paths <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </main>
  );
}

