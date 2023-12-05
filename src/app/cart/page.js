'use client'

import {useContext, useEffect, useState} from "react";

import Navbar from "@/components/Navbar";
import Center from "@/components/Center";
import {Button} from "@/components/Buttons"
import productsDB from "@/libs/products.json";

import { CartContext } from "@/context/CartContext";


import {ColumnsWrapper, Box, ProductInfoCell, ProductImageBox, QuantityLabel, CityHolder, StyledTable, StyledInput} from "./style";

export default function CartPage() {
  const {cartProducts,addProduct,removeProduct,clearCart} = useContext(CartContext);

  const [products,setProducts] = useState([]);
  const [listOfProducts,setListOfProducts] = useState([]);
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [city,setCity] = useState('');
  const [postalCode,setPostalCode] = useState('');
  const [streetAddress,setStreetAddress] = useState('');
  const [country,setCountry] = useState('');
  const [isSuccess,setIsSuccess] = useState(false);

  useEffect(() => {
    if (cartProducts.length > 0) {
        cartProducts.map((productId) => {
            const product = productsDB.find((product) => product._id === productId);
            setProducts((prev) => [...prev, product]);
            })


    } else {
      setProducts([]);;
    }

  }, [cartProducts]);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }
    if (window?.location.href.includes('success')) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  // error no hay esta ruta de checkout
//   async function goToPayment() {
//     const response = await axios.post('/api/checkout', {
//       name,email,city,postalCode,streetAddress,country,
//       cartProducts,
//     });
//     if (response.data.url) {
//       window.location = response.data.url;
//     }
//   }

  let total = 0;
  for (const productId of cartProducts) {
    const price = products.find(p => p._id === productId)?.price || 0;
    total += price;
  }

  useEffect(() => {
  const newList = Array.from(new Set(products.map(obj => obj._id))).map(_id => {
    return products.find(obj => obj._id === _id);
  })

  setListOfProducts(newList);
  console.log(listOfProducts)
    }, [products])

  if (isSuccess) {
    return (
      <>
        <Navbar />
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
      <Navbar />
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
                          onClick={() => lessOfThisProduct(product._id)}>-</Button>
                        <QuantityLabel>
                          {/* {cartProducts.filter(id => id === product._id).length} */}
                          1
                        </QuantityLabel>
                        {/* <Button
                          onClick={() => moreOfThisProduct(product._id)}>+</Button> */}
                      </td>
                      <td>
                        ${product.price}
                        {/* ${cartProducts.filter(id => id === product._id).length * product.price} */}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${total}</td>
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
                    //   onClick={goToPayment}
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