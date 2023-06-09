//react
import { useState, useRef } from "react";

//componentes
import { NavLink, HamburgerIcon, CloseIcon } from "../";

const Menu = () => {
  //ref
  const refNavbar = useRef(null);

  //variables de estado
  const [activeMenu, setActiveMenu] = useState(false);

  //funciones
  const handleClickMenu = () => {
    setActiveMenu(!activeMenu);
    refNavbar.current.querySelector("#navLinks").classList.toggle("hidden");
    refNavbar.current.querySelector("#navLinks").classList.add("flex", "gap-4");
    refNavbar.current.querySelector("#navBrand").classList.toggle("hidden");
    refNavbar.current.querySelector("#navOverlay").classList.toggle("hidden");
  };

  return (
    <div ref={refNavbar}>
      <nav
        className={`absolute top-0 flex w-full items-center py-8 px-8 text-white lg:top-10 lg:py-0 ${
          activeMenu &&
          "z-10 justify-between bg-white py-8 text-black transition-all duration-300 lg:justify-start lg:bg-transparent lg:py-0 lg:text-white"
        }`}
      >
        <button className="lg:hidden" onClick={handleClickMenu}>
          {activeMenu ? <CloseIcon /> : <HamburgerIcon />}
        </button>
        <a
          id="navBrand"
          className="mx-auto mb-3 pt-[10px] pr-[20px] text-4xl lg:mx-0 lg:block lg:pr-16"
          href="#"
        >
          room
        </a>
        <div className="hidden lg:flex lg:gap-4" id="navLinks">
          <NavLink title="Home" />
          <NavLink title="Shop" />
          <NavLink title="About" />
          <NavLink title="Contact" />
        </div>
      </nav>
      <span
        id="navOverlay"
        className="fixed top-0 left-0 hidden h-full w-full bg-black/75 lg:hidden"
      ></span>
    </div>
  );
};

export default Menu;
