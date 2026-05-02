import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'

export default function PdfViewer() {
  const [url] = useState('http://localhost:5173/prospectus.pdf')
  const iframeRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [loading, setLoading] = useState(true)

  const handleIframeLoad = useCallback(() => {
    setLoaded(true)
    setLoading(false)
  }, [])

  const handleIframeError = useCallback(() => {
    setLoading(false)
  }, [])

  return (
    <div className="pt-24 min-h-screen">
      <section className="section-padding pb-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-white/5 border border-mac-gold/30 text-mac-gold text-xs font-mono tracking-widest">
              SPONSORSHIP
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6"
          >
            <span className="text-white">Sponsorship </span>
            <span className="text-gradient">Prospectus</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Download our complete sponsorship prospectus for full details on partnership tiers, benefits, and impact.
          </motion.p>
        </div>
      </section>

      {/* PDF Viewer */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-2 overflow-hidden relative"
            style={{ minHeight: '70vh' }}
          >
            {/* Loading state */}
            {loading && !loaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 z-20">
                <div className="w-16 h-16 rounded-full border-4 border-mac-gold/30 border-t-mac-gold animate-spin mb-4" />
                <p className="text-white/60 font-mono text-sm tracking-wider">LOADING PROSPECTUS</p>
              </div>
            )}

            {/* Iframe embed */}
            <iframe
              ref={iframeRef}
              src={url}
              title="Sponsorship Prospectus"
              className="w-full h-[70vh] border-0"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
            />

            {/* If iframe fails, show download fallback */}
            {loaded && !loading && !iframeRef.current?.contentDocument?.body?.childElementCount && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 z-30">
                <div className="text-6xl mb-6">📄</div>
                <h3 className="text-2xl font-bold text-white mb-4">Download the Prospectus</h3>
                <p className="text-white/50 mb-8 max-w-md text-center">
                  The PDF may not embed in all browsers. Click below to download or open it directly.
                </p>
                <div className="flex gap-4">
                  <a
                    href="/prospectus.pdf"
                    download
                    className="btn-gold inline-flex items-center gap-2 px-6 py-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download PDF
                  </a>
                  <a
                    href="/prospectus.pdf"
                    target="_blank"
                    className="btn-primary inline-flex items-center gap-2 px-6 py-3"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Open in New Tab
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Key Info Cards */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs text-mac-teal font-mono tracking-widest mb-4 block">PARTNERSHIP</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Sponsorship <span className="text-gold-gradient">Tiers</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Jasmine',
                amount: '฿ 5,000',
                color: 'from-mac-teal-light to-mac-teal',
                icon: '🌸',
                benefits: [
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
                benefits: [
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
                benefits: [
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
                benefits: [
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
                className="glass-card-hover p-6 md:p-8 relative overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${tier.color}`} />

                <div className="text-center mb-4">
                  <div className="text-4xl mb-2">{tier.icon}</div>
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <p className="text-mac-gold font-bold text-2xl mt-1">{tier.amount}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="text-white/50 text-sm flex items-start gap-2">
                      <span className="text-mac-green mt-0.5 shrink-0">✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <a href="/prospectus.pdf" target="_blank" className="block w-full text-center py-2 rounded-full border border-mac-gold/30 text-mac-gold text-sm font-mono tracking-widest hover:bg-mac-gold/10 transition-colors">
                  VIEW DETAILS
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Summary */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Budget <span className="text-gradient">Breakdown</span></h2>

            <div className="space-y-6">
              {[
                { name: 'Competition Registration', amount: '฿ 260,000', percent: 38 },
                { name: 'Hotel (3 twin + 2 single)', amount: '฿ 200,000', percent: 29 },
                { name: 'Flight (6 students + 2 teachers)', amount: '฿ 175,000', percent: 26 },
                { name: 'Food & Transport (Japan)', amount: '฿ 20,000', percent: 3 },
                { name: 'Materials', amount: '฿ 20,000', percent: 3 },
              ].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70 font-mono text-sm">{item.name}</span>
                    <span className="text-mac-gold font-bold">{item.amount}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      transition={{ duration: 1.2, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-mac-teal to-mac-gold rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex justify-between items-center">
              <span className="text-white/50 font-mono text-sm">TOTAL BUDGET</span>
              <span className="text-2xl font-extrabold text-gradient">฿ 675,000</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}