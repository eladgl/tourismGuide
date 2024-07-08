import styled from "styled-components";
import SvgIcon from "./svgIcon";

const ToggleWrapper = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100px; /* Adjust as needed to fit your layout */
  height: 40px; /* Adjust as needed to fit your layout */
`;

const StyledLabel = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  position: relative;
`;

const StyledInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const StyledSlider = styled.div`
  position: relative;
  width: 50px;
  height: 25px;
  background-color: ${props => (props.checked ? "#4A90E2" : "#ccc")};
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
    left: ${props => (props.checked ? "27px" : "2px")};
    transition: left 0.3s;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  ${props => (props.checked ? "right: 28px;" : "left: 28px;")}
  transition: ${props => (props.checked ? "right 0.3s" : "left 0.3s")};
`;

const ToggleButton = ({ icons, onChange, checked }) => {
  return (
    <ToggleWrapper>
      <StyledLabel>
        <StyledInput type="checkbox" onChange={onChange} checked={checked} />
        <StyledSlider checked={checked}></StyledSlider>
        <IconWrapper checked={checked}>
          <SvgIcon
            name={checked ? icons[0] : icons[1]}
            className="w-[20px] h-[20px]"
          />
        </IconWrapper>
      </StyledLabel>
    </ToggleWrapper>
  );
};

export default ToggleButton;
