import hinterlandLogo from '../assets/images/Screenshot 2025-12-13 151506.png';
import cafeClutchLogo from '../assets/images/Screenshot 2025-12-13 151652.png';
import cyberOriginsLogo from '../assets/images/Cyber Origins (WITH TAGLINE).png';
import strike1Logo from '../assets/images/For_dark_bg_usage-39.png';

export function PartneredWith() {
  const logos = [
    { name: 'Hinterland Voyages', image: hinterlandLogo },
    { name: 'Cafe Clutch', image: cafeClutchLogo },
    { name: 'Cyber Origins', image: cyberOriginsLogo },
    { name: 'Strike 1 Esports', image: strike1Logo }
  ];

  return (
    <section className="py-16 bg-black border-y border-gray-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <h3 className="text-center text-white mb-8 tracking-[0.3em] uppercase">
          Partnered With
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-0.5 bg-gray-100 border border-gray-800/50 hover:border-[#ffff00]/50 hover:bg-gray-200 transition-all group rounded"
            >
              <img 
                src={logo.image} 
                alt={logo.name} 
                className="w-auto h-auto object-contain"
                style={{
                  maxHeight: logo.name === 'Cyber Origins' ? '120px' : logo.name === 'Strike 1 Esports' ? '110px' : '80px'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

