"use client";
import {useContext, useState} from "react";

import BarsIcon from "@/components/icons/BarsIcon";
import Center from "../Center";

import { CartContext } from "@/context/CartContext";

import {Header, DivWrapper, Logo, Nav, NavLink, NavButton} from "./style";

export default function Navbar() {
  const {cartProducts} = useContext(CartContext);
  const [mobileActive,setMobileActive] = useState(false);
  return (
    <Header>
      <Center>
        <DivWrapper>
          <Logo href={'/'}>E-commerce</Logo>
          <Nav mobileActive={mobileActive}>
            <NavLink href={'/products'}>All products</NavLink>
            <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}>Cart({cartProducts.length})</NavLink>
          </Nav>
          <NavButton onClick={() => setMobileActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </DivWrapper>
      </Center>
    </Header>
  );
}