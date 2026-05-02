import { motion } from 'framer-motion'

const sponsors = [
  { name: 'PTT', logo: '/PTT.png', tier: 'Title Sponsor' },
  { name: 'FF', logo: '/FF.png', tier: 'Supporting Sponsor' },
]

export default function Sponsorship() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding pb-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-white/5 border border-mac-gold/30 text-mac-gold text-xs font-mono tracking-widest">
              SPONSORSHIPS
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6"
          >
            <span className="text-white">Power Our </span>
            <span className="text-gold-gradient">Journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Six students. One team. Your sponsorship enables Thai talent to compete on the world stage.
          </motion.p>
        </div>
      </section>

      {/* Prospectus CTA */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-14 text-center"
          >
            <div className="text-5xl mb-4">📄</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Sponsorship Prospectus</h2>
            <p className="text-white/50 mb-6">
              Download our complete sponsorship prospectus for full details on partnership tiers, benefits, and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/prospectus.pdf" target="_blank" className="btn-gold inline-flex items-center gap-2 px-6 py-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Prospectus
              </a>
              <a href="/sponsorship-prospectus" className="btn-primary inline-flex items-center gap-2 px-6 py-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs text-mac-gold font-mono tracking-widest mb-4 block">OUR SPONSORS</span>
            <h2 className="text-3xl font-bold text-white">Powered by</h2>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {sponsors.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="glass-card-hover p-8 md:p-12 w-48 md:w-64 flex items-center justify-center"
              >
                <img src={s.logo} alt={s.name} className="max-h-20 w-auto object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs text-mac-teal font-mono tracking-widest mb-4 block">PARTNERSHIP TIERS</span>
            <h2 className="text-3xl font-bold text-white">Choose Your <span className="text-gold-gradient">Impact</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Jasmine',
                amount: '฿ 5,000',
                color: 'from-mac-teal-light to-mac-teal',
                icon: '🌸',
                features: [
                  'Acknowledgement on team website',
                  'Acknowledgement on social media',
                  'Logo on team uniforms',
                  'Logo on portfolios',
                ],
              },
              {
                name: 'Lily',
                amount: '฿ 25,000',
                color: 'from-mac-teal to-mac-gold',
                icon: '🌺',
                features: [
                  'All Jasmine benefits',
                  'Prominent logo on uniforms',
                  'Prominent logo on portfolios',
                  'Priority social media feature',
                ],
              },
              {
                name: 'Orchid',
                amount: '฿ 100,000',
                color: 'from-mac-gold to-mac-gold-light',
                icon: '🌹',
                features: [
                  'All Lily benefits',
                  'Logo on team car',
                  'Coordinated social media promotion',
                  'Corporate feature interview',
                ],
              },
              {
                name: 'Lotus',
                amount: '฿ 200,000+',
                color: 'from-mac-gold-dark to-mac-gold',
                icon: '🪷',
                features: [
                  'All Orchid benefits',
                  'Most prominent logo everywhere',
                  'Business cards at event',
                  'Negotiated promotional goods',
                  'Exclusive title recognition',
                ],
              },
            ].map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass-card-hover p-6 md:p-8 relative"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.color}`} />
                <div className="relative z-10">
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-2">{tier.icon}</div>
                    <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                    <p className="text-mac-gold font-bold text-2xl mt-1">{tier.amount}</p>
                  </div>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map(f => (
                      <li key={f} className="text-white/50 text-sm flex items-start gap-2">
                        <span className="text-mac-green mt-0.5 shrink-0">✓</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="/sponsorship-prospectus" className="block w-full text-center py-2 rounded-full border border-mac-gold/30 text-mac-gold text-sm font-mono tracking-widest hover:bg-mac-gold/10 transition-colors">
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
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-10 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
            <p className="text-white/50 mb-8">
              Let's discuss how your brand can be part of our journey to the F1 in Schools World Finals 2026.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:matchanu.racing@gmail.com" className="btn-primary text-center px-8 py-3">Contact Us</a>
              <a href="/prospectus.pdf" target="_blank" className="btn-gold text-center px-8 py-3">View Prospectus</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}