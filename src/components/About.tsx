import React from 'react';
import { Target, Lightbulb, Globe, Award } from 'lucide-react';

export function About() {
  const stats = [
    { value: '8+', label: 'VERTICALS', icon: Target },
    { value: '500+', label: 'EVENTS DELIVERED', icon: Award },
    { value: '50+', label: 'BRAND PARTNERSHIPS', icon: Globe },
    { value: '1M+', label: 'COMMUNITY REACH', icon: Lightbulb }
  ];

  return (
    <section className="py-24 bg-black border-y border-gray-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex gap-1">
                <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
                <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
                <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
              </div>
              <span className="text-[#ffff00] tracking-[0.3em] uppercase">About Nextor</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">
              BUILDING THE FUTURE OF<br />
              <span className="text-[#ffff00]">DIGITAL EXPERIENCES</span>
            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed border-l-2 border-[#ffff00] pl-6">
              Nextor is more than a company — we're a movement that bridges gaming, technology, 
              marketing, and lifestyle. Our multi-vertical approach allows us to create holistic 
              ecosystems where brands, creators, and communities thrive.
            </p>
            <p className="text-gray-400 mb-6 leading-relaxed border-l-2 border-gray-800 pl-6">
              From powering India's biggest esports tournaments to protecting enterprises with 
              cutting-edge cybersecurity, from curating unforgettable travel experiences to 
              building next-gen streaming platforms — we're redefining what's possible.
            </p>
            <p className="text-gray-400 leading-relaxed border-l-2 border-gray-800 pl-6">
              Our mission is simple: empower brands and communities worldwide through innovation, 
              excellence, and immersive experiences that leave lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-black border border-gray-800/50 p-8 hover:border-[#ffff00]/50 transition-all overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-[#ffff00]/5 rounded-full blur-2xl group-hover:bg-[#ffff00]/10 transition-colors"></div>
                  <Icon className="w-8 h-8 text-[#ffff00] mb-6 relative z-10" />
                  <div className="text-4xl mb-2 relative z-10 tracking-tight">{stat.value}</div>
                  <p className="text-gray-500 tracking-wider relative z-10">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
