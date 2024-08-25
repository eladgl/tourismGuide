import PropTypes from "prop-types";

import * as access from "@access";

import IconButton from "./iconButton";
import Label from "./label";
import Line from "./line";

import SvgIcon from "./svgIcon";

const Search = ({ className }) => {
  // Search is a stateless functional component that provides a search interface with an input field and a search button.

  // Props:
  // - className (string): A CSS class name that can be applied to the outermost div for custom styling.
  //   It is optional and not used directly within this component.

  // Returns:
  // - A div containing the search interface, which includes a label, dropdown icon, text input for location search,
  //   and a search button with an icon.

  // handleClick is a placeholder function that will be triggered when the search button is clicked.
  const handleClick = () => {};
  return (
    <div className="search">
      <Line className="search-line" />
      <div className="search-rectangle">
        <div className="search-locations">
          <div className="search-locations-dropdown">
            <Label className="search-locations-dropdown--text">Location</Label>
            <SvgIcon
              className="search-locations-dropdown--arrowBtn"
              name={access.icon("icons.arrowDown")}
            />
            <input
              type="text"
              placeholder="Search for places"
              className="search-input"
            />
          </div>
        </div>
      </div>

      <IconButton
        iconClassName="search-button--svg"
        tooltip="Search"
        name={access.icon("icons.magnifyingGlass")}
        onClick={handleClick}
        btnClassName="search-button hover:bg-yellow-700"
      />
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;
