import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const sponsors = [
  { src: '/PTT.png', alt: 'PTT', border: 'border-mac-gold/30' },
  { src: '/FF.png', alt: 'Fashion Food', border: 'border-mac-teal/30' },
]

const pillars = [
  { 
    title: 'Innovation', 
    icon: '⚡',
    desc: 'Pushing boundaries with cutting-edge CAD/CAM technology and aerodynamic design.',
    color: 'from-mac-teal to-mac-teal-light'
  },
  { 
    title: 'Heritage', 
    icon: '🐟',
    desc: 'Bridging Thai culture with international innovation through Macchanu legacy.',
    color: 'from-mac-blue to-mac-teal'
  },
  { 
    title: 'Precision', 
    icon: '🎯',
    desc: 'Engineering excellence with 0.005mm tolerance on critical components.',
    color: 'from-mac-gold to-mac-gold-light'
  },
  { 
    title: 'Ambition', 
    icon: '🏆',
    desc: 'Representing Thailand on the world stage at Japan National Finals 2026.',
    color: 'from-mac-red to-mac-gold'
  },
]

const stats = [
  { value: '6', label: 'Team Members' },
  { value: '1', label: 'Goal: Japan Finals' },
  { value: '2018', label: 'Legacy Started' },
  { value: '∞', label: 'Ambition' },
]

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-50" />
        <div className="absolute inset-0 hero-gradient animate-gradient" />

        {/* Animated rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="w-[600px] h-[600px] rounded-full border border-mac-teal/20"
          />
          <motion.div
            animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute w-[800px] h-[800px] rounded-full border border-mac-gold/10"
          />
          {/* Floating particles */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30 - Math.random() * 50],
                opacity: [0, 0.4, 0],
                scale: [0.5 + Math.random(), 1, 0.5 + Math.random()],
              }}
              transition={{
                duration: 4 + Math.random() * 6,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
              className="absolute w-1 h-1 rounded-full bg-mac-gold/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${30 + Math.random() * 60}%`,
              }}
            />
          ))}
          {/* Ambient glow behind title */}
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-gradient-to-b from-mac-teal/8 to-transparent blur-3xl pointer-events-none" />
        </div>

        {/* Sponsor Marquee - Full Width Continuous */}
        <div className="absolute top-20 left-0 right-0 z-20 overflow-hidden">
          <div className="flex animate-marquee">
            {sponsors.concat(sponsors).concat(sponsors).concat(sponsors).map((sponsor, idx) => (
              <div key={idx} className={`w-48 h-28 bg-white/5 rounded-xl flex items-center justify-center p-4 border ${sponsor.border} hover:border-mac-gold/60 transition-all shrink-0 mx-4`}>
                <img src={sponsor.src} alt={sponsor.alt} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-white/5 border border-mac-gold/30 text-mac-gold text-sm tracking-widest">
              JAPAN NATIONAL FINALS • 14 JUNE 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-6"
          >
            <span className="text-gradient">LEGEND</span>
            <br />
            <span className="text-white">IN MOTION</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/60 mb-8 max-w-2xl mx-auto"
          >
            Six students. One team. Driven by determination and ambition, we are building a legacy by motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link to="/team" className="btn-primary">
              Meet the Team
            </Link>
            <Link to="/sponsorship" className="btn-gold">
              Support Us
            </Link>
          </motion.div>
        </div>

        {/* Logo showcase - Original design, positioned lower-right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute top-32 right-12 md:right-24 z-10"
        >
          {/* Outer square border with rounded corners */}
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Rotating gradient square border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-3xl bg-gradient-to-br from-mac-teal via-mac-gold to-mac-teal p-[2px]"
            >
              <div className="w-full h-full rounded-3xl bg-black/90 backdrop-blur-sm" />
            </motion.div>

            {/* Inner logo with circular gradient ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-mac-teal via-mac-gold to-mac-teal p-[3px]">
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                  className="w-full h-full rounded-full bg-gradient-to-br from-mac-teal/30 via-transparent to-mac-gold/30"
                />
                <div className="absolute inset-[3px] rounded-full bg-black/85 backdrop-blur-sm flex items-center justify-center">
                  <img src="/IMG3.JPG" alt="Macchanu Racing" className="w-[85%] h-[85%] object-cover rounded-full" />
                </div>
              </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-mac-gold/50 rounded-tl-lg" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-mac-teal/50 rounded-tr-lg" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-mac-teal/50 rounded-bl-lg" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-mac-gold/50 rounded-br-lg" />
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-28 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-mac-gold rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* What is STEM Racing */}
      <section className="section-padding relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-8 tracking-tight"
          >
            <span className="text-white">What is </span>
            <span className="text-gradient">STEM Racing?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 leading-relaxed"
          >
            STEM Racing, formerly known as F1 In Schools, is one of the biggest global education initiatives dedicated to nurturing talent and inspiring future careers in STEM (Science, Technology, Engineering, Mathematics). This challenge allows teams of students ages 9-19 from all over the world to participate using CAD/CAM software to collaborate as a Formula 1 team and build miniature vehicles for racing.
          </motion.p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-white/50 tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Pillars */}
      <section className="section-padding">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight"
        >
          <span className="text-white">Our </span>
          <span className="text-gold-gradient">Core Pillars</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="glass-card-hover p-8 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-3 tracking-wide">{pillar.title}</h3>
              <p className="text-white/50 leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Macchanu Identity */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-mac-teal/5 via-transparent to-mac-gold/5" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Why </span>
              <span className="text-gradient">Macchanu?</span>
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-8 md:p-12"
          >
            <p className="text-lg text-white/80 leading-relaxed mb-6">
              Macchanu is the son of the monkey-headed god 'Hanuman' and is a figure and symbol of strength, unwavering dedication and grace in Thai culture. Macchanu being a hybrid creature — part monkey, part fish — he also represents the bridge between 2 worlds; in our case, Macchanu Racing embodies the connection between Thai heritage and international innovation.
            </p>
            <p className="text-lg text-white/60 leading-relaxed">
              Because MACCHANU is a half fish-monkey creature, we chose to pick out the fish part as our logo/identity as it represents fluidity. Our muted teal, blue, palette communicates our calm yet bold presence that's subtle in tone, but impactful in identity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-3xl mx-auto text-center glass-card p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-mac-teal/10 via-mac-gold/5 to-mac-teal/10" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Race?</h2>
            <p className="text-white/60 mb-8">Join us on our journey to Japan National Finals 2026</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/sponsorship" className="btn-gold">
                Become a Sponsor
              </Link>
              <Link to="/engineering" className="btn-primary">
                View Our Engineering
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}