import React from 'react';
import { useCart } from '../context/CartContext';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { name, price, description, image, features } = product;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <button className="p-2 bg-white rounded-full hover:bg-reverdece-100 transition-colors">
            <Heart className="w-5 h-5 text-accent-600" />
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-reverdece-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {/* Features */}
        <ul className="space-y-1 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-reverdece-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <div className="flex justify-between items-center">
          <span className="text-accent-600 font-bold text-lg">
            ${price.toFixed(2)}
          </span>
          <button 
            onClick={() => {
              addToCart(product);
              // Opcional: Mostrar una notificación de éxito
              alert('Producto agregado al carrito');
            }}
            className="btn-primary flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" />
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;