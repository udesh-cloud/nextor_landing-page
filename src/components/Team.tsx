import { Linkedin, Twitter } from 'lucide-react';

export function Team() {
  const team = [
    {
      name: 'AARAV SHARMA',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 10+ years in esports and tech innovation',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'PRIYA PATEL',
      role: 'COO',
      bio: 'Operations expert driving multi-vertical excellence',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'ROHAN MEHTA',
      role: 'Head of Esports',
      bio: 'Former pro player turned tournament director',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'ANANYA SINGH',
      role: 'Head of Marketing',
      bio: 'Brand strategist with expertise in influencer ecosystems',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'VIKRAM REDDY',
      role: 'CTO',
      bio: 'Tech architect building scalable platforms',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'NEHA KAPOOR',
      role: 'Head of Cybersecurity',
      bio: 'Security expert protecting brands and data',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
              <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
              <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
            </div>
            <span className="text-[#ffff00] tracking-[0.3em] uppercase">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            THE INNOVATORS, STRATEGISTS<br />
            & <span className="text-[#ffff00]">CREATORS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative bg-black border border-gray-800/50 p-8 hover:border-[#ffff00]/50 transition-all"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[#ffff00]/20 group-hover:border-[#ffff00]/50 transition-colors"></div>

              <div className="w-16 h-16 bg-gradient-to-br from-[#ffff00]/20 to-transparent border-2 border-[#ffff00]/50 mb-6 flex items-center justify-center">
                <span className="text-2xl text-[#ffff00]">{member.name.charAt(0)}</span>
              </div>
              
              <h3 className="mb-2 tracking-wider">{member.name}</h3>
              <p className="text-[#ffff00] mb-4 tracking-wider">{member.role}</p>
              <p className="text-gray-400 mb-6 leading-relaxed">{member.bio}</p>
              
              <div className="flex gap-3">
                <a
                  href={member.social.linkedin}
                  className="p-2 border border-gray-800 hover:border-[#ffff00] hover:bg-[#ffff00]/10 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={member.social.twitter}
                  className="p-2 border border-gray-800 hover:border-[#ffff00] hover:bg-[#ffff00]/10 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
