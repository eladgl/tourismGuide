import React from "react";

import SvgIcon from "./svgIcon";
import Button from "./button";

// IconButton is a stateless functional component that renders a button containing an SVG icon.

// Props:
// - name (string): The name of the icon to be rendered by the SvgIcon component.
// - onClick (function): The callback function that is triggered when the button is clicked.
// - btnClassName (string): The CSS class applied to the Button component for styling the button itself.
// - iconClassName (string): The CSS class applied to the SvgIcon component for styling the icon.
// - tooltip (string): A tooltip text that can be displayed when hovering over the icon (optional).

// The rest of the props (`...rest`) are spread into the Button component, allowing additional props to be passed.

// Returns:
// - A Button component that contains an SvgIcon component. The Button is styled with `btnClassName`,
//   and the SvgIcon is styled with `iconClassName`. The onClick function is triggered when the Button is clicked.
const IconButton = (props) => {
  const { name, onClick, btnClassName, iconClassName, tooltip, ...rest } =
    props;

  return (
    <Button className={btnClassName} onClick={onClick}>
      <SvgIcon name={name} className={iconClassName} tooltip={tooltip} />;
    </Button>
  );
};

export default IconButton;
