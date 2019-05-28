import React from "react";
import {
  Description,
  Img,
  ImgMeta,
  ImgContent,
  ImgContainer
} from "components/feed/Image.styles";

import { StyledLink } from 'components/layout/Navbar.styles';

export default function Image({ image }) {
  return (
    
    <ImgContainer>
    <StyledLink to={'/recipe/' + image.id} key={image.id}>
      <Img src={image.source} />
      <ImgMeta>
        <ImgContent>
          <Description> {image.description} </Description>
        </ImgContent>
      </ImgMeta>
      </StyledLink>
    </ImgContainer>
    
  );
}
