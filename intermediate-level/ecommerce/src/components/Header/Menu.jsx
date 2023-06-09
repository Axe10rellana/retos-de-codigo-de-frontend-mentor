//react
import { useState, useRef } from "react";

//componentes
import { MenuIcon, CloseIcon, LogoIcon, NavLink } from "..";

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
    <div
      className="flex flex-row-reverse items-center justify-between gap-x-4 py-4 md:flex-row md:gap-x-[4.5rem] md:py-8"
      ref={refNavbar}
    >
      <LogoIcon className="mb-1 md:mr-0" />
      <nav
        className={`font-bold text-black md:static md:mr-auto md:flex md:flex-row md:gap-4 md:p-0 md:font-normal md:text-gray-400 ${
          activeMenu &&
          "fixed top-0 left-0 z-30 flex h-full w-3/4 flex-col bg-white transition-all duration-300 md:static md:z-0 md:h-auto md:w-auto md:transition-none"
        }`}
      >
        <button className="md:hidden" onClick={handleClickMenu}>
          {activeMenu ? (
            <CloseIcon className="fixed left-4 top-9" />
          ) : (
            <MenuIcon />
          )}
        </button>
        <ul
          className="hidden md:mt-0 md:ml-0 md:flex md:flex-row md:gap-x-8"
          id="navLinks"
        >
          <NavLink text="Collections" />
          <NavLink text="Men" />
          <NavLink text="Women" />
          <NavLink text="About" />
          <NavLink text="Contact" />
        </ul>
      </nav>
      <span
        id="navOverlay"
        className="fixed top-0 left-0 z-20 hidden h-full w-full bg-black/75 md:hidden"
      ></span>
    </div>
  );
};

export default Menu;
