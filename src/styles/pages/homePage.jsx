import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  flex-wrap: wrap; /* Wrap content if needed */
  width: 100%;
  height: fit-content;
  margin: 0 auto; /* Center the Row within its container */
`;

export const SectionWrapper = styled.div`
  flex: 1; /* Make sure each section takes up equal space */
  padding: 10px; /* Optional: Add some padding for spacing */
  max-width: 600px; /* Optional: Limit the max width for better centering */
  width: 100%; /* Ensure it takes full width */
  box-sizing: border-box; /* Include padding in the width */
`;
