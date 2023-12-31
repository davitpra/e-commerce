import styled from "styled-components";
import Link from "next/link";

export const ProductWrapper = styled.div`
  display:flex;
  flex-direction:column;
`;

export const WhiteBox = styled(Link)`
  background-color: #fff;
  padding: 20px;
  height: 120px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  img{
    max-width: 100%;
    max-height: 80px;
  }
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: normal;
  font-size:.9rem;
  color:inherit;
  text-decoration:none;
  min-height: 45px;
  margin:0;
`;
export const ProductInfoBox = styled.div`
  margin-top: 5px;
`;

export const PriceRow = styled.div`
  display: block;
  @media screen and (min-width: 768px) {
    display: flex;
    gap: 5px;
  }
  align-items: center;
  justify-content:space-between;
  margin-top:5px;
`;

export const Price = styled.div`
  font-size: 1rem;
  font-weight:400;
  text-align: right;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    font-weight:600;
    text-align: left;
  }
`;
