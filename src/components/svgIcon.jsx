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
  // SvgIcon is a stateless functional component that renders an SVG icon with optional styling and a tooltip.

  // Props:
  // - name (string, required): The ID of the SVG symbol to be used. This prop is required to correctly reference the SVG symbol.
  // - className (string): A CSS class name applied to the <svg> element for custom styling.
  // - color (string): The fill color for the SVG icon. It defaults to "transparent" if not provided.
  // - tooltip (string): Optional text to display in a tooltip when hovering over the icon.
  // - props (object): Additional props that can be passed to the <svg> element.

  // Returns:
  // - An SVG element wrapped in a styled <SvgWrapper> component.
  // - If a tooltip is provided, it is displayed as a sibling element within the wrapper.

  // Generates the full symbol ID to be used in the <use> element.
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
