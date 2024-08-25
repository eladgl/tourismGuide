import SvgIcon from "./svgIcon";

import {
  IconWrapper,
  ToggleLabel,
  ToggleInput,
  StyledSlider,
} from "../styles/components/toggle";

const ToggleButton = ({ icons, onChange, checked }) => {
  // ToggleButton is a stateless functional component that renders a toggle switch with an icon that changes based on its state.

  // Props:
  // - icons (array): An array containing two icon names. The first icon is displayed when the toggle is checked,
  //   and the second icon is displayed when it is unchecked.
  // - onChange (function): A callback function that is triggered when the toggle state changes (i.e., when it is clicked).
  // - checked (boolean): A boolean value that determines whether the toggle is in the "checked" (on) state or not.

  // Returns:
  // - A toggle switch that includes an input (checkbox), a slider, and an icon.
  //   The icon changes based on the toggle's checked state.
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
