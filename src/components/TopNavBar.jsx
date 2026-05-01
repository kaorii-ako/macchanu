import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/team', label: 'Team' },
  { path: '/engineering', label: 'Engineering' },
  { path: '/sponsorship', label: 'Sponsorship' },
]

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          <Link to="/" className="flex items-center gap-3 group ml-0">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-mac-teal to-mac-gold p-[2px]">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                <img src="/IMG1.PNG" alt="Macchanu" className="w-9 h-9 object-cover" />
              </div>
            </div>
            <span className="text-lg font-semibold tracking-wider text-white group-hover:text-mac-gold transition-colors">
              MACCHANU
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-5 py-2 rounded-full text-sm font-medium tracking-wider transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-mac-gold'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 bg-white/5 border border-mac-gold/30 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span 
              animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
            <motion.span 
              animate={{ opacity: mobileOpen ? 0 : 1 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
            <motion.span 
              animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
              className="w-6 h-0.5 bg-white rounded-full"
            />
          </button>
        </div>
      </motion.nav>

      <motion.div 
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: mobileOpen ? 1 : 0, x: mobileOpen ? 0 : '100%' }}
        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-3xl font-light tracking-widest ${
                  location.pathname === link.path ? 'text-mac-gold' : 'text-white/70'
                }`}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  )
}