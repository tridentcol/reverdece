// src/context/CartContext.jsx
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  // Agregar al carrito
  const addToCart = (product, quantity = 1) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id);
      
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...currentCart, { ...product, quantity }];
    });
  };

  // Remover del carrito
  const removeFromCart = (productId) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId));
  };

  // Actualizar cantidad
  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) return;
    
    setCart(currentCart =>
      currentCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Limpiar carrito
  const clearCart = () => {
    setCart([]);
    setAppliedCoupon(null);
  };

  // Obtener subtotal
  const getSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Obtener descuento
  const getDiscount = () => {
    if (!appliedCoupon) return 0;

    const subtotal = getSubtotal();
    return appliedCoupon.type === 'percentage'
      ? (subtotal * appliedCoupon.discount) / 100
      : appliedCoupon.discount;
  };

  // Calcular costo de envío
  const getShippingCost = (method = 'standard') => {
    return method === 'express' ? 9.99 : 0;
  };

  // Obtener total del carrito
  const getCartTotal = () => {
    const subtotal = getSubtotal();
    const discount = getDiscount();
    return subtotal - discount;
  };

  // Obtener total final con envío
  const getFinalTotal = (shippingMethod = 'standard') => {
    return getCartTotal() + getShippingCost(shippingMethod);
  };

  // Obtener cantidad total de items
  const getCartCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  // Aplicar cupón
  const applyCoupon = (coupon) => {
    setAppliedCoupon(coupon);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getSubtotal,
        getDiscount,
        getCartTotal,
        getFinalTotal,
        getCartCount,
        applyCoupon,
        appliedCoupon,
        getShippingCost
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;