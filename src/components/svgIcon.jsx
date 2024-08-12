import React from "react";
import PropTypes from "prop-types";

import { SvgWrapper, Tooltip } from "../styles/components/svgIcong";

const SvgIcon = ({
  name,
  className,
  color = "transparent",
  tooltip,
  ...props
}) => {
  const symbolId = `#${name}`;

  return (
    <SvgWrapper aria-hidden="false">
      <svg className={className} {...props}>
        <use href={symbolId} fill={color} />
      </svg>
      {tooltip && <Tooltip className="tooltip">{tooltip}</Tooltip>}
    </SvgWrapper>
  );
};

SvgIcon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
};

export default SvgIcon;
