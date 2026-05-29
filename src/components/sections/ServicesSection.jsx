import { motion } from 'framer-motion'

import SectionTitle from '../SectionTitle'

import { services } from '../../data/content'
import { fadeUp } from '../../utils/motion'

export default function HeroSection() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionTitle
        eyebrow="Services"
        title="Commercial support that goes beyond product supply."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {services.map((service, index) => {
            const Icon = service.icon
            return (
            <motion.div key={service.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={index + 1} variants={fadeUp} className="flex gap-5 rounded-[1.75rem] border border-forest/10 bg-white p-7 shadow-soft">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-sand text-forest">
                <Icon size={24} />
                </div>
                <div>
                <h3 className="text-xl font-bold text-ink">{service.title}</h3>
                <p className="mt-3 leading-7 text-ink/70">{service.description}</p>
                </div>
            </motion.div>
            )
        })}
        </div>
    </section>
  )
}