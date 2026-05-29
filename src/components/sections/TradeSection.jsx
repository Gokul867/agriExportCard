import SectionTitle from '../SectionTitle'

import {
  trustPoints,
  regions
} from '../../data/content'

export default function HeroSection() {
  return (
    <section id="trade" className="bg-forest text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
            <SectionTitle
            eyebrow="Why choose us"
            title="A premium layout focused on trust, compliance, and repeat trade."
            description="The design uses strong hierarchy, clear credentials, and buyer-friendly messaging to support lead generation for international commodity trade."
            />
        </div>
        <div className="space-y-5">
            {trustPoints.map((point) => {
            const Icon = point.icon
            return (
                <div key={point.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                    <div className="rounded-2xl bg-white/10 p-3 text-sand"><Icon size={22} /></div>
                    <div>
                    <h3 className="text-xl font-bold">{point.title}</h3>
                    <p className="mt-2 leading-7 text-white/75">{point.text}</p>
                    </div>
                </div>
                </div>
            )
            })}
            <div className="rounded-[1.75rem] bg-sand p-6 text-ink">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-earth">Market presence</p>
            <div className="mt-5 flex flex-wrap gap-3">
                {regions.map((region) => (
                <span key={region} className="rounded-full bg-white px-4 py-2 text-sm font-semibold">{region}</span>
                ))}
            </div>
            </div>
        </div>
        </div>
    </section>
  )
}