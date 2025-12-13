import { ArrowRight, Trophy, Shield, TrendingUp, Plane, ShoppingBag, Radio, Users } from 'lucide-react';

interface VerticalsProps {
  onNavigate: (section: string) => void;
}

export function Verticals({ onNavigate }: VerticalsProps) {
  const verticals = [
    {
      icon: Trophy,
      title: 'ESPORTS',
      description: 'High-impact IPs, tournaments, pro teams, and community-building programs that define competitive gaming in India.',
      image: 'https://images.unsplash.com/photo-1759701547467-a54a5e86a4f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBlc3BvcnRzJTIwYXJlbmF8ZW58MXx8fHwxNzY1MjUxOTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      number: '01'
    },
    {
      icon: Shield,
      title: 'IT & CYBERSECURITY',
      description: 'Placement-first cybersecurity education and advanced IT solutions that protect and elevate brands.',
      image: 'https://images.unsplash.com/photo-1599949104055-2d04026aee1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUzNDA2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      number: '02'
    },
    {
      icon: TrendingUp,
      title: 'MARKETING & CONSULTING',
      description: 'Brand strategy, influencer campaigns, IP development, and full-funnel marketing execution.',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBzdHJhdGVneXxlbnwxfHx8fDE3NjUyNTcyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      number: '03'
    },
    {
      icon: Plane,
      title: 'TRAVEL & TOURISM',
      description: 'MICE, experiential travel, corporate events, and global curated experiences.',
      image: 'https://images.unsplash.com/photo-1528543606781-2f6e6857f318?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY1MzUyNDY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      number: '04'
    },
    {
      icon: ShoppingBag,
      title: 'E-COMMERCE',
      description: 'Gaming merchandise, pop-culture products, and aggregator-based digital storefronts.',
      image: 'https://images.unsplash.com/photo-1727407209320-1fa6ae60ee05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NjUzMjc0MzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      number: '05'
    },
    {
      icon: Radio,
      title: 'STREAMING PLATFORM',
      description: 'A seamless, creator-ready streaming hub for real-time engagement.',
      image: 'https://images.unsplash.com/photo-1764162051300-1021c8277419?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlYW1pbmclMjBicm9hZGNhc3R8ZW58MXx8fHwxNzY1MzY0NjMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      number: '06'
    },
    {
      icon: Users,
      title: 'SOCIAL MEDIA APP',
      description: 'A community app that unites gamers through chat, tournaments, content, and real-time interaction.',
      image: 'https://images.unsplash.com/photo-1708447134778-c2de956980b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbW11bml0eXxlbnwxfHx8fDE3NjUzNjQ2MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      number: '07'
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
            <span className="text-[#ffff00] tracking-[0.3em] uppercase">Our Core Verticals</span>
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            FROM ESPORTS TO CYBERSECURITY,<br />
            TRAVEL TO <span className="text-[#ffff00]">E-COMMERCE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {verticals.map((vertical, index) => {
            const Icon = vertical.icon;
            return (
              <div
                key={index}
                className="group relative bg-black border border-gray-800/50 overflow-hidden hover:border-[#ffff00]/50 transition-all duration-300"
              >
                {/* Number */}
                <div className="absolute top-4 right-4 text-5xl text-gray-800 z-10">
                  {vertical.number}
                </div>

                {/* Image Background */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={vertical.image}
                    alt={vertical.title}
                    className="w-full h-full object-cover opacity-30 group-hover:opacity-40 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                  
                  {vertical.isNew && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#ffff00] text-black tracking-wider z-20">
                      NEW
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-[#ffff00]" />
                    <div className="h-px flex-1 bg-gray-800"></div>
                  </div>

                  <h3 className="mb-3 tracking-wider">{vertical.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">{vertical.description}</p>

                  {vertical.features && (
                    <ul className="space-y-2 mb-4">
                      {vertical.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-gray-500">
                          <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  <button className="group/btn flex items-center gap-2 text-[#ffff00] tracking-wider hover:gap-3 transition-all">
                    EXPLORE
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
