import Lable from "./label";
import NavBarLink from "./navBarLink";
import Button from "./button";
import ToggleButton from "./toggleButton";
import SvgIcon from "./svgIcon";

import styled from "styled-components";
import * as access from "@access";

import { useTheme } from "../contexts/themeContext";

const SvgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

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
  const { theme, toggleTheme } = useTheme();
  const icons = [access.icon("icons.sun"), access.icon("icons.moon")];
  return (
    <Wrapper className="fixed top-0 w-full">
      <div className="navBar-Container">
        <div className="navBar-Wrapper">
          <ToggleButton
            onChange={toggleTheme}
            checked={theme === "dark"}
            icons={icons}
          />
          <SvgContainer>
            <div>
              <SvgIcon
                name={access.icon("icons.cactus")}
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <Lable className="navBar-Label">
              <a href="/">Tzabar</a>
            </Lable>
          </SvgContainer>
          <div className="flex justify-center items-center gap-[2.1875rem]">
            <NavBarLink href="/Reviewspage">Review</NavBarLink>
            <NavBarLink href="/Guidepage">Guide</NavBarLink>
            <NavBarLink href="/Eventspage">Events</NavBarLink>
          </div>
          <div className="flex items-center gap-[35px]">
            <Button className="navBar-login--button">
              <Lable className="navBar-login--label">
                <a href="/login">Login</a>
              </Lable>
            </Button>
            <Button className="navBar-getStarted navBar-getStarted--button">
              <Lable className="navBar-getStarted--label hover:bg-yellow-700">
                <a href="/GetStartedpage">Get Started</a> 
              </Lable>
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default TopNavBar;
