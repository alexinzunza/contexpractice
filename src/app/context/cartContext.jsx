'use client'
import React, { createContext, useState } from 'react'

export const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState([{
      id:65615656,
      title:'prueba',
      price:'000',
  },]);

    const addToCart = (item) => {
      const newCart = [...cart, item];
      setCart(newCart);
      console.log("funciona");
      console.log(cart);
    }

  return (
    <CartContext.Provider value={{cart, addToCart}}>
      {children}
    </CartContext.Provider>
  )
}

