import { ArrowRight, ShieldCheck, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-32">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-xs font-medium tracking-wide text-sky-200">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Private Commercial B2B Lender
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Capital with a clearer
              <span className="text-sky-300"> point of view.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Buick City Financial Corporation is a private B2B commercial lender offering structured debt, bridge financing, and joint venture capital solutions built exclusively for corporate entities, developers, and real estate sponsors.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/submit-deal"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-200"
              >
                Submit a deal <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-sky-300/60 hover:bg-white/5"
              >
                Explore solutions
              </Link>
            </div>

            <p className="mt-8 text-xs leading-5 text-slate-500">
              Commercial B2B loans only. Subject to underwriting, corporate eligibility, documentation, and applicable law. No consumer residential mortgages offered.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-sky-950/30 backdrop-blur sm:p-8">
            <div className="mb-12 flex items-center justify-between">
              <span className="text-sm text-slate-400">Our approach</span>
              <ShieldCheck className="h-5 w-5 text-sky-300" />
            </div>

            <div className="space-y-7">
              {[
                ["01", "Understand the opportunity", "We begin with corporate context, deal specs, and market fundamentals."],
                ["02", "Structure with discipline", "We evaluate LTV, risk alignment, and capital stack flexibility."],
                ["03", "Build for the long term", "We prioritize clear execution, sponsor support, and durable relationships."],
              ].map(([number, title, text]) => (
                <div key={number} className="flex gap-4">
                  <span className="text-sm font-semibold text-sky-300">{number}</span>
                  <div>
                    <h3 className="font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="border-y border-white/10 bg-[#0a1728]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Built around clarity
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-white">
              A private B2B financing partner for active commercial developers.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-slate-300">
            <p>
              We provide commercial-purpose debt, mezzanine structures, and equity co-investment solutions with an emphasis on transparent evaluation and rapid execution.
            </p>
            <p>
              Whether you are funding a high-yield flip, a ground-up development, or structuring complex capital with third-party grants and LP equity, we build a path tailored to your project setup.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;