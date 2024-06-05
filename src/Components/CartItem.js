import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ wine }) => {
  const { removeFromCart } = useCart();

  return (
    <div>
      <h3>{wine.name}</h3>
      <p>{wine.description}</p>
      <p>{wine.price} €</p>
      <button onClick={() => removeFromCart(wine.id)}>Eliminar</button>
    </div>
  );
};

export default CartItem;
