import PropTypes from "prop-types";

const Label = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default Label;
