"use client";
import {useContext, useState} from "react";
// import {CartContext} from "@/components/CartContext";
import BarsIcon from "@/components/icons/BarsIcon";
import Center from "../Center";
import {Header, DivWrapper, Logo, Nav, NavLink, NavButton} from "./style";

export default function Navbar() {
  // const {cartProducts} = useContext(CartContext);
  const [mobilenavactive,setmobilenavactive] = useState(false);
  return (
    <Header>
      <Center>
        <DivWrapper>
          <Logo href={'/'}>E-commerce</Logo>
          <Nav mobilenavactive={mobilenavactive ? value : undefined}>
            <NavLink href={'/products'}>All products</NavLink>
            <NavLink href={'/categories'}>Categories</NavLink>
            <NavLink href={'/account'}>Account</NavLink>
            <NavLink href={'/cart'}>Cart(0)</NavLink>
          </Nav>
          <NavButton onClick={() => setmobilenavactive(prev => !prev)}>
            <BarsIcon />
          </NavButton>
        </DivWrapper>
      </Center>
    </Header>
  );
}