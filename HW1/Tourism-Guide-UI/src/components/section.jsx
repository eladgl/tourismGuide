import PropTypes from "prop-types";

const Section = ({ className, children }) => {
  return <section className={className}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.object,
  className: PropTypes.string,
};

export default Section;
