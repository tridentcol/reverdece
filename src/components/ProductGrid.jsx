import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '../data/products';

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState('todos');

  const filteredProducts = activeCategory === 'todos'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category.id
                ? 'bg-accent-600 text-white'
                : 'bg-reverdece-100 text-reverdece-800 hover:bg-reverdece-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600">No se encontraron productos en esta categoría.</p>
        </div>
      )}
    </div>
  );
};

export default ProductGrid;