import React from "react";

const NavLink = ({ title = "Home" }) => {
  return (
    <a href="#">
      <span className="peer font-bold">{title}</span>
      <span className="block h-1 w-full scale-x-0 transition-all duration-500 peer-hover:scale-x-100 peer-hover:bg-black lg:peer-hover:bg-white"></span>
    </a>
  );
};

export default NavLink;
