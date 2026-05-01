import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Jasmine',
    price: '฿ 5,000',
    color: 'from-white/20 to-white/5',
    borderColor: 'border-white/20',
    icon: '🌸',
    benefits: [
      'Acknowledgement on team website',
      'Acknowledgement on team\'s social media platforms',
      'Corporate logo on team uniforms',
      'Corporate logo on portfolios',
    ],
  },
  {
    name: 'Lily',
    price: '฿ 25,000',
    color: 'from-mac-teal/20 to-mac-teal/5',
    borderColor: 'border-mac-teal/40',
    icon: '🪷',
    accent: 'text-mac-teal',
    benefits: [
      'All benefits in Jasmine tier',
      'More prominent logo on team uniforms',
      'More prominent logo on portfolios',
    ],
  },
  {
    name: 'Orchid',
    price: '฿ 100,000',
    color: 'from-mac-gold/20 to-mac-gold/5',
    borderColor: 'border-mac-gold/40',
    icon: '🌺',
    accent: 'text-mac-gold',
    popular: true,
    benefits: [
      'All benefits in previous tiers',
      'More prominent logo on uniforms and portfolios',
      'Corporate logo on the team cars',
      'Coordinated promotion over social media',
    ],
  },
  {
    name: 'Lotus',
    price: '฿ 200,000 - 300,000',
    color: 'from-mac-red/20 to-mac-gold/10',
    borderColor: 'border-mac-gold/60',
    icon: '💎',
    accent: 'text-mac-gold',
    benefits: [
      'All benefits in previous tiers',
      'Most prominent logo on uniforms, portfolios and cars',
      'Company business cards at the event',
      'Negotiated promotional goods presented',
    ],
  },
]

const whySponsor = [
  {
    title: 'International Exposure',
    desc: 'Macchanu will be representing itself on the Japan stage, ready for people to see both in person and on television. This is a great opportunity for your business to be promoted worldwide.',
    icon: '🌍',
  },
  {
    title: 'Media Coverage',
    desc: 'The team will be posting actively on social media to promote not just our team but the people who have helped us along the way. We will also be advocating our sponsors during professional interviews.',
    icon: '📱',
  },
  {
    title: 'Product Promotion',
    desc: 'Your company logo and name will be displayed in multiple locations including our t-shirts, cars and pit display. We will also accept business cards and sample products to be presented at the competition.',
    icon: '📢',
  },
  {
    title: 'For Thailand',
    desc: 'Since Thailand is a developing country, Thai students won\'t have as many opportunities to showcase their talent to the world. The STEM Racing competition will give us a chance to bring pride to the Thai name.',
    icon: '🇹🇭',
  },
]

