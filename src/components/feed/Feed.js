import React from 'react';
import { Container, ImageWrapper } from 'components/feed/Feed.styles';
import Image from './Image.js';
import { connect } from 'react-redux';

const Feed = ({ recipes }) => {
  return (
    <Container>
      <ImageWrapper>
        {recipes.map(item => (
          <Image image={item} key={item.id} />
        ))}
      </ImageWrapper>
    </Container>
  );
}

const mapStateToProps = state => {
  return { 
    recipes: state.recipe.recipes
  }
}

export default connect(mapStateToProps)(Feed);
