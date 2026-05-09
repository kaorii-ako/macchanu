import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const COMPETITION_DATE = new Date('2026-06-14T00:00:00+09:00')

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, mins: 0 })
  useEffect(() => {
    const update = () => {
      const diff = COMPETITION_DATE - Date.now()
      if (diff <= 0) { setTimeLeft({ days: 0, hours: 0, mins: 0 }); return }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        mins: Math.floor((diff % 3600000) / 60000),
      })
    }
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])
  return timeLeft
}

function AnimatedCounter({ to, duration = 1800 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const hasRun = useRef(false)
  const numericTo = parseInt(String(to).replace('+', ''))
  const hasSuffix = String(to).includes('+')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasRun.current) {
        hasRun.current = true
        const start = performance.now()
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          setCount(Math.floor(eased * numericTo))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.6 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [numericTo, duration])

  return <span ref={ref}>{count}{hasSuffix ? '+' : ''}</span>
}

const stats = [
  { value: '6', label: 'TEAM MEMBERS' },
  { value: '12', label: 'SUBSYSTEMS' },
  { value: '200+', label: 'DESIGN REVIEWS' },
  { value: '1', label: 'MOTION' },
]

const teamPreview = [
  { nickname: 'Neena', role: 'Team Manager',        color: 'from-mac-gold to-mac-gold-light' },
  { nickname: 'Sky',   role: 'Lead Engineer',       color: 'from-mac-teal to-mac-teal-light' },
  { nickname: 'Pep',   role: 'Mfg. Engineer',       color: 'from-mac-teal-light to-mac-gold' },
  { nickname: 'Copter',role: 'Design Engineer',     color: 'from-mac-gold to-mac-teal' },
  { nickname: 'Pimmy', role: 'Graphic Designer',    color: 'from-mac-gold-light to-mac-teal-light' },
  { nickname: 'Kao',   role: 'Analytical Engineer', color: 'from-mac-teal to-mac-gold-light' },
]

const MARQUEE_TEXT = [
  'F1 IN SCHOOLS',
  'THAILAND NATIONALS 2025',
  'WORLD FINALS · JAPAN 2026',
  'RACING BY MOTION',
  'AMNUAY SILPA SCHOOL',
  'PRECISION ENGINEERING',
  'CAD / CFD / CNC',
  'MACCHANU RACING',
]

