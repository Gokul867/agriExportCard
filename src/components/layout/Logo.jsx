export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/logos/logo.jpeg"
        alt="RK Import and Export"
        className="h-20 w-auto object-contain"
      />

      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-moss">
          RK
        </p>
        <p className="text-sm font-medium text-ink/70">
          IMPORT AND EXPORT
        </p>
      </div>
    </div>
  )
}