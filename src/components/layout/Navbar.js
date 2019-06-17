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
import { auth } from 'Fire';
import {connect} from 'react-redux'
import { setUserAction } from 'actions';


// TODO: Alter nav links on auth status
// TODO: Add profile icon and create a profile component
// <MenuLink href="#">signin</MenuLink>
// <MenuLink href="#">signup</MenuLink>
export function Navbar(props) {

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      if(user) {
        props.setUserAction(user);
      }
    })
  }, []);

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

const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { setUserAction })(Navbar);
