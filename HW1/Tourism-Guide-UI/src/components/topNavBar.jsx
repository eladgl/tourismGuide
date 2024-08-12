import Lable from "./label";
import NavBarLink from "./navBarLink";
import Button from "./button";
import ToggleButton from "./toggleButton";
import * as access from "@access";
import { useTheme } from "../contexts/themeContext";

import {
  ToggleWrapper,
  LinksContainer,
  StyledSvgIcon,
  NavBarActions,
  NavBarContainer,
  Wrapper,
  ToggleIconWrapper,
  SvgContainer,
} from "../../../../src/styles/components/topNavBar";

const TopNavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const icons = [access.icon("icons.sun"), access.icon("icons.moon")];
  return (
    <Wrapper className="navBarButtonsSmartPhone">
      <NavBarContainer>
        <ToggleIconWrapper>
          <ToggleWrapper>
            <ToggleButton
              onChange={toggleTheme}
              checked={theme === "dark"}
              icons={icons}
            />
          </ToggleWrapper>
          <SvgContainer>
            <a href="/">
              <StyledSvgIcon name={access.icon("icons.cactus")} />
            </a>
            <Lable className="navBar-Label">
              <a href="/">Tzabar</a>
            </Lable>
          </SvgContainer>
        </ToggleIconWrapper>
        <LinksContainer>
          <NavBarLink href="/Reviewspage">Review</NavBarLink>
          <NavBarLink href="/Guidepage">Guide</NavBarLink>
          <NavBarLink href="/Eventspage">Events</NavBarLink>
        </LinksContainer>
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
