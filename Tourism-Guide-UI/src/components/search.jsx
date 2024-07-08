import PropTypes from "prop-types";

import * as access from "@access";

import IconButton from "./iconButton";
import Label from "./label";
import Line from "./line";

import ids from "virtual:svg-icons-names";
import SvgIcon from "./svgIcon";

const Search = ({ className }) => {
  console.log(ids);
  const handleClick = () => {
    console.log("Search clicked");
  };
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
        btnClassName="search-button"
      />
    </div>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;
