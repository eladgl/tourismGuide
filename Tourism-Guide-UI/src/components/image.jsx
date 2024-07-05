import PropTypes from "prop-types";

const Image = ({ className, src = "#", alt }) => {
  console.log(src);
  return <img className={className} src={src} alt={alt}></img>;
};

Image.propTypes = {
  classname: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
};

export default Image;
