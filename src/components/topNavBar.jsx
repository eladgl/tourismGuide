import React from "react";
import Lable from "./label";
import NavBarLink from "./navBarLink";
import Button from "./button";
import ToggleButton from "./toggleButton";

import * as access from "@access";
import { useTheme } from "../contexts/themeContext";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

import {
  LinksContainer,
  NavBarActions,
  NavBarContainer,
  StyledSvgIcon,
  SvgContainer,
  ToggleIconWrapper,
  ToggleWrapper,
  Wrapper,
} from "../styles/components/topNavBar";

import { handleLogout } from "../utils/auth";

const TopNavBar = () => {
  // TopNavBar is a functional component that renders a navigation bar with theme toggling, navigation links, and authentication actions.
  // Returns:
  // - A navigation bar with a theme toggle button, a logo, navigation links, and login/logout buttons based on authentication state.

  // useTheme hook provides access to the current theme and a function to toggle the theme.
  // useAuth hook provides access to authentication-related actions such as logout.
  // useNavigate hook from React Router provides a function to navigate programmatically.
  const { theme, toggleTheme } = useTheme();
  const { logout } = useAuth();
  // Icons for the theme toggle button, representing sun (light mode) and moon (dark mode).
  const icons = [access.icon("icons.sun"), access.icon("icons.moon")];
  const navigate = useNavigate();

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
            <Lable className="navBar-Label navBar-Label--logo">
              <a href="/">Tzabar</a>
            </Lable>
          </SvgContainer>
        </ToggleIconWrapper>
        <LinksContainer>
          <NavBarLink href="/Reviewspage" classname="navBar-Label--reviews">
            Reviews
          </NavBarLink>
          <NavBarLink href="/Guidepage" classname="navBar-Label--guides">
            Guides
          </NavBarLink>
          <NavBarLink href="/Eventspage" classname="navBar-Label--events">
            Events
          </NavBarLink>
        </LinksContainer>
        <NavBarActions>
          {localStorage.token ? (
            <Button
              className="navBar-login--button"
              onClick={() => handleLogout(navigate, logout)}
            >
              <Lable className="navBar-login--label">Logout</Lable>
            </Button>
          ) : (
            <>
              <Button className="navBar-login--button navBar-Label--login">
                <Lable className="navBar-login--label">
                  <a href="/login">Login</a>
                </Lable>
              </Button>
              <Button className="navBar-getStarted navBar-getStarted--button navBar-Label--getStarted">
                <Lable className="navBar-getStarted--label">
                  <a href="/GetStartedpage" classname="navBar---getStarted">
                    Get Started
                  </a>
                </Lable>
              </Button>
            </>
          )}
        </NavBarActions>
      </NavBarContainer>
    </Wrapper>
  );
};

export default TopNavBar;
