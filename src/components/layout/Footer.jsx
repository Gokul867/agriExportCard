import Logo from './Logo'

export default function Footer({ year }) {
  return (
    <footer className="border-t border-forest/10 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <Logo />

        <p className="text-sm text-ink/60">
          © {year} RK Import and Export.
          Crafted for credible agricultural trade presentation.
        </p>
      </div>
    </footer>
  )
}