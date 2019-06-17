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
import Logo from 'components/layout/hat.svg';
import plus from 'components/layout/plus.svg';

// TODO: Alter nav links on auth status
// TODO: Add profile icon and create a profile component
// <MenuLink href="#">signin</MenuLink>
// <MenuLink href="#">signup</MenuLink>
export default function Navbar() {
  return (
    <Nav>
      <NavHeader>
        <NavLeft>
          <StyledLink to='/'>
            <Img src={Logo} /> | Tasty
          </StyledLink>
        </NavLeft>
        <NavCenter />
        <NavRight>
          <StyledLink to='/new'>
            <Img src={plus} />
          </StyledLink>

        </NavRight>
      </NavHeader>
    </Nav>
  );
}
