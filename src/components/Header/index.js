"use client";
import {useContext, useState} from "react";
// import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/BarsIcon";
import {StyleHeader, Center, Wrapper, Logo, Nav, NavLink, NavButton} from "./style";

export default function Header() {
  // const {cartProducts} = useContext(CartContext);
  const [mobileNavActive,setMobileNavActive] = useState(false);
  return (
    <StyleHeader>
      <Center>
        <Wrapper>
          <Logo href={'/'}>E-commerce</Logo>
          <Nav mobileNavActive={mobileNavActive}>
            <NavLink href={'/'}>Home</NavLink>
            <NavLink href={'/products'}>All products</NavLink>
            <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}>Cart </NavLink>
          </Nav>
          <NavButton onClick={() => setMobileNavActive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyleHeader>
  );
}