// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const navLinks = [
    { path: '/', label: 'Inicio' },
    { path: '/productos', label: 'Productos' },
    { path: '/nosotros', label: 'Nosotros' },
    { path: '/contacto', label: 'Contacto' }
  ];

  const handleCartClick = () => {
    // Ahora navegamos directamente a la página del carrito
    navigate('/cart');
  };

  return (
    <nav className="bg-reverdece-800 text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-reverdece-100">
              Reverdece
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-reverdece-100 hover:text-reverdece-200 px-3 py-2 rounded-md transition-colors ${
                  isActive(link.path) ? 'bg-reverdece-700' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Cart Button */}
            <button
              onClick={handleCartClick}
              className="p-2 relative group hover:bg-reverdece-700 rounded-md transition-colors"
              aria-label="Ver carrito"
            >
              <ShoppingCart className="text-reverdece-100 hover:text-reverdece-200" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            {/* Cart Button Mobile */}
            <button
              onClick={handleCartClick}
              className="p-2 relative group"
              aria-label="Ver carrito"
            >
              <ShoppingCart className="text-reverdece-100 hover:text-reverdece-200" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-accent-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {getCartCount()}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-reverdece-700 transition-colors"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium text-reverdece-100 hover:text-reverdece-200 hover:bg-reverdece-700 transition-colors ${
                    isActive(link.path) ? 'bg-reverdece-700' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;