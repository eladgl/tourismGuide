import SvgIcon from "./svgIcon";

import {
  IconWrapper,
  ToggleLabel,
  ToggleInput,
  StyledSlider,
} from "../styles/components/toggle";

const ToggleButton = ({ icons, onChange, checked }) => {
  return (
    <ToggleLabel>
      <ToggleInput type="checkbox" onChange={onChange} checked={checked} />
      <StyledSlider checked={checked}></StyledSlider>
      <IconWrapper checked={checked}>
        <SvgIcon
          name={checked ? icons[0] : icons[1]}
          className="w-[20px] h-[20px]"
        />
      </IconWrapper>
    </ToggleLabel>
  );
};

export default ToggleButton;
