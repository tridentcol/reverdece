import React from 'react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-reverdece-700 to-accent-700 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Belleza Natural y Sostenible
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Descubre nuestra línea de productos 100% naturales para el cuidado de tu cabello. 
          Comprometidos con tu belleza y el medio ambiente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            Descubre más
          </button>
          <button className="btn-secondary">
            Ver productos
          </button>
        </div>
      </div>
      
      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">100% Natural</h3>
              <p>Ingredientes orgánicos certificados</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Eco-friendly</h3>
              <p>Empaques biodegradables</p>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white/10 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Cruelty-free</h3>
              <p>No testado en animales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;