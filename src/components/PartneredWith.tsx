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

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-black border-y border-gray-800/50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <h3 className="text-center text-white mb-6 sm:mb-8 tracking-[0.3em] uppercase text-sm sm:text-base">
          {title}
        </h3>
        {/* Horizontal layout for all logos */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-2 sm:p-3 md:p-4 bg-gray-100 border border-gray-800/50 hover:border-[#ffff00]/50 hover:bg-gray-200 transition-all group rounded"
            >
              <img 
                src={logo.image} 
                alt={logo.name} 
                className="w-auto h-auto object-contain"
                style={{
                  maxHeight: 
                    logo.name === 'Cyber Origins' ? 'clamp(60px, 8vw, 120px)' : 
                    logo.name === 'Strike 1 Esports' ? 'clamp(55px, 7vw, 110px)' : 
                    'clamp(40px, 6vw, 80px)',
                  maxWidth: 'clamp(80px, 12vw, 150px)'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

