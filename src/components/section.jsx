import PropTypes from "prop-types";

const Section = ({ className, children }) => {
  // Section is a stateless functional component that renders a <section> element.

  // Props:
  // - className (string): A CSS class name that can be applied to the <section> element for custom styling.
  // - children (ReactNode): The content to be displayed within the <section> element.
  //   This could be any valid React element(s) or component(s).

  // Returns:
  // - A <section> element with the provided className and containing the children content.
  return <section className={className}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
};

export default Section;