export default function Home() {
  const { days, hours, mins } = useCountdown()

  return (
    <div>
      {/* ── Hero ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background — follows theme */}
        <div className="absolute inset-0" style={{ background: 'var(--theme-bg)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(25,117,126,0.08) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 50%, rgba(214,183,71,0.04) 0%, transparent 60%)' }} />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-20 md:pb-28 flex flex-col items-center text-center">
          {/* Logo circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8"
          >
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full"
              style={{ boxShadow: '0 0 40px rgba(214,183,71,0.15), 0 0 80px rgba(214,183,71,0.06)', borderRadius: '50%' }} />
            {/* Gold gradient border */}
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full p-[2px]"
              style={{ background: 'linear-gradient(135deg, rgba(214,183,71,0.7), rgba(25,117,126,0.5), rgba(214,183,71,0.3))' }}>
              <div className="w-full h-full rounded-full overflow-hidden" style={{ background: 'var(--theme-bg)' }}>
                <img src="/IMG1.PNG" alt="Macchanu Racing" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-grotesk tracking-[0.25em] text-mac-gold"
              style={{ background: 'rgba(214,183,71,0.08)', border: '1px solid rgba(214,183,71,0.2)' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-mac-gold animate-pulse" />
              F1 IN SCHOOLS · WORLD FINALS 2026
            </span>
          </motion.div>

          {/* Headline — one word */}
          <div className="overflow-hidden mb-5">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-display leading-none"
              style={{ fontSize: 'clamp(4.5rem, 16vw, 16rem)', lineHeight: 0.88 }}
            >
              <span className="text-white">MAC</span><span className="text-gradient">CHANU</span>
            </motion.h1>
          </div>

          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mb-8"
          >
            <p className="text-base md:text-lg font-grotesk tracking-[0.2em] text-mac-gold/80 uppercase mb-2">
              Racing by Motion
            </p>
            <p className="text-sm text-white/40 font-grotesk">
              Six students · Amnuay Silpa School, Thailand
            </p>
          </motion.div>

          {/* Countdown */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="flex flex-col items-center gap-3 mb-10"
          >
            <div className="flex items-center gap-2">
              {[
                { v: String(days).padStart(2,'0'),  l: 'DAYS' },
                { v: String(hours).padStart(2,'0'), l: 'HRS' },
                { v: String(mins).padStart(2,'0'),  l: 'MIN' },
              ].map(({ v, l }, i) => (
                <div key={l} className="flex items-center gap-2">
                  <div className="text-center">
                    <div
                      className="font-display text-5xl md:text-6xl text-mac-gold leading-none px-4 py-3 rounded-2xl"
                      style={{
                        background: 'rgba(214,183,71,0.07)',
                        border: '1px solid rgba(214,183,71,0.2)',
                        minWidth: '4.5rem',
                        boxShadow: '0 4px 24px rgba(214,183,71,0.08) inset',
                      }}
                    >{v}</div>
                    <div className="text-[9px] font-grotesk tracking-[0.2em] mt-2" style={{ color: 'rgba(214,183,71,0.45)' }}>{l}</div>
                  </div>
                  {i < 2 && <span className="font-display text-3xl text-mac-gold/25 mb-5">:</span>}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-px" style={{ background: 'rgba(214,183,71,0.2)' }} />
              <span className="text-[10px] font-grotesk tracking-[0.25em] text-mac-gold/45">JUNE 14 · JAPAN 2026</span>
              <span className="w-8 h-px" style={{ background: 'rgba(214,183,71,0.2)' }} />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <a href="/sponsorship" className="btn-gold">Sponsor Us</a>
            <a href="/team" className="btn-primary">Meet the Team</a>
          </motion.div>
        </div>
      </section>

      {/* ── Marquee strip ─────────────────────────────────── */}
      <div className="py-4 overflow-hidden" style={{ background: 'rgba(214,183,71,0.06)', borderTop: '1px solid rgba(214,183,71,0.15)', borderBottom: '1px solid rgba(214,183,71,0.15)' }}>
        <div className="marquee-container">
          <div className="marquee">
            {[...MARQUEE_TEXT, ...MARQUEE_TEXT, ...MARQUEE_TEXT, ...MARQUEE_TEXT].map((t, i) => (
              <span key={i} className="inline-flex items-center gap-6 mx-6">
                <span className="font-display text-sm tracking-[0.2em] text-mac-gold/70">{t}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-mac-gold/30 shrink-0" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats ─────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card text-center relative overflow-hidden"
                style={{ padding: '1.5rem 1rem' }}
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px"
                  style={{
                    background: i % 2 === 0
                      ? 'linear-gradient(90deg, transparent, rgba(214,183,71,0.7), transparent)'
                      : 'linear-gradient(90deg, transparent, rgba(25,117,126,0.7), transparent)'
                  }}
                />
                <div className="font-display text-5xl md:text-6xl text-gradient mb-1">
                  <AnimatedCounter to={stat.value} />
                </div>
                <div className="text-[10px] font-grotesk tracking-[0.2em]" style={{ color: 'var(--theme-text-faint)' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ─────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-grotesk tracking-widest text-mac-teal mb-4 block">ABOUT THE TEAM</span>
              <h2 className="font-display text-6xl md:text-7xl leading-none mb-6">
                <span style={{ color: 'var(--theme-text)' }}>BUILT FROM</span>
                <br />
                <span className="text-gradient">SCRATCH.</span>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--theme-text-muted)' }}>
                We are Macchanu Racing, six students from Amnuay Silpa School, Thailand. Our mission: design, build, and race a miniature F1 car from concept to the 2026 World Finals in Japan.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--theme-text-faint)' }}>
                Every system — aerodynamics, CAD, manufacturing, strategy — is engineered in-house. We don't just race. We innovate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { title: 'CAD / CAM', sub: 'Industry-standard software', accent: 'mac-gold' },
                { title: 'CFD Validated', sub: 'Computational fluid dynamics', accent: 'mac-teal' },
                { title: '±0.01mm', sub: 'CNC manufacturing accuracy', accent: 'mac-gold' },
                { title: '6 Students', sub: 'One shared ambition', accent: 'mac-teal' },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card-hover"
                  style={{ padding: '1.25rem 1.25rem' }}
                >
                  <div className={`text-${card.accent} font-display text-2xl mb-1`}>{card.title}</div>
                  <div className="text-xs font-grotesk tracking-wide" style={{ color: 'var(--theme-text-faint)' }}>{card.sub}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Team Preview ──────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-grotesk tracking-widest text-mac-gold mb-3 block">THE MACHINE</span>
            <h2 className="font-display text-5xl md:text-6xl leading-none" style={{ color: 'var(--theme-text)' }}>
              MEET YOUR <span className="text-gradient">MAKERS</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {teamPreview.map((m, i) => (
              <motion.div
                key={m.nickname}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card-hover text-center"
                style={{ padding: '1.5rem 1rem' }}
              >
                {/* Letter avatar */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${m.color} flex items-center justify-center mx-auto mb-3 shrink-0`}>
                  <span className="font-display text-2xl text-mac-black leading-none">
                    {m.nickname[0]}
                  </span>
                </div>
                <div className="font-display text-xl leading-none mb-1" style={{ color: 'var(--theme-text)' }}>
                  {m.nickname.toUpperCase()}
                </div>
                <div className="text-[10px] font-grotesk tracking-wide" style={{ color: 'var(--theme-text-faint)' }}>
                  {m.role}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <a href="/team" className="btn-primary inline-block">View Full Team</a>
          </div>
        </div>
      </section>

      {/* ── Engineering Preview ───────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
              style={{ padding: 0, aspectRatio: '4/3' }}
            >
              <div className="relative w-full h-full min-h-[260px]">
                <img
                  src="/IMG1.PNG"
                  alt="Macchanu Racing"
                  className="w-full h-full object-cover object-center"
                  style={{ filter: 'saturate(0.7) brightness(0.6)' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.8) 0%, rgba(10,10,15,0.2) 60%, transparent 100%)' }} />
                <div className="absolute bottom-5 left-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-grotesk tracking-widest text-mac-teal"
                    style={{ background: 'rgba(25,117,126,0.15)', border: '1px solid rgba(25,117,126,0.3)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-mac-green animate-pulse" />
                    CAD / CFD / CNC
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-grotesk tracking-widest text-mac-teal mb-4 block">ENGINEERING EXCELLENCE</span>
              <h2 className="font-display text-5xl md:text-6xl leading-none mb-6">
                <span style={{ color: 'var(--theme-text)' }}>PRECISION IN</span>
                <br />
                <span className="text-gold-gradient">EVERY DETAIL.</span>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: 'var(--theme-text-muted)' }}>
                From our rear wing aligner (3D printed, 0.005mm tolerance) to our 2-divot wheel system (CNC milled, ±0.01mm), every component is engineered for maximum efficiency.
              </p>
              <div className="flex gap-6 mb-8">
                <div>
                  <div className="font-display text-3xl text-mac-gold">0.005</div>
                  <div className="text-[10px] tracking-widest font-grotesk" style={{ color: 'var(--theme-text-faint)' }}>mm TOLERANCE</div>
                </div>
                <div className="w-px" style={{ background: 'var(--theme-border)' }} />
                <div>
                  <div className="font-display text-3xl text-mac-teal">±0.01</div>
                  <div className="text-[10px] tracking-widest font-grotesk" style={{ color: 'var(--theme-text-faint)' }}>mm ACCURACY</div>
                </div>
              </div>
              <a href="/engineering" className="btn-gold inline-block">View Engineering</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
            style={{ border: '1px solid var(--theme-border)' }}
          >
            {/* Background */}
            <img
              src="/IMG3.JPG"
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'saturate(0.5) brightness(0.25)' }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, rgba(10,10,15,0.75) 0%, rgba(10,10,15,0.55) 100%)' }} />

            <div className="relative z-10 p-10 md:p-16 text-center">
              <span className="text-xs font-grotesk tracking-[0.25em] text-mac-gold/70 mb-4 block">JOIN OUR JOURNEY</span>
              <h2 className="font-display text-5xl md:text-7xl leading-none text-white mb-4">
                HELP US RACE
                <br />
                <span className="text-gradient">THE WORLD.</span>
              </h2>
              <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.5)' }}>
                Six Thai students. One stage. Your support makes the difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/sponsorship" className="btn-gold">Sponsorship Prospectus</a>
                <a href="mailto:matchanu.racing@gmail.com" className="btn-primary" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)' }}>Contact Us</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
