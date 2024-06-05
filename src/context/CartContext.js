import React, { createContext, useState, useContext } from 'react';

// Crear un contexto para el carrito de compras
const CartContext = createContext();

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (wine) => {
    setCart((prevCart) => [...prevCart, wine]);
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter(wine => wine.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook personalizado para usar el contexto del carrito
export const useCart = () => useContext(CartContext);
