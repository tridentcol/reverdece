import React from 'react';
import { useCart } from '../../context/CartContext';

const OrderSummary = ({ shippingMethod = 'standard' }) => {
  const { cart, getSubtotal, getDiscount, getCartTotal } = useCart();

  const shippingCost = shippingMethod === 'express' ? 9.99 : 0;
  const finalTotal = getCartTotal() + shippingCost;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg sticky top-4">
      <h3 className="text-lg font-semibold mb-4">Resumen del Pedido</h3>
      <div className="space-y-4">
        {/* Lista de productos */}
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span className="flex-1">
              {item.quantity}x {item.name}
            </span>
            <span className="ml-4 text-gray-600">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        ))}
        
        {/* Cálculos */}
        <div className="border-t pt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>${getSubtotal().toFixed(2)}</span>
          </div>
          
          {getDiscount() > 0 && (
            <div className="flex justify-between text-sm text-green-600">
              <span>Descuento</span>
              <span>-${getDiscount().toFixed(2)}</span>
            </div>
          )}
          
          <div className="flex justify-between text-sm">
            <span>Envío</span>
            <span>
              {shippingMethod === 'express' ? '$9.99' : 'Gratis'}
            </span>
          </div>
          
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Información adicional */}
        <div className="text-sm text-gray-600 pt-4">
          <p>* Los precios incluyen IVA</p>
          <p>* Tiempo de entrega estimado según el método de envío seleccionado</p>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;