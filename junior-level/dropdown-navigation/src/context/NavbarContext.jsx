//react
import React, { createContext, useState, useRef } from "react";

//create context
const NavbarContext = createContext(null);

//create provider
export const NavbarContextProvider = ({ children }) => {
  //ref
  const refNavbar = useRef(null);

  //state variables
  const [openFeatures, setOpenFeatures] = useState(false);
  const [openCompany, setOpenCompany] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  //functions
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    refNavbar.current.querySelector("#navOverlay").classList.toggle("hidden");
  };

  //object
  const data = {
    handleOpenMenu,
    refNavbar,
    openCompany,
    openFeatures,
    openMenu,
    setOpenCompany,
    setOpenFeatures,
    setOpenMenu,
  };

  //return provider
  return (
    <NavbarContext.Provider value={data}>{children}</NavbarContext.Provider>
  );
};

export default NavbarContext;
