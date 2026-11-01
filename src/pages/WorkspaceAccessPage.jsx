import { ArrowRight, LockKeyhole, Map } from "lucide-react";
import { Link } from "react-router-dom";

const workspaceUrl = "https://app.thegroundlens.com/login";

export default function WorkspaceAccessPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:px-8">
      <div className="max-w-3xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/5 px-4 py-2 text-xs font-medium tracking-[0.14em] text-emerald-200"><LockKeyhole className="h-4 w-4" /> PRIVATE BETA WORKSPACE</p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Your property research workspace.</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">Explore parcel records, neighborhood context, school proximity, and project scenarios in one private Ground Lens workspace.</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <section className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.05] p-6 sm:p-8">
          <Map className="h-6 w-6 text-emerald-300" />
          <h2 className="mt-5 text-xl font-semibold text-white">Open the analysis workspace</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">Sign in to search Flint parcels, review available source records, and compare project assumptions.</p>
          <a href={workspaceUrl} className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200" target="_blank" rel="noreferrer">Continue to sign in <ArrowRight className="h-4 w-4" /></a>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-white">Research tools</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-400">
            <li>Explore mapped parcels and available property records.</li>
            <li>Review nearby schools, published performance context, and estimated travel distance.</li>
            <li>Compare rental, renovation, and new-build project scenarios.</li>
          </ul>
        </section>
      </div>

      <p className="mt-8 text-sm leading-6 text-slate-400">Ground Lens is in private development. Sign-in is required. Analysis is based on available records and editable project assumptions.</p>
      <p className="mt-8 text-sm text-slate-500"><Link to="/" className="text-emerald-300 hover:text-emerald-200">← Back to Ground Lens</Link></p>
    </main>
  );
}

