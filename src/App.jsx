import { useMemo, useState } from 'react'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HeroSection from './components/sections/HeroSection'
import AboutSection from './components/sections/AboutSection'
import CommoditiesSection from './components/sections/CommoditiesSection'
import ServicesSection from './components/sections/ServicesSection'
import ContactSection from './components/sections/ContactSection'

export default function App() {
  const year = useMemo(() => new Date().getFullYear(), [])

  return (
    <div className="bg-cream text-ink">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <HeroSection />
        <AboutSection />
        <CommoditiesSection />
        <ServicesSection />
        <ContactSection />

      </main>

      <Footer year={year} />

    </div>
  )
}
