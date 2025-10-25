import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, MapPin, Mail, Phone as PhoneIcon, Instagram, Facebook, Linkedin } from 'lucide-react'
import ListingCard from './ListingCard'

export default function PageRouter({ currentPage, onNavigate }) {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4, ease: 'easeOut' } },
  }

  return (
    <div className="relative">
      <Decor />
      <AnimatePresence mode="wait">
        {currentPage === 'home' && (
          <motion.section key="home" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <Home onCTA={() => onNavigate('listings')} />
          </motion.section>
        )}
        {currentPage === 'listings' && (
          <motion.section key="listings" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <FeaturedListings />
          </motion.section>
        )}
        {currentPage === 'about' && (
          <motion.section key="about" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <AboutUs />
          </motion.section>
        )}
        {currentPage === 'contact' && (
          <motion.section key="contact" variants={pageVariants} initial="initial" animate="animate" exit="exit">
            <ContactUs />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  )
}

function Decor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_0%,rgba(212,175,55,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(900px_500px_at_10%_100%,rgba(99,102,241,0.08),transparent_60%)]" />
    </div>
  )
}

function Home({ onCTA }) {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-stretch">
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          src="https://cdn.coverr.co/videos/coverr-luxury-house-8342/1080p.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-[#0b1a2b]/70" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-start justify-center py-24 gap-6 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl"
        >
          Discover Your Next
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-300">Luxury Residence</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-white/80 max-w-2xl mx-auto md:mx-0"
        >
          Curated premium properties in the world’s most desirable locations. Experience refined service and modern elegance.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}>
          <button onClick={onCTA} className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#0b1a2b] font-medium px-6 py-3 rounded-full shadow-lg shadow-yellow-900/30">
            Explore Featured Listings
            <ArrowRight className="transition-transform group-hover:translate-x-1" size={18} />
          </button>
        </motion.div>
      </div>
    </div>
  )
}

