import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Chalisa Nitayavardhana',
    nickname: 'Neena',
    role: 'Team Manager',
    desc: 'Coordinates and supervises teammates, ensuring everyone collaborates effectively and all requirements are met to the highest standard.',
    color: 'from-mac-gold to-mac-gold-light',
  },
  {
    name: 'Tasschol Laoarakpibul',
    nickname: 'Sky',
    role: 'Lead Engineer',
    desc: 'Manufacturing, designing cars, and supervising other engineers. Brainstorms ideas, gives CAD tips, and helps the team finish work on time.',
    color: 'from-mac-teal to-mac-teal-light',
  },
  {
    name: 'Paphakorn Pongvitayapanu',
    nickname: 'Pep',
    role: 'Manufacturing Engineer',
    desc: 'Designs and manufactures sub-components like wheel support and aerodynamic components. Also designs parts of the pit display.',
    color: 'from-mac-teal-light to-mac-gold',
  },
  {
    name: 'Anantawat Kulthaveesup',
    nickname: 'Copter',
    role: 'Design Engineer',
    desc: 'Develops the car design to achieve better performance. Creates CAD models and ensures structural integrity and manufacturability.',
    color: 'from-mac-gold to-mac-teal',
  },
  {
    name: 'Pimyada Lertbutsayanukul',
    nickname: 'Pimmy',
    role: 'Graphic Designer',
    desc: 'Oversees visuals, ensuring graphics are cohesive and aligned with team identity. Responsible for logo, posters, and promotional materials.',
    color: 'from-mac-gold-light to-mac-teal-light',
  },
  {
    name: 'Tawin Tangsukson',
    nickname: 'Kao',
    role: 'Analytical Engineer',
    desc: 'Checks aerodynamics using CFD and designs/maintains the team website. Ensures the website is appealing and easy to navigate.',
    color: 'from-mac-teal to-mac-gold-light',
  },
]

