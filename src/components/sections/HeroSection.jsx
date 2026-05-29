import { motion } from 'framer-motion'
import { ArrowRight, Globe } from 'lucide-react'

import { heroStats } from '../../data/content'
import { fadeUp } from '../../utils/motion'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-hero-glow">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:py-28">
        <motion.div initial="hidden" animate="visible" variants={fadeUp}>
          <span className="inline-flex items-center gap-2 rounded-full border border-forest/10 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-moss">
            Trusted Indian agri trade partner <Globe size={14} />
          </span>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-tight text-ink md:text-7xl">
            Agricultural commodities sourced from trusted Indian farms for global and domestic markets.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72 md:text-xl">
            RK Import and Export delivers premium agricultural commodities including rice, vegetables, fruits, pulses and spices through reliable farm sourcing and seamless global shipment coordination.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex min-h-11 items-center justify-center rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-moss">
              Enquire now
            </a>
            <a href="#commodities" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-forest/15 px-6 py-3 text-sm font-semibold text-ink transition hover:border-forest/40 hover:bg-white">
              View commodities <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div initial="hidden" animate="visible" custom={2} variants={fadeUp} className="rounded-[2rem] border border-white/60 bg-white/75 p-5 shadow-soft backdrop-blur">
          <div className="rounded-[1.5rem] bg-sand p-6">
            <div className="flex items-center justify-between border-b border-earth/10 pb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-earth">Export profile</p>
                <p className="mt-2 text-2xl font-bold text-ink">India to international markets</p>
              </div>
              <div className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-moss">Premium trade</div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-2xl bg-white px-4 py-5">
                  <p className="text-3xl font-extrabold text-forest">{item.value}</p>
                  <p className="mt-2 text-sm text-ink/70">{item.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-forest p-5 text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-white/70">Primary categories</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Rice', 'Vegetables', 'Fruits', 'Pulses', 'Spices'].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/15 px-3 py-2 text-sm text-white/88">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}