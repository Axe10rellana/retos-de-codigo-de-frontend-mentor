import React from "react";

const NavLink = ({ title }) => {
  return (
    <li className="md:text-dark-grayish-blue text-very-dark-blue font-bold md:font-normal hover:text-soft-red transition-all duration-100 select-none">
      <a href="#">{title}</a>
    </li>
  );
};

export default NavLink;
