import { Home, Building2, Info, Phone } from 'lucide-react'

export default function NavBar({ currentPage, onNavigate }) {
  const linkBase = 'px-4 py-2 rounded-full text-sm md:text-base transition-colors'
  const active = 'bg-white/10 text-white'
  const idle = 'text-white/80 hover:text-white hover:bg-white/10'

  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-[#0b1a2b]/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-yellow-600 shadow-lg shadow-yellow-900/20" />
          <span className="tracking-wide font-semibold">LuxEstate</span>
        </div>
        <nav className="flex items-center gap-2 md:gap-3">
          <button onClick={() => onNavigate('home')} className={`${linkBase} ${currentPage==='home'?active:idle} hidden sm:flex items-center gap-2`}>
            <Home size={18} /> <span>Home</span>
          </button>
          <button onClick={() => onNavigate('listings')} className={`${linkBase} ${currentPage==='listings'?active:idle} hidden sm:flex items-center gap-2`}>
            <Building2 size={18} /> <span>Featured Listings</span>
          </button>
          <button onClick={() => onNavigate('about')} className={`${linkBase} ${currentPage==='about'?active:idle} hidden sm:flex items-center gap-2`}>
            <Info size={18} /> <span>About Us</span>
          </button>
          <button onClick={() => onNavigate('contact')} className={`${linkBase} ${currentPage==='contact'?active:idle} hidden sm:flex items-center gap-2`}>
            <Phone size={18} /> <span>Contact</span>
          </button>
          <div className="sm:hidden flex gap-1">
            <button aria-label="Home" onClick={() => onNavigate('home')} className={`${linkBase} ${currentPage==='home'?active:idle}`}>
              <Home size={18} />
            </button>
            <button aria-label="Featured" onClick={() => onNavigate('listings')} className={`${linkBase} ${currentPage==='listings'?active:idle}`}>
              <Building2 size={18} />
            </button>
            <button aria-label="About" onClick={() => onNavigate('about')} className={`${linkBase} ${currentPage==='about'?active:idle}`}>
              <Info size={18} />
            </button>
            <button aria-label="Contact" onClick={() => onNavigate('contact')} className={`${linkBase} ${currentPage==='contact'?active:idle}`}>
              <Phone size={18} />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
