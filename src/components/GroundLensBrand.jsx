export default function GroundLensBrand({ compact = false }) {
  return (
    <span className="flex items-center gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-emerald-300/40 bg-emerald-300/10" aria-hidden="true">
        <svg viewBox="0 0 40 40" fill="none" className="h-7 w-7" aria-hidden="true">
          <path d="M9 10.5h22v19H9z" stroke="#69DAB0" strokeWidth="1.5" />
          <path d="M9 20h12m0 0v9.5M21 20l10-9.5" stroke="#69DAB0" strokeWidth="1.2" />
          <circle cx="21" cy="20" r="3.1" fill="#69DAB0" />
          <circle cx="21" cy="20" r="6.4" stroke="#69DAB0" strokeOpacity=".55" />
        </svg>
      </span>
      <span className="block">
        <span className="block text-sm font-semibold tracking-[0.18em] text-white">GROUND LENS</span>
        <span className="mt-0.5 block text-[10px] tracking-[0.16em] text-emerald-300">{compact ? "PROPERTY RESEARCH" : "PROPERTY WORK · IN CONTEXT"}</span>
      </span>
    </span>
  );
}

