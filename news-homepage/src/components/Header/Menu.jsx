//react
import { useState, useRef } from "react";

//componentes
import { NavLink, MenuIcon, MenuCloseIcon } from "../";

const Menu = () => {
  //ref
  const refNavbar = useRef(null);

  //variables de estado
  const [activeMenu, setActiveMenu] = useState(false);

  //funciones
  const handleClickMenu = () => {
    setActiveMenu(!activeMenu);
    refNavbar.current.querySelector("#navLinks").classList.toggle("hidden");
    refNavbar.current
      .querySelector("#navLinks")
      .classList.add("flex", "flex-col", "gap-y-8", "mt-[10rem]", "ml-6");
    refNavbar.current.querySelector("#navOverlay").classList.toggle("hidden");
  };

  return (
    <div ref={refNavbar}>
      <nav
        className={`md:static md:h-auto md:w-auto md:translate-x-0 ${
          activeMenu &&
          "z-10 fixed top-0 translate-x-[-93%] md:translate-x-0 bg-off-white w-[70%] h-[100%] transition-all duration-500"
        }`}
      >
        <button className="md:hidden" onClick={handleClickMenu}>
          {activeMenu ? (
            <MenuCloseIcon className="absolute right-5 top-6" />
          ) : (
            <MenuIcon />
          )}
        </button>
        <ul
          className="hidden md:flex md:flex-row md:gap-x-8 md:mt-0 md:ml-0"
          id="navLinks"
        >
          <NavLink title="Home" />
          <NavLink title="News" />
          <NavLink title="Popular" />
          <NavLink title="Trending" />
          <NavLink title="Cátegories" />
        </ul>
      </nav>
      <span
        id="navOverlay"
        className="fixed top-0 left-0 hidden h-full w-full bg-black/75 md:hidden"
      ></span>
    </div>
  );
};

export default Menu;
