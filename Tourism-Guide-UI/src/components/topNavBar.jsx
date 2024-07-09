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
  height: 80px; /* Set a fixed height for the navbar */
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  z-index: 100;
  position: relative;
  top: 0;
  left: 0;
`;

const NavBarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 100%; /* Ensure the container takes up the full height */
`;

const NavBarLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.1875rem;
`;

const NavBarActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
`;

const StyledSvgIcon = styled(SvgIcon)`
  width: 80px;
  height: 80px;
  margin-top: 5px;
  margin-right: 5px;
`;

const TopNavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const icons = [access.icon("icons.sun"), access.icon("icons.moon")];
  return (
    <Wrapper>
      <NavBarContainer>
        <ToggleButton
          onChange={toggleTheme}
          checked={theme === "dark"}
          icons={icons}
        />
        <SvgContainer>
          <div>
            <StyledSvgIcon name={access.icon("icons.cactus")} />
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
        <NavBarActions>
          <Button className="navBar-login--button">
            <Lable className="navBar-login--label">
              <NavBarLink href="/login">Login</NavBarLink>
            </Lable>
          </Button>
          <Button className="navBar-getStarted navBar-getStarted--button">
            <Lable className="navBar-getStarted--label hover:bg-yellow-700">
              <a href="/GetStartedpage">Get Started</a>
            </Lable>
          </Button>
        </NavBarActions>
      </NavBarContainer>
    </Wrapper>
  );
};

export default TopNavBar;
