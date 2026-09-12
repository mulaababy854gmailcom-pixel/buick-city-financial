import {
  ArrowRight,
  Building2,
  Calculator,
  CheckCircle2,
  ChevronRight,
  FileText,
  Menu,
  ShieldCheck,
  TrendingUp,
  X,
} from "lucide-react";
import { useState } from "react";
import DealWizard from "./components/DealWizard";
import LoanProducts from "./components/LoanProducts";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [capital, setCapital] = useState("250000");

  const investedCapital = Number(capital) || 0;
  const annualIllustration = investedCapital * 0.08;
  const monthlyIllustration = annualIllustration / 12;

  const money = (amount) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="min-h-screen bg-[#07111f] text-slate-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-sky-300/40 bg-sky-300/10">
              <Building2 className="h-5 w-5 text-sky-300" />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.18em] text-white">
                BUICK CITY
              </p>
              <p className="text-[10px] tracking-[0.28em] text-sky-300">
                FINANCIAL CORPORATION
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            <a className="text-sm text-slate-300 transition hover:text-white" href="#about">
              About
            </a>
            <a className="text-sm text-slate-300 transition hover:text-white" href="#capital">
              Capital Solutions
            </a>
            <a className="text-sm text-slate-300 transition hover:text-white" href="#products">
              Products
            </a>
            <a className="text-sm text-slate-300 transition hover:text-white" href="#calculator">
              Calculator
            </a>
            <a className="text-sm text-slate-300 transition hover:text-white" href="#submit-deal">
              Submit a Deal
            </a>
            <a className="text-sm text-slate-300 transition hover:text-white" href="#contact">
              Contact
            </a>
            <a
              href="#submit-deal"
              className="rounded-full bg-sky-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-sky-200"
            >
              Submit Project
            </a>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-white/10 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-5">
              {[
                ["About", "#about"],
                ["Capital Solutions", "#capital"],
                ["Products", "#products"],
                ["Calculator", "#calculator"],
                ["Submit a Deal", "#submit-deal"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={closeMenu} className="text-slate-200">
                  {label}
                </a>
              ))}
              <a
                href="#submit-deal"
                onClick={closeMenu}
                className="rounded-full bg-sky-300 px-5 py-3 text-center font-semibold text-slate-950"
              >
                Submit Project
              </a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-32">
            <div>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-sky-300/25 bg-sky-300/10 px-4 py-2 text-xs font-medium tracking-wide text-sky-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Private commercial capital
              </div>

              <h1 className="max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Capital with a clearer
                <span className="text-sky-300"> point of view.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
                Buick City Financial Corporation provides thoughtful commercial
                financing and structured capital solutions for qualified
                businesses, projects, and partners.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#submit-deal"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-sky-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-200"
                >
                  Submit a deal <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#capital"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-sky-300/60 hover:bg-white/5"
                >
                  Explore solutions
                </a>
              </div>

              <p className="mt-8 text-xs leading-5 text-slate-500">
                Financing is subject to underwriting, eligibility, documentation,
                and applicable law. No financing or investment opportunity is
                guaranteed.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-2xl shadow-sky-950/30 backdrop-blur sm:p-8">
              <div className="mb-12 flex items-center justify-between">
                <span className="text-sm text-slate-400">Our approach</span>
                <ShieldCheck className="h-5 w-5 text-sky-300" />
              </div>

              <div className="space-y-7">
                {[
                  ["01", "Understand the opportunity", "We begin with context, goals, and the fundamentals."],
                  ["02", "Structure with discipline", "We evaluate risk, alignment, and practical execution."],
                  ["03", "Build for the long term", "We prioritize clear communication and durable relationships."],
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

        {/* About */}
        <section id="about" className="border-y border-white/10 bg-[#0a1728]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                Built around clarity
              </p>
              <h2 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight text-white">
                A practical partner for complex capital needs.
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-slate-300">
              <p>
                We work across commercial financing, structured capital, and
                asset-backed opportunities with an emphasis on transparent
                evaluation and responsible execution.
              </p>
              <p>
                Every situation is different. Our role is to understand the
                details, identify the constraints, and help create a capital
                path that fits the opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* Capital solutions */}
        <section id="capital" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
              Capital solutions
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
              Structured for the work ahead.
            </h2>
            <p className="mt-5 leading-7 text-slate-400">
              Our initial focus is helping qualified parties navigate commercial
              capital requirements with a disciplined, relationship-driven process.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: TrendingUp,
                title: "Commercial financing",
                text: "Capital pathways for operating businesses, acquisitions, and expansion initiatives.",
              },
              {
                icon: Building2,
                title: "Asset-backed structures",
                text: "Thoughtful consideration of projects and assets that may support a financing structure.",
              },
              {
                icon: ShieldCheck,
                title: "Strategic partnerships",
                text: "Long-term relationships built around alignment, transparency, and measured growth.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.035] p-7 transition hover:border-sky-300/40 hover:bg-white/[0.06]"
              >
                <Icon className="h-7 w-7 text-sky-300" />
                <h3 className="mt-8 text-xl font-semibold text-white">{title}</h3>
                <p className="mt-4 leading-7 text-slate-400">{text}</p>
                <a href="#submit-deal" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-sky-300">
                  Learn more <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Calculator */}
        <section id="calculator" className="border-y border-white/10 bg-[#0a1728]">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:items-center">
            <div>
              <div className="flex items-center gap-3 text-sky-300">
                <Calculator className="h-6 w-6" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Planning illustration
                </span>
              </div>
              <h2 className="mt-5 text-4xl font-semibold tracking-tight text-white">
                See an illustrative annual and monthly calculation.
              </h2>
              <p className="mt-5 max-w-xl leading-7 text-slate-400">
                Adjust the amount below to view a simple mathematical illustration
                using an 8.00% target annual rate.
              </p>
              <p className="mt-6 text-xs leading-5 text-slate-500">
                This is an illustrative calculation only. It is not an offer,
                solicitation, promise, guarantee, or projection of investment
                performance. Actual terms, eligibility, distributions, and
                outcomes may differ.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-[#07111f] p-7 sm:p-9">
              <label className="text-sm font-medium text-slate-300" htmlFor="capital">
                Illustrative capital amount
              </label>
              <div className="mt-3 flex items-center rounded-xl border border-white/15 bg-white/[0.04] px-4">
                <span className="text-slate-500">$</span>
                <input
                  id="capital"
                  type="number"
                  min="0"
                  value={capital}
                  onChange={(event) => setCapital(event.target.value)}
                  className="w-full bg-transparent px-3 py-4 text-xl text-white outline-none"
                />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white/[0.06] p-5">
                  <p className="text-sm text-slate-400">Illustrative annual amount</p>
                  <p className="mt-2 text-2xl font-semibold text-white">
                    {money(annualIllustration)}
                  </p>
                </div>
                <div className="rounded-2xl bg-sky-300/10 p-5">
                  <p className="text-sm text-sky-200">Illustrative monthly amount</p>
                  <p className="mt-2 text-2xl font-semibold text-sky-200">
                    {money(monthlyIllustration)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Loan Products Section */}
        <section id="products" className="border-t border-white/10 bg-[#07111f]">
          <LoanProducts />
        </section>

        {/* Deal Intake Wizard Section */}
        <section id="submit-deal" className="border-b border-white/10 bg-[#07111f] py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <div className="inline-flex items-center gap-2 text-sky-300 mb-3">
                <FileText className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Intake & Underwriting
                </span>
              </div>
              <h2 className="text-4xl font-semibold tracking-tight text-white">
                Submit Your Deal Specs
              </h2>
              <p className="mt-4 text-slate-400 leading-relaxed">
                Provide your project address, financial requirements, and contact information to begin an initial underwriting evaluation.
              </p>
            </div>

            <DealWizard />
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="rounded-3xl border border-sky-300/20 bg-gradient-to-br from-sky-300/10 to-transparent p-8 sm:p-12">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                  Start a conversation
                </p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
                  Let’s understand what you’re building.
                </h2>
                <p className="mt-5 leading-7 text-slate-300">
                  Share a few details and our team can determine whether a
                  conversation makes sense.
                </p>
                <div className="mt-8 space-y-4 text-sm text-slate-300">
                  {["Commercial financing inquiries", "Strategic capital conversations", "Qualified partner introductions"].map(
                    (item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                        {item}
                      </div>
                    )
                  )}
                </div>
              </div>

              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  alert("Thank you. Your inquiry has been recorded for this demo.");
                }}
                className="grid gap-4"
              >
                <input className="rounded-xl border border-white/15 bg-[#07111f]/80 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 focus:border-sky-300" placeholder="Name" required />
                <input className="rounded-xl border border-white/15 bg-[#07111f]/80 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 focus:border-sky-300" type="email" placeholder="Email address" required />
                <input className="rounded-xl border border-white/15 bg-[#07111f]/80 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 focus:border-sky-300" placeholder="Company or entity" />
                <textarea className="min-h-32 rounded-xl border border-white/15 bg-[#07111f]/80 px-4 py-3.5 text-white outline-none placeholder:text-slate-500 focus:border-sky-300" placeholder="Tell us briefly about your capital needs" />
                <button className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-sky-300 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-sky-200" type="submit">
                  Submit inquiry <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Buick City Financial Corporation. All rights reserved.</p>
          <p>Private commercial capital • By inquiry only</p>
        </div>
      </footer>
    </div>
  );
}

export default App;