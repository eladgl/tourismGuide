import PropTypes from "prop-types";

const Label = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

Label.propTypes = {
  children: PropTypes.oneOf(PropTypes.string, PropTypes.array).isRequired,
  className: PropTypes.string,
};

export default Label;
