import { ArrowRightLeft, Globe2, Handshake, Leaf, PackageCheck, Ship, Wheat, BadgeCheck, FileCheck2, Phone, Mail, MapPin, TimerReset, Apple, Carrot } from 'lucide-react'

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Commodities', href: '#commodities' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { value: '5+', label: 'Global buyer markets' },
  { value: '12+', label: 'Core commodity categories' },
  { value: '24 hrs', label: 'Initial export inquiry response' },
]

export const services = [
  {
    title: 'Commodity sourcing',
    description: 'Supplier mapping, quality screening, and dependable procurement from origin clusters across India.',
    icon: Handshake,
  },
  {
    title: 'Export documentation',
    description: 'Commercial paperwork, shipment coordination, and compliance-ready documentation support.',
    icon: FileCheck2,
  },
  {
    title: 'Global logistics',
    description: 'Port planning, container movement, and delivery tracking for smooth cross-border operations.',
    icon: Ship,
  },
  {
    title: 'Import assistance',
    description: 'Buyer-side coordination for specifications, packaging, private labeling, and repeat orders.',
    icon: ArrowRightLeft,
  },
]

export const commodities = [
  {
    name: 'Onion',
    image: '/images/onion.jpg',
  },
  {
    name: 'Small Onion',
    image: '/images/small-onion.jpg',
  },
  {
    name: 'Drumstick',
    image: '/images/drumstick.jpg',
  },
]

export const commodities1 = [
  {
    name: 'Fresh Vegetables',
    note: 'Farm-fresh vegetables sourced directly from growers with reliable supply and distribution support.',
    icon: Carrot,
  },
  {
    name: 'Fresh Fruits',
    note: 'Seasonal and export-quality fruits supplied with careful handling, grading, and logistics coordination.',
    icon: Apple,
  },
  {
    name: 'Rice',
    note: 'Non-basmati, basmati, and premium packaged rice varieties for domestic and export markets.',
    icon: Wheat,
  },
  {
    name: 'Spices',
    note: 'Turmeric, chilli, coriander, cumin, and blended spices with quality-focused sourcing and packaging.',
    icon: Leaf,
  },
]

export const trustPoints = [
  {
    title: 'Verified export ecosystem',
    text: 'Built for buyers who value traceability, documentation discipline, and clear trade communication.',
    icon: BadgeCheck,
  },
  {
    title: 'Quality-first handling',
    text: 'Focused on specification matching, packaging integrity, and shipment readiness before dispatch.',
    icon: PackageCheck,
  },
  {
    title: 'Responsive trade support',
    text: 'Structured onboarding, timely quotation flow, and practical updates across the shipment cycle.',
    icon: TimerReset,
  },
]

export const regions = [
  'India',
]

export const contactCards = [
  { icon: Phone, label: 'Phone', value: '+91 90252 91577' },
  { icon: Mail, label: 'Email', value: 'rubanrk810@gmail.com' },
  { icon: MapPin, label: 'Address', value: 'No.23/64, Ramakrishna Nagar, Chennai, Tamil Nadu, India' },
]

export const highlights = [
  { title: 'Indian origin sourcing', text: 'Strong supplier connections across grain, spice, and agri-processing networks.' },
  { title: 'Buyer-ready packaging', text: 'Flexible bulk, retail-ready, and private-label support for overseas partners.' },
  { title: 'Long-term partnerships', text: 'Built to support repeat shipments with transparent communication and reliability.' },
]

export const companyFacts = [
  {
    title: 'Who we are',
    body: 'RK Import and Export is a trusted agricultural sourcing and distribution company connecting farms, suppliers, wholesalers, and global buyers through dependable trade partnerships and efficient supply operations.',
    icon: Globe2,
  },
  {
    title: 'What we do',
    body: 'We specialize in farm sourcing, bulk commodity supply, and distribution of rice, pulses, spices, and related agri products with strong coordination across procurement, quality control, packaging, and logistics.',
    icon: Wheat,
  },
]
