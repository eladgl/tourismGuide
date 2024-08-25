import PropTypes from "prop-types";

// NavBarLink is a stateless functional component that renders a navigation link.

// Props:
// - children (string, required): The text content or inner content of the link.
//   This is required and expected to be a string.
// - classname (string): A CSS class name applied to the `<a>` element for styling.
//   It defaults to "navBar-Link" if not provided.
// - href (string): The URL that the link points to.
//   It defaults to "#" (which means it points to the top of the page) if not provided.

// Returns:
// - An anchor (`<a>`) element with the specified className, href, and children content.
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
