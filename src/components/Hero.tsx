import { ArrowRight, Users } from 'lucide-react';
import heroImage from '../assets/images/1724322281.3452teens-playing-in-video-game-club-2023-11-27-05-26-04-utc.jpg';

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Gaming"
          className="w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-32 right-20 hidden lg:block">
        <svg width="200" height="200" viewBox="0 0 200 200" className="opacity-50">
          <path d="M 20 100 Q 60 20, 100 60 T 180 100" stroke="#ffff00" fill="none" strokeWidth="2"/>
        </svg>
      </div>

      <div className="absolute bottom-20 left-20 hidden lg:block">
        <svg width="150" height="150" viewBox="0 0 150 150" className="opacity-50">
          <path d="M 20 80 Q 40 40, 80 60 T 130 80" stroke="#ffff00" fill="none" strokeWidth="2"/>
        </svg>
      </div>

      {/* Scroll Down Text */}
      <div className="absolute left-8 bottom-20 hidden lg:block">
        <div className="flex items-center gap-3">
          <div className="w-px h-16 bg-[#ffff00]"></div>
          <p className="text-[#ffff00] tracking-[0.3em] rotate-90 origin-left whitespace-nowrap transform translate-x-16">
            SCROLL DOWN
          </p>
        </div>
      </div>

      {/* Side Numbers */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-8">
        <div className="text-gray-600 tracking-wider">01</div>
        <div className="w-px h-12 bg-gray-700"></div>
        <div className="text-gray-600 tracking-wider">02</div>
        <div className="w-px h-12 bg-gray-700"></div>
        <div className="text-gray-600 tracking-wider">03</div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="max-w-3xl">
          {/* Stats Card */}
          <div className="inline-flex items-center gap-4 bg-black/60 border border-[#ffff00]/30 rounded-xl p-4 mb-8 backdrop-blur-sm">
            <div className="flex -space-x-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 border-2 border-black"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 border-2 border-black"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-green-500 border-2 border-black"></div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-yellow-500 border-2 border-black"></div>
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl text-[#ffff00]">8</span>
                <span className="text-[#ffff00]">+</span>
              </div>
              <p className="text-sm text-gray-400">Verticals worldwide</p>
            </div>
          </div>

          {/* Label */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
              <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
              <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
            </div>
            <span className="text-[#ffff00] tracking-[0.3em] uppercase">Multi-Vertical Powerhouse</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight tracking-tight">
            WHERE GAMING,<br />
            INNOVATION &<br />
            <span className="text-[#ffff00]">EXPERIENCES</span> CONVERGE
          </h1>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => onNavigate('verticals')}
              className="group relative px-8 py-4 bg-[#ffff00] text-black tracking-wider overflow-hidden"
            >
              <div className="absolute inset-0 bg-white transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              <div className="relative flex items-center justify-center gap-2">
                VIEW MORE
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                  <div className="w-1 h-1 bg-black rounded-full"></div>
                </div>
              </div>
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="group px-8 py-4 border-2 border-white text-white tracking-wider hover:bg-white hover:text-black transition-all"
            >
              <div className="flex items-center justify-center gap-2">
                PARTNER WITH US
                <div className="flex gap-0.5">
                  <div className="w-1 h-1 bg-current rounded-full"></div>
                  <div className="w-1 h-1 bg-current rounded-full"></div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}