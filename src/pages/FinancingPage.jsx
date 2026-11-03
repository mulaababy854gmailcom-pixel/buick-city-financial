import { ArrowRight, Building2, ClipboardList, Hammer, House, Layers3, MapPinned, RefreshCw, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

const paths = [
  {
    icon: MapPinned,
    stage: "01 · CONTROL THE SITE",
    title: "Acquisition bridge",
    fit: "Commercial property, land, or a small rental portfolio",
    body: "A short-duration path to acquire a site while the sponsor confirms title, zoning, utilities, environmental conditions, and the full project plan.",
    evidence: "Purchase contract · entity and sponsor information · site review · sources and uses",
  },
  {
    icon: Wrench,
    stage: "02 · MAKE IT WORK",
    title: "Renovation and repositioning",
    fit: "Vacant, underused, or income-producing property needing defined work",
    body: "Capital structured around a clear scope and documented progress. A future version could support staged draws so money moves alongside verified work and invoices.",
    evidence: "Scope and bids · contingency · permits where required · draw milestones · exit plan",
  },
  {
    icon: Hammer,
    stage: "03 · BUILD IN PHASES",
    title: "Small-scale ground-up and infill",
    fit: "Cottage courts, small multifamily, mixed-use, and neighborhood projects",
    body: "A development path designed around site readiness, realistic cost schedules, and phased construction. Flint projects may need a practical way to handle smaller budgets and several parcels as one coordinated plan.",
    evidence: "Site control · zoning path · plans and permits · trade pricing · completion and lease-up plan",
  },
  {
    icon: RefreshCw,
    stage: "04 · STABILIZE THE ASSET",
    title: "Stabilization or refinance conversation",
    fit: "Completed or substantially improved business-purpose rental property",
    body: "A potential transition from short-term project capital after construction is complete and operating income can be documented. Permanent financing would require a separate review and lender fit.",
    evidence: "Rent roll · leases · operating history · taxes and insurance · property condition · payoff details",
  },
];

const concepts = [
  [Layers3, "Predevelopment and soft-cost tranche", "Smaller, staged support for plans, surveys, environmental work, and permitting before a full construction loan is ready."],
  [Building2, "Acquisition + rehab in one project plan", "One coordinated budget and draw schedule for a purchase and defined repairs, reducing handoffs between separate capital sources."],
  [House, "Small-balance rental portfolio facility", "A way to evaluate multiple modest properties together when one-property-at-a-time financing is inefficient. Cross-collateralization and portfolio risks require careful design."],
  [ClipboardList, "Local capital stack coordination", "Help sponsors organize private debt alongside eligible bank, CDFI, public, or grant resources. Ground Lens can support the research; funding partners make their own decisions."],
];

export default function FinancingPage() {
  return <main className="bg-[#f3f1e8] text-[#1c2c26]">
    <section className="border-b border-[#d8d6ca] bg-[#ebe9df]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6234]">Buick City Financial Corporation · business-purpose capital</p>
        <div className="mt-5 grid gap-10 lg:grid-cols-[1.05fr_0.7fr] lg:items-end">
          <div><h1 className="max-w-4xl font-serif text-4xl font-medium leading-[1.06] tracking-[-0.04em] text-[#142720] sm:text-6xl">Capital that understands the work between the address and the finished project.</h1><p className="mt-6 max-w-2xl text-xl leading-8 text-[#53645c]">BCFC is building a focused B2B private-lending practice for real estate operators, developers, and businesses.</p></div>
          <p className="max-w-xl text-base leading-7 text-[#53645c]">Our product direction starts with the parts of a project where local sponsors can get stuck: site control, uncertain scope, smaller construction budgets, staged work, and the move from construction into stable operations.</p>
        </div>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row"><Link to="/financing/inquiry" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#27674f] px-6 py-3.5 font-semibold text-white hover:bg-[#1e543f]">Discuss a project <ArrowRight className="h-4 w-4" /></Link><a href="#pathways" className="inline-flex min-h-14 items-center justify-center border border-[#aeb8ae] px-6 py-3.5 font-semibold text-[#294739] hover:bg-white/60">Review financing paths</a></div>
        <p className="mt-5 max-w-3xl text-sm leading-6 text-[#68766e]">The pathways below describe BCFC’s product focus and design work. They are not currently available loan programs or promises of approval. No rates, leverage, minimums, or terms are quoted here because final products and lending authority have not been established.</p>
      </div>
    </section>

    <section id="pathways" className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
      <div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6234]">Project financing paths under development</p><h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-[#142720] sm:text-4xl">One project, from control to cash flow.</h2><p className="mt-4 text-base leading-7 text-[#53645c]">These are the project stages BCFC is evaluating. The structure, source of capital, borrower eligibility, pricing, and availability will be determined before any product is offered.</p></div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">{paths.map(({ icon: Icon, stage, title, fit, body, evidence }) => <article key={title} className="flex h-full flex-col border border-[#d0d1c5] bg-[#f8f7f1] p-6 sm:p-8"><div className="flex items-start justify-between gap-5"><div><p className="text-xs font-semibold tracking-[0.16em] text-[#8a6234]">{stage}</p><h3 className="mt-3 font-serif text-2xl font-medium text-[#1d3329]">{title}</h3></div><Icon className="mt-1 h-6 w-6 shrink-0 text-[#34775d]" aria-hidden="true" /></div><p className="mt-5 text-sm font-semibold text-[#294739]">A fit to explore: {fit}</p><p className="mt-3 flex-1 text-base leading-7 text-[#5e6d64]">{body}</p><div className="mt-6 border-t border-[#deddd3] pt-4"><p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#68766e]">What a first review may need</p><p className="mt-2 text-sm leading-6 text-[#53645c]">{evidence}</p></div></article>)}</div>
    </section>

    <section className="border-y border-[#d8d6ca] bg-[#ebe9df]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8"><div className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6234]">Where we can build a better fit</p><h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-[#142720] sm:text-4xl">Product ideas to test with local builders.</h2><p className="mt-4 text-base leading-7 text-[#53645c]">The first versions should solve specific frictions and be small enough to underwrite, service, and learn from responsibly.</p></div>
        <div className="mt-9 grid gap-px border border-[#d0d1c5] bg-[#d0d1c5] sm:grid-cols-2">{concepts.map(([Icon, title, body]) => <article key={title} className="bg-[#f8f7f1] p-6 sm:p-8"><Icon className="h-5 w-5 text-[#8a6234]" aria-hidden="true" /><h3 className="mt-5 font-serif text-xl font-medium text-[#1d3329]">{title}</h3><p className="mt-3 text-base leading-7 text-[#5e6d64]">{body}</p></article>)}</div>
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-20 lg:grid-cols-[0.7fr_1fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6234]">Connected, independently reviewed</p><h2 className="mt-4 max-w-md font-serif text-3xl font-medium leading-tight text-[#142720] sm:text-4xl">Ground Lens organizes context. BCFC makes its own financing decisions.</h2></div><div className="space-y-5 text-base leading-8 text-[#53645c]"><p>Ground Lens is the property research and project workspace. BCFC is affiliated but separately operated, with its own financing inquiry and review process. Using Ground Lens does not submit an application to BCFC, and information in the workspace is not a lending decision.</p><p>BCFC is exploring business-purpose financing for rental housing, small multifamily, mixed-use, neighborhood commercial, renovation, infill, and other real estate projects. Product eligibility and availability will depend on the project, the borrower, capital sources, underwriting capacity, and applicable requirements.</p><p>Any financing inquiry is not an offer, approval, or commitment to lend. BCFC does not offer consumer residential mortgages.</p></div></section>

    <section className="border-y border-[#d8d6ca] bg-[#f8f7f1]"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:py-16 lg:grid-cols-[0.55fr_1fr] lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6234]">Start with the project</p><h2 className="mt-3 font-serif text-2xl font-medium text-[#142720]">Tell us what needs to get financed.</h2></div><div><p className="text-base leading-7 text-[#53645c]">Share the location, project stage, planned use, timeline, and capital gap. BCFC can use that information to learn which financing paths deserve further development.</p><Link to="/financing/inquiry" className="mt-6 inline-flex min-h-12 items-center justify-center gap-2 bg-[#27674f] px-5 py-3 font-semibold text-white hover:bg-[#1e543f]">Share project details <ArrowRight className="h-4 w-4" /></Link></div></div></section>
  </main>;
}

