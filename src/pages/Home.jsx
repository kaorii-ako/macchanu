import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const stats = [
  { value: '6', label: 'TEAM MEMBERS' },
  { value: '12', label: 'SUBSYSTEMS' },
  { value: '200+', label: 'DESIGN REVIEWS' },
  { value: '1', label: 'MOTION' },
]

export default function Home() {
  const [particles] = useState(() =>
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 4 + Math.random() * 8,
      delay: Math.random() * 5,
      opacity: 0.1 + Math.random() * 0.3
    }))
  )

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-mac-teal/5 via-mac-black to-mac-gold/5" />

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map(p => (
            <motion.div
              key={p.id}
              animate={{ y: [0, -80, 0], x: [0, Math.random() * 40 - 20, 0], opacity: [0, p.opacity, 0] }}
              transition={{ duration: p.duration, repeat: Infinity, delay: p.delay }}
              className="absolute rounded-full bg-mac-gold"
              style={{
                left: `${p.left}%`,
                top: `${p.top}%`,
                width: p.size,
                height: p.size,
                filter: p.size > 2 ? 'blur(2px)' : 'none'
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.img
            src="/IMG3.JPG"
            alt="Macchanu Racing"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="w-40 h-40 md:w-60 md:h-60 rounded-full mx-auto mb-8 object-cover border-2 border-white/10"
          />

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl md:text-8xl lg:text-[10rem] font-extrabold tracking-tighter leading-none mb-4"
          >
            <span className="text-white">MAC</span>
            <span className="text-gold-gradient">CHANU</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-mac-gold font-grotesk tracking-widest uppercase mb-6"
          >
            Racing by Motion
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="text-lg text-white/40 max-w-2xl mx-auto mb-12"
          >
            Six students from Amnuay Silpa School competing in the F1 in Schools World Finals 2026 in Japan.
            Precision. Passion. Performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href="/sponsorship" className="btn-gold text-center">Sponsor Us</a>
            <a href="#team" className="btn-primary text-center">Meet the Team</a>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-center p-6 glass-card"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-xs text-white/40 tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-grotesk tracking-widest text-mac-teal mb-4 block">ABOUT THE TEAM</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Built from <span className="text-gradient">Scratch.</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-6">
                We are Macchanu Racing, a student team from Amnuay Silpa School, Thailand. Our mission: design, build, and race a miniature F1 car from concept to the 2026 F1 in Schools World Finals in Japan.
              </p>
              <p className="text-white/40 leading-relaxed">
                Every system — from aerodynamics to CAD design to financial strategy — is engineered in-house by students, with mentors guiding the process. We don't just race. We innovate.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8"
            >
              <div className="space-y-6">
                {[
                  { label: 'Design', value: 95, color: 'from-mac-gold to-mac-gold-light' },
                  { label: 'Aerodynamics', value: 88, color: 'from-mac-teal to-mac-teal-light' },
                  { label: 'Manufacturing', value: 82, color: 'from-mac-red to-mac-gold' },
                  { label: 'Strategy', value: 90, color: 'from-mac-teal to-mac-gold' },
                ].map(bar => (
                  <motion.div
                    key={bar.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-white/60 font-grotesk tracking-wider text-sm">{bar.label}</span>
                      <span className="text-mac-gold font-grotesk">{bar.value}%</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${bar.value}%` }}
                        transition={{ duration: 1.5, delay: 0.3, ease: 'easeOut' }}
                        viewport={{ once: true }}
                        className={`h-full bg-gradient-to-r ${bar.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section-padding" id="team">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-grotesk tracking-widest text-mac-gold mb-4 block">THE MACHINE</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Your <span className="text-gradient">Makers</span>
            </h2>
            <p className="text-white/40 text-lg">The six minds behind the motion</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Team Lead', desc: 'Overall direction and strategy' },
              { name: 'Design Lead', desc: 'CAD modeling and specifications' },
              { name: 'Aero Lead', desc: 'Aerodynamic optimization' },
              { name: 'Manufacturing Lead', desc: 'Production and assembly' },
              { name: 'Marketing Lead', desc: 'Branding and sponsorship' },
              { name: 'Financial Lead', desc: 'Budget and funding strategy' },
            ].map((role, i) => (
              <motion.div
                key={role.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass-card-hover p-8 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-mac-teal/20 to-mac-gold/20 flex items-center justify-center mx-auto mb-4 text-2xl">
                  👤
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{role.name}</h3>
                <p className="text-white/40 text-sm">{role.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="/team" className="btn-primary inline-block">View Full Team</a>
          </div>
        </div>
      </section>

      {/* Engineering Preview */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-10 text-center"
            >
              <div className="text-6xl mb-6">🏎️</div>
              <h3 className="text-2xl font-bold text-white mb-4">Our Car Prototype</h3>
              <p className="text-white/50 text-sm">
                Designed with industry-standard CAD/CAM software. Validated through Computational Fluid Dynamics. Built to millimeter precision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-grotesk tracking-widest text-mac-teal mb-4 block">ENGINEERING EXCELLENCE</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Precision in <span className="text-gold-gradient">Every Detail.</span>
              </h2>
              <p className="text-white/50 text-lg leading-relaxed mb-8">
                From our proprietary rear wing aligner to our patented 2-divot wheel system, every component is designed for maximum efficiency and performance.
              </p>
              <a href="/engineering" className="btn-gold inline-block">View Engineering</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center glass-card p-12 md:p-16"
        >
          <div className="text-5xl mb-6">🤝</div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Join Our Journey</h2>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            Help six Thai students compete on the world stage. Every sponsor, every dollar, every voice makes a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/sponsorship" className="btn-gold text-center">Sponsorship Prospectus</a>
            <a href="mailto:matchanu.racing@gmail.com" className="btn-primary text-center">Contact Us</a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
