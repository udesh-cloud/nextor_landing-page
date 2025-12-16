import hinterlandLogo from '../assets/images/Screenshot 2025-12-13 151506.png';
import cyberOriginsLogo from '../assets/images/Cyber Origins (WITH TAGLINE).png';
import strike1Logo from '../assets/images/For_dark_bg_usage-39.png';

export function Clients() {
  const logos = [
    { name: 'Hinterland Voyages', image: hinterlandLogo },
    { name: 'Cyber Origins', image: cyberOriginsLogo },
    { name: 'Strike 1 Esports', image: strike1Logo }
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
            <span className="text-[#ffff00] tracking-[0.3em] uppercase">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl tracking-tight">
            TRUSTED BY <span className="text-[#ffff00]">GLOBAL BRANDS</span><br />
            TO DELIVER EXCELLENCE
          </h2>
        </div>

        {/* Client Logos Grid */}
        <div className="border-t border-gray-800/50 pt-12">
          <h3 className="text-center text-white mb-8 tracking-[0.3em] uppercase">
            Trusted by
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 bg-black border border-gray-800/50 hover:border-[#ffff00]/50 transition-all group rounded"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-w-full h-auto object-contain"
                  style={{
                    maxHeight: logo.name === 'Cyber Origins' || logo.name === 'Strike 1 Esports' ? '160px' : '80px',
                    maxWidth: logo.name === 'Cyber Origins' || logo.name === 'Strike 1 Esports' ? '360px' : '200px'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
