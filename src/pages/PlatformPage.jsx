import { ArrowRight, ClipboardList, Files, MapPinned, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

const workflow = [
  { n: "01", icon: MapPinned, title: "Research a place", body: "Search parcels, inspect mapped context, and bring recorded details into one view. Keep source information visible while you decide what needs field or agency confirmation." },
  { n: "02", icon: Workflow, title: "Shape the project", body: "Compare renovation, rental, and new-build paths using editable assumptions. See how site choices, scope, timing, and financing assumptions affect the project picture." },
  { n: "03", icon: Files, title: "Build the record", body: "Keep plans, permits, bids, invoices, photos, and closeout material with the project. As the record grows, Ground Lens can help surface important details for review." },
  { n: "04", icon: ClipboardList, title: "Manage what comes next", body: "Track project actions and property operations in the same workspace, so the work can move from early research into ownership and ongoing management." },
];

export default function PlatformPage() {
  return <main className="bg-[#f3f1e8] text-[#1c2c26]">
    <section className="border-b border-[#d8d6ca]">
      <div className="mx-auto max-w-7xl px-6 pb-14 pt-14 sm:pb-20 sm:pt-20 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#34775d]">The Ground Lens workspace</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.05fr_0.7fr] lg:items-end">
          <h1 className="max-w-4xl font-serif text-4xl font-medium leading-[1.06] tracking-[-0.04em] text-[#142720] sm:text-6xl">From the first parcel question to the work of owning property.</h1>
          <p className="max-w-xl text-lg leading-8 text-[#53645c]">Ground Lens is being shaped around the whole development process: understand the site, compare possible uses, organize the project record, and keep learning from the work.</p>
        </div>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link to="/login" className="inline-flex min-h-14 items-center justify-center gap-3 bg-[#27674f] px-6 py-3.5 font-semibold text-white hover:bg-[#1e543f]">Open the private workspace <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/flint" className="inline-flex min-h-14 items-center justify-center border border-[#aeb8ae] px-6 py-3.5 font-semibold text-[#294739] hover:bg-white/60">Why we’re starting in Flint</Link>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1fr] lg:gap-20">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#34775d]">One connected working record</p><h2 className="mt-4 max-w-md font-serif text-3xl font-medium leading-tight tracking-[-0.03em] text-[#142720] sm:text-4xl">A project is more than a point on a map.</h2></div>
        <p className="text-base leading-8 text-[#53645c]">A site decision pulls in many kinds of information: parcel and building records, zoning questions, acquisition costs, construction estimates, financing, schedules, and operating performance. The workspace is intended to help those pieces stay connected, with a clear distinction between sourced records, working assumptions, and items still to verify.</p>
      </div>
      <div className="mt-12 grid gap-px border border-[#d0d1c5] bg-[#d0d1c5] sm:grid-cols-2">
        {workflow.map(({ n, icon: Icon, title, body }) => <article key={n} className="bg-[#f8f7f1] p-6 sm:p-8"><div className="flex items-center justify-between"><span className="font-mono text-xs tracking-[0.14em] text-[#718078]">{n}</span><Icon className="h-5 w-5 text-[#34775d]" /></div><h3 className="mt-7 font-serif text-2xl font-medium text-[#1d3329]">{title}</h3><p className="mt-3 text-base leading-7 text-[#5e6d64]">{body}</p></article>)}
      </div>
    </section>
    <section className="border-y border-[#d8d6ca] bg-[#ebe9df]"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#34775d]">A related part of the ecosystem</p><h2 className="mt-3 font-serif text-2xl font-medium text-[#142720] sm:text-3xl">Project research can lead to a capital conversation.</h2><p className="mt-3 max-w-2xl text-base leading-7 text-[#53645c]">Buick City Financial Corporation is an affiliated, separately operated B2B private lender. It considers business-purpose financing inquiries through its own process.</p></div><Link to="/financing" className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#aeb8ae] px-5 py-3 font-semibold text-[#294739] hover:bg-white/60">Explore BCFC <ArrowRight className="h-4 w-4" /></Link></div></section>
    <p className="mx-auto max-w-7xl px-6 py-7 text-sm leading-6 text-[#737c73] lg:px-8">Ground Lens is in private development. Information and scenario outputs support research and planning; users should review source material and verify important facts before acting.</p>
  </main>;
}

