import { motion } from 'framer-motion'
import { useState } from 'react'

const FORM_URL =
  'https://forms.cloud.microsoft/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAAO__UegpuRUME1SNVIxTFREWVU0Wlc3WUs5QUpPMUpBVy4u&embed=true'


export default function Merch() {
  const [formLoaded, setFormLoaded] = useState(false)

  return (
    <div
      className="min-h-screen"
      style={{ color: 'var(--theme-text)', background: 'var(--theme-bg)', position: 'relative' }}
    >
      {/* Diagonal BG accents */}
      <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
        {[...Array(6)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: `${-10 + i * 22}%`,
            left: '-10%',
            width: '120%',
            height: '1px',
            background: `rgba(214,183,71,${0.015 + i * 0.008})`,
            transform: 'rotate(-6deg)',
          }} />
        ))}
        {/* Ambient glow */}
        <div style={{
          position: 'absolute', top: '20%', right: '-10%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(25,117,126,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '-5%',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(214,183,71,0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Top accent bar */}
      <div aria-hidden style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #d6b747 30%, #19757e 60%, transparent)',
        zIndex: 10,
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <section className="pt-28 pb-24 px-6">
          <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

            {/* Live badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '36px' }}
            >
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '6px 16px',
                border: '1px solid rgba(214,183,71,0.35)',
                borderRadius: '999px',
                background: 'rgba(214,183,71,0.05)',
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#d6b747',
                  boxShadow: '0 0 0 2px rgba(214,183,71,0.2)',
                  animation: 'pulse 2s ease-in-out infinite',
                  display: 'block',
                }} />
                <span style={{
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '10px', letterSpacing: '0.28em',
                  color: '#d6b747', textTransform: 'uppercase', fontWeight: 600,
                }}>
                  Limited Drop — Pre-Order Open
                </span>
              </div>
            </motion.div>

            {/* Two-column layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}
              className="lg-two-col">

              {/* ── LEFT: Product Info ── */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Headline */}
                <div style={{ marginBottom: '52px' }}>
                  <h1 style={{
                    fontFamily: 'Bebas Neue, sans-serif',
                    fontSize: 'clamp(80px, 10vw, 144px)',
                    lineHeight: 0.84,
                    letterSpacing: '0.04em',
                  }}>
                    <span style={{
                      display: 'block',
                      WebkitTextStroke: '1px rgba(214,183,71,0.55)',
                      color: 'transparent',
                    }}>MACCHANU</span>
                    <span style={{
                      display: 'block',
                      background: 'linear-gradient(135deg, #d6b747 0%, #f0d870 45%, #a07828 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>RACING</span>
                    <span style={{
                      display: 'block',
                      fontSize: '0.48em',
                      letterSpacing: '0.22em',
                      color: 'rgba(255,255,255,0.35)',
                    }}>COLLECTION</span>
                  </h1>
                </div>

                {/* Racing livery graphic */}
                <div style={{ marginBottom: '52px' }}>
                  <svg viewBox="0 0 460 90" fill="none" style={{ width: '100%' }}>
                    <line x1="0" y1="0" x2="460" y2="0" stroke="rgba(214,183,71,0.35)" strokeWidth="1.5" />
                    <polygon points="0,90 128,0 168,0 40,90" fill="rgba(25,117,126,0.22)" />
                    <polygon points="2,90 132,0 136,0 6,90" fill="rgba(214,183,71,0.2)" />
                    <polygon points="150,90 308,0 348,0 190,90" fill="rgba(25,117,126,0.13)" />
                    <polygon points="178,90 318,0 322,0 182,90" fill="rgba(214,183,71,0.13)" />
                    <polygon points="310,90 450,0 460,0 460,6 320,90" fill="rgba(25,117,126,0.08)" />
                    <line x1="0" y1="90" x2="460" y2="90" stroke="rgba(214,183,71,0.12)" strokeWidth="1" />
                  </svg>
                </div>

                {/* Pill tags */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['Limited Run', 'Pre-Order Only', '2025 Season'].map((tag, i) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.45 + i * 0.09 }}
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '10px', letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        padding: '7px 18px',
                        border: '1px solid rgba(214,183,71,0.22)',
                        borderRadius: '999px',
                        color: 'rgba(214,183,71,0.6)',
                        background: 'rgba(214,183,71,0.04)',
                      }}
                    >{tag}</motion.span>
                  ))}
                </div>
              </motion.div>

              {/* ── RIGHT: Form ── */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'sticky', top: '96px' }}
              >
                {/* Form header bar */}
                <div style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  marginBottom: '12px',
                }}>
                  <span style={{
                    fontFamily: 'Space Grotesk, sans-serif',
                    fontSize: '10px', letterSpacing: '0.22em',
                    textTransform: 'uppercase', color: 'var(--theme-text-muted)',
                  }}>
                    Pre-Order Form
                  </span>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    {['#ff5f57', '#febc2e', '#28c840'].map(c => (
                      <div key={c} style={{ width: 8, height: 8, borderRadius: '50%', background: c }} />
                    ))}
                  </div>
                </div>

                {/* Form card */}
                <div style={{
                  border: '1px solid var(--theme-border)',
                  borderRadius: '18px',
                  overflow: 'hidden',
                  background: 'var(--theme-surface)',
                  boxShadow: '0 40px 90px rgba(0,0,0,0.45), 0 0 0 1px rgba(214,183,71,0.07)',
                  position: 'relative',
                }}>
                  {/* Gold-teal top stripe */}
                  <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
                    background: 'linear-gradient(90deg, #d6b747 0%, #19757e 55%, transparent 100%)',
                    zIndex: 2,
                  }} />

                  {/* Loading shimmer */}
                  {!formLoaded && (
                    <div style={{
                      position: 'absolute', inset: 0, zIndex: 1,
                      background: 'linear-gradient(90deg, var(--theme-surface) 25%, rgba(214,183,71,0.04) 50%, var(--theme-surface) 75%)',
                      backgroundSize: '200% 100%',
                      animation: 'shimmer 1.8s infinite',
                      borderRadius: '18px',
                    }} />
                  )}

                  <iframe
                    src={FORM_URL}
                    frameBorder="0"
                    marginWidth="0"
                    marginHeight="0"
                    title="T-Shirt Pre-Order"
                    allowFullScreen
                    onLoad={() => setFormLoaded(true)}
                    style={{
                      width: '100%',
                      minHeight: '620px',
                      border: 'none',
                      display: 'block',
                    }}
                  />
                </div>

                <p style={{
                  marginTop: '14px', textAlign: 'center',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontSize: '11px', letterSpacing: '0.1em',
                  color: 'var(--theme-text-faint)',
                }}>
                  Confirmation via email · Production starts after window closes
                </p>
              </motion.div>
            </div>

          </div>
        </section>
      </div>

      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        @media (max-width: 900px) {
          .lg-two-col {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </div>
  )
}
