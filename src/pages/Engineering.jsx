import { motion } from 'framer-motion'

const inventions = [
  {
    title: 'Rear Wing Aligner',
    description: 'A removable piece that ensures precise rear wing alignment with the car body for maximum aerodynamic efficiency.',
    specs: [
      { label: 'Method', value: '3D Printing' },
      { label: 'Tolerance', value: '0.005mm' },
      { label: 'Purpose', value: 'Aero Precision' },
    ],
    gradient: 'from-mac-gold to-mac-gold-light',
    letter: 'A',
  },
  {
    title: '2 Divots System',
    description: 'Provides positive location — ensures correct and precise alignment of the wheels for consistent race performance.',
    specs: [
      { label: 'Method', value: 'CNC Milled' },
      { label: 'Accuracy', value: '±0.01mm' },
      { label: 'Purpose', value: 'Wheel Alignment' },
    ],
    gradient: 'from-mac-teal to-mac-teal-light',
    letter: 'D',
  },
]

const timeline = [
  { date: 'OCT 2025', title: 'Kick Off',        desc: 'Initiation meeting — created our team identity and assigned roles and responsibilities', num: '01' },
  { date: 'NOV 2025', title: 'Planning',         desc: 'Planned budget for the trip and made our sponsorship prospectus to propose to investors', num: '02' },
  { date: 'DEC 2025', title: 'Design Phase',     desc: 'Designed logo, created a car prototype, designed pit display, started portfolios', num: '03' },
  { date: 'FEB 2026', title: 'Development',      desc: 'Continued car development and testing', num: '04' },
  { date: 'MAR 2026', title: 'Final Prep',       desc: 'Finalise everything for the competition', num: '05' },
  { date: 'MAY 2026', title: 'Pre-Competition',  desc: 'Finish all portfolios, continue making and testing cars, finish pit display', num: '06' },
  { date: 'JUN 2026', title: 'Competition',      desc: 'Land in Japan for competition — 14 June 2026', num: '07' },
]

