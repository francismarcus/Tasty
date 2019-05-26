import styled from 'styled-components';

const Container = styled.div `
  max-width: 1010px;
  width: 100%;
  margin: 0px auto;
  margin-top: 50px;
  text-align: center;
`;

const Input = styled.input `
  font-size: 12px;
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
const ContentDiv = styled.div `
  max-width: 1010px;
  padding: 26px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const LeftDiv = styled.div `
  width: 38.3%;
  text-align: left;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
`;

const UL = styled.ul `
padding-bottom: 20px;
font-size: 14px;
`
const OL = styled.ol `
font-size: 14px;
`
const CenterDiv = styled.div `
  width: 61.7%;
  text-align: left;
  border: solid 1px #dbdbdb;
border-radius: 3px;
`;
const Form = styled.form `
margin-bottom: 25px;
`
const Text = styled.textarea `
  font-size: 12px;
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
  background: #fafafa;`

export {
    Container,
    Input,
    ContentDiv,
    LeftDiv,
    UL,
    OL,
    CenterDiv,
    Form,
    Text
}