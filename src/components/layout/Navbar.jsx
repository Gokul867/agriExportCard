import { useState } from 'react'
import { Menu } from 'lucide-react'

import Logo from './Logo'
import { navItems } from '../../data/content'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-cream/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-ink/70 transition hover:text-forest">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="#contact" className="hidden rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-moss md:inline-flex">
          Request quotation
        </a>
        <button onClick={() => setOpen((v) => !v)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-forest/15 text-ink md:hidden" aria-label="Toggle navigation">
          <Menu size={20} />
        </button>
      </div>
      {open && (
        <div className="border-t border-forest/10 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium text-ink/80">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}