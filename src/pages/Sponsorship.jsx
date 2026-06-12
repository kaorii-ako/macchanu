import { motion } from 'framer-motion'
import { Check, FileText, Eye } from 'lucide-react'

function logoHeight(amount) {
  const MIN = 34, MAX = 110
  const logMin = Math.log(5000), logMax = Math.log(300000)
  return Math.round(MIN + (MAX - MIN) * (Math.log(amount) - logMin) / (logMax - logMin))
}

const sponsors = [
  { name: 'Amnuaysilpa School', logo: '/ANS.png', tierName: 'Jasmine', amount: 150000, url: 'https://www.amnuaysilpa.ac.th/' },
  { name: 'ประชาชื่นอิมเมจจิ้งเซ็นเตอร์', logo: '/PC.webp', tierName: 'Orchid', amount: 60000, url: 'https://mrithailand.com/' },
  { name: 'PTTEP', logo: '/PTT.png', tierName: 'Orchid', amount: 25000, url: 'https://www.pttep.com/en/home' },
  { name: 'FF',    logo: '/FF.png',  tierName: 'Lily',   amount: 5000,  url: 'https://ff.co.th/' },
]

const GOAL = 575000
const raised = 575000
const pct = parseFloat(((raised / GOAL) * 100).toFixed(1))

const tiers = [
  {
    num: '01',
    name: 'Lily',
    amount: '฿ 5,000',
    gradient: 'from-mac-teal-light to-mac-teal',
    accent: '#2ba7b3',
    features: [
      'Acknowledgement on team website',
      'Acknowledgement on social media platforms',
      'Corporate logo designed on team uniforms',
      'Corporate logo designed on portfolios',
    ],
  },
  {
    num: '02',
    name: 'Orchid',
    amount: '฿ 25,000',
    gradient: 'from-mac-teal to-mac-gold',
    accent: '#19757e',
    features: [
      'All Lily benefits',
      'More prominent logo on team uniforms',
      'More prominent logo on portfolios',
    ],
  },
  {
    num: '03',
    name: 'Jasmine',
    amount: '฿ 100,000',
    gradient: 'from-mac-gold to-mac-gold-light',
    accent: '#d6b747',
    features: [
      'All Orchid benefits',
      'More prominent logo on uniforms and portfolios',
      'Corporate logo on the team car',
      'Coordinated promotion over social media',
    ],
  },
  {
    num: '04',
    name: 'Lotus',
    amount: '฿ 200,000 – 300,000',
    gradient: 'from-mac-gold-dark to-mac-gold',
    accent: '#f0d15c',
    features: [
      'All Jasmine benefits',
      'Most prominent logo on uniforms, portfolios, and car',
      'Business cards presented at the event',
      'Negotiated promotional goods at the event',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
}

const staggerGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

const springHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.025,
    y: -6,
    transition: { type: 'spring', stiffness: 300, damping: 22 },
  },
}

