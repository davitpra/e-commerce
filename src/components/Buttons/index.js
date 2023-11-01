import styled from "styled-components";
import Link from "next/link";
import {ButtonStyle} from "./style";

export const StyledButton = styled.button`
  ${ButtonStyle}
`;

export function Button({children,...rest}) {
  return (
    <StyledButton {...rest}>{children}</StyledButton>
  );
}

const StyledLink = styled(Link)`
  ${ButtonStyle}
`;

export function ButtonLink(props) {
  return (
    <StyledLink {...props} />
  );
}