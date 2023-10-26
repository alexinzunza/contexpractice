'use client'
import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/cartContext'
import LiCart from '../components/LiCart';
import CartProvider from '../context/cartContext';

export default function Page() {

  const {cart} = useContext(CartContext);

  useEffect(()=>{
    console.log(cart);
  }, [cart])

  return (
    
    
      <div>
      <ul>
      {cart.map(item => (
        <LiCart 
        key={item.id}
        title={item.title}
        price={item.price}>
        </LiCart>
      ))}
      </ul>
      
    </div>
    
  )
}
