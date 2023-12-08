'use client'

import {useContext, useEffect, useState} from "react";

import Center from "@/components/Center";
import {Button} from "@/components/Buttons"
import productsDB from "@/store/products.json";

import { CartContext } from "@/context/CartContext";


import {ColumnsWrapper, Box, ProductInfoCell, ProductImageBox, QuantityLabel, CityHolder, StyledTable, StyledInput} from "./style";

export default function CartPage() {
  const {cartProducts,addProduct,removeProduct,clearCart} = useContext(CartContext);

  const [products,setProducts] = useState([]);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [city,setCity] = useState('');
  const [postalCode,setPostalCode] = useState('');
  const [streetAddress,setStreetAddress] = useState('');
  const [country,setCountry] = useState('');
  const [isSuccess,setIsSuccess] = useState(false);

  // define localStorage 
  useEffect(() => {
    if (cartProducts.length > 0) {
      cartProducts.map(() => {
        const productsFiltered = cartProducts.map( (id) => productsDB.find((product) => product._id === id));
        setProducts(productsFiltered);
      })
    } else {
      setProducts([]);;
    }
  }, [cartProducts]);


  function moreOfThisProduct(id) {
      addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  async function goToPayment() {

    if (!name) {
      toast.error('Please fill your name');
      return;
    }

    if (!email) {
      toast.error('Please fill your email');
      return;
    }

    if (!city) {
      toast.error('Please fill your city');
      return;
    }

    if (!postalCode) {
      toast.error('Please fill your postal code');
      return;
    }

    if (!streetAddress) {
      toast.error('Please fill your street address');
      return;
    }

    if (!country) {
      toast.error('Please fill your country');
      return;
    }

    if (cartProducts.length === 0) {
      toast.error('Please add products to your cart');
      return;
    } else {
    setIsSuccess(true);
    clearCart();
    toast.success('Order placed successfully!');
    }
  }

  let subTotal = 0;
  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    subTotal += price;
  }

  let shipping = 0;
  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.costOfShipping || 0;
    shipping += price;
  }

  const tax = (subTotal + shipping)*0.13;
  const total = subTotal + shipping + tax;

  if (isSuccess) {
    return (
      <>
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }

  return (
    <>
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!products?.length && (
              <div>Your cart is empty</div>
            )}
            {products?.length > 0 && (
              <StyledTable>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={index}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          <img src={product.image} alt=""/>
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>
                      <td>
                        <Button
                          onClick={() => lessOfThisProduct(product._id)}
                        >
                          -
                        </Button>
                        <QuantityLabel>
                          1
                        </QuantityLabel>
                        <Button
                          onClick={() => moreOfThisProduct(product._id)}>
                          +
                        </Button>
                      </td>
                      <td>
                        ${product.price}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td>Subtotal</td>
                    <td>${subTotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Shipping</td>
                    <td>${shipping.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>Tax</td>
                    <td>${tax.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td><strong>Total</strong></td>
                    <td><strong>${total.toFixed(2)}</strong></td>
                  </tr>
                </tbody>
              </StyledTable>
            )}
          </Box>
          {!!cartProducts?.length && (
            <Box>
              <h2>Order information</h2>
              <StyledInput type="text"
                     placeholder="Name"
                     value={name}
                     name="name"
                     onChange={ev => setName(ev.target.value)} />
              <StyledInput type="text"
                placeholder="Email"
                value={email}
                name="email"
                onChange={ev => setEmail(ev.target.value)}/>
              <CityHolder>
                <StyledInput type="text"
                  placeholder="City"
                  value={city}
                  name="city"
                  onChange={ev => setCity(ev.target.value)}/>
                <StyledInput type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    name="postalCode"
                    onChange={ev => setPostalCode(ev.target.value)}/>
              </CityHolder>
              <StyledInput type="text"
                    placeholder="Street Address"
                    value={streetAddress}
                    name="streetAddress"
                    onChange={ev => setStreetAddress(ev.target.value)}/>
              <StyledInput type="text"
                    placeholder="Country"
                    value={country}
                    name="country"
                    onChange={ev => setCountry(ev.target.value)}/>
              <Button black block
                    onClick={()=> goToPayment()}
                >
                Continue to payment
              </Button>
            </Box>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}