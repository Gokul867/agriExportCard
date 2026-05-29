export default function SectionTitle({ eyebrow, title, description, centered = false }) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-moss">{eyebrow}</p>
      <h2 className="font-display text-3xl text-ink md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-ink/70 md:text-lg">{description}</p>
    </div>
  )
}
