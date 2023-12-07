"use client";
import {useContext, useState} from "react";

import BarsIcon from "@/components/icons/BarsIcon";
import Center from "../Center";

import { CartContext } from "@/context/CartContext";

import {Header, DivWrapper, Logo, Nav, NavLink, NavButton, SubNavIcon, SubNav, SubNavWrapper, SubNavLink} from "./style";
import ChevronDown from "../icons/ChevronDown";

import products from "@/store/products.json"

export default function Navbar() {
  const {cartProducts} = useContext(CartContext);
  const [mobileActive,setMobileActive] = useState(false);
  const [subNavActive,setSubNavActive] = useState(false);
  
  const listCategoriesUnique = [...new Set(products.map(product => product.category))];

  return (
    <Header>
      <Center>
        <DivWrapper>
          <Logo href={'/'}>E-commerce</Logo>
          <Nav mobileActive={mobileActive}>
            <NavLink 
              href={'/products'} 
              onClick={() => setMobileActive(false)}
            >
              All products
            </NavLink>
            <SubNav 
              onClick={() => {
                setSubNavActive(prev => !prev)}
            }
            >
              Categories
              <SubNavIcon>
                <ChevronDown/> 
              </SubNavIcon>
              <SubNavWrapper subNavActive={subNavActive}>
                { listCategoriesUnique.map((category, index) => 
                    <SubNavLink key={index} href={`/categories/${category}`} onClick={() => setMobileActive(false)}> {category} </SubNavLink>)
                }
              </SubNavWrapper>
            </SubNav>
            <NavLink 
              href={'/cart'} 
              onClick={() => setMobileActive(false)}
            >
              Cart({cartProducts.length})
            </NavLink>
          </Nav>
          <NavButton 
            onClick={() => setMobileActive(prev => !prev)}
          >
            <BarsIcon />
          </NavButton>
        </DivWrapper>
      </Center>
    </Header>
  );
}