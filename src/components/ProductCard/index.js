'use client'
import {useContext} from "react";

import {Button} from "@/components/Buttons";

import { CartContext } from "@/context/CartContext";

import {WhiteBox, ProductInfoBox, Title, PriceRow, Price, ProductWrapper} from "./style";

export default function ProductCard({_id,title,alt,price,image}) {
  const {addProduct} = useContext(CartContext);
  const url = '/products/'+_id;
  return (
    <ProductWrapper>
      <WhiteBox href={url}>
        <div>
          <img src={image} alt={alt}/>
        </div>
      </WhiteBox>
      <ProductInfoBox>
        <Title href={url}>{title}</Title>
        <PriceRow>
          <Price>
            ${price}
          </Price>
          <Button block onClick={() => addProduct(_id)} primary outline>
            Add to cart 
          </Button>
        </PriceRow>
      </ProductInfoBox>
    </ProductWrapper>
  );
}