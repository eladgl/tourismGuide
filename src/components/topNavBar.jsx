import React from "react";
import Lable from "./label";
import NavBarLink from "./navBarLink";
import Button from "./button";
import ToggleButton from "./toggleButton";
import SvgIcon from "./svgIcon";
import styled from "styled-components";
import * as access from "@access";
import { useTheme } from "../contexts/themeContext";
import { useAuth } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

const SvgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ToggleIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
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

  @media (max-width: 767px) {
    flex-direction: column;
    height: 250px;
  }
`;

const NavBarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 100%;
  @media (max-width: 767px) {
    flex-direction: column;
    height: 500px;
    justify-content: start;
  }
`;

const NavBarActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0;
  }
`;

const StyledSvgIcon = styled(SvgIcon)`
  width: 80px;
  height: 80px;
  margin-top: 5px;
  margin-right: 5px;
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.1875rem;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ToggleWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100px;
  height: 40px;
  @media (max-width: 767px) {
    left: 0;
  }
`;

const TopNavBar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, loading, logout } = useAuth();
  const icons = [access.icon("icons.sun"), access.icon("icons.moon")];
  const navigate = useNavigate();

  const handleLogout = async (navigate) => {
    localStorage.removeItem("token");
    logout();
    navigate("/login");
  };

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
          {localStorage.token ? (
            <Button
              className="navBar-login--button"
              onClick={() => handleLogout(navigate)}
            >
              <Lable className="navBar-login--label">Logout</Lable>
            </Button>
          ) : (
            <>
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
            </>
          )}
        </NavBarActions>
      </NavBarContainer>
    </Wrapper>
  );
};

export default TopNavBar;
