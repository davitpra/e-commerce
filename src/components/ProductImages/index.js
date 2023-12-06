'use client'
import {BigImageWrapper, BigImage, ImageButtons, ImageButton, Image} from "./style";

export default function ProductImages({image}) {
  return (
    <>
      <BigImageWrapper>
        <BigImage src={image} />
      </BigImageWrapper>
    </>
  );
}