import React from "react";
import Lable from "./label";

import {
  FooterWrapper,
  FooterColumnsWrapper,
  FooterColumn,
  CopyRight,
} from "../styles/components/footer";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterColumnsWrapper>
        <FooterColumn>
          <p>Tourism Israel</p>
          <p>123 Tourism St, Tel Aviv, Israel 67890</p>
          <p>
            <a href="#">About</a> | <a href="#">Privacy Policy</a>
          </p>
          <p>
            <a href="#">Terms & Conditions</a> | <a href="#">Contact</a>
          </p>
        </FooterColumn>
        <FooterColumn>
          <p>Information</p>
          <p>
            <a href="#">How to register as a user</a>
          </p>
          <p>
            <a href="#">Guide to creating travel reviews</a>
          </p>
          <p>
            <a href="#">Tutorial for making culinary reviews</a>
          </p>
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