const missionItems = [
  {
    title: 'Represent',
    desc: 'Both Amnuay Silpa and Thailand to bring honor and recognition to our culture.',
    color: 'from-mac-red to-mac-gold',
    letter: 'R',
  },
  {
    title: 'Understand',
    desc: 'After competing in Thailand Nationals 2025, we gained understanding of how serious and demanding this competition is.',
    color: 'from-mac-teal to-mac-teal-light',
    letter: 'U',
  },
  {
    title: 'Succeed',
    desc: 'Win prizes and make the team proud. Look forward to Thai National & World Finals.',
    color: 'from-mac-gold to-mac-gold-light',
    letter: 'S',
  },
  {
    title: 'Legacy',
    desc: 'We are the first school in Asia to do F1 in Schools since 2018. Continue the legacy — be a legacy in motion.',
    color: 'from-mac-teal to-mac-gold',
    letter: 'L',
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
  visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
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

export default function Team() {
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
            <span className="px-4 py-1.5 rounded-full text-xs font-grotesk tracking-[0.2em] text-mac-teal"
              style={{ background: 'rgba(25,117,126,0.1)', border: '1px solid rgba(25,117,126,0.25)' }}>
              THE TEAM
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
              MEET <span className="text-gradient">MACCHANU</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-lg max-w-2xl font-grotesk"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            Six students from Amnuay Silpa School sharing different skill sets but the same mindset — aspiring for greatness and the urge to be number one.
          </motion.p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding pt-0">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 md:px-10"
          variants={staggerGrid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={cardItem}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="glass-card-hover group relative overflow-hidden"
            >
              <motion.div variants={springHover}>
                <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${member.color}`} />
                <div className="relative z-10 pt-2">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-5`}
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.08 }}
                    transition={{ duration: 0.35 }}
                  >
                    <span className="font-display text-3xl text-mac-black leading-none">
                      {member.nickname[0]}
                    </span>
                  </motion.div>
                  <div>
                    <span className="text-[10px] font-grotesk tracking-[0.2em] text-mac-teal/80 block mb-1">{member.role}</span>
                    <h3 className="font-display text-2xl leading-tight mb-0.5" style={{ color: 'var(--theme-text)' }}>
                      {member.nickname.toUpperCase()}
                    </h3>
                    <p className="text-xs font-grotesk mb-3" style={{ color: 'var(--theme-text-faint)' }}>
                      {member.name}
                    </p>
                    <p className="text-sm font-grotesk leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>
                      {member.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Team Identity */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <span className="text-xs text-mac-gold font-grotesk tracking-widest mb-4 block">OUR IDENTITY</span>
              <h2 className="font-display text-5xl md:text-6xl leading-none mb-6">
                <span style={{ color: 'var(--theme-text)' }}>WHY</span><br />
                <span className="text-gradient">MACCHANU?</span>
              </h2>
              <p className="font-grotesk leading-relaxed mb-4" style={{ color: 'var(--theme-text-muted)' }}>
                Macchanu is the son of the monkey-headed god Hanuman — a figure of strength, unwavering dedication, and grace in Thai culture. A hybrid creature, part monkey, part fish, representing the bridge between Thai heritage and international innovation.
              </p>
              <p className="font-grotesk leading-relaxed" style={{ color: 'var(--theme-text-faint)' }}>
                We chose the fish as our logo identity, representing fluidity. Our muted teal and gold palette communicates a calm yet bold presence — subtle in tone, impactful in identity.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card overflow-hidden"
              style={{ padding: 0 }}
            >
              <motion.div
                variants={{
                  rest: { scale: 1 },
                  hover: { scale: 1.03, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                }}
                className="overflow-hidden"
                style={{ borderRadius: '24px 24px 0 0' }}
              >
                <img
                  src="/IMG1.PNG"
                  alt="Macchanu Mascot"
                  className="w-full object-cover object-center"
                  style={{ height: 200, filter: 'saturate(0.85)' }}
                />
              </motion.div>
              <div className="absolute inset-x-0 top-0" style={{ height: 200, background: 'linear-gradient(to top, rgba(10,10,15,0.7) 0%, transparent 55%)', borderRadius: '24px 24px 0 0', pointerEvents: 'none' }} />
              <div style={{ padding: '1.5rem 2rem' }}>
                <h3 className="font-display text-2xl mb-2" style={{ color: 'var(--theme-text)' }}>
                  MACCHANU RACING
                </h3>
                <p className="text-sm font-grotesk" style={{ color: 'var(--theme-text-faint)' }}>
                  Mythological strength × Hydrodynamic innovation
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs text-mac-teal font-grotesk tracking-widest mb-3 block">OUR MISSION</span>
            <h2 className="font-display text-5xl md:text-6xl leading-none" style={{ color: 'var(--theme-text)' }}>
              WHY WE <span className="text-gold-gradient">COMPETE</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerGrid}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {missionItems.map((item) => (
              <motion.div
                key={item.title}
                variants={cardItem}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className="glass-card-hover"
              >
                <motion.div variants={springHover}>
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                    <span className="font-display text-xl text-mac-black leading-none">{item.letter}</span>
                  </div>
                  <h3 className="font-display text-2xl mb-2" style={{ color: 'var(--theme-text)' }}>{item.title.toUpperCase()}</h3>
                  <p className="text-sm font-grotesk leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Competition details */}
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
            <span className="px-4 py-1.5 rounded-full text-xs font-grotesk tracking-[0.2em] text-mac-blue mb-6 inline-block"
              style={{ background: 'rgba(37,116,167,0.1)', border: '1px solid rgba(37,116,167,0.25)' }}>
              F1 IN SCHOOLS
            </span>
            <h2 className="font-display text-4xl md:text-5xl leading-none mb-4" style={{ color: 'var(--theme-text)' }}>
              JAPAN NATIONAL FINALS 2026
            </h2>
            <p className="font-grotesk max-w-2xl mx-auto leading-relaxed mb-8" style={{ color: 'var(--theme-text-muted)' }}>
              Teams from around the world use CAD/CAM software to design, manufacture, and race miniature F1 cars. We've competed in Thailand Nationals 2025 and now represent Asia at the Japan stage.
            </p>
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full"
              style={{ background: 'rgba(214,183,71,0.08)', border: '1px solid rgba(214,183,71,0.25)' }}>
              <motion.span
                className="w-2 h-2 rounded-full bg-mac-green"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <span className="font-grotesk tracking-widest text-sm text-mac-gold">COMPETITION DAY: 14 JUNE 2026</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
