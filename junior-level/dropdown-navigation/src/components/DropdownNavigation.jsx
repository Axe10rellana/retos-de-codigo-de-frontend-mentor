//react
import { useContext } from "react";

//components
import { NavMenu, OpenMenu } from "./";

//context
import NavbarContext from "../context/NavbarContext";

//assets
import logo from "../assets/images/logo.svg";

const DropdownNavigation = () => {
  //context variables
  const { refNavbar } = useContext(NavbarContext);

  return (
    <header ref={refNavbar} className="p-5 flex items-center justify-between">
      <div className="lg:flex w-[100%] lg:items-center lg:justify-start">
        <img src={logo} alt="logo" className="lg:mr-16 pointer-events-none" />
        <NavMenu />
      </div>

      <OpenMenu />
      <span
        id="navOverlay"
        className="fixed top-0 left-0 hidden h-full w-full bg-black/75 lg:hidden"
      ></span>
    </header>
  );
};

export default DropdownNavigation;
