import { motion } from 'framer-motion'

const sponsors = [
  { name: 'PTT', logo: '/PTT.png', tier: 'Title Sponsor' },
  { name: 'FF',  logo: '/FF.png',  tier: 'Supporting Sponsor' },
]

const tiers = [
  {
    num: '01',
    name: 'Jasmine',
    amount: '฿ 5,000',
    gradient: 'from-mac-teal-light to-mac-teal',
    accent: '#2ba7b3',
    features: [
      'Acknowledgement on team website',
      'Acknowledgement on social media',
      'Logo on team uniforms',
      'Logo on portfolios',
    ],
  },
  {
    num: '02',
    name: 'Lily',
    amount: '฿ 25,000',
    gradient: 'from-mac-teal to-mac-gold',
    accent: '#19757e',
    features: [
      'All Jasmine benefits',
      'Prominent logo on uniforms',
      'Prominent logo on portfolios',
      'Priority social media feature',
    ],
  },
  {
    num: '03',
    name: 'Orchid',
    amount: '฿ 100,000',
    gradient: 'from-mac-gold to-mac-gold-light',
    accent: '#d6b747',
    features: [
      'All Lily benefits',
      'Logo on team car',
      'Coordinated social media promotion',
      'Corporate feature interview',
    ],
  },
  {
    num: '04',
    name: 'Lotus',
    amount: '฿ 200,000+',
    gradient: 'from-mac-gold-dark to-mac-gold',
    accent: '#f0d15c',
    features: [
      'All Orchid benefits',
      'Most prominent logo everywhere',
      'Business cards at event',
      'Negotiated promotional goods',
      'Exclusive title recognition',
    ],
  },
]

export default function Sponsorship() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding pb-12">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-grotesk tracking-[0.2em] text-mac-gold"
              style={{ background: 'rgba(214,183,71,0.08)', border: '1px solid rgba(214,183,71,0.25)' }}>
              SPONSORSHIPS
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display leading-none mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: 'var(--theme-text)' }}
          >
            POWER OUR <span className="text-gold-gradient">JOURNEY</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl font-grotesk"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            Six students. One team. Your sponsorship enables Thai talent to compete on the world stage.
          </motion.p>
        </div>
      </section>

      {/* Prospectus CTA */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card text-center"
            style={{ padding: '3rem' }}
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mac-gold/20 to-mac-teal/20 flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-mac-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h2 className="font-display text-3xl md:text-4xl leading-none mb-3" style={{ color: 'var(--theme-text)' }}>
              SPONSORSHIP PROSPECTUS
            </h2>
            <p className="font-grotesk mb-6 max-w-md mx-auto" style={{ color: 'var(--theme-text-muted)' }}>
              Download our complete sponsorship prospectus for full details on partnership tiers, benefits, and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="/prospectus.pdf" target="_blank" className="btn-gold inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </a>
              <a href="/sponsorship-prospectus" className="btn-primary inline-flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Read Online
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs text-mac-gold font-grotesk tracking-widest mb-3 block">CURRENT PARTNERS</span>
            <h2 className="font-display text-4xl md:text-5xl leading-none" style={{ color: 'var(--theme-text)' }}>
              POWERED BY
            </h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {sponsors.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card-hover flex flex-col items-center justify-center gap-3"
                style={{ width: 200, padding: '2.5rem 2rem' }}
              >
                <img src={s.logo} alt={s.name} className="max-h-16 w-auto object-contain" />
                <span className="text-[10px] font-grotesk tracking-[0.2em]" style={{ color: 'var(--theme-text-faint)' }}>
                  {s.tier.toUpperCase()}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs text-mac-teal font-grotesk tracking-widest mb-3 block">PARTNERSHIP TIERS</span>
            <h2 className="font-display text-4xl md:text-5xl leading-none" style={{ color: 'var(--theme-text)' }}>
              CHOOSE YOUR <span className="text-gold-gradient">IMPACT</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card-hover relative overflow-hidden flex flex-col"
              >
                {/* Top stripe */}
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${tier.gradient}`} />

                <div className="relative z-10 pt-2 flex flex-col flex-1">
                  {/* Tier number badge */}
                  <div className="flex items-start justify-between mb-4">
                    <span className="font-display text-4xl leading-none" style={{ color: tier.accent, opacity: 0.6 }}>
                      {tier.num}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl leading-none mb-1" style={{ color: 'var(--theme-text)' }}>
                    {tier.name.toUpperCase()}
                  </h3>
                  <p className="font-display text-2xl mb-4" style={{ color: tier.accent }}>
                    {tier.amount}
                  </p>

                  <ul className="space-y-2.5 mb-6 flex-1">
                    {tier.features.map(f => (
                      <li key={f} className="text-xs font-grotesk flex items-start gap-2" style={{ color: 'var(--theme-text-muted)' }}>
                        <span className="text-mac-green mt-0.5 shrink-0 text-sm">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="/sponsorship-prospectus"
                    className="block w-full text-center py-2 rounded-full font-grotesk text-xs tracking-widest transition-all"
                    style={{ border: `1px solid ${tier.accent}40`, color: tier.accent }}
                    onMouseEnter={e => { e.target.style.background = `${tier.accent}12` }}
                    onMouseLeave={e => { e.target.style.background = 'transparent' }}
                  >
                    VIEW DETAILS
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card text-center"
            style={{ padding: '3rem' }}
          >
            <h2 className="font-display text-4xl md:text-5xl leading-none mb-4" style={{ color: 'var(--theme-text)' }}>
              READY TO MAKE AN IMPACT?
            </h2>
            <p className="font-grotesk mb-8 max-w-lg mx-auto" style={{ color: 'var(--theme-text-muted)' }}>
              Let's discuss how your brand can be part of our journey to the F1 in Schools World Finals 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="mailto:matchanu.racing@gmail.com" className="btn-primary">Contact Us</a>
              <a href="/prospectus.pdf" target="_blank" className="btn-gold">View Prospectus</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
