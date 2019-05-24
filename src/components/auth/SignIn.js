import React from 'react'
import useInput from '@marcusfrancis/useinput';
import styled from 'styled-components';

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

export default function SignIn() {
    return (
        <Container>
            <form>
                <Input />
                <Input />
            </form>
        </Container>
    )
}
