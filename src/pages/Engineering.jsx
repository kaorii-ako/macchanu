import { motion } from 'framer-motion'

const inventions = [
  {
    title: 'Rear Wing Aligner',
    description: 'A removal piece that ensures precise rear wing alignment with the car for maximum efficiency.',
    specs: [
      { label: 'Method', value: '3D Printing' },
      { label: 'Tolerance', value: '0.005mm' },
      { label: 'Purpose', value: 'Aerodynamic Precision' },
    ],
    icon: '🎯',
    gradient: 'from-mac-gold to-mac-gold-light',
  },
  {
    title: '2 Divots System',
    description: 'Provide positive location: ensures correct and precise alignment of the wheels.',
    specs: [
      { label: 'Method', value: 'CNC Milled' },
      { label: 'Accuracy', value: '±0.01mm' },
      { label: 'Purpose', value: 'Wheel Positioning' },
    ],
    icon: '⚙️',
    gradient: 'from-mac-teal to-mac-teal-light',
  },
]

const timeline = [
  { date: 'October 2025', title: 'Kick Off', desc: 'Initiation meeting - created our team identity and assigned roles and responsibilities' },
  { date: 'November 2025', title: 'Planning', desc: 'Planned budget for the trip and made our sponsorship prospectus to propose to investors' },
  { date: 'December 2025', title: 'Design Phase', desc: 'Designed logo, Created a car prototype, Designed pit display, Started portfolios' },
  { date: 'February 2026', title: 'Development', desc: 'Continued car development and testing' },
  { date: 'March 2026', title: 'Final Prep', desc: 'Finalise everything for the competition' },
  { date: 'May 2026', title: 'Pre-Competition', desc: 'Finish all portfolios, Continue making and testing cars, Finish pit display' },
  { date: 'June 2026', title: 'Competition', desc: 'Land in Japan for competition - 14 June 2026' },
]

const budgetItems = [
  { name: 'Competition Registration', amount: '฿ 260,000', percent: 38 },
  { name: 'Hotel (3 twin + 2 single)', amount: '฿ 200,000', percent: 29 },
  { name: 'Flight (6 students + 2 teachers)', amount: '฿ 175,000', percent: 26 },
  { name: 'Food & Transport (Japan)', amount: '฿ 20,000', percent: 3 },
  { name: 'Materials', amount: '฿ 20,000', percent: 3 },
]

export default function Engineering() {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="section-padding pb-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-white/5 border border-mac-green/30 text-mac-green text-xs tracking-widest">
              ENGINEERING EXCELLENCE
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6"
          >
            <span className="text-white">Our </span>
            <span className="text-gradient">Engineering</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Precision engineering meets aerodynamic innovation. Every component designed for maximum performance.
          </motion.p>
        </div>
      </section>

      {/* Car Prototype Showcase */}
      <section className="section-padding pt-0">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto glass-card p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-mac-teal/10 to-mac-gold/10" />
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Car Prototype</h2>
            <p className="text-white/50 text-lg mb-8 max-w-2xl mx-auto">
              Designed using industry-standard CAD/CAM software and validated through Computational Fluid Dynamics analysis.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-mac-teal/30">
              <span className="w-2 h-2 rounded-full bg-mac-green animate-pulse" />
              <span className="text-mac-teal font-grotesk tracking-widest text-sm">Status: Testing & Optimization</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Inventions */}
      <section className="section-padding">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-white">Our </span>
          <span className="text-gold-gradient">Inventions</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {inventions.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
              className="glass-card-hover p-8 group"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} rounded-t-3xl`} />

              <div className="flex items-start gap-6 mb-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-4xl shrink-0 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/50 text-sm">{item.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                {item.specs.map(spec => (
                  <div key={spec.label} className="text-center">
                    <div className="text-xs text-white/30 mb-1">{spec.label}</div>
                    <div className="text-sm text-mac-teal font-bold">{spec.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          <span className="text-white">Project </span>
          <span className="text-gradient">Timeline</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-mac-teal via-mac-gold to-mac-red" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} pl-12 md:pl-0`}>
                  <div className="glass-card p-6">
                    <span className="text-mac-gold text-xs tracking-widest">{item.date}</span>
                    <h3 className="text-lg font-bold text-white mt-1 mb-2">{item.title}</h3>
                    <p className="text-white/50 text-sm">{item.desc}</p>
                  </div>
                </div>

                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-mac-gold shadow-[0_0_20px_rgba(214,183,71,0.5)]" />

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget Breakdown */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Budget Breakdown</h2>

            <div className="space-y-8">
              {budgetItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white/70 font-grotesk">{item.name}</span>
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
              <span className="text-white/50 font-grotesk">TOTAL BUDGET</span>
              <span className="text-2xl font-extrabold text-gradient">฿ 675,000</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pit Display */}
      <section className="section-padding pt-0">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="px-4 py-2 rounded-full bg-white/5 border border-mac-blue/30 text-mac-blue text-xs tracking-widest mb-6 inline-block">
            PIT DISPLAY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Pit Display</h2>
          <p className="text-white/50 max-w-2xl mx-auto">
            A fully custom-designed pit display showcasing our team identity, engineering process, and sponsorship recognition.
          </p>
        </motion.div>
      </section>
    </div>
  )
}
