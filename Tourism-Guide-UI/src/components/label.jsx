import PropTypes from "prop-types";

const Label = ({ children, className }) => {
  console.log(children);
  return <p className={className}>{children}</p>;
};

Label.propTypes = {
  children: PropTypes.oneOf(PropTypes.string, PropTypes.array).isRequired,
  className: PropTypes.string,
};

export default Label;
