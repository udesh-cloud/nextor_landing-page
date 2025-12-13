import lexarLogo from '../assets/images/lexar-vector-logo.png';
import downloadLogo from '../assets/images/download.png';
import imagesLogo from '../assets/images/images (1).png';
import redingtonLogo from '../assets/images/Redington-Logo.png';
import adevoLogo from '../assets/images/Adevo-New-LOGO-3p.png';
import hinterlandLogo from '../assets/images/Screenshot 2025-12-13 151506.png';
import cafeClutchLogo from '../assets/images/Screenshot 2025-12-13 151652.png';
import cyberOriginsLogo from '../assets/images/Cyber Origins (WITH TAGLINE).png';
import strike1Logo from '../assets/images/For_dark_bg_usage-39.png';
import hackonxLogo from '../assets/images/Screenshot 2025-12-13 172825.png';

interface PartneredWithProps {
  title?: string;
}

export function PartneredWith({ title = 'Partnered With' }: PartneredWithProps) {
  // Different logos for "Partnered With" vs "Our Brands"
  const partneredLogos = [
    { name: 'Lexar', image: lexarLogo },
    { name: 'HP', image: downloadLogo },
    { name: 'Shriya Properties', image: imagesLogo },
    { name: 'Redington', image: redingtonLogo },
    { name: 'Adevō', image: adevoLogo }
  ];

  const ourBrandsLogos = [
    { name: 'Hinterland Voyages', image: hinterlandLogo },
    { name: 'Cafe Clutch', image: cafeClutchLogo },
    { name: 'Cyber Origins', image: cyberOriginsLogo },
    { name: 'Strike 1 Esports', image: strike1Logo },
    { name: 'HackonX', image: hackonxLogo }
  ];

  const logos = title === 'Our Brands' ? ourBrandsLogos : partneredLogos;
  
  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 bg-black border-y border-gray-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h3 className="text-center text-white mb-8 tracking-[0.3em] uppercase">
          {title}
        </h3>
        {/* Horizontal scrolling animation */}
        <div className="overflow-hidden relative">
          <div className="flex items-center gap-8 md:gap-12 animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <img 
                key={index}
                src={logo.image} 
                alt={logo.name} 
                className="w-auto h-auto object-contain flex-shrink-0"
                style={{
                  maxHeight: 
                    logo.name === 'Cyber Origins' ? '120px' : 
                    logo.name === 'Strike 1 Esports' ? '110px' : 
                    '80px'
                }}
              />
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 20s linear infinite;
            will-change: transform;
          }
          .animate-scroll:hover {
            animation-play-state: paused;
          }
          @media (max-width: 768px) {
            .animate-scroll {
              animation-duration: 15s;
            }
          }
        `}</style>
      </div>
    </section>
  );
}

