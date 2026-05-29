import { motion } from 'framer-motion'

import SectionTitle from '../SectionTitle'

import { commodities } from '../../data/content'
import { fadeUp } from '../../utils/motion'

export default function HeroSection() {
  return (
    <section id="commodities" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
            <SectionTitle
                eyebrow="Commodity portfolio"
                title="Built to showcase staple agricultural lines with clarity."
                centered
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {commodities.map((item, index) => (
                <motion.article
                key={item.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={index + 1}
                variants={fadeUp}
                className="overflow-hidden rounded-[1.75rem] border border-forest/10 bg-white shadow-soft group"
                >
                <div className="h-72 overflow-hidden">
                    <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </div>

                <div className="p-5 text-center">
                    <h3 className="text-2xl font-bold text-ink">
                    {item.name}
                    </h3>
                </div>
                </motion.article>
            ))}
            </div>
        </div>
    </section>

    // <section id="commodities" className="bg-white">
    //     <div className="mx-auto max-w-7xl px-4 py-16 md:px-8 md:py-24">
    //     <SectionTitle
    //         eyebrow="Commodity portfolio"
    //         title="Built to showcase staple agricultural lines with clarity."
    //         centered
    //     />
    //     <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
    //         {commodities.map((item, index) => {
    //         const Icon = item.icon
    //         return (
    //             <motion.article key={item.name} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} custom={index + 1} variants={fadeUp} className="rounded-[1.75rem] border border-forest/10 bg-cream p-6 shadow-soft">
    //             <div className="inline-flex rounded-2xl bg-white p-3 text-moss">
    //                 <Icon size={24} />
    //             </div>
    //             <h3 className="mt-6 text-2xl font-bold text-ink">{item.name}</h3>
    //             <p className="mt-3 leading-7 text-ink/70">{item.note}</p>
    //             </motion.article>
    //         )
    //         })}
    //     </div>
    //     </div>
    // </section>
  )
}