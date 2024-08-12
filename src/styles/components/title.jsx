import styled from "styled-components";

export const Title = styled.h1`
  font-size: ${(props) =>
    props.fontSize || "6rem"} !important; /* Adjust the size to your liking */
  background: linear-gradient(
    90deg,
    var(--begin),
    var(--primary-lighter),
    var(--primary-darker),
    var(--primary),
    var(--primary-darker),
    var(--primary-lighter),
    var(--begin)
  ); /* Example gradient */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  padding: ${(props) => props.padding || "2rem"};
  margin: ${(props) => props.margin || "2rem 0 -5rem 0"};
  text-transform: ${(props) => props.textTransform};

  @media (max-width: 900px) {
    font-size: 4rem;
  }

  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;
