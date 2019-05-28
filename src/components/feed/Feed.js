import React from 'react';
import { Container, ImageWrapper } from 'components/feed/Feed.styles';
import Image from './Image.js';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { firestore } from 'Fire'
   
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
    recipes: state.firestore.data.recipes ? state.firestore.ordered.recipes : [],
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' }
   ])
)(Feed);

