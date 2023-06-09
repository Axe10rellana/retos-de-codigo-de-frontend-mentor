//react
import { useContext } from "react";

//assets
import iconCloseMenu from "../assets/images/icon-close-menu.svg";
import iconMenu from "../assets/images/icon-menu.svg";

//context
import NavbarContext from "../context/NavbarContext";

const OpenMenu = () => {
  //context variables
  const { handleOpenMenu, openMenu } = useContext(NavbarContext);

  return (
    <>
      {openMenu ? (
        <div className="lg:hidden fixed top-5 right-5 z-50">
          <button className="outline-none" onClick={handleOpenMenu}>
            <img
              src={iconCloseMenu}
              alt="icon-close-menu"
              className={`menu-button pointer-events-none fill-medium-gray`}
            />
          </button>
        </div>
      ) : (
        <div className="lg:hidden absolute top-5 right-5 z-50">
          <button className="outline-none" onClick={handleOpenMenu}>
            <img
              src={iconMenu}
              alt="icon-menu"
              className={`menu-button pointer-events-none fill-medium-gray`}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default OpenMenu;
