import styled from "styled-components";
import Link from "next/link";

export const Header = styled.header`
  background-color: #222;
`
export const DivWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`
export const Logo = styled(Link)`
  color:#fff;
  text-decoration:none;
  position: relative;
  z-index: 3;
`
export const Nav = styled.nav`
  ${props => props.mobileActive ? `
    display: block;
  ` : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`

export const NavLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`
export const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border:0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const SubNav = styled.ul`
  display: block;
  color:#aaa;
  text-decoration:none;
  padding: 10px 0;
  margin: 0;
  @media screen and (min-width: 768px) {
    padding:0;
  }
`
export const SubNavIcon = styled.button`
  background-color: transparent;
  width: 22px;
  height: 20px;
  border:0;
  color: white;
`
export const SubNavWrapper = styled.div`
  ${props => props.subNavActive ? `
    display: flex;
  ` : `
    display: none;
  `}
  position: absolute;
  top: 65px;
  padding: 10px 10px;
  background-color: #222;
  border-radius: 0 0 5px 5px;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 768px) {
    position:static;
    padding: 10px 20px;
  }
`
export const SubNavLink = styled(Link)`
  display: block;
  color:#aaa;
  text-decoration:none;
`

