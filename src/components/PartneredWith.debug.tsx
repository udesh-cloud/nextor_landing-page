import { useState, useEffect } from 'react';
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
  debug?: boolean; // Add debug mode
}

export function PartneredWith({ title = 'Partnered With', debug = false }: PartneredWithProps) {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
  });

  useEffect(() => {
    if (!debug) return;
    
    const handleResize = () => {
      setViewport({ width: window.innerWidth });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [debug]);

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

  // Calculate logo size based on viewport
  const getLogoSize = (logoName: string) => {
    const width = viewport.width;
    
    if (logoName === 'Cyber Origins') {
      return width < 768 ? '180px' : width < 1024 ? '150px' : '120px';
    }
    if (logoName === 'Strike 1 Esports') {
      return width < 768 ? '170px' : width < 1024 ? '140px' : '110px';
    }
    return width < 768 ? '150px' : width < 1024 ? '120px' : '80px';
  };

  return (
    <section className="py-16 bg-black border-y border-gray-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h3 className="text-center text-white mb-8 tracking-[0.3em] uppercase">
          {title}
        </h3>
        
        {/* Debug Info Banner */}
        {debug && (
          <div className="mb-4 p-3 bg-yellow-900/30 border border-yellow-500 rounded text-xs text-yellow-200">
            <div className="font-bold mb-1">🔍 Debug Mode Active</div>
            <div>Viewport: {viewport.width}px | Breakpoint: {
              viewport.width >= 1024 ? 'lg' :
              viewport.width >= 768 ? 'md' : 'mobile'
            }</div>
            <div className="mt-1 text-yellow-300">
              Logo sizes: Regular={getLogoSize('Regular')}, Cyber Origins={getLogoSize('Cyber Origins')}
            </div>
          </div>
        )}

        {/* Horizontal layout for all logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => {
            const logoSize = debug ? getLogoSize(logo.name) : (
              logo.name === 'Cyber Origins' ? '120px' : 
              logo.name === 'Strike 1 Esports' ? '110px' : 
              '80px'
            );

            return (
              <div
                key={index}
                className={`flex items-center justify-center p-4 bg-gray-100 border border-gray-800/50 hover:border-[#ffff00]/50 hover:bg-gray-200 transition-all group rounded ${
                  debug ? 'relative' : ''
                }`}
              >
                {debug && (
                  <div className="absolute -top-6 left-0 text-[10px] text-yellow-400 bg-black/80 px-1 rounded">
                    {logoSize}
                  </div>
                )}
                <img 
                  src={logo.image} 
                  alt={logo.name} 
                  className="w-auto h-auto object-contain"
                  style={{
                    maxHeight: logoSize
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

