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

export default function Team() {
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
            <span className="px-4 py-1.5 rounded-full text-xs font-grotesk tracking-[0.2em] text-mac-teal"
              style={{ background: 'rgba(25,117,126,0.1)', border: '1px solid rgba(25,117,126,0.25)' }}>
              THE TEAM
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display leading-none mb-6"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', color: 'var(--theme-text)' }}
          >
            MEET <span className="text-gradient">MACCHANU</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg max-w-2xl font-grotesk"
            style={{ color: 'var(--theme-text-muted)' }}
          >
            Six students from Amnuay Silpa School sharing different skill sets but the same mindset — aspiring for greatness and the urge to be number one.
          </motion.p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-6 md:px-10">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card-hover group relative overflow-hidden"
            >
              {/* Top gradient stripe */}
              <div className={`absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r ${member.color}`} />

              <div className="relative z-10 pt-2">
                {/* Letter avatar */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mb-5 group-hover:scale-105 transition-transform duration-300`}>
                  <span className="font-display text-3xl text-mac-black leading-none">
                    {member.nickname[0]}
                  </span>
                </div>

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
          ))}
        </div>
      </section>

      {/* Team Identity */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
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
            </div>

            <div className="glass-card text-center">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mac-gold/20 to-mac-teal/20 flex items-center justify-center">
                  <span className="font-display text-xl text-mac-gold">M</span>
                </div>
                <div className="w-8 h-px bg-gradient-to-r from-mac-gold/50 to-mac-teal/50" />
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-mac-teal/20 to-mac-gold/20 flex items-center justify-center">
                  <span className="font-display text-xl text-mac-teal">R</span>
                </div>
              </div>
              <h3 className="font-display text-2xl mb-2" style={{ color: 'var(--theme-text)' }}>
                MACCHANU RACING
              </h3>
              <p className="text-sm font-grotesk" style={{ color: 'var(--theme-text-faint)' }}>
                Mythological strength × Hydrodynamic innovation
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <span className="text-xs text-mac-teal font-grotesk tracking-widest mb-3 block">OUR MISSION</span>
            <h2 className="font-display text-5xl md:text-6xl leading-none" style={{ color: 'var(--theme-text)' }}>
              WHY WE <span className="text-gold-gradient">COMPETE</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card-hover"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                  <span className="font-display text-xl text-mac-black leading-none">{item.letter}</span>
                </div>
                <h3 className="font-display text-2xl mb-2" style={{ color: 'var(--theme-text)' }}>{item.title.toUpperCase()}</h3>
                <p className="text-sm font-grotesk leading-relaxed" style={{ color: 'var(--theme-text-muted)' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition details */}
      <section className="section-padding pt-0">
        <div className="max-w-4xl mx-auto px-6 md:px-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
              <span className="w-2 h-2 rounded-full bg-mac-green animate-pulse" />
              <span className="font-grotesk tracking-widest text-sm text-mac-gold">COMPETITION DAY: 14 JUNE 2026</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
