export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-forest text-white shadow-soft">
        <svg viewBox="0 0 48 48" className="h-7 w-7" fill="none" aria-label="RK Import and Export logo">
          <path d="M9 31C14 17 19 12 24 12C29 12 34 17 39 31" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"/>
          <path d="M24 12V37" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"/>
          <path d="M16 23C18.5 22 21 22 24 24" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"/>
          <path d="M32 23C29.5 22 27 22 24 24" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round"/>
        </svg>
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">RK</p>
        <p className="text-sm font-medium text-ink/70">IMPORT AND EXPORT</p>
      </div>
    </div>
  )
}