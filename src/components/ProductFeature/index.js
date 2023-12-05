'use client'
import {useContext} from "react";

import {Button, ButtonLink} from "@/components/Buttons";
import CartIcon from "@/components/icons/CartIcon";
import Center from "@/components/Center";

import { CartContext } from "@/context/CartContext";

import {DivBackGround, ColumnsWrapper, Column, H1, P, ButtonsWrapper} from "./style";


export default function ProductFeature({product}) {
  const {addProduct} = useContext(CartContext);
  function addFeaturedToCart() {
    addProduct(product._id);
  }
  return (
    <DivBackGround>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <H1>{product.title}</H1>
              <P>{product.description}</P>
              <ButtonsWrapper>
                <ButtonLink href={'/product/'+product._id} outline={1} white={1}>
                  Read more
                </ButtonLink>
                <Button white={1} onClick ={addFeaturedToCart}>
                  <CartIcon />
                  Add to cart
                </Button>
              </ButtonsWrapper>
            </div>
          </Column>
          <Column>
            <img src="https://dawid-next-ecommerce.s3.amazonaws.com/1679151719649.png" alt=""/>
          </Column>
        </ColumnsWrapper>
      </Center>
    </DivBackGround>
  );
}