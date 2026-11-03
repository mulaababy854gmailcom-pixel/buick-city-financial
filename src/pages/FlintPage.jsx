import { ArrowRight, Compass, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";

export default function FlintPage() {
  return <main className="bg-[#f3f1e8] text-[#1c2c26]">
    <section className="border-b border-[#d8d6ca] bg-[#ebe9df]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-20 lg:px-8">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#34775d]"><Compass className="h-4 w-4" /> Place matters</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.05fr_0.7fr] lg:items-end">
          <h1 className="max-w-4xl font-serif text-4xl font-medium leading-[1.06] tracking-[-0.04em] text-[#142720] sm:text-6xl">We’re starting where our own property work is taking shape.</h1>
          <p className="max-w-xl text-lg leading-8 text-[#53645c]">Flint is Ground Lens’s first place of practice: a real city, real parcels, and real development questions that need patient, connected research.</p>
        </div>
      </div>
    </section>
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-20 lg:grid-cols-[0.75fr_1fr] lg:gap-20 lg:px-8">
      <div className="border-t border-[#c9c7b9] pt-5"><MapPinned className="h-5 w-5 text-[#34775d]" /><p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-[#66766d]">A local starting point</p><h2 className="mt-3 font-serif text-3xl font-medium leading-tight text-[#142720]">Understand a site in its neighborhood.</h2></div>
      <div className="space-y-5 text-base leading-8 text-[#53645c]"><p>Property research often means moving between map layers, public records, agency pages, spreadsheets, contractor conversations, and project files. Ground Lens is being built to make that process easier to follow from the first look at a parcel through the decisions that shape a project.</p><p>Flint gives us a focused place to learn. We can improve the product by working with local records and real development workflows, while keeping each source, date, and assumption visible enough to review.</p><p>We treat mapped information as a starting point for investigation. Zoning, title, utilities, access, building condition, costs, and other site facts still need the right source or professional confirmation.</p></div>
    </section>
    <section className="border-y border-[#d8d6ca] bg-[#f8f7f1]"><div className="mx-auto grid max-w-7xl gap-8 px-6 py-12 sm:py-16 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#34775d]">Built by doing the work</p><h2 className="mt-3 font-serif text-2xl font-medium text-[#142720] sm:text-3xl">The product should grow with the projects it supports.</h2><p className="mt-3 max-w-2xl text-base leading-7 text-[#53645c]">Our own development and property operations are part of the learning loop. As the product matures, the aim is to help other owners and developers connect the research, project records, and day-to-day work that usually live apart.</p></div><Link to="/platform" className="inline-flex min-h-12 items-center justify-center gap-2 border border-[#aeb8ae] px-5 py-3 font-semibold text-[#294739] hover:bg-white/60">See the platform <ArrowRight className="h-4 w-4" /></Link></div></section>
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center lg:px-8"><p className="text-sm text-[#737c73]">Have a project or a question about the workspace?</p><Link to="/login" className="inline-flex items-center gap-2 font-semibold text-[#27674f]">Visit the private workspace <ArrowRight className="h-4 w-4" /></Link></div>
  </main>;
}

