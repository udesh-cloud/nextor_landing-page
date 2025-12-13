export function TrustedBy() {
  const brands = [
    'LEXAR',
    'REDINGTON',
    'HP',
    'ADEVO',
    'INTEL',
    'AMD',
    'NVIDIA',
    'LOGITECH'
  ];

  return (
    <section className="py-16 bg-black border-y border-gray-800/50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
            <div className="w-1 h-1 bg-[#ffff00] rounded-full"></div>
          </div>
          <h3 className="text-center text-gray-500 tracking-[0.3em] uppercase">
            Trusted by Leading Brands
          </h3>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 border border-gray-800/50 hover:border-[#ffff00]/50 transition-all duration-300 group"
            >
              <span className="tracking-[0.2em] text-gray-600 group-hover:text-[#ffff00] transition-colors">{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}