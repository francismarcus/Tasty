import React from "react";
import {
  Nav,
  NavHeader,
  NavLeft,
  NavCenter,
  NavRight,
  Input,
  MenuLink,
  StyledLink,
  Img
} from "components/layout/Navbar.styles";
import Logo from 'components/layout/instagram.svg';

export default function Navbar() {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <StyledLink to='/'>
            <Img src={Logo} /> | Tastygram 
          </StyledLink>
        </NavLeft>
        <NavCenter />
        <NavRight>
          <MenuLink href="#">signin</MenuLink>
          <MenuLink href="#">signup</MenuLink>
        </NavRight>
      </NavHeader>
    </Nav>
  );
}
