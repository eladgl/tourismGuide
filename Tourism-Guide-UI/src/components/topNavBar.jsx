import Lable from "./label";
import NavBarLink from "./navBarLink";
import Button from "./button";

const TopNavBar = () => {
  return (
    <div className="navBar-Container">
      <div className="navBar-Wrapper">
        <Lable className="navBar-Label">Ztabar</Lable>
        <NavBarLink>Review</NavBarLink>
        <NavBarLink>Guide</NavBarLink>
        <NavBarLink>Events</NavBarLink>
        <div className="flex items-center gap-[35px]">
          <Button className="navBar-login--button">
            <Lable className="navBar-login--label">Login</Lable>
          </Button>

          <Button className="navBar-getStarted navBar-getStarted--button">
            <Lable className="navBar-getStarted--label">Get Started</Lable>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar;
