import styled from "styled-components";

import Lable from "./label";

const FooterWrapper = styled.div`
  background-color: #121212;
  margin-top: 1.63rem;
  width: 100%;
  height: 33.75rem;
  flex-shrink: 0;
`;

const CopyRight = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0.5rem;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <CopyRight>
        <Lable className="footer-copyright">
          <span>&copy;</span> 2024 Group 13 Braude
        </Lable>
      </CopyRight>
    </FooterWrapper>
  );
};

export default Footer;
