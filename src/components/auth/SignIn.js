import React from 'react'
import useInput from '@marcusfrancis/useinput';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { login } from 'actions';

const Container = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 0px auto;
  margin-top: 50px;
  text-align: center;
`;

const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: left;
  }
`;

const SignIn = (props) => {
    const [email, changeEmail, resetEmail] = useInput('');
    const [password, changePassword, resetPassword] = useInput('');
    
    const handleSubmit = event => {
        event.preventDefault();
        props.login(email, password);
        resetEmail();
        resetPassword();
    }

    
    return (
        <Container>
            <form>
            <Input
          type="text"
          placeholder="email"
          value={email}
          onChange={changeEmail}
        />
        <Input
          type="text"
          placeholder="password"
          value={password}
          onChange={changePassword}
        />
        <button onClick={handleSubmit}> Submit</button>
            </form>
        </Container>
    )
}

const mapDispatchToProps = dispatch => {
    return {
      login: (email, password) => dispatch(login(email, password))
    }
  }
  
  export default connect(null, mapDispatchToProps)(SignIn)