export default function Sponsorship() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding pb-12 relative overflow-hidden">
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-mac-gold/10 to-mac-teal/10 rounded-full blur-[120px] -z-10" />

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-white/5 border border-mac-gold/30 text-mac-gold text-sm tracking-widest">
              PARTNER WITH US
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Become a </span>
            <span className="text-gold-gradient">Sponsor</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            We rely on sponsors to help us create a brighter, more meaningful event that supports our goals. Your contribution means the world to us.
          </motion.p>
        </div>
      </section>

      {/* Current Sponsors */}
      <section className="section-padding pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-5xl mx-auto"
        >
          <div className="glass-card p-8 md:p-12 relative overflow-hidden">
            {/* Animated border glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-mac-gold/20 via-mac-teal/20 to-mac-gold/20 opacity-30 animate-gradient" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-3">Trusted By</h2>
              <p className="text-center text-white/50 mb-8">Industry leaders backing Thai talent</p>

              {/* Logo Marquee */}
              <div className="relative overflow-hidden">
                <div className="flex animate-marquee">
                  {/* First set */}
                  <div className="flex items-center gap-16 px-8">
                    <div className="w-48 h-32 bg-white/5 rounded-2xl flex items-center justify-center p-6 border border-mac-gold/30 hover:border-mac-gold/60 hover:shadow-[0_0_40px_rgba(214,183,71,0.3)] transition-all duration-500">
                      <img src="/PTT.png" alt="PTT" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="w-48 h-32 bg-white/5 rounded-2xl flex items-center justify-center p-6 border border-mac-teal/30 hover:border-mac-teal/60 hover:shadow-[0_0_40px_rgba(86,155,158,0.3)] transition-all duration-500">
                      <img src="/FF.png" alt="Fashion Food" className="max-w-full max-h-full object-contain" />
                    </div>
                  </div>
                  {/* Duplicate set for seamless loop */}
                  <div className="flex items-center gap-16 px-8">
                    <div className="w-48 h-32 bg-white/5 rounded-2xl flex items-center justify-center p-6 border border-mac-gold/30 hover:border-mac-gold/60 hover:shadow-[0_0_40px_rgba(214,183,71,0.3)] transition-all duration-500">
                      <img src="/PTT.png" alt="PTT" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="w-48 h-32 bg-white/5 rounded-2xl flex items-center justify-center p-6 border border-mac-teal/30 hover:border-mac-teal/60 hover:shadow-[0_0_40px_rgba(86,155,158,0.3)] transition-all duration-500">
                      <img src="/FF.png" alt="Fashion Food" className="max-w-full max-h-full object-contain" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sponsorship Tiers */}
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative glass-card p-6 group ${tier.borderColor} ${tier.popular ? 'ring-2 ring-mac-gold/50' : ''}`}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-mac-gold to-mac-gold-light rounded-full">
                    <span className="text-black text-xs font-bold tracking-wider">MOST POPULAR</span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{tier.icon}</div>
                  <h3 className={`text-xl font-bold ${tier.accent || 'text-white'}`}>{tier.name}</h3>
                  <div className="text-2xl font-bold text-white mt-2">{tier.price}</div>
                </div>

                <ul className="space-y-3 mb-6">
                  {tier.benefits.map((benefit, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-white/60">
                      <span className={`mt-1 w-1.5 h-1.5 rounded-full shrink-0 ${tier.accent ? 'bg-mac-gold' : 'bg-white/30'}`} />
                      {benefit}
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 rounded-full text-sm font-semibold tracking-wider transition-all ${
                  tier.popular 
                    ? 'bg-gradient-to-r from-mac-gold to-mac-gold-light text-black hover:shadow-[0_0_30px_rgba(214,183,71,0.5)]' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}>
                  Select Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Support */}
      <section className="section-padding">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          <span className="text-white">Why Support </span>
          <span className="text-gradient">Macchanu?</span>
        </motion.h2>
        <p className="text-center text-white/50 mb-12 max-w-2xl mx-auto">
          By partnering with Macchanu, your company will have the opportunity to collaborate and be part of a prestigious international program.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {whySponsor.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-8"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-mac-teal/20 to-mac-gold/20 flex items-center justify-center text-2xl shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Logo Placement Examples */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">Where Your Brand Appears</h2>
          <p className="text-center text-white/50 mb-12 max-w-2xl mx-auto">Maximum visibility across all touchpoints</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card p-8 text-center group"
            >
              <div className="w-full aspect-square bg-gradient-to-br from-mac-teal/10 to-mac-gold/10 rounded-2xl mb-6 flex items-center justify-center border border-mac-teal/20 group-hover:border-mac-teal/40 transition-all">
                <div className="text-6xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all">👕</div>
              </div>
              <h3 className="text-lg font-semibold text-white">Team Uniform</h3>
              <p className="text-white/50 text-sm mt-2">Professional branded attire for all team members</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card p-8 text-center group"
            >
              <div className="w-full aspect-square bg-gradient-to-br from-mac-gold/10 to-mac-teal/10 rounded-2xl mb-6 flex items-center justify-center border border-mac-gold/20 group-hover:border-mac-gold/40 transition-all">
                <div className="text-6xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all">🏎️</div>
              </div>
              <h3 className="text-lg font-semibold text-white">Race Car</h3>
              <p className="text-white/50 text-sm mt-2">Prime visibility on our F1 car body</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -8 }}
              className="glass-card p-8 text-center group"
            >
              <div className="w-full aspect-square bg-gradient-to-br from-mac-red/10 to-mac-gold/10 rounded-2xl mb-6 flex items-center justify-center border border-mac-red/20 group-hover:border-mac-red/40 transition-all">
                <div className="text-6xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all">📱</div>
              </div>
              <h3 className="text-lg font-semibold text-white">Digital Media</h3>
              <p className="text-white/50 text-sm mt-2">Social media posts and promotional content</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Target Companies */}
      <section className="section-padding pt-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto glass-card p-8 md:p-12 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Companies We're Targeting</h2>
          <p className="text-white/60 mb-8">
            We have reached out to leading companies who share our vision for nurturing future STEM talent.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {['PTT', 'Mitsubishi', 'Singha', 'Loreal', 'CP Meiji', 'Ichitan', 'Lactasoy', 'KingPower'].map((company) => (
              <span 
                key={company} 
                className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm"
              >
                {company}
              </span>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto text-center glass-card p-12 md:p-16 relative overflow-hidden group"
        >
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-r from-mac-gold/10 via-mac-teal/10 to-mac-gold/10 animate-gradient" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-mac-gold/30 rounded-tl-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-mac-teal/30 rounded-br-3xl" />

          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="mb-2"
            >
              <span className="text-4xl">🤝</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Ready to Partner?</h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">All prices and benefits are negotiable. Contact us to discuss customized sponsorship packages that work for you.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:matchanu.racing@gmail.com"
                className="btn-gold hover:scale-105 transition-transform"
              >
                📧 Email Us
              </a>
              <a
                href="#"
                className="btn-primary hover:scale-105 transition-transform"
              >
                📥 Download Prospectus
              </a>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-white/40 text-sm">Questions? Reach us at</p>
              <a href="mailto:matchanu.racing@gmail.com" className="text-mac-teal text-xl font-semibold hover:text-mac-teal-light transition-colors">matchanu.racing@gmail.com</a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}