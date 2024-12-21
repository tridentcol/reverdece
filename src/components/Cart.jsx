import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CouponForm from './shared/CouponForm';

const Cart = () => {
  const navigate = useNavigate();
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    getCartTotal,
    clearCart
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg flex flex-col">
        {/* Header */}
        <div className="p-4 bg-reverdece-800 text-white flex justify-between items-center">
          <h2 className="text-xl font-semibold">Carrito de Compras</h2>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 hover:bg-reverdece-700 rounded-full transition-colors"
            aria-label="Cerrar carrito"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Tu carrito está vacío</p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/productos');
                }}
                className="btn-primary"
              >
                Ver Productos
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-reverdece-800">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      Cantidad: {item.quantity}
                    </p>
                    <p className="text-accent-600 font-bold mt-1">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                    aria-label="Eliminar producto"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Coupon Form */}
        {cart.length > 0 && (
          <CouponForm className="mt-auto" />
        )}

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t p-4 bg-white">
            {/* Total */}
            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <button 
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/cart');
                }}
                className="w-full btn-primary"
              >
                Ver Carrito Completo
              </button>
              
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/checkout');
                }}
                className="w-full btn-secondary"
              >
                Proceder al Pago
              </button>
              
              <button
                onClick={clearCart}
                className="w-full text-red-500 hover:text-red-600 text-sm transition-colors"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;