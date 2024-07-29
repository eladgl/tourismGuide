import PropTypes from "prop-types";

const Line = ({ className }) => <div className={className}></div>;

Line.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Line;
