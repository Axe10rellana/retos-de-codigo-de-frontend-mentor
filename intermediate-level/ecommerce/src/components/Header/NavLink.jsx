const NavLink = ({ text }) => {
  return (
    <li>
      <a href="#" className="group relative -mb-8 py-8 md:mb-0">
        <span className="transition-all duration-300 md:group-hover:text-black">
          {text}
        </span>
        <span className="absolute bottom-0 left-0 block h-1 w-full scale-x-0 transition-all duration-300 group-hover:scale-x-100 md:group-hover:bg-orange-primary"></span>
      </a>
    </li>
  );
};

export default NavLink;