const budgetItems = [
  { name: 'Competition Registration', amount: '฿ 260,000', percent: 38 },
  { name: 'Hotel (3 twin + 2 single)',           amount: '฿ 200,000', percent: 29 },
  { name: 'Flight (6 students + 2 teachers)',    amount: '฿ 175,000', percent: 26 },
  { name: 'Food & Transport (Japan)',            amount: '฿ 20,000',  percent: 3  },
  { name: 'Materials',                           amount: '฿ 20,000',  percent: 3  },
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
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
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

export default function Engineering() {
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
            <span className="px-4 py-1.5 rounded-full text-xs font-grotesk tracking-[0.2em] text-mac-green"
              style={{ background: 'rgba(29,209,105,0.08)', border: '1px solid rgba(29,209,105,0.25)' }}>
              ENGINEERING EXCELLENCE
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
              OUR <span className="text-gradient">ENGINEERING</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg max-w-2xl font-grotesk"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            Precision engineering meets aerodynamic innovation. Every component designed for maximum performance.
          </motion.p>
        </div>
      </section>

      {/* Car Prototype Showcase */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl"
            style={{ border: '1px solid var(--theme-border)', minHeight: 320 }}
          >
            <motion.img
              src="/IMG5.png"
              alt="Macchanu Car Prototype"
              className="w-full h-full object-cover absolute inset-0"
              style={{ filter: 'saturate(0.75) brightness(0.55)', minHeight: 320 }}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
            <div className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(10,10,15,0.85) 0%, rgba(10,10,15,0.4) 60%, transparent 100%)' }} />
            <div className="relative z-10 p-8 md:p-12 max-w-lg">
              <span className="px-3 py-1 rounded-full text-[10px] font-grotesk tracking-[0.2em] text-mac-teal mb-4 inline-block"
                style={{ background: 'rgba(25,117,126,0.15)', border: '1px solid rgba(25,117,126,0.3)' }}>
                CAD / CAM · CFD VALIDATED
              </span>
              <h2 className="font-display text-4xl md:text-5xl leading-none text-white mb-3">
                OUR CAR<br />PROTOTYPE
              </h2>
              <p className="font-grotesk text-sm leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Designed using industry-standard CAD/CAM software and validated through Computational Fluid Dynamics analysis.
              </p>
              <div className="flex gap-6">
                <div>
                  <div className="font-display text-2xl text-mac-gold">0.005mm</div>
                  <div className="text-[10px] font-grotesk tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>WING TOLERANCE</div>
                </div>
                <div>
                  <div className="font-display text-2xl text-mac-teal">±0.01mm</div>
                  <div className="text-[10px] font-grotesk tracking-widest" style={{ color: 'rgba(255,255,255,0.35)' }}>WHEEL ACCURACY</div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-5 right-5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(10,10,15,0.6)', border: '1px solid rgba(29,209,105,0.3)' }}>
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-mac-green"
                  animate={{ scale: [1, 1.6, 1], opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                />
                <span className="text-[10px] font-grotesk tracking-widest text-mac-green">TESTING &amp; OPTIMIZATION</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Inventions */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-grotesk tracking-widest text-mac-teal mb-3 block">CUSTOM INNOVATIONS</span>
            <h2 className="font-display text-5xl md:text-6xl leading-none" style={{ color: 'var(--theme-text)' }}>
              OUR <span className="text-gold-gradient">INVENTIONS</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {inventions.map((item) => (
              <motion.div
                key={item.title}
                variants={cardItem}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="glass-card-hover group relative overflow-hidden"
              >
                <motion.div variants={springHover}>
                  <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${item.gradient}`} />
                  <div className="relative z-10 pt-2">
                    <div className="flex items-start gap-5 mb-6">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shrink-0`}
                        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.08 }}
                        transition={{ duration: 0.35 }}
                      >
                        <span className="font-display text-2xl text-mac-black">{item.letter}</span>
                      </motion.div>
                      <div>
                        <h3 className="font-display text-2xl leading-none mb-2" style={{ color: 'var(--theme-text)' }}>
                          {item.title.toUpperCase()}
                        </h3>
                        <p className="text-sm font-grotesk leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-5" style={{ borderTop: '1px solid var(--theme-border)' }}>
                      {item.specs.map(spec => (
                        <div key={spec.label} className="text-center">
                          <div className="text-[10px] font-grotesk tracking-widest mb-1" style={{ color: 'var(--theme-text-faint)' }}>{spec.label}</div>
                          <div className="text-sm font-grotesk font-bold text-mac-teal">{spec.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs font-grotesk tracking-widest text-mac-gold mb-3 block">ROADMAP</span>
            <h2 className="font-display text-5xl md:text-6xl leading-none" style={{ color: 'var(--theme-text)' }}>
              PROJECT <span className="text-gradient">TIMELINE</span>
            </h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
              style={{ background: 'linear-gradient(to bottom, #d6b747, rgba(214,183,71,0.2), #19757e)' }} />

            {timeline.map((item, i) => (
              <motion.div
                key={item.date}
                initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 mb-6 pl-16 md:pl-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-10' : 'md:text-left md:pl-10'}`}>
                  <motion.div
                    className="glass-card"
                    style={{ padding: '1.25rem 1.5rem' }}
                    whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 300, damping: 22 } }}
                  >
                    <div className="text-[10px] font-grotesk tracking-[0.2em] text-mac-gold mb-1">{item.date}</div>
                    <h3 className="font-display text-xl leading-none mb-1" style={{ color: 'var(--theme-text)' }}>
                      {item.title.toUpperCase()}
                    </h3>
                    <p className="text-sm font-grotesk" style={{ color: 'var(--theme-text-muted)' }}>{item.desc}</p>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-mac-gold flex items-center justify-center shrink-0"
                  style={{ boxShadow: '0 0 16px rgba(214,183,71,0.4)' }}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                >
                  <span className="font-display text-sm text-mac-black leading-none">{item.num}</span>
                </motion.div>

                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Budget */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card"
            style={{ padding: '2.5rem' }}
          >
            <h2 className="font-display text-4xl leading-none mb-8 text-center" style={{ color: 'var(--theme-text)' }}>
              BUDGET BREAKDOWN
            </h2>

            <div className="space-y-6">
              {budgetItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.09, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-sm font-grotesk" style={{ color: 'var(--theme-text-muted)' }}>{item.name}</span>
                    <span className="font-display text-xl text-mac-gold">{item.amount}</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'var(--theme-border)' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.percent}%` }}
                      transition={{ duration: 1.4, delay: i * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                      viewport={{ once: true }}
                      className="h-full rounded-full bg-gradient-to-r from-mac-teal to-mac-gold"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 pt-6 flex justify-between items-center" style={{ borderTop: '1px solid var(--theme-border)' }}>
              <span className="text-xs font-grotesk tracking-widest" style={{ color: 'var(--theme-text-faint)' }}>TOTAL BUDGET</span>
              <span className="font-display text-3xl text-gradient">฿ 675,000</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pit Display */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-grotesk tracking-[0.2em] text-mac-blue mb-6 inline-block"
              style={{ background: 'rgba(37,116,167,0.1)', border: '1px solid rgba(37,116,167,0.25)' }}>
              PIT DISPLAY
            </span>
            <h2 className="font-display text-4xl md:text-5xl leading-none mb-4" style={{ color: 'var(--theme-text)' }}>
              OUR PIT DISPLAY
            </h2>
            <p className="font-grotesk max-w-2xl mx-auto" style={{ color: 'var(--theme-text-muted)' }}>
              A fully custom-designed pit display showcasing our team identity, engineering process, and sponsorship recognition.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
