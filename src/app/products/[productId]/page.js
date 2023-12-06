'use client'
import {useContext} from "react";

import Center from "@/components/Center";
import Navbar from "@/components/Navbar";
import ProductImages from "@/components/ProductImages";
import {Button} from "@/components/Buttons";
import CartIcon from "@/components/icons/CartIcon";

import {CartContext} from "@/context/CartContext";

import { H2, ColWrapper, PriceRow, Price, WhiteBox} from './style'

import products from "@/libs/products.json"


export default function ProductPage({params}) {

  const {productId} = params
  const product = products.find(product => product._id === productId);
  const {addProduct} = useContext(CartContext);
  return (
    <>
      <Center>
        <ColWrapper>
          <WhiteBox>
            <ProductImages image={product.image} />
          </WhiteBox>
          <div>
            <H2>{product.title}</H2>
            <p>{product.description}</p>
            <PriceRow>
              <div>
                <Price>${product.price}</Price>
              </div>
              <div>
                <Button primary onClick={() => addProduct(product._id)}>
                  <CartIcon />Add to cart
                </Button>
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
}
