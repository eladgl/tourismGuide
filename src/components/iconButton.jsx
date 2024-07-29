import React from "react";
import PropTypes from "prop-types";

import SvgIcon from "./svgIcon";
import Button from "./button";

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
