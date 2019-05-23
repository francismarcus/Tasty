import React from 'react'
import styled from 'styled-components';

// image styles

const Container = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 0px auto;
  margin-top: 50px;
`;
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

// Content

const ContentDiv = styled.div`
  max-width: 1010px;
  padding: 26px 0px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;

const LeftDiv = styled.div`
  width: 38.3%;
  text-align: left;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
`;

const CenterDiv = styled.div`
  width: 61.7%;
  text-align: left;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
`;

const url = 'https://scontent-arn2-1.cdninstagram.com/vp/96f3908264d58b31f2524ec5b19c0ec6/5D5CF535/t51.2885-15/e35/27579097_963359183815106_5284594741013381120_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com'
   

export default function RecipeDetails() {
    return (
        <div>
            <Container>
                <ImageWrapper>
                <ImgContainer>
                <Img src={url} />
                </ImgContainer>
                <p> Title of the recipe </p>
                </ImageWrapper>  
                <ContentDiv>
                <LeftDiv>
                    Ingridient list
                </LeftDiv>  
                <CenterDiv>
                    Instructions
                </CenterDiv>
                </ContentDiv>
            </Container>
        </div>
    )
}
