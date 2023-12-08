"use client"
import {createContext, useEffect, useState} from "react";
import productsDB from "@/store/products.json";
import toast from "react-hot-toast";

export const CartContext = createContext({});

export function CartContextProvider({children}) {
  const [cartProducts,setCartProducts] = useState([]);
  const [quantity,setQuantity] = useState([]);

  // define localStorage
  const ls = typeof window !== "undefined" ? window.localStorage : null;

  useEffect(() => {
    const quantityDB= []
    productsDB.map((product) => {
      quantityDB.push({_id:product._id, quantity: product.quantity})
    })
    setQuantity(quantityDB)
  }
  ,[])

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

    // count how many times products is in the cart
    const count = cartProducts.reduce((acc, id) => {
      acc[id] = (acc[id] || 0) + 1;
      return acc;
    }, {});

    // get quantity of product
    const countValue = count[productId] || 0;

    // get quantity of product in DB
    const quantityItem = quantity.find(item => item._id === productId);

    // check if quantity of product in cart is equal or more than quantity of product in DB
    if (countValue && quantityItem && countValue >= quantityItem.quantity) {
      // show error message
      toast.error('You can not add more of this product');
      return;
    } else {
      // add product to cart
      setCartProducts(prev => [...prev,productId]);
    }
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
    ls?.removeItem('cart');
  }

  return (
    <CartContext.Provider value={{cartProducts,setCartProducts,addProduct,removeProduct,clearCart}}>
      {children}
    </CartContext.Provider>
  );
}