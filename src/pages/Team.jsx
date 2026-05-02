import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Chalisa Nitayavardhana',
    nickname: 'Neena',
    role: 'Team Manager',
    desc: 'Coordinates and supervises teammates, ensuring everyone collaborates effectively and all requirements are met to the highest standard.',
    color: 'from-mac-gold to-mac-gold-light',
    icon: '👑',
  },
  {
    name: 'Tasschol Laoarakpibul',
    nickname: 'Sky',
    role: 'Lead Engineer',
    desc: 'Manufacturing, designing cars, and supervising other engineers. Brainstorms ideas, gives CAD tips, and helps the team finish work on time.',
    color: 'from-mac-teal to-mac-teal-light',
    icon: '🔧',
  },
  {
    name: 'Paphakorn Pongvitayapanu',
    nickname: 'Pep',
    role: 'Manufacturing Engineer',
    desc: 'Designs and manufactures sub-components like wheel support and aerodynamic components. Also designs parts of the pit display.',
    color: 'from-mac-teal-light to-mac-gold',
    icon: '⚙️',
  },
  {
    name: 'Anantawat Kulthaveesup',
    nickname: 'Copter',
    role: 'Design Engineer',
    desc: 'Develops the car design to achieve better performance. Creates CAD models and ensures structural integrity and manufacturability.',
    color: 'from-mac-gold to-mac-teal',
    icon: '🎨',
  },
  {
    name: 'Pimyada Lertbutsayanukul',
    nickname: 'Pimmy',
    role: 'Graphic Designer',
    desc: 'Oversees visuals, ensuring graphics are cohesive and aligned with team identity. Responsible for logo, posters, and promotional materials.',
    color: 'from-mac-gold-light to-mac-teal-light',
    icon: '🖌️',
  },
  {
    name: 'Tawin Tangsukson',
    nickname: 'Kao',
    role: 'Analytical Engineer',
    desc: 'Checks aerodynamics using CFD and designs/maintains the team website. Ensures the website is appealing and easy to navigate.',
    color: 'from-mac-teal to-mac-gold-light',
    icon: '📊',
  },
]

export default function Team() {
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
            <span className="px-4 py-2 rounded-full bg-white/5 border border-mac-teal/30 text-mac-teal text-xs font-mono tracking-widest">
              THE TEAM
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tighter mb-6"
          >
            <span className="text-white">Meet </span>
            <span className="text-gradient">Macchanu</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-white/50 max-w-2xl mx-auto"
          >
            Six students from Amnuay Silpa School sharing different skill sets but the same mindset — aspiring for greatness and the urge to be number one.
          </motion.p>
        </div>
      </section>

      {/* Team Members */}
      <section className="section-padding pt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card-hover p-8 group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${member.gradient || member.color}`} />

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center mx-auto mb-6 text-3xl group-hover:scale-110 transition-transform">
                  {member.icon}
                </div>

                <div className="text-center">
                  <span className="text-xs text-mac-teal/70 font-mono tracking-widest">{member.role}</span>
                  <h3 className="text-xl font-bold text-white mt-1 mb-1">{member.name}</h3>
                  <p className="text-mac-gold/70 text-sm italic mb-3">@{member.nickname}</p>
                  <p className="text-white/40 text-sm leading-relaxed">{member.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Identity */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <span className="text-xs text-mac-gold font-mono tracking-widest mb-4 block">OUR IDENTITY</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why <span className="text-gradient">Macchanu?</span></h2>
              <p className="text-white/50 leading-relaxed mb-4">
                Macchanu is the son of the monkey-headed god Hanuman — a figure of strength, unwavering dedication, and grace in Thai culture. A hybrid creature — part monkey, part fish — he represents the bridge between two worlds: Thai heritage and international innovation.
              </p>
              <p className="text-white/50 leading-relaxed">
                We chose the fish as our logo identity, representing fluidity. Our muted teal and blue palette communicates a calm yet bold presence — subtle in tone, but impactful in identity.
              </p>
            </div>
            <div className="glass-card p-10 text-center">
              <div className="text-6xl mb-4">🐒🐟</div>
              <h3 className="text-xl font-bold text-white mb-2">Team Name Origin</h3>
              <p className="text-white/40 text-sm">
                Mythological strength × Hydrodynamic innovation = Macchanu Racing
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Compete */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs text-mac-teal font-mono tracking-widest mb-4 block">OUR MISSION</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Why We <span className="text-gold-gradient">Compete</span></h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Represent',
                desc: 'Both Amnuay Silpa and Thailand to bring honor and recognition to our culture.',
                icon: '🇹🇭',
                color: 'from-mac-red to-mac-gold',
              },
              {
                title: 'Understand',
                desc: 'After competing in Thailand Nationals 2025, we gained understanding of how serious and demanding this competition is.',
                icon: '📖',
                color: 'from-mac-teal to-mac-teal-light',
              },
              {
                title: 'Succeed',
                desc: 'Win prizes and make the team proud. Look forward to Thai National & World Finals.',
                icon: '🏆',
                color: 'from-mac-gold to-mac-gold-light',
              },
              {
                title: 'Legacy',
                desc: 'We are the first school in Asia to do F1 in Schools since 2018. Continue the legacy — be a legacy in motion!',
                icon: '⚡',
                color: 'from-mac-teal to-mac-gold',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="glass-card-hover p-6 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/40 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Details */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <div className="text-5xl mb-4">🏎️</div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">F1 in Schools — Japan National Finals 2026</h2>
            <p className="text-white/50 max-w-2xl mx-auto leading-relaxed mb-8">
              Teams from around the world use CAD/CAM software to design, manufacture, and race miniature F1 cars. We've competed in Thailand Nationals and now represent Asia at the Japan stage.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-mac-gold/10 border border-mac-gold/30">
              <span className="w-2 h-2 rounded-full bg-mac-green animate-pulse" />
              <span className="text-mac-gold font-mono tracking-widest text-sm">COMPETITION DAY: 14 JUNE 2026</span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}