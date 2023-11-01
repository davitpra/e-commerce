import styled from "styled-components";

const DivCenter = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

export default function Center({children}) {
  return (
    <DivCenter>{children}</DivCenter>
  );
}