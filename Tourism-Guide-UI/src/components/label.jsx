import PropTypes from "prop-types";

const Label = ({ children, classname }) => {
  return <p className={classname}>{children}</p>;
};

Label.propTypes = {
  children: PropTypes.string.isRequired,
  classname: PropTypes.string,
};

export default Label;
