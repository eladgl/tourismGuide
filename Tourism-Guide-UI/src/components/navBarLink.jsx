import PropTypes from "prop-types";

const NavBarLink = ({ classname = "navBar-Link", href = "#", children }) => {
  return (
    <a className={classname} href={href}>
      {children}
    </a>
  );
};

NavBarLink.propTypes = {
  children: PropTypes.string.isRequired,
  classname: PropTypes.string,
  href: PropTypes.string,
};

export default NavBarLink;
