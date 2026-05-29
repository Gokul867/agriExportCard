import { ChevronRight } from 'lucide-react'
import SectionTitle from '../SectionTitle'
import { companyFacts,  highlights } from '../../data/content'
import { fadeUp } from '../../utils/motion'

export default function HeroSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
        <SectionTitle
            eyebrow="About the company"
            title="Trusted agricultural sourcing and distribution built for reliable global trade."
            description="RK Import and Export specializes in farm sourcing, bulk supply, and commodity distribution for domestic and international markets. We work closely with growers, suppliers, and logistics partners to ensure consistent quality, dependable delivery, and efficient trade operations across agricultural commodities."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-forest/10 bg-white p-8 shadow-soft">
            <div className="grid gap-6 md:grid-cols-2">
            {companyFacts.map((fact) => {
                const Icon = fact.icon
                return (
                <div key={fact.title} className="rounded-[1.5rem] bg-cream p-6">
                    <Icon className="text-moss" size={28} />
                    <h3 className="mt-5 text-xl font-bold text-ink">{fact.title}</h3>
                    <p className="mt-3 leading-7 text-ink/70">{fact.body}</p>
                </div>
                )
            })}
            </div>
        </div>
        <div className="rounded-[2rem] bg-forest p-8 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">Positioning</p>
            <h3 className="mt-4 text-3xl font-bold">Designed to communicate trust from the first scroll.</h3>
            <div className="mt-8 space-y-5">
            {highlights.map((item) => (
                <div key={item.title} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                <ChevronRight className="mt-1 text-sand" size={20} />
                <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-white/74">{item.text}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    </section>
  )
}