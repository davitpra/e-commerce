'use client'
import {BigImageWrapper, BigImage} from "./style";

export default function ProductImages({image}) {
  return (
    <>
      <BigImageWrapper>
        <BigImage src={image} />
      </BigImageWrapper>
    </>
  );
}