import React from 'react';
import { motion } from 'framer-motion';

const SupplierCarousel = () => {
  const suppliers = [
    { name: 'British Gas', logo: 'https://i.ibb.co/SXn7gsSy/british-gas.png' },
    { name: 'Crown Gas & Power', logo: 'https://i.ibb.co/9Fw40dv/Crown.png' },
    { name: 'Drax', logo: 'https://i.ibb.co/8Hgz06s/drax-RGB-small.webp' },
    { name: 'EDF Energy', logo: 'https://i.ibb.co/nMGZdHfk/edf-1-1.png' },
    { name: 'E.ON Next', logo: 'https://i.ibb.co/QjhMJkPK/eon-next-1.png' },
    { name: 'Opus Energy', logo: 'https://i.ibb.co/nNsvqgDm/Opus.png' },
    { name: 'SEFE Energy', logo: 'https://i.ibb.co/MkFMq6ZQ/sefe-1-1.png' },
    { name: 'Smartest Energy', logo: 'https://i.ibb.co/BVkv7RS3/smartestenergy-limited-vector-logo.png' },
    { name: 'Scottish Power', logo: 'https://i.ibb.co/SXYPL7KG/sp-1-1.png' },
    { name: 'Yu Energy', logo: 'https://i.ibb.co/SDJszV18/yu-1-1.png' },
    { name: 'Valda Energy', logo: 'https://i.ibb.co/xtWgKWXq/valda.png' },
    { name: 'Utilita', logo: 'https://i.ibb.co/gqv7rbX/utilita-2.png' },
    { name: 'Pozitive Energy', logo: 'https://i.ibb.co/jZjD8jjG/proz-1-1.png' },
    { name: 'Total Energies', logo: 'https://i.ibb.co/0RJ8d5g1/tgpl-1.png' },
    // Water suppliers
    { name: 'Water Plus', logo: 'https://i.ibb.co/WbBgQ38/Master-Water-Plus-Logo-on-white-strap-SPOT-e1543417320424-1.png' },
    { name: 'Everflow', logo: 'https://i.ibb.co/3YkhDbFN/Everflow-Logo-Magenta-2-1.webp' },
    // Additional suppliers without provided logos (placeholder text for now)
    { name: 'SSE', logo: null },
    { name: 'Octopus Energy', logo: null },
    { name: 'Shell Energy', logo: null },
    { name: 'Gazprom', logo: null },
    { name: 'Haven Power', logo: null },
    { name: 'Bulb Energy', logo: null },
  ];

  // Filter out suppliers without logos for the carousel
  const suppliersWithLogos = suppliers.filter(s => s.logo);
  
  // Duplicate the array to create seamless loop
  const duplicatedSuppliers = [...suppliersWithLogos, ...suppliersWithLogos];

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted by Major UK Energy Suppliers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We work with over 30+ leading energy suppliers to secure the best rates for your business
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient Overlays for edge fading effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-12"
              animate={{
                x: [0, -50 * suppliersWithLogos.length],
              }}
              transition={{
                x: {
                  duration: suppliersWithLogos.length * 3,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
              style={{ width: 'max-content' }}
            >
              {duplicatedSuppliers.map((supplier, index) => (
                <div
                  key={`${supplier.name}-${index}`}
                  className="flex-shrink-0 bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
                  style={{ width: '200px', height: '100px' }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={supplier.logo}
                      alt={supplier.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      style={{ maxHeight: '60px' }}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `<span class="text-gray-400 text-sm">${supplier.name}</span>`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Additional Trust Indicators */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">30+</div>
            <div className="text-sm text-gray-600">Energy Suppliers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">15+</div>
            <div className="text-sm text-gray-600">Water Suppliers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">100%</div>
            <div className="text-sm text-gray-600">Market Coverage</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600">24/7</div>
            <div className="text-sm text-gray-600">Supplier Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SupplierCarousel;