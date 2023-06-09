//react
import { useContext } from "react";

//components
import { NavMenuLinks, UserAuth } from "./";

//context
import NavbarContext from "../context/NavbarContext";

const NavMenu = ({}) => {
  //variables del contexto
  const { openMenu } = useContext(NavbarContext);

  return (
    <nav
      className={`navbar flex flex-col lg:items-center lg:flex-row ${
        openMenu && "open"
      }`}
    >
      <NavMenuLinks />
      <UserAuth />
    </nav>
  );
};

export default NavMenu;