function FeaturedListings() {
  const [active, setActive] = useState(null)

  const listings = useMemo(
    () => [
      {
        id: 1,
        title: 'Oceanview Penthouse',
        price: '$4,950,000',
        location: 'Malibu, CA',
        beds: 4,
        baths: 4,
        size: '3,800 sq ft',
        image:
          'https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1974&auto=format&fit=crop',
      },
      {
        id: 2,
        title: 'Modern Hillside Villa',
        price: '$6,200,000',
        location: 'Beverly Hills, CA',
        beds: 5,
        baths: 6,
        size: '5,200 sq ft',
        image:
          'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1974&auto=format&fit=crop',
      },
      {
        id: 3,
        title: 'Skyline Residence',
        price: '$3,450,000',
        location: 'New York, NY',
        beds: 3,
        baths: 3,
        size: '2,500 sq ft',
        image:
          'https://images.unsplash.com/photo-1505691723518-36a5ac3b2d18?q=80&w=1974&auto=format&fit=crop',
      },
      {
        id: 4,
        title: 'Lakefront Retreat',
        price: '$2,890,000',
        location: 'Lake Tahoe, NV',
        beds: 4,
        baths: 4,
        size: '3,200 sq ft',
        image:
          'https://images.unsplash.com/photo-1613977257592-4871e7fcd7f7?q=80&w=1974&auto=format&fit=crop',
      },
      {
        id: 5,
        title: 'Desert Modernist Home',
        price: '$1,980,000',
        location: 'Scottsdale, AZ',
        beds: 4,
        baths: 3,
        size: '2,900 sq ft',
        image:
          'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1974&auto=format&fit=crop',
      },
      {
        id: 6,
        title: 'Coastal Sanctuary',
        price: '$3,250,000',
        location: 'Miami Beach, FL',
        beds: 4,
        baths: 4,
        size: '3,100 sq ft',
        image:
          'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1974&auto=format&fit=crop',
      },
    ],
    []
  )

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold">Featured Listings</h2>
          <p className="text-white/70 mt-2">Handpicked residences that define modern luxury.</p>
        </div>
        <div className="hidden md:block text-white/60 text-sm">Hover to preview • Click for quick view</div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {listings.map((item) => (
          <ListingCard key={item.id} item={item} onQuickView={setActive} />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <Modal onClose={() => setActive(null)}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl overflow-hidden aspect-[4/3] bg-white/5">
                <img src={active.image} alt={active.title} className="w-full h-full object-cover" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold">{active.title}</h3>
                <div className="text-[#D4AF37] text-xl font-semibold">{active.price}</div>
                <div className="text-white/80">{active.location}</div>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>Bedrooms: {active.beds}</li>
                  <li>Bathrooms: {active.baths}</li>
                  <li>Interior: {active.size}</li>
                </ul>
                <p className="text-white/70 text-sm pt-2">
                  An architecturally significant residence featuring panoramic views, artisanal finishes, and indoor-outdoor living.
                </p>
                <div className="pt-4 flex flex-wrap gap-3">
                  <button className="px-5 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#0b1a2b] font-medium">Schedule Tour</button>
                  <button className="px-5 py-2 rounded-full bg-white/10 hover:bg-white/15">Download Brochure</button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  )
}

function AboutUs() {
  const team = [
    {
      name: 'Ava Reynolds',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1500&auto=format&fit=crop',
    },
    {
      name: 'Liam Carter',
      role: 'Head of Sales',
      image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1500&auto=format&fit=crop',
    },
    {
      name: 'Sofia Bennett',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1547425260-4a4c2b3c6e8d?q=80&w=1500&auto=format&fit=crop',
    },
    {
      name: 'Noah Kim',
      role: 'Lead Broker',
      image: 'https://images.unsplash.com/photo-1544005316-04ce1f9c41b1?q=80&w=1500&auto=format&fit=crop',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
      <div className="mb-10 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold">About Us</h2>
        <p className="text-white/75 mt-3">
          Since our inception, LuxEstate has championed a bespoke approach to real estate—discreet, data-informed, and design-led.
          Our mission is to elevate every transaction into an experience defined by trust and taste.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img src={m.image} alt={m.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-4">
              <div className="font-semibold">{m.name}</div>
              <div className="text-white/70 text-sm">{m.role}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-14 grid md:grid-cols-3 gap-6">
        <Stat label="Years of Excellence" value="15+" />
        <Stat label="Global Transactions" value="$2B+" />
        <Stat label="Client Satisfaction" value="99%" />
      </div>
    </div>
  )
}

function Stat({ label, value }) {
  return (
    <div className="rounded-2xl p-6 bg-gradient-to-br from-white/5 to-white/0 border border-white/10">
      <div className="text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-yellow-300">{value}</div>
      <div className="text-white/70">{label}</div>
    </div>
  )
}

function ContactUs() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-16 grid lg:grid-cols-2 gap-10">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold">Contact Us</h2>
        <p className="text-white/75 mt-3 max-w-xl">
          We would love to hear from you. Share your goals and we will craft a tailored plan for your next move.
        </p>
        <div className="mt-6 space-y-3 text-white/80">
          <div className="flex items-center gap-3"><MapPin size={18} className="text-[#D4AF37]" /> 123 Aurelia Ave, Suite 400, Los Angeles, CA</div>
          <div className="flex items-center gap-3"><Mail size={18} className="text-[#D4AF37]" /> concierge@luxestate.com</div>
          <div className="flex items-center gap-3"><PhoneIcon size={18} className="text-[#D4AF37]" /> +1 (323) 555-0199</div>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/15"><Instagram size={18} /></a>
          <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/15"><Facebook size={18} /></a>
          <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-white/15"><Linkedin size={18} /></a>
        </div>
        <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <iframe
            title="map"
            width="100%"
            height="280"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.983539918562!2d-118.38417722371932!3d34.07362081680906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bb9f2b6f2e2f%3A0x7a0a0b7b6f2d9c0!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </div>
      <div>
        <form className="rounded-2xl p-6 bg-white/5 border border-white/10 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="First Name" type="text" name="firstName" placeholder="Jane" />
            <Field label="Last Name" type="text" name="lastName" placeholder="Doe" />
          </div>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <Field label="Email" type="email" name="email" placeholder="jane@domain.com" />
            <Field label="Phone" type="tel" name="phone" placeholder="(555) 123-4567" />
          </div>
          <div className="mt-4">
            <Field label="Message" type="textarea" name="message" placeholder="Tell us about your perfect home..." />
          </div>
          <div className="mt-6">
            <button type="submit" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-[#0b1a2b] font-medium">
              Send Message
              <ArrowRight size={18} />
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

function Field({ label, type = 'text', name, placeholder }) {
  const base = 'w-full bg-white/5 border border-white/10 focus:border-[#D4AF37]/60 focus:ring-2 focus:ring-[#D4AF37]/30 rounded-xl px-4 py-3 outline-none placeholder:text-white/40 transition-all'
  return (
    <label className="block text-sm">
      <span className="text-white/80">{label}</span>
      {type === 'textarea' ? (
        <textarea name={name} placeholder={placeholder} className={`${base} mt-1 h-32`} />
      ) : (
        <input type={type} name={name} placeholder={placeholder} className={`${base} mt-1`} />
      )}
    </label>
  )
}

function Modal({ children, onClose }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/60" onClick={onClose} />
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { type: 'spring', stiffness: 140, damping: 18 } }}
        exit={{ y: 20, opacity: 0 }}
        className="relative z-10 w-full max-w-4xl rounded-2xl p-6 bg-[#0b1a2b] border border-white/10 shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-3 right-3 px-3 py-1.5 text-sm rounded-full bg-white/10 hover:bg-white/15">Close</button>
        {children}
      </motion.div>
    </motion.div>
  )
}
