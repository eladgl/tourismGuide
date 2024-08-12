import styled from "styled-components";

export const StyledImage = styled.img`
  background: url(${({ src }) => src}) lightgray 50% / cover no-repeat;
`;
