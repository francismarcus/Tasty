import React from 'react'
import useInput from '@marcusfrancis/useinput';
import useArray from '@marcusfrancis/usearray';
import { connect } from 'react-redux';
import { createRecipe } from 'actions';

import {
  Container,
  Input,
  ContentDiv,
  LeftDiv,
  UL,
  OL,
  CenterDiv,
  Form,
  Text
} from 'components/recipes/NewRecipe.styles';


function NewRecipe(props) {
    const ingredients = useArray([]);
    const [ingredient, updateIngredient, resetIngredient] = useInput('');

    const instructions = useArray([]);
    const [instruction, updateInstruction, resetInstruction] = useInput('');
    const [description, updateDescription] = useInput('');

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
            props.createRecipe({Ingredients, Instructions, description});
    }


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
          <Input placeholder="Description" value={description} onChange={updateDescription} />
          <button type="submit" onClick={addRecipe}>
              Add Recipe
            </button>
        </Container>
      );
      
}

const mapDispatchToProps = dispatch => {
  return {
    createRecipe: (recipe) => dispatch(createRecipe(recipe))
  }
}

export default connect(null, mapDispatchToProps)(NewRecipe)