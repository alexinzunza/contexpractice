'use client'
import React, { useContext, useEffect, useState } from 'react';
import SomeProvider, { CartContext } from '../context/cartContext';
import ListItem from '../components/ListItem';
import CartProvider from '../context/cartContext';

const url = 'https://fakestoreapi.com/products';

export default function Page() {

    const { cart, addToCart } = useContext(CartContext);
    const [products, setProducts] = useState([])

    useEffect(()=>{
        async function fetchData(){
            try {
                const response = await fetch(url);
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        
          <div>
            <ul>
              {products.map(item=>(
                <ListItem 
                key={item.id}
                title={item.title}
                price={item.price}
                onHandleClick={()=>addToCart(item)}></ListItem>
              ))}
            </ul>  
          </div>
          
    );
}
