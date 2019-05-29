import React from "react";
import {
  Description,
  Img,
  ImgMeta,
  ImgContent,
  ImgContainer
} from "components/feed/Image.styles";

import { StyledLink } from 'components/layout/Navbar.styles';

export default function Image({ item }) {
  return (
    
    <ImgContainer>
    <StyledLink to={{
      pathname: '/recipe/ + item.id', 
      state: {
        item
            }}}  key={item.id}>
      <Img src={item.source} />
      <ImgMeta>
        <ImgContent>
          <Description> {item.description} </Description>
        </ImgContent>
      </ImgMeta>
      </StyledLink>
    </ImgContainer>
    
  );
}
