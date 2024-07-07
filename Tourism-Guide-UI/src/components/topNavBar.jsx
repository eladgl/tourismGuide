import Lable from "./label";
import NavBarLink from "./navBarLink";
import Button from "./button";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  background: white;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 100;
`;
const TopNavBar = () => {
  return (
    <Wrapper className="fixed top-0 w-full">
      <div className="navBar-Container">
        <div className="navBar-Wrapper">
          <div className="flex pl-[0rem] pr-2.5 py-2.5 items-start gap-2.5">
            <Link to="/" className="navBar-Label">
            Tzabar
            </Link>
          </div>
          <div className="flex justify-center items-center gap-[2.1875rem]">
            <NavBarLink>Review</NavBarLink>
            <NavBarLink>Guide</NavBarLink>
            <NavBarLink>Events</NavBarLink>
          </div>
          <div className="flex items-center gap-[35px]">
            <Button className="navBar-login--button" >
                <Link to="/login" className="navBar-login--label">
                Login
                </Link>
            </Button>
            <Button className="navBar-getStarted navBar-getStarted--button">
              <Lable className="navBar-getStarted--label hover:bg-yellow-700">Get Started</Lable>
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TopNavBar;
