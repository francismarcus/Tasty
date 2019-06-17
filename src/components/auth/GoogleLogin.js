import styled from 'styled-components';
import React from 'react';
import LoginButton from './Google.png';
import { auth, GoogleProvider } from 'Fire';
import {connect} from 'react-redux'
import { setUserAction } from 'actions';
import { Redirect } from 'react-router-dom'

const Container = styled.div`
  max-width: 1010px;
  width: 100%;
  height: 60vh
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const GoogleLogin = props => {

  const login = () => {
    auth()
      .signInWithPopup(GoogleProvider)
      .then(result => {
        const user = result.user;
        props.setUserAction(user);
      });
  };

  if (props.auth.uid) return <Redirect to="/" />;

  return (
    <>
      <Container>
        <a onClick={login}>
          <img src={LoginButton} height="60vh" className="login" />
        </a>
      </Container>
    </>
  );
};



const mapStateToProps = state => {
  return { auth: state.auth }
}

export default connect(mapStateToProps, { setUserAction })(GoogleLogin);
