import Lable from "./label";
import NavBarLink from "./navBarLink";
const TopNavBar = () => {
  return (
    <div className="navBar-Container">
      <div className="navBar-Wrapper">
        <Lable classname="navBar-Label">Ztabar</Lable>
        <NavBarLink>Review</NavBarLink>
        <NavBarLink>Guide</NavBarLink>
        <NavBarLink>Events</NavBarLink>
      </div>
    </div>
  );
};

export default TopNavBar;
