import React from 'react';
import ProductGrid from '../components/ProductGrid';

const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-reverdece-800 mb-4">
            Nuestros Productos
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra línea completa de productos naturales para el cuidado del cabello.
            Cada producto está formulado con ingredientes naturales de la más alta calidad.
          </p>
        </div>
        <ProductGrid />
      </div>
    </div>
  );
};

export default ProductsPage;