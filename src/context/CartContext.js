"use client"
import {createContext, useEffect, useState} from "react";

export const CartContext = createContext({});

export function CartContextProvider({children}) {
  const [cartProducts,setCartProducts] = useState([]);

  // define localStorage
  const ls = typeof window !== "undefined" ? window.localStorage : null;

  // save cartProducts to localStorage
  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem('cart', JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  // get cartProducts from localStorage
  useEffect(() => {
    if (ls && ls.getItem('cart')) {
      setCartProducts(JSON.parse(ls.getItem('cart')));
    }
  }, []);

  // add product to cart
  function addProduct(productId) {
    
    setCartProducts(prev => [...prev,productId]);
  }

  // remove product from cart
  function removeProduct(productId) {
    setCartProducts(prev => {
      const pos = prev.indexOf(productId);
      if (pos !== -1) {
        return prev.filter((value,index) => index !== pos);
      }
      return prev;
    });
  }

  // clear cart
  function clearCart() {
    setCartProducts([]);
  }

  return (
    <CartContext.Provider value={{cartProducts,setCartProducts,addProduct,removeProduct,clearCart}}>
      {children}
    </CartContext.Provider>
  );
}