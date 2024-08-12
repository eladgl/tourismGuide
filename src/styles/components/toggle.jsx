import styled from "styled-components";

import { Label } from "../common/label";
import { Input } from "../common/input";

export const ToggleLabel = styled(Label)`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

export const ToggleInput = styled(Input)`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  ${(props) => (props.checked ? "right: 28px;" : "left: 28px;")}
  transition: ${(props) => (props.checked ? "right 0.3s" : "left 0.3s")};
`;

export const StyledSlider = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  background-color: ${(props) => (props.checked ? "#4A90E2" : "#ccc")};
  border-radius: 25px;
  transition: background-color 0.3s;
  &::after {
    content: "";
    position: absolute;
    width: 21px;
    height: 21px;
    background-color: #fff;
    border-radius: 50%;
    top: 2px;
    left: ${(props) => (props.checked ? "27px" : "2px")};
    transition: left 0.3s;
  }
`;
