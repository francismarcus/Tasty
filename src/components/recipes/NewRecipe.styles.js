import styled from 'styled-components';

const Container = styled.div `
  max-width: 1010px;
  width: 100%;
  margin: 0px auto;
  margin-top: 50px;
  text-align: center;
`;

const GridTemplate = styled.div`
display: grid;
grid-template-columns: repeat(2, minmax(250px, 1fr));
grid-gap: 25px;
justify-content: space-evenly;
`
const Input = styled.input `
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;
  height: 100%;
  width: 100%;

  &:active,
  &:focus {
    text-align: left;
  }
`;

const SmallInput = styled.input `
  border: solid 1px #dbdbdb;
  width: 50%;
  height: 50%;
  border-radius: 3px;
  color: #262626;
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
  display: grid;
  grid-template-columns: repeat(2, minmax(250px, 1fr));
  grid-gap: 50px;
  justify-content: space-evenly;
`;

const LeftDiv = styled.div `
  width: 100%;
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
  width: 100%%;
  text-align: left;
  border: solid 1px #dbdbdb;
border-radius: 3px;
`;
const Form = styled.form `
margin-bottom: 25px;
height: 3vh;
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

  const ImageWrapper = styled.div`
  display: inline;
  text-align: center;
`;

const ImgContainer = styled.div`
  flex-basis: 100%;
  flex-basis: calc(50% - 20px);
  margin: 10px;
  cursor: pointer;
  transition: 0.5s all ease-in;
`;

const Img = styled.img`
  cursor: pointer;
  width: 50vh;
  max-height: 50vh;
  object-fit: cover;
`;


export {
    GridTemplate,
    Container,
    Input,
    SmallInput,
    ContentDiv,
    LeftDiv,
    UL,
    OL,
    CenterDiv,
    Form,
    Text,
    ImageWrapper,
    ImgContainer,
    Img
}
