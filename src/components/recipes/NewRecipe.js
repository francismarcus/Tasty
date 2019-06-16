import React from "react";
import { connect } from "react-redux";
import { createRecipe } from "actions";
import useInput from "@marcusfrancis/useinput";
import useArray from "@marcusfrancis/usearray";
import { Redirect } from 'react-router-dom'

import {
  Container,
  Input,
  ContentDiv,
  LeftDiv,
  UL,
  OL,
  CenterDiv,
  Form,
  Text,
  ImageWrapper,
  ImgContainer,
  Img,
  GridTemplate,
  SmallInput
} from "components/recipes/NewRecipe.styles";

function NewRecipe(props) {
  const ingredients = useArray([]);
  const [ingredient, updateIngredient, resetIngredient] = useInput("");

  const instructions = useArray([]);
  const [instruction, updateInstruction, resetInstruction] = useInput("");
  const [description, updateDescription] = useInput("");
  const [source, updateSource] = useInput("");

  const handleIngredientSubmit = event => {
    event.preventDefault();
    ingredients.add(ingredient);
    resetIngredient();
  };

  const handleInstructionSubmit = event => {
    event.preventDefault();
    instructions.add(instruction);
    resetInstruction();
  };

  const addRecipe = event => {
    let Ingredients = ingredients.value;
    let Instructions = instructions.value;
    props.createRecipe({ Ingredients, Instructions, description, source });
    props.history.push('/')
  };

//  if (!props.auth.uid) return <Redirect to='/signin' />

  return (
    <Container>
      <ImageWrapper>
        <ImgContainer>
          <Img src={source} />
        </ImgContainer>
      </ImageWrapper>

      <GridTemplate>



        <Form onSubmit={handleIngredientSubmit}>
          <Input value={ingredient} onChange={updateIngredient} />
          <button type="submit" onClick={handleIngredientSubmit}>
            Add Ingredient
          </button>
        </Form>

        <SmallInput placeholder="Source"
          value={source}
          onChange={updateSource} />

        <Form onSubmit={handleInstructionSubmit}>
        <Input value={instruction} onChange={updateInstruction} />
        <button type="submit" onClick={handleInstructionSubmit}>
          Add Instruction
        </button>
      </Form>

      <SmallInput
        placeholder="Description"
        value={description}
        onChange={updateDescription} />

      </GridTemplate>

      <ContentDiv>
        <LeftDiv>
          <ul>
            {" "}
            {ingredients.value.map((ingredient, index) => (
              <li key={index}>
                {ingredient}
                <button
                  type="button"
                  onClick={() => ingredients.removeIndex(index)}
                >
                  Delete
                </button>
              </li>
            ))}{" "}
          </ul>
        </LeftDiv>

        <CenterDiv>
          <ol>
            {" "}
            {instructions.value.map((instruction, index) => (
              <li key={index}>
                {instruction}
                <button
                  type="button"
                  onClick={() => instructions.removeIndex(index)}
                >
                  Delete
                </button>
              </li>
            ))}{" "}
          </ol>
        </CenterDiv>
      </ContentDiv>



      <button type="submit" onClick={addRecipe}>
        Add Recipe
      </button>
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    createRecipe: recipe => dispatch(createRecipe(recipe))
  };
};

const mapStateToProps = state => {
  return { auth: state.firebase.auth }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewRecipe);
