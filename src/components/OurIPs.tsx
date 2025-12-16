import { ArrowRight, Zap, Coffee } from 'lucide-react';
import cafeClutchLogo from '../assets/images/cafe-clutch-logo.png';
import hackonxLogo from '../assets/images/hackonx-logo.png';

export function OurIPs() {
  const ips = [
    {
      icon: Zap,
      title: 'HACKONX',
      description: 'A flagship innovation combining tech creativity and innovation',
      image: hackonxLogo,
      features: [
        'Innovation and coding challenges',
        'Gamified competitions',
        'Talent discovery',
        'Brand collaborations'
      ]
    },
    {
      icon: Coffee,
      title: 'CAFE CLUTCH',
      description: 'A hub for grassroot-level gamers where brands connect with the community through tournaments, events and authentic on-ground experiences at gaming cafes',
      image: cafeClutchLogo,
      features: [
        'Premium gaming experiences',
        'Exclusive retail kiosks',
        'Community engagements'
      ]
    }
  ];

  return (
    <section className="py-24 bg-black border-y border-gray-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
              <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
              <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
            </div>
            <span className="text-[#ffff00] tracking-[0.3em] uppercase">Our IPs</span>
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            BRIDGING FLAGSHIP BRANDS &<br />
            <span className="text-[#ffff00]">INNOVATION PLATFORMS</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {ips.map((ip, index) => {
            const Icon = ip.icon;
            return (
              <div
                key={index}
                className="group relative bg-black border border-gray-800/50 overflow-hidden hover:border-[#ffff00]/50 transition-all duration-300"
              >
                {/* Image Background */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={ip.image}
                    alt={ip.title}
                    className="w-full h-full object-cover opacity-15 group-hover:opacity-25 group-hover:scale-110 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-[#ffff00]" />
                    <div className="h-px flex-1 bg-gray-800"></div>
                  </div>

                  <h3 className="mb-3 tracking-wider">{ip.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed text-sm">{ip.description}</p>

                  {ip.features && (
                    <ul className="space-y-2 mb-4">
                      {ip.features.map((feature, idx) => (
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

