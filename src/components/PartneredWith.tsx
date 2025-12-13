import lexarLogo from '../lexar-vector-logo.png';
import downloadLogo from '../download.png';
import imagesLogo from '../images (1).png';
import redingtonLogo from '../Redington-Logo.png';
import adevoLogo from '../Adevo-New-LOGO-3p.png';
import hinterlandLogo from '../assets/images/Screenshot 2025-12-13 151506.png';
import cafeClutchLogo from '../assets/images/Screenshot 2025-12-13 151652.png';
import cyberOriginsLogo from '../assets/images/Cyber Origins (WITH TAGLINE).png';
import strike1Logo from '../assets/images/For_dark_bg_usage-39.png';
import hackonxLogo from '../Screenshot 2025-12-13 172825.png';

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
    <section className="py-16 bg-black border-y border-gray-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h3 className="text-center text-white mb-8 tracking-[0.3em] uppercase">
          {title}
        </h3>
        {/* Horizontal layout for all logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-gray-100 border border-gray-800/50 hover:border-[#ffff00]/50 hover:bg-gray-200 transition-all group rounded"
            >
              <img 
                src={logo.image} 
                alt={logo.name} 
                className="w-auto h-auto object-contain"
                style={{
                  maxHeight: 
                    logo.name === 'Cyber Origins' ? '120px' : 
                    logo.name === 'Strike 1 Esports' ? '110px' : 
                    '80px'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

