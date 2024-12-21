import React from 'react';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-reverdece-800 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-reverdece-100">Reverdece</h3>
            <p className="text-reverdece-100">
              Comprometidos con tu belleza y el medio ambiente
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-reverdece-100 hover:text-reverdece-200">
                <Instagram />
              </a>
              <a href="#" className="text-reverdece-100 hover:text-reverdece-200">
                <Facebook />
              </a>
              <a href="#" className="text-reverdece-100 hover:text-reverdece-200">
                <Twitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-reverdece-100 hover:text-reverdece-200">Inicio</a></li>
              <li><a href="#" className="text-reverdece-100 hover:text-reverdece-200">Productos</a></li>
              <li><a href="#" className="text-reverdece-100 hover:text-reverdece-200">Sobre Nosotros</a></li>
              <li><a href="#" className="text-reverdece-100 hover:text-reverdece-200">Blog</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Categorías</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-reverdece-100 hover:text-reverdece-200">Cuidado del Cabello</a></li>
              <li><a href="#" className="text-reverdece-100 hover:text-reverdece-200">Combos y Kits</a></li>
              <li><a href="#" className="text-reverdece-100 hover:text-reverdece-200">Óleos y Aceites</a></li>
              <li><a href="#" className="text-reverdece-100 hover:text-reverdece-200">Nuevos Productos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>info@reverdece.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>(123) 456-7890</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-reverdece-700 mt-8 pt-8 text-center">
          <p className="text-reverdece-100">
            &copy; {new Date().getFullYear()} Reverdece. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;