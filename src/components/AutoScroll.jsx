import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

// Order the auto-tour visits pages; wraps back to the start
const PAGE_ORDER = ['/', '/team', '/engineering', '/sponsorship', '/sponsorship-prospectus', '/merch']

const SPEED = 110          // px per second
const START_DELAY = 1600   // ms to let the page animate in before scrolling
const END_DWELL = 2200     // ms to linger at the bottom before the next page
const RESUME_DELAY = 2500  // ms to back off after the user scrolls manually

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 5v14l11-7z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
    </svg>
  )
}

export default function AutoScroll() {
  const [active, setActive] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const rafRef = useRef(null)
  const stateRef = useRef({})

  useEffect(() => {
    if (!active) return
    const s = stateRef.current
    s.last = performance.now()
    s.waitUntil = s.last + START_DELAY
    s.pos = window.scrollY
    s.bottomAt = null

    const onInteract = () => {
      s.waitUntil = performance.now() + RESUME_DELAY
      s.bottomAt = null
    }
    window.addEventListener('wheel', onInteract, { passive: true })
    window.addEventListener('touchmove', onInteract, { passive: true })

    const step = (now) => {
      const dt = Math.min((now - s.last) / 1000, 0.1)
      s.last = now
      if (now < s.waitUntil) {
        // paused (page settling or user scrolling) — track the real position
        s.pos = window.scrollY
      } else {
        const max = Math.max(0, document.documentElement.scrollHeight - window.innerHeight)
        if (s.pos < max) {
          s.pos = Math.min(s.pos + SPEED * dt, max)
          // 'instant' overrides the CSS `scroll-behavior: smooth`, which would
          // otherwise cancel each frame's scroll before it moves
          window.scrollTo({ top: s.pos, behavior: 'instant' })
        }
        if (max === 0 || s.pos >= max - 1) {
          if (s.bottomAt == null) {
            s.bottomAt = now
          } else if (now - s.bottomAt >= END_DWELL) {
            const i = PAGE_ORDER.indexOf(location.pathname)
            navigate(PAGE_ORDER[(i + 1) % PAGE_ORDER.length])
            return
          }
        } else {
          s.bottomAt = null
        }
      }
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('wheel', onInteract)
      window.removeEventListener('touchmove', onInteract)
    }
  }, [active, location.pathname, navigate])

  if (location.pathname === '/ai') return null

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      onClick={() => setActive((v) => !v)}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full px-4 py-2.5 font-grotesk text-[10px] tracking-[0.2em] uppercase transition-all duration-300"
      style={{
        background: active ? 'linear-gradient(135deg, #d6b747, #b8983a)' : 'var(--theme-nav-bg)',
        color: active ? '#0a0a0f' : 'var(--theme-text-muted)',
        border: `1px solid ${active ? 'transparent' : 'var(--theme-border)'}`,
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        boxShadow: active ? '0 0 24px rgba(214, 183, 71, 0.4)' : '0 4px 16px rgba(0, 0, 0, 0.2)',
      }}
      aria-pressed={active}
      aria-label={active ? 'Stop auto-scroll tour' : 'Start auto-scroll tour'}
      title={active ? 'Stop auto-scroll tour' : 'Auto-scroll through every page'}
    >
      {active ? <PauseIcon /> : <PlayIcon />}
      <span>{active ? 'Touring' : 'Auto Tour'}</span>
    </motion.button>
  )
}
