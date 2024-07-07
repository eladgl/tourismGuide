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
  justify-content: space-around;
  align-items: flex-start;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
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
      <FooterColumn>
        <h3>PT. Travel Everyday Indonesia</h3>
        <p>Grand Floor Zaidin L-Walk, Jl. Majlu Jaya No. 2, Daerah Istimewa Yogyakarta, Indonesia 55281</p>
        <p><a href="#">About</a> | <a href="#">Privacy policy</a></p>
        <p><a href="#">Terms & Conditions</a> | <a href="#">Contact</a></p>
      </FooterColumn>
      <FooterColumn>
        <h3>Informations</h3>
        <p><a href="#">How to register as a user</a></p>
        <p><a href="#">Guide to creating travel review</a></p>
        <p><a href="#">Tutorial for making culinary reviews</a></p>
      </FooterColumn>
      <CopyRight>
        <Lable className="footer-copyright">
          <span>&copy;</span> 2024 Group 13 Braude
        </Lable>
      </CopyRight>
    </FooterWrapper>
  );
};

export default Footer;

