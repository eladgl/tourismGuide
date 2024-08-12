import PropTypes from "prop-types";

import { StyledImage } from "../styles/components/image";

const Image = ({ className, src = "#", alt }) => {
  return <StyledImage className={className} src={src} alt={alt}></StyledImage>;
};

Image.propTypes = {
  classname: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
