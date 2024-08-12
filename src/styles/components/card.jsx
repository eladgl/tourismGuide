import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  margin: 1rem;
  margin-bottom: 20px;
  padding: 2rem;
  font-size: 16px;
  border: 1px solid var(--primary);
  border-radius: 20px;
  box-shadow: 0px 2px 4px 1px var(--primary);
  &:hover {
    transform: scale(1.02);
  }
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const ProductPhoto = styled.img`
  width: 200px; /* Adjust as needed */
  height: auto; /* Maintain aspect ratio */
  margin-right: 20px;
`;

export const ProductDetails = styled.div`
  font-size: 16px;
  flex-direction: ${(props) => (props.direction ? "column" : "row")};
  max-width: 500px;
  width: 100%;
`;
