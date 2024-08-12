import styled from "styled-components";

import { Row } from "../common/containers";

export const Container = styled(Row)`
  justify-content: space-between;
  width: 80%;

  margin: 4rem;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const SectionWrapper = styled.div`
  flex: 1;
  padding: 1rem;
  margin: 1rem;
`;
