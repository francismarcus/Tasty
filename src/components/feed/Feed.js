import React from 'react';
import { Container, ImageWrapper } from 'components/feed/Feed.styles';
import Data from 'components/feed/Data';
import Image from './Image.js';

export default function Feed() {
  return (
    <Container>
      <ImageWrapper>
        {Data.map(item => (
          <Image image={item} key={item.id} />
        ))}
      </ImageWrapper>
    </Container>
  );
}
