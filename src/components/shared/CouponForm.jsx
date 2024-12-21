// src/components/shared/CouponForm.jsx
import React, { useState } from 'react';
import { Tag } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const CouponForm = ({ className = '' }) => {
  const [couponCode, setCouponCode] = useState('');
  const [error, setError] = useState('');
  const { applyCoupon, appliedCoupon } = useCart();

  // Simulación de cupones válidos - En producción esto vendría de una API
  const validCoupons = {
    'BIENVENIDO': { discount: 10, type: 'percentage' },
    'PRIMAVERA': { discount: 15, type: 'percentage' },
    'ENVIOGRATIS': { discount: 5, type: 'fixed' }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = couponCode.toUpperCase();
    
    if (appliedCoupon) {
      setError('Ya tienes un cupón aplicado');
      return;
    }

    if (!code) {
      setError('Ingresa un código de cupón');
      return;
    }
    
    if (validCoupons[code]) {
      applyCoupon(validCoupons[code]);
      setError('');
      setCouponCode('');
    } else {
      setError('Cupón inválido');
    }
  };

  const handleChange = (e) => {
    setCouponCode(e.target.value.toUpperCase());
    setError('');
  };

  return (
    <div className={`border-t border-gray-200 ${className}`}>
      <form onSubmit={handleSubmit} className="p-4">
        <p className="text-sm font-medium text-gray-700 mb-2">
          ¿Tienes un código de descuento?
        </p>
        
        {/* Input Container */}
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Tag className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
                size={18} />
            <input
              type="text"
              value={couponCode}
              onChange={handleChange}
              placeholder="Ingresa tu código"
              className={`w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-reverdece-500 
                ${error ? 'border-red-500' : 'border-gray-300'}`}
              disabled={appliedCoupon}
            />
          </div>
          <button
            type="submit"
            disabled={appliedCoupon}
            className="px-4 py-2 bg-reverdece-600 text-white rounded-lg hover:bg-reverdece-700 
              disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Aplicar
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <p className="text-red-500 text-sm mt-1">
            {error}
          </p>
        )}

        {/* Success Message */}
        {appliedCoupon && (
          <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-600 text-sm flex items-center gap-1">
              <span className="font-medium">Cupón aplicado:</span>
              {appliedCoupon.type === 'percentage' 
                ? `${appliedCoupon.discount}% de descuento`
                : `$${appliedCoupon.discount} de descuento`}
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

// También crearemos un hook personalizado para la lógica de los cupones
// src/hooks/useCouponValidation.js
export const useCouponValidation = () => {
  const validCoupons = {
    'BIENVENIDO': { discount: 10, type: 'percentage' },
    'PRIMAVERA': { discount: 15, type: 'percentage' },
    'ENVIOGRATIS': { discount: 5, type: 'fixed' }
  };

  const validateCoupon = (code) => {
    if (!code) return { isValid: false, error: 'Ingresa un código de cupón' };
    
    const coupon = validCoupons[code.toUpperCase()];
    if (!coupon) return { isValid: false, error: 'Cupón inválido' };
    
    return { isValid: true, coupon };
  };

  return { validateCoupon };
};

export default CouponForm;