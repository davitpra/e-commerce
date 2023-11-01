'use client'

import {Button, ButtonLink} from "@/components/Buttons";
import CartIcon from "@/components/icons/CartIcon";
// import {CartContext} from "@/components/CartContext";
import Center from "@/components/Center";
import {useContext} from "react";
import {DivBackGround, ColumnsWrapper, Column, H1, P, ButtonsWrapper} from "./style";

const product = {
  title: "The best product",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor. Nunc euismod, enim vitae tincidunt ultricies, metus ipsum tincidunt sapien, eget maximus nisi massa in neque. Donec eget odio eget erat ultricies ultrices. Sed euismod, nisl quis aliquam tincidunt, quam nisl vestibulum diam, vel aliquam nisl urna eget libero. Sed euismod, nisl quis aliquam tincidunt, quam nisl vestibulum diam, vel aliquam nisl urna eget libero.",
  _id: "1"
}

// DEBE RECIBIR UN PRODUCTO
export default function Featured() {
  // const {addProduct} = useContext(CartContext);
  // function addFeaturedToCart() {
  //   addProduct(product._id);
  // }
  return (
    <DivBackGround>
      <Center>
        <ColumnsWrapper>
          <Column>
            <div>
              <H1>{product.title}</H1>
              <P>{product.description}</P>
              <ButtonsWrapper>
                <ButtonLink href={'/product/'+product._id} outline={1} white={1}>Read more</ButtonLink>
                {/* onClick={addFeaturedToCart} */}
                <Button white >
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