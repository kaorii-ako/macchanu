import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/team', label: 'Team' },
  { path: '/engineering', label: 'Engineering' },
  { path: '/sponsorship', label: 'Sponsorship' },
  { path: '/merch', label: 'Merch' },
]

function SunIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function TopNavBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const { isDark, toggle } = useTheme()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-10"
        style={{
          backgroundColor: scrolled ? 'var(--theme-nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
          paddingTop: scrolled ? 12 : 22,
          paddingBottom: scrolled ? 12 : 22,
          borderBottom: scrolled ? '1px solid var(--theme-border)' : 'none',
        }}
      >
        <div className="flex items-center justify-between w-full max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-mac-gold/30 shrink-0">
              <img src="/IMG1.PNG" alt="Macchanu" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-xl tracking-widest" style={{ color: 'var(--theme-text)' }}>
                MACCHANU
              </span>
              <span className="text-[9px] tracking-[0.25em] text-mac-teal font-grotesk uppercase">
                Racing Team
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1 relative">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 rounded-full text-xs font-grotesk tracking-widest transition-all duration-300 ${
                  location.pathname === link.path
                    ? 'text-mac-gold'
                    : 'hover:text-mac-gold'
                }`}
                style={{ color: location.pathname === link.path ? undefined : 'var(--theme-text-muted)' }}
              >
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'var(--theme-surface-hover)' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </div>

          {/* Right: sponsor logos + theme toggle */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3 pr-4 border-r border-[var(--theme-border)]">
              <img src="/PTT.png" alt="PTT" className="h-6 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
              <img src="/FF.png"  alt="FF"  className="h-6 w-auto object-contain opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-mac-gold/10"
              style={{ border: '1px solid var(--theme-border)', color: 'var(--theme-text-muted)' }}
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
          </div>

          {/* Mobile: theme toggle + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggle}
              className="w-8 h-8 rounded-full flex items-center justify-center"
              style={{ border: '1px solid var(--theme-border)', color: 'var(--theme-text-muted)' }}
              aria-label="Toggle theme"
            >
              {isDark ? <SunIcon /> : <MoonIcon />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
              aria-label="Menu"
            >
              <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 7 : 0 }}
                className="w-5 h-px rounded-full block" style={{ background: 'var(--theme-text)' }} />
              <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }}
                className="w-5 h-px rounded-full block" style={{ background: 'var(--theme-text)' }} />
              <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -7 : 0 }}
                className="w-5 h-px rounded-full block" style={{ background: 'var(--theme-text)' }} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: mobileOpen ? 1 : 0, x: mobileOpen ? 0 : '100%' }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-40 md:hidden flex flex-col"
        style={{ background: 'var(--theme-nav-bg)', backdropFilter: 'blur(32px)' }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
              transition={{ delay: i * 0.07, duration: 0.3 }}
            >
              <Link
                to={link.path}
                className="font-display text-5xl tracking-widest transition-colors"
                style={{ color: location.pathname === link.path ? '#d6b747' : 'var(--theme-text-muted)' }}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: mobileOpen ? 1 : 0 }}
            transition={{ delay: 0.35 }}
            className="flex items-center gap-4 mt-4"
          >
            <img src="/PTT.png" alt="PTT" className="h-8 w-auto opacity-50" />
            <img src="/FF.png"  alt="FF"  className="h-8 w-auto opacity-50" />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}
