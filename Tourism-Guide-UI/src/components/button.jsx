import PropTypes, { array } from "prop-types";

const Button = ({ className, onClick = () => null, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOf(PropTypes.object, PropTypes.array),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
