import PropTypes from "prop-types";
import styled from "styled-components";

const StyledImage = styled.img`
  background: url(${({ src }) => src}) lightgray 50% / cover no-repeat;
`;

const Image = ({ className, src = "#", alt }) => {
  return <StyledImage className={className} src={src} alt={alt}></StyledImage>;
};

Image.propTypes = {
  classname: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
