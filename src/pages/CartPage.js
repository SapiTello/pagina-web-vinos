import React from 'react';
import Cart from '../Components/Cart'; // Ruta corregida

const CartPage = () => {
  return (
    <div className='form_container_contact'>
        <div className='form_header'>
            <h1 className='form_title'>Carrito de Compras</h1>
        </div>      
      <Cart />
    </div>
  );
};

export default CartPage;

