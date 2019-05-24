import React from 'react'
import useInput from '@marcusfrancis/useinput';
import useArray from '@marcusfrancis/usearray';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 0px auto;
  margin-top: 50px;
  text-align: center;
`;

const Input = styled.input`
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

const UL = styled.ul`
padding-bottom: 20px;
font-size: 14px;
`
const OL = styled.ol`
font-size: 14px;
`
const CenterDiv = styled.div`
  width: 61.7%;
  text-align: left;
  border: solid 1px #dbdbdb;
border-radius: 3px;
`;
const Form = styled.form`
margin-bottom: 25px;
`
const Text = styled.textarea`
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

export default function NewRecipe() {
    const ingredients = useArray([]);
    const [ingredient, updateIngredient, resetIngredient] = useInput('');

    const instructions = useArray([]);
    const [instruction, updateInstruction, resetInstruction] = useInput('');

    const [state, newState] = React.useState('');

    const handleSubmit = event => {
        event.preventDefault();
        ingredients.add(ingredient);
        resetIngredient();
    };

    const handleText = event => {
        event.preventDefault();
        instructions.add(instruction);
        resetInstruction();
    };

    const addRecipe = event => {
        let Ingredients = ingredients.value
        let Instructions = instructions.value;
            newState({...state, Ingredients, Instructions })
    
        console.log(state);
        console.log(state.Ingredients)
    }

    return (
        <Container>
          <Form onSubmit={handleSubmit}>
            <Input value={ingredient} onChange={updateIngredient} />
            <button type="submit" onClick={handleSubmit}>
              Add Ingridient
            </button>
          </Form>
          <ContentDiv>
            <LeftDiv>
              <UL>
                {ingredients.value.map((ingredient, index) => (
                  <li key={index}>
                    {ingredient}
                    <button
                      type="button"
                      onClick={() => ingredients.removeIndex(index)}>
                      Delete
                    </button>
                  </li>
                ))}
              </UL>
            </LeftDiv>
            <CenterDiv>
              <Text value={instruction} onChange={updateInstruction} />
              <button type="submit" onClick={handleText}>
                Add Instructions
              </button>
              <OL>
                {instructions.value.map((instruction, index) => (
                  <li key={index}>
                    {instruction}
                    <button
                      type="button"
                      onClick={() => instructions.removeIndex(index)}>
                      Delete
                    </button>
                  </li>
                ))}
              </OL>
            </CenterDiv>
          </ContentDiv>
          <button type="submit" onClick={addRecipe}>
              Add Recipe
            </button>
        </Container>
      );
      
}
