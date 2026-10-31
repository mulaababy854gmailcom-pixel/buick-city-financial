import { ArrowRight, Database, LockKeyhole, Map, TriangleAlert } from "lucide-react";
import { Link } from "react-router-dom";

const localLogin = "http://127.0.0.1:18003/login";

export default function WorkspaceAccessPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:py-24 lg:px-8">
      <div className="max-w-3xl">
        <p className="inline-flex items-center gap-2 rounded-full border border-emerald-300/25 bg-emerald-300/5 px-4 py-2 text-xs font-medium tracking-[0.14em] text-emerald-200"><LockKeyhole className="h-4 w-4" /> PRIVATE DEVELOPMENT WORKSPACE</p>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">Ground Lens workspace</h1>
        <p className="mt-5 text-lg leading-8 text-slate-300">Your parcel research app is running locally on the development computer. Open the local sign-in page there to access the map and analysis tools.</p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <section className="rounded-2xl border border-emerald-300/20 bg-emerald-300/[0.05] p-6 sm:p-8">
          <Map className="h-6 w-6 text-emerald-300" />
          <h2 className="mt-5 text-xl font-semibold text-white">Open local workspace</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">This link works on the PC running Ground Lens and its API. If the services are stopped, start them on that PC first.</p>
          <a href={localLogin} className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-200">Continue to sign in <ArrowRight className="h-4 w-4" /></a>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 sm:p-8">
          <Database className="h-6 w-6 text-sky-300" />
          <h2 className="mt-5 text-xl font-semibold text-white">What is in the workspace</h2>
          <p className="mt-3 text-sm leading-6 text-slate-400">The local database contains parcel records and selected context layers. The map and parcel detail panels are available for research.</p>
          <p className="mt-3 text-sm leading-6 text-slate-400">Saved pro formas, prototype templates, and computed scoring runs have not been populated yet. Scenario tools let you enter project assumptions, but they are not a library of ready-made, verified estimates.</p>
        </section>
      </div>

      <div className="mt-6 flex gap-3 rounded-xl border border-amber-300/20 bg-amber-300/[0.05] p-5 text-sm leading-6 text-amber-100/80"><TriangleAlert className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" /><p>This website is hosted publicly, while the analysis API is still on your development PC. The local sign-in link will not open the workspace from a phone or another computer. Remote access needs a securely hosted API and an HTTPS deployment.</p></div>

      <p className="mt-8 text-sm text-slate-500"><Link to="/" className="text-emerald-300 hover:text-emerald-200">← Back to Ground Lens</Link></p>
    </main>
  );
}

