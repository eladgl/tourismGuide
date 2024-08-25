import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around; /* Spread out the content */
  align-items: flex-start; /* Align items to the start to prevent overlap */
  flex-wrap: wrap; /* Wrap content if needed */
  width: 80%;
  height: fit-content;
  margin: 0 auto; /* Center the Row within its container */
  gap: 2rem; /* Add gap to ensure spacing between sections */

  @media (min-width: 1601px) {
    flex-direction: row;
  }

  @media (max-width: 1600px) and (orientation: landscape) {
    flex-direction: column;
  }
`;

export const SectionWrapper = styled.div`
  flex: 1; /* Make sure each section takes up equal space */
  padding: 10px; /* Optional: Add some padding for spacing */
  max-width: 600px; /* Optional: Limit the max width for better centering */
  width: 100%; /* Ensure it takes full width */
  gap: 4rem;
  box-sizing: border-box; /* Include padding in the width */
`;
