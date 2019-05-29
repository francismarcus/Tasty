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
  margin: 0 0 0 0;

`;

const LeftDiv = styled.div`
  width: 38.3%;
  height: auto;
  text-align: left;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  margin: 0 0 0 0;

`;

const CenterDiv = styled.div`
  width: 61.7%;
  text-align: left;
  margin-top: 50px;
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


const RecipeDetails = props => {
  const item = props.location.state.item
  console.log(item)



  const renderInstructions = item.Instructions.map((i) => {
    return <li> {i} </li>
  })

  const renderIngredients =  item.Ingredients.map((i) => { 
    return <li> {i} </li>
  })
    return (
        <div>
            <Container>
                <ImageWrapper>
                <ImgContainer>
                <Img src={item.source} />
                </ImgContainer>
                <p> {item.description}</p>
                </ImageWrapper>  
                <ContentDiv>
                <LeftDiv>
                   
                <ul> {renderIngredients}</ul> 

                </LeftDiv>  
                <CenterDiv>
                    
                     <ol> {renderInstructions} </ol>
                    
                </CenterDiv>
                </ContentDiv>
            </Container>
        </div>
    )
}

export default RecipeDetails