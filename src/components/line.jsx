import PropTypes from "prop-types";

// Line is a stateless functional component that renders a `div` element.
// This component is typically used to render a line or a divider in the UI, with styling applied via the `className`.

// Props:
// - className (string, required): A CSS class name that is applied to the `div` element for styling.
//   This is a required prop, meaning the component expects a valid class name to be provided.

// Returns:
// - A `div` element styled using the provided `className`.
const Line = ({ className }) => <div className={className}></div>;

Line.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Line;
