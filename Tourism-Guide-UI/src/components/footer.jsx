import React from "react";
import styled from "styled-components";
import Lable from "./label";

const FooterWrapper = styled.div`
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

const FooterColumnsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
`;

const FooterColumn = styled.div`
  margin: 20px;
  flex: 1;
  min-width: 200px;

  h3 {
    margin-bottom: 10px;
  }

  p, a {
    margin: 5px 0;
    color: white;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }
`;

const CopyRight = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #333;
  color: white;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterColumnsWrapper>
        <FooterColumn>
          <h3>Tourism Israel</h3>
          <p>123 Tourism St, Tel Aviv, Israel 67890</p>
          <p><a href="#">About</a> | <a href="#">Privacy Policy</a></p>
          <p><a href="#">Terms & Conditions</a> | <a href="#">Contact</a></p>
        </FooterColumn>
        <FooterColumn>
          <h3>Information</h3>
          <p><a href="#">How to register as a user</a></p>
          <p><a href="#">Guide to creating travel reviews</a></p>
          <p><a href="#">Tutorial for making culinary reviews</a></p>
        </FooterColumn>
      </FooterColumnsWrapper>
      <CopyRight>
        <Lable className="footer-copyright">
          <span>&copy;</span> 2024 Group 13 Braude
        </Lable>
      </CopyRight>
    </FooterWrapper>
  );
};

export default Footer;
