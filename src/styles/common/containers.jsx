import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledColumn = styled(Column)`
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
  text-align: ${(props) => props.textAlign};
`;

export const StyledRow = styled(Row)`
  align-items: ${(props) => props.alignItems};
  gap: ${(props) => props.gap};
  margin: ${(props) => props.margin};
`;

export const ProductsSection = styled.div`
  flex: 1;
`;