export default function Sponsorship() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding pb-12">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-6"
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-grotesk tracking-[0.2em] text-mac-gold"
              style={{ background: 'rgba(214,183,71,0.08)', border: '1px solid rgba(214,183,71,0.25)' }}>
              SPONSORSHIPS
            </span>
          </motion.div>
          <div className="overflow-hidden mb-6">
            <motion.h1
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display leading-none"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: 'var(--theme-text)' }}
            >
              POWER OUR <span className="text-gold-gradient">JOURNEY</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
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
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card text-center"
            style={{ padding: '3rem' }}
          >
            <motion.div
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mac-gold/20 to-mac-teal/20 flex items-center justify-center mx-auto mb-4"
              whileHover={{ rotate: [0, -8, 8, 0], scale: 1.1 }}
              transition={{ duration: 0.4 }}
            >
              <FileText className="w-7 h-7 text-mac-gold" />
            </motion.div>
            <h2 className="font-display text-3xl md:text-4xl leading-none mb-3" style={{ color: 'var(--theme-text)' }}>
              SPONSORSHIP PROSPECTUS
            </h2>
            <p className="font-grotesk mb-6 max-w-md mx-auto" style={{ color: 'var(--theme-text-muted)' }}>
              Download our complete sponsorship prospectus for full details on partnership tiers, benefits, and impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <motion.a
                href="/prospectus.pdf"
                target="_blank"
                className="btn-gold inline-flex items-center gap-2"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download PDF
              </motion.a>
              <motion.a
                href="/sponsorship-prospectus"
                className="btn-primary inline-flex items-center gap-2"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                <Eye className="w-4 h-4" />
                Read Online
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Sponsors + Tracker */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-xs text-mac-gold font-grotesk tracking-widest mb-3 block">CURRENT PARTNERS</span>
            <h2 className="font-display text-4xl md:text-5xl leading-none" style={{ color: 'var(--theme-text)' }}>
              POWERED BY
            </h2>
          </motion.div>

          {/* Tracker card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card mb-10"
            style={{ padding: '2rem 2.5rem' }}
          >
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-5">
              <div>
                <div className="text-[10px] font-grotesk tracking-widest mb-1" style={{ color: 'var(--theme-text-faint)' }}>
                  TOTAL RAISED
                </div>
                <div className="font-display text-5xl md:text-6xl text-gradient leading-none">
                  ฿ {raised.toLocaleString()}
                </div>
              </div>
              <div className="sm:text-right">
                <div className="text-[10px] font-grotesk tracking-widest mb-1" style={{ color: 'var(--theme-text-faint)' }}>
                  BUDGET GOAL
                </div>
                <div className="font-display text-2xl leading-none" style={{ color: 'var(--theme-text-muted)' }}>
                  ฿ {GOAL.toLocaleString()}
                </div>
              </div>
            </div>

            <div className="h-2 rounded-full overflow-hidden mb-2.5" style={{ background: 'var(--theme-border)' }}>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                transition={{ duration: 1.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #19757e, #d6b747)' }}
              />
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-grotesk" style={{ color: 'var(--theme-text-faint)' }}>
                {pct}% funded
              </span>
              <span className="text-xs font-grotesk" style={{ color: 'var(--theme-text-faint)' }}>
                ฿ {(GOAL - raised).toLocaleString()} remaining
              </span>
            </div>

            <div className="mt-5 pt-5 flex flex-wrap gap-4" style={{ borderTop: '1px solid var(--theme-border)' }}>
              {sponsors.map(s => (
                <div key={s.name} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-mac-gold shrink-0" />
                  <span className="text-xs font-grotesk" style={{ color: 'var(--theme-text-muted)' }}>
                    {s.name}
                  </span>
                  <span className="text-xs font-grotesk text-mac-gold font-bold">
                    ฿ {s.amount.toLocaleString()}
                  </span>
                  <span className="text-[10px] font-grotesk tracking-wide px-2 py-0.5 rounded-full"
                    style={{ background: 'var(--theme-surface-hover)', color: 'var(--theme-text-faint)' }}>
                    {s.tierName}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sponsor logos */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-10 md:gap-16"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[...sponsors].sort((a, b) => b.amount - a.amount).map((s) => {
              const h = logoHeight(s.amount)
              return (
                <motion.div
                  key={s.name}
                  variants={cardItem}
                  className="flex flex-col items-center gap-3"
                >
                  <motion.a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    whileHover={{ scale: 1.08, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  >
                    <img
                      src={s.logo}
                      alt={s.name}
                      style={{ height: h, width: 'auto', maxWidth: 200, objectFit: 'contain', ...(s.logo === '/ANS.png' && { borderRadius: '16px' }) }}
                    />
                  </motion.a>
                  <div className="text-center">
                    <div className="text-[10px] font-grotesk tracking-[0.18em]" style={{ color: 'var(--theme-text-faint)' }}>
                      {s.tierName.toUpperCase()} TIER
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Tiers */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs text-mac-teal font-grotesk tracking-widest mb-3 block">PARTNERSHIP TIERS</span>
            <h2 className="font-display text-4xl md:text-5xl leading-none" style={{ color: 'var(--theme-text)' }}>
              CHOOSE YOUR <span className="text-gold-gradient">IMPACT</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {tiers.map((tier) => (
              <motion.div
                key={tier.name}
                variants={cardItem}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="glass-card-hover relative overflow-hidden flex flex-col"
              >
                <motion.div variants={springHover} style={{ display: 'contents' }}>
                  <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${tier.gradient}`} />

                  <div className="relative z-10 pt-2 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <span className="font-display text-4xl leading-none" style={{ color: tier.accent, opacity: 0.5 }}>
                        {tier.num}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl leading-none mb-1" style={{ color: 'var(--theme-text)' }}>
                      {tier.name.toUpperCase()}
                    </h3>
                    <p className="font-display text-xl mb-4" style={{ color: tier.accent }}>
                      {tier.amount}
                    </p>

                    <ul className="space-y-2.5 mb-6 flex-1">
                      {tier.features.map(f => (
                        <li key={f} className="text-xs font-grotesk flex items-start gap-2" style={{ color: 'var(--theme-text-muted)' }}>
                          <Check className="w-3.5 h-3.5 shrink-0 mt-0.5" style={{ color: '#1dd169' }} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href="/sponsorship-prospectus"
                      className="block w-full text-center py-2 rounded-full font-grotesk text-xs tracking-widest transition-colors cursor-pointer"
                      style={{ border: `1px solid ${tier.accent}40`, color: tier.accent }}
                      whileHover={{ background: `${tier.accent}12`, borderColor: `${tier.accent}70` }}
                      transition={{ duration: 0.2 }}
                    >
                      VIEW DETAILS
                    </motion.a>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
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
              <motion.a
                href="mailto:matchanu.racing@gmail.com"
                className="btn-primary"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                Contact Us
              </motion.a>
              <motion.a
                href="/prospectus.pdf"
                target="_blank"
                className="btn-gold"
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                View Prospectus
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
