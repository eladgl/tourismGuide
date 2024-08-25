import SvgIcon from "../../components/svgIcon";
import styled from "styled-components";

export const SvgContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ToggleIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 767px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

export const Wrapper = styled.div`
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

export const NavBarContainer = styled.div`
  width: 100%;
  max-width: 5000px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 100%;

  @media (max-width: 400px) {
    max-width: 400px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
    height: 500px;
    justify-content: start;
    padding: 0;
    max-width: 767px;
  }

  @media (max-width: 1500px) {
    max-width: 1500px;
  }

  @media (max-width: 1800px) {
    max-width: 1800px;
  }

  @media (max-width: 5000px) {
    max-width: 5000px;
  }
`;

export const NavBarActions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  @media (max-width: 767px) {
    flex-direction: column;
    gap: 0;
    overflow: hidden;
  }
`;

export const StyledSvgIcon = styled(SvgIcon)`
  width: 100px;
  height: 100px;
  margin-top: 5px;
  margin-right: 5px;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.1875rem;
  overflow: hidden;
  @media (min-width: 768px) {
    height: 100%;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    border: none;
  }
`;

export const ToggleWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100px;
  height: 40px;
  @media (max-width: 767px) {
    left: 0;
  }
`;
