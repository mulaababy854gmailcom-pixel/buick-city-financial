import { ArrowRight, Check, Share2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const fieldClass = "mt-2 min-h-12 w-full rounded-sm border border-[#c9c7b9] bg-[#fbfaf5] px-4 py-3 text-base text-[#1c2c26] outline-none transition placeholder:text-[#8a9188] focus:border-[#34775d] focus:ring-2 focus:ring-[#34775d]/15";

function makeBrief(form) {
  return [
    "BUICK CITY FINANCIAL CORPORATION — PROJECT INQUIRY",
    "",
    `Contact: ${form.name}`,
    `Business / organization: ${form.organization || "Not provided"}`,
    `Email: ${form.email}`,
    `Phone: ${form.phone || "Not provided"}`,
    `Project location: ${form.location}`,
    `Project type: ${form.type}`,
    `Capital being explored: ${form.amount ? `$${Number(form.amount).toLocaleString()}` : "Not specified"}`,
    "",
    "PROJECT OVERVIEW",
    form.overview,
  ].join("\n");
}

export default function BCFCInquiryPage() {
  const [form, setForm] = useState({ name: "", organization: "", email: "", phone: "", location: "", type: "", amount: "", overview: "" });
  const [brief, setBrief] = useState("");
  const [copied, setCopied] = useState(false);
  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  function prepare(event) {
    event.preventDefault();
    setBrief(makeBrief(form));
    setCopied(false);
  }

  async function shareBrief() {
    if (navigator.share) {
      try {
        await navigator.share({ title: "BCFC project inquiry", text: brief });
        return;
      } catch (error) {
        if (error?.name === "AbortError") return;
      }
    }
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return <main className="min-h-[70vh] bg-[#f3f1e8] text-[#1c2c26]">
    <section className="border-b border-[#d8d6ca] bg-[#ebe9df]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8a6234]">Buick City Financial · First conversation</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_0.62fr] lg:items-end">
          <h1 className="max-w-3xl font-serif text-4xl font-medium leading-[1.06] tracking-[-0.04em] text-[#142720] sm:text-5xl">Tell us what you’re working on.</h1>
          <p className="max-w-xl text-base leading-7 text-[#53645c]">A useful first note is simple: where the project is, what you’re planning, and what capital question you’re trying to answer. You can add supporting records later.</p>
        </div>
      </div>
    </section>

    <section className="mx-auto grid max-w-7xl gap-10 px-6 py-10 sm:py-14 lg:grid-cols-[1fr_0.55fr] lg:gap-16 lg:px-8">
      <div className="border border-[#d0d1c5] bg-[#f8f7f1] p-5 sm:p-8">
        {brief ? <div aria-live="polite">
          <div className="flex items-start gap-3"><span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#dce9df] text-[#27674f]"><Check className="h-4 w-4" /></span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#34775d]">Inquiry summary ready</p><h2 className="mt-2 font-serif text-2xl font-medium text-[#142720]">Choose how to share it.</h2></div></div>
          <pre className="mt-6 max-h-[30rem] overflow-auto whitespace-pre-wrap break-words border-y border-[#d8d6ca] py-5 font-sans text-sm leading-6 text-[#53645c]">{brief}</pre>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row"><button type="button" onClick={shareBrief} className="inline-flex min-h-12 items-center justify-center gap-2 bg-[#27674f] px-5 py-3 font-semibold text-white hover:bg-[#1e543f]"><Share2 className="h-4 w-4" />{copied ? "Copied to clipboard" : "Share or copy summary"}</button><button type="button" onClick={() => { setBrief(""); setCopied(false); }} className="min-h-12 border border-[#aeb8ae] px-5 py-3 font-semibold text-[#294739] hover:bg-white/60">Edit details</button></div>
          <p className="mt-4 text-sm leading-6 text-[#68766e]">Nothing is sent or stored by Ground Lens from this page. On supported phones, the share sheet lets you choose where to send the summary; otherwise, the button copies it.</p>
        </div> : <form onSubmit={prepare} className="space-y-5">
          <div className="border-b border-[#d8d6ca] pb-5"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#34775d]">Project inquiry</p><h2 className="mt-2 font-serif text-2xl font-medium text-[#142720]">A little context to begin</h2><p className="mt-2 text-sm leading-6 text-[#68766e]">Required fields are marked with an asterisk. This creates a shareable summary on your device.</p></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-medium text-[#294739]">Your name *<input className={fieldClass} required autoComplete="name" value={form.name} onChange={update("name")} placeholder="Name" /></label>
            <label className="block text-sm font-medium text-[#294739]">Business or organization<input className={fieldClass} autoComplete="organization" value={form.organization} onChange={update("organization")} placeholder="Company (optional)" /></label>
            <label className="block text-sm font-medium text-[#294739]">Email *<input className={fieldClass} required type="email" autoComplete="email" value={form.email} onChange={update("email")} placeholder="you@company.com" /></label>
            <label className="block text-sm font-medium text-[#294739]">Phone<input className={fieldClass} type="tel" autoComplete="tel" value={form.phone} onChange={update("phone")} placeholder="Optional" /></label>
            <label className="block text-sm font-medium text-[#294739]">Project location *<input className={fieldClass} required autoComplete="street-address" value={form.location} onChange={update("location")} placeholder="City, state, or project address" /></label>
            <label className="block text-sm font-medium text-[#294739]">Project type *<select className={fieldClass} required value={form.type} onChange={update("type")}><option value="" disabled>Select a project type</option><option>Acquisition</option><option>Renovation or reposition</option><option>Ground-up development</option><option>Rental portfolio</option><option>Other business-purpose project</option></select></label>
            <label className="block text-sm font-medium text-[#294739] sm:col-span-2">Approximate capital need <input className={fieldClass} type="number" min="0" step="1000" inputMode="numeric" value={form.amount} onChange={update("amount")} placeholder="Optional" /></label>
            <label className="block text-sm font-medium text-[#294739] sm:col-span-2">What are you planning? *<textarea className={`${fieldClass} min-h-32 resize-y`} required value={form.overview} onChange={update("overview")} placeholder="Briefly describe the property, the project stage, and what you’re trying to finance." /></label>
          </div>
          <button type="submit" className="inline-flex min-h-12 w-full items-center justify-center gap-2 bg-[#27674f] px-5 py-3 font-semibold text-white hover:bg-[#1e543f] sm:w-auto">Prepare project summary <ArrowRight className="h-4 w-4" /></button>
          <p className="text-sm leading-6 text-[#68766e]">Please don’t include Social Security numbers, bank details, or other highly sensitive information. This page does not submit an application or provide a credit decision.</p>
        </form>}
      </div>

      <aside className="space-y-6 lg:pt-3">
        <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#8a6234]">What happens next</p><h2 className="mt-3 font-serif text-2xl font-medium text-[#142720]">Start with a conversation, not a packet.</h2><p className="mt-3 text-base leading-7 text-[#53645c]">Prepare a concise project summary, then choose where to share it. BCFC reviews financing inquiries separately from Ground Lens. A project inquiry is not an application, offer, approval, or commitment to lend.</p></div>
        <div className="border-l-2 border-[#b18a58] pl-5"><p className="font-semibold text-[#294739]">One clear starting point</p><p className="mt-2 text-sm leading-6 text-[#68766e]">Location, project plan, timing, and the capital question are enough to frame an initial discussion.</p></div>
        <Link to="/financing" className="inline-flex min-h-11 items-center gap-2 font-semibold text-[#27674f] hover:text-[#1e543f]">Back to BCFC financing <ArrowRight className="h-4 w-4" /></Link>
      </aside>
    </section>
  </main>;
}

