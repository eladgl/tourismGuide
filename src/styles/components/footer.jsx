import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #121212;
  margin-top: 1.63rem;
  width: 100%;
  height: auto;
  flex-shrink: 0;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
`;

export const FooterColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`;

export const FooterColumn = styled.div`
  margin: 20px;
  flex: 1;
  min-width: 200px;
  font-size: 14px;

  h3 {
    margin-bottom: 10px;
  }

  p,
  a {
    margin: 5px 0;
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export const CopyRight = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #333;
  color: white;
`;
