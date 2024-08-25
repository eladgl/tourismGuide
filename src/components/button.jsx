import PropTypes from "prop-types";

// Parameters:
// - className (string): This is a CSS class applied to the button element for styling.
// - onClick (function): This is a callback function that is executed when the button is clicked.
//                       If no function is provided, it defaults to a no-op function that does nothing.
// - children (ReactNode): This represents the content inside the button, which could be text or other React components.

// Returns:
// - A button element that applies the provided className, triggers the onClick function when clicked,
//   and displays the children elements inside the button.
const Button = ({ className, onClick = () => null, children }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
