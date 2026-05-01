import { motion } from 'framer-motion'

const teamMembers = [
  {
    name: 'Neena',
    fullName: 'Chalisa Nitayavardhana',
    role: 'Team Manager',
    description: 'My role is to coordinate and supervise the work of my teammates, ensuring that everyone collaborates effectively and all requirements are met to the highest standard. I also try my best to support them so that we feel more comfortable working as a team to produce the best quality outcome.',
    icon: '👑',
    accent: 'from-mac-gold to-mac-gold-light',
  },
  {
    name: 'Pimmy',
    fullName: 'Pimyada Lertbutsayanukul',
    role: 'Graphics Designer',
    description: 'My role is to oversee the visuals of the team and make sure our graphics are cohesive, clear, and aligned with our team identity. I am also responsible for our logo, posters, and other promotional materials for our team.',
    icon: '🎨',
    accent: 'from-mac-red to-mac-gold',
  },
  {
    name: 'Sky',
    fullName: 'Tasschol Laoarakpibul',
    role: 'Lead Engineer',
    description: 'My role involves manufacturing, designing cars, and supervising other engineers to ensure that all work are of the highest quality possible. In addition to supervising the engineers, I also work with them to brainstorm ideas, give each other tips for CAD and helping each other to finish work in time.',
    icon: '⚙️',
    accent: 'from-mac-teal to-mac-teal-light',
  },
  {
    name: 'Pep',
    fullName: 'Paphakorn Pongvitayapanu',
    role: 'Manufacturing Engineer',
    description: 'My main role is to mainly design and manufacture the sub-components of the car like the wheel support and aerodynamic components. Furthermore, I also help the engineer design parts to be easily manufactured with the limited tools that we have. I am also responsible for designing part of the pit display.',
    icon: '🔧',
    accent: 'from-mac-blue to-mac-teal',
  },
  {
    name: 'Copter',
    fullName: 'Anantawat Kulthaveesup',
    role: 'Design Engineer',
    description: 'My role is to develop and make the car\'s design to achieve better performance within the F1 in Schools regulations. I am responsible for creating CAD models, and ensuring the car is structurally sound and manufacturable. I work closely with the CFD and manufacturing teams to test, analyze, and improve our design.',
    icon: '📐',
    accent: 'from-mac-green to-mac-green-dark',
  },
  {
    name: 'Kao',
    fullName: 'Tawin Tangsukson',
    role: 'Analytical Engineer',
    description: 'My role is to check the aerodynamics of the car using Computer Fluid Dynamics to help improve the quality and the speed of the car. Another role of mine is to design and maintain our website making sure our website is appealing and easy to navigate.',
    icon: '📊',
    accent: 'from-mac-teal-light to-mac-teal',
  },
]

export default function Team() {
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
            <span className="px-4 py-2 rounded-full bg-white/5 border border-mac-teal/30 text-mac-teal text-sm tracking-widest">
              THE DREAM TEAM
            </span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Meet </span>
            <span className="text-gradient">Our Team</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/50 max-w-2xl mx-auto"
          >
            Macchanu consists of 6 Amnuay Silpa students sharing different skill sets but the same mindset, aspiring for greatness.
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section-padding pt-0">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card-hover p-8 group relative overflow-hidden"
              >
                {/* Accent gradient */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.accent}`} />
                
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${member.accent} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform`}>
                    {member.icon}
                  </div>
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <span className="text-mac-gold font-bold">{i + 1}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-sm text-mac-teal mb-4 tracking-wider">{member.role}</p>
                <p className="text-white/50 text-sm leading-relaxed">{member.description}</p>
                
                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path d="M100 100 L100 50 Q100 0 50 0 Z" fill="currentColor" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-8 md:p-12 text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Shared Vision</h2>
            <p className="text-lg text-white/60 leading-relaxed">
              As a team, we are certain our combined knowledge will bring us to success. We represent both Amnuay Silpa and Thailand in the competition to bring honor and recognition to our culture. After gaining experience in the 2025 Thailand National competition, we are now aiming for the Japan National Finals and potentially the World Finals.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 rounded-full bg-mac-teal/20 text-mac-teal text-sm">Collaboration</span>
              <span className="px-4 py-2 rounded-full bg-mac-gold/20 text-mac-gold text-sm">Excellence</span>
              <span className="px-4 py-2 rounded-full bg-mac-blue/20 text-mac-blue text-sm">Innovation</span>
              <span className="px-4 py-2 rounded-full bg-mac-green/20 text-mac-green text-sm">Dedication</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Compete */}
      <section className="section-padding pt-0">
        <div className="max-w-5xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            <span className="text-white">Why We </span>
            <span className="text-gold-gradient">Compete</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Represent', desc: 'Represent both Amnuay Silpa and Thailand in the competition to bring honor and recognition to our culture.', icon: '🇹🇭' },
              { title: 'Understand', desc: 'After competing in Thailand National competition in 2025 we gained understanding of how serious and demanding the competition is.', icon: '📚' },
              { title: 'Succeed', desc: 'Win prizes and make the team proud. After gaining experience in Japan we also want to look forward to possibly competing in the Thai National & World finals.', icon: '🏆' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-mac-gold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}