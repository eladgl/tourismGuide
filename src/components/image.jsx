import PropTypes from "prop-types";

import { StyledImage } from "../styles/components/image";

// Image is a stateless functional component that renders an image element with optional styling and alternative text.

// Props:
// - className (string): A CSS class name that can be applied to the image for styling purposes.
// - src (string): The URL of the image to display. Defaults to "#" if not provided.
// - alt (string): The alternative text for the image, used for accessibility and shown if the image fails to load.

// Returns:
// - A StyledImage component (likely a styled `img` element) with the provided className, src, and alt attributes.
const Image = ({ className, src = "#", alt }) => {
  return <StyledImage className={className} src={src} alt={alt}></StyledImage>;
};

Image.propTypes = {
  classname: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
