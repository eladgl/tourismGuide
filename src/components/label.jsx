import PropTypes from "prop-types";

const Label = ({ children, className }) => {
  return <p className={className}>{children}</p>;
};

// Label is a stateless functional component that renders a paragraph (`<p>`) element.

// Props:
// - children (string | array | node): The content to be displayed inside the `<p>` element.
//   It can be a string, an array of React nodes, or any other React node (such as another component or element).
// - className (string): A CSS class name that can be applied to the `<p>` element for styling.

// Returns:
// - A `<p>` element that contains the children content and applies the specified className for styling.

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.node,
  ]),
  className: PropTypes.string,
};

export default Label;
