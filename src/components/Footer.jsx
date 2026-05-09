import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative" style={{ background: 'var(--theme-footer-bg)' }}>
      <div className="racing-stripe" style={{ top: 0 }} />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(25,117,126,0.04), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full overflow-hidden" style={{ border: '1px solid rgba(214,183,71,0.3)' }}>
                <img src="/IMG1.PNG" alt="Macchanu" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-display text-xl tracking-widest" style={{ color: 'var(--theme-text)' }}>MACCHANU</div>
                <div className="text-[9px] font-grotesk tracking-[0.25em] text-mac-teal/70">RACING TEAM</div>
              </div>
            </div>
            <p className="text-sm font-grotesk leading-relaxed max-w-sm mb-5" style={{ color: 'var(--theme-text-muted)' }}>
              Six students. One team. Driven by determination and ambition, we are building a legacy by motion.
            </p>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/macchanu.racing/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(25,117,126,0.5)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--theme-border)'}
              >
                <svg className="w-4 h-4" style={{ color: 'var(--theme-text-muted)' }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="mailto:matchanu.racing@gmail.com" aria-label="Email"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all"
                style={{ background: 'var(--theme-surface)', border: '1px solid var(--theme-border)' }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(214,183,71,0.5)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--theme-border)'}
              >
                <svg className="w-4 h-4" style={{ color: 'var(--theme-text-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Sponsors */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[10px] font-grotesk tracking-[0.2em] text-mac-gold mb-4">OUR PARTNERS</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <img src="/PTT.png" alt="PTT" className="w-auto object-contain" style={{ height: 40, filter: 'grayscale(0.3)' }} />
                <span className="text-xs font-grotesk" style={{ color: 'var(--theme-text-faint)' }}>Orchid Sponsor</span>
              </div>
              <div className="flex items-center gap-3">
                <img src="/FF.png" alt="FF" className="w-auto object-contain" style={{ height: 26, filter: 'grayscale(0.3)' }} />
                <span className="text-xs font-grotesk" style={{ color: 'var(--theme-text-faint)' }}>Supporting Sponsor</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6" style={{ borderTop: '1px solid var(--theme-border)' }}>
          <p className="text-xs font-grotesk" style={{ color: 'var(--theme-text-faint)' }}>
            © 2026 Macchanu Racing · Amnuay Silpa School
          </p>
          <p className="text-xs font-grotesk tracking-widest" style={{ color: 'var(--theme-text-faint)' }}>
            JAPAN NATIONAL FINALS · 14 JUNE 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
