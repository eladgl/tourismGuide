import styled from "styled-components";

export const AppWrapper = styled.div`
  width: 100%;
  background: var(--background);
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
