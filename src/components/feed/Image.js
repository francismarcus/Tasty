import React from "react";
import {
  Description,
  Img,
  ImgMeta,
  ImgContent,
  ImgContainer
} from "components/feed/Image.styles";

export default function Image({ image }) {
  return (
    <ImgContainer>
      <Img src={image.source} />
      <ImgMeta>
        <ImgContent>
          <Description> {image.description} </Description>
        </ImgContent>
      </ImgMeta>
    </ImgContainer>
  );
}
