import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {products.slice(0, 3).map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-reverdece-800">{product.name}</h3>
            <p className="text-gray-600 mt-1">{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Kit Natural Premium",
      description: "Nuestro kit más completo para el cuidado del cabello",
      image: "/api/placeholder/400/300"
    },
    {
      id: 2,
      name: "Shampoo Revitalizante",
      description: "Con ingredientes 100% naturales",
      image: "/api/placeholder/400/300"
    },
    {
      id: 3,
      name: "Acondicionador Nutritivo",
      description: "Nutrición profunda para tu cabello",
      image: "/api/placeholder/400/300"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      
      {/* Featured Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-reverdece-800 mb-4">Productos Destacados</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Descubre nuestra selección de productos más populares para el cuidado natural de tu cabello
            </p>
          </div>
          <FeaturedProducts products={featuredProducts} />
          <div className="text-center mt-8">
            <Link 
              to="/productos" 
              className="inline-flex items-center gap-2 btn-primary"
            >
              Ver todos los productos
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-reverdece-800 mb-4">
                Belleza Natural, Resultados Reales
              </h2>
              <p className="text-gray-600 mb-6">
                En Reverdece, creemos en el poder de la naturaleza para transformar tu cabello. 
                Nuestros productos están formulados con ingredientes naturales cuidadosamente 
                seleccionados para brindarte resultados excepcionales mientras cuidamos del 
                medio ambiente.
              </p>
              <Link 
                to="/nosotros" 
                className="inline-flex items-center gap-2 btn-secondary"
              >
                Conoce nuestra historia
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/api/placeholder/600/400" 
                alt="Productos naturales"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-reverdece-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-reverdece-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold text-reverdece-800 mb-2">100% Natural</h3>
              <p className="text-gray-600">
                Ingredientes naturales y orgánicos certificados
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-reverdece-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">♻️</span>
              </div>
              <h3 className="text-xl font-semibold text-reverdece-800 mb-2">Eco-friendly</h3>
              <p className="text-gray-600">
                Comprometidos con el medio ambiente
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-reverdece-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🐰</span>
              </div>
              <h3 className="text-xl font-semibold text-reverdece-800 mb-2">Cruelty-free</h3>
              <p className="text-gray-600">
                Nunca testado en animales
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;