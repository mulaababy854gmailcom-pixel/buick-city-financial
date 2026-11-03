import { ArrowDownRight, ArrowRight, Compass, Layers3, MapPinned, Ruler, ScanSearch, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    icon: MapPinned,
    title: "Start with the land",
    copy: "Look at a parcel, its recorded details, and the physical context around it.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Ask what could fit",
    copy: "Bring lot size, structures, zoning questions, and project assumptions into one review.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Compare the next move",
    copy: "Work through renovation, rental, or new-build scenarios before committing time and money.",
  },
];

function ParcelSketch() {
  return (
    <div className="relative overflow-hidden rounded-sm border border-[#c9c7b9] bg-[#e9e6d9] p-4 shadow-[0_24px_70px_rgba(18,37,31,0.12)] sm:p-6" aria-label="Illustrative parcel research diagram">
      <div className="flex items-center justify-between border-b border-[#c9c7b9] pb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#52645a]">
        <span>Field note 01 · Flint, Michigan</span>
        <span>Site study</span>
      </div>
      <svg className="mt-4 block h-auto w-full" viewBox="0 0 620 420" role="img" aria-labelledby="parcel-sketch-title parcel-sketch-desc">
        <title id="parcel-sketch-title">Ground Lens parcel study illustration</title>
        <desc id="parcel-sketch-desc">A conceptual neighborhood block with parcel boundaries, existing structures, and a highlighted site for investigation.</desc>
        <rect width="620" height="420" fill="#e9e6d9" />
        <path d="M0 96H620M0 304H620M182 0V420M444 0V420" stroke="#c5c2b5" strokeWidth="2" />
        <path d="M0 81H620M0 319H620M167 0V420M459 0V420" stroke="#faf8ee" strokeWidth="22" />
        <path d="M0 81H620M0 319H620M167 0V420M459 0V420" stroke="#b9b6aa" strokeWidth="1.5" />
        <g fill="#d9d3c6" stroke="#bcb6a8" strokeWidth="1.5">
          <path d="M22 22h62v43H22zM95 22h56v43H95zM22 105h61v79H22zM96 105h55v79H96z" />
          <path d="M22 204h60v83H22zM95 204h56v83H95zM22 335h62v63H22zM96 335h55v63H96z" />
          <path d="M199 22h65v43h-65zM276 22h70v43h-70zM359 22h78v43h-78z" />
          <path d="M199 105h65v79h-65zM276 105h70v79h-70zM359 105h78v79h-78z" />
          <path d="M199 204h65v83h-65zM276 204h70v83h-70zM359 204h78v83h-78z" />
          <path d="M199 335h65v63h-65zM276 335h70v63h-70zM359 335h78v63h-78z" />
          <path d="M476 22h65v43h-65zM554 22h49v43h-49zM476 105h65v79h-65zM554 105h49v79h-49z" />
          <path d="M476 204h65v83h-65zM554 204h49v83h-49zM476 335h65v63h-65zM554 335h49v63h-49z" />
        </g>
        <g fill="none" stroke="#5c9b82" strokeWidth="2" strokeDasharray="6 5">
          <path d="M201 108h61v73h-61zM279 207h64v77h-64zM363 338h70v57h-70z" />
        </g>
        <path d="M279 108h66v73h-66z" fill="#b7d9c0" stroke="#26785e" strokeWidth="3" />
        <path d="M291 119h24v18h-24zM320 119h14v18h-14zM291 143h43v25h-43z" fill="#f8f5e9" stroke="#6a8b78" strokeWidth="1.5" />
        <circle cx="312" cy="75" r="5" fill="#26785e" />
        <path d="M312 75v22h55" fill="none" stroke="#26785e" strokeWidth="1.5" />
        <rect x="368" y="85" width="160" height="32" fill="#f8f5e9" stroke="#c9c7b9" />
        <text x="380" y="105" fill="#254a3e" fontSize="11" fontFamily="ui-monospace, monospace" letterSpacing="1.2">SITE TO INVESTIGATE</text>
        <text x="20" y="76" fill="#7a7b70" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="1.3">NORTH STREET</text>
        <text x="20" y="313" fill="#7a7b70" fontSize="9" fontFamily="ui-monospace, monospace" letterSpacing="1.3">SOUTH STREET</text>
      </svg>
      <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 border-t border-[#c9c7b9] pt-3 text-xs text-[#52645a]">
        <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 border border-[#5c9b82]" /> Parcel context</span>
        <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 bg-[#d9d3c6]" /> Mapped structure</span>
        <span className="inline-flex items-center gap-2"><i className="h-2.5 w-2.5 bg-[#b7d9c0] ring-1 ring-[#26785e]" /> Current question</span>
      </div>
      <p className="mt-2 text-[10px] leading-4 text-[#77786d]">Conceptual illustration · not a surveyed parcel map</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#f3f1e8] text-[#1c2c26]">
      <section className="relative overflow-hidden border-b border-[#d8d6ca]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-16 pt-14 sm:gap-16 sm:pb-24 sm:pt-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-24">
          <div className="relative z-10">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#34775d]"><Compass className="h-4 w-4" /> Built from property work in Flint</p>
            <h1 className="mt-6 max-w-2xl font-serif text-[2.75rem] font-medium leading-[1.05] tracking-[-0.045em] text-[#142720] sm:text-6xl lg:text-[4.25rem]">Good development starts with better questions.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#53645c] sm:text-xl sm:leading-9">We’re building Ground Lens while working through property decisions of our own in Flint. It brings parcel records, site context, project costs, and operating assumptions into the same conversation.</p>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#53645c]">The point is simple: spend less time chasing disconnected information, and more time figuring out what a site can realistically support.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link to="/login" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#27674f] px-6 py-3.5 text-base font-semibold text-white transition hover:bg-[#1e543f]">Open the private workspace <ArrowRight className="h-4 w-4" /></Link>
              <a href="#our-approach" className="inline-flex min-h-14 items-center justify-center gap-2 border border-[#aeb8ae] px-6 py-3.5 text-base font-semibold text-[#294739] transition hover:bg-white/60">How we approach a site <ArrowDownRight className="h-4 w-4" /></a>
            </div>
            <p className="mt-5 max-w-lg text-sm leading-6 text-[#737c73]">A private development project today. A practical research workspace shaped by real decisions, questions, and results.</p>
          </div>
          <ParcelSketch />
        </div>
        <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8"><div className="flex flex-wrap items-center gap-x-8 gap-y-2 border-t border-[#d8d6ca] pt-5 text-xs font-medium uppercase tracking-[0.14em] text-[#66766d]"><span>Flint first</span><span>Parcel to project</span><span>Built around decisions that matter</span></div></div>
      </section>

      <section id="our-approach" className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#34775d]">A working tool, built from the ground up</p>
            <h2 className="mt-4 max-w-md font-serif text-3xl font-medium leading-tight tracking-[-0.03em] text-[#142720] sm:text-4xl">We started with the questions we had to answer ourselves.</h2>
            <div className="mt-7 flex items-center gap-3 text-sm text-[#68766e]"><Ruler className="h-4 w-4 text-[#34775d]" /><span>From a lot on a map to a project worth pursuing.</span></div>
          </div>
          <div className="space-y-5 text-base leading-8 text-[#53645c]">
            <p>When you’re looking at a property, the important details rarely arrive together. Parcel records live in one place. A building footprint is somewhere else. Costs, permits, utility questions, and rental assumptions may be in spreadsheets, emails, or a folder on your desk.</p>
            <p>Ground Lens is our attempt to bring those pieces together. We’re using it to study Flint properties and plan our own development work, then improving the workflow as we learn what actually helps.</p>
            <p>We’re not asking you to take a score on faith. We want you to be able to see the site, understand the inputs, compare a few paths, and know what still needs to be checked.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="border-y border-[#d8d6ca] bg-[#ebe9df]">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <div className="mb-10 max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#34775d]">A more connected way to think through a site</p><h2 className="mt-4 font-serif text-3xl font-medium tracking-[-0.03em] text-[#142720] sm:text-4xl">One decision leads to the next.</h2><p className="mt-4 text-base leading-7 text-[#5d6c63]">Ground Lens organizes the early work so you can see what you know, what you’re assuming, and what to investigate next.</p></div>
          <div className="grid gap-px border border-[#d0d1c5] bg-[#d0d1c5] md:grid-cols-3">
            {steps.map(({ number, icon: Icon, title, copy }) => <article key={number} className="bg-[#f3f1e8] p-6 sm:p-8"><div className="flex items-center justify-between"><span className="font-mono text-xs tracking-[0.14em] text-[#718078]">{number}</span><Icon className="h-5 w-5 text-[#34775d]" /></div><h3 className="mt-8 font-serif text-2xl font-medium text-[#1d3329]">{title}</h3><p className="mt-3 text-base leading-7 text-[#5e6d64]">{copy}</p></article>)}
          </div>
          <div className="mt-8 flex flex-col gap-4 border-l-2 border-[#78a88f] pl-5 text-sm leading-6 text-[#657269] sm:flex-row sm:items-center sm:justify-between"><p className="max-w-3xl">Parcel records and mapped context help frame the work. Project budgets and scenario results are planning tools built from sourced information and editable assumptions; they still need due diligence.</p><Link to="/login" className="inline-flex shrink-0 items-center gap-2 font-semibold text-[#27674f] hover:text-[#1e543f]">Explore the workspace <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>

      <section className="border-t border-[#d8d6ca] bg-[#e9e7dc]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 sm:py-20 lg:grid-cols-[0.8fr_1fr_auto] lg:items-center lg:px-8">
          <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#34775d]">Research and capital, in conversation</p><h2 className="mt-3 font-serif text-2xl font-medium text-[#142720] sm:text-3xl">A connected perspective on property work.</h2></div>
          <p className="max-w-2xl text-base leading-7 text-[#53645c]">Ground Lens helps organize parcel research and project planning. Its affiliated company, Buick City Financial Corporation, is a separately operated B2B private lender that reviews business-purpose financing inquiries independently.</p>
          <Link to="/financing" className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#aeb8ae] px-5 py-3 font-semibold text-[#294739] transition hover:bg-white/60">Meet BCFC <ScanSearch className="h-4 w-4" /></Link>
        </div>
      </section>
    </main>
  );
}

