//data
import { menuLinks } from "../data";

const Menu = () => {
  return (
    <nav>
      <ul className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-4">
        {menuLinks.map(({ id, title }) => (
          <li className="select-none text-white cursor-pointer" key={id}>
            <a className="flex flex-col items-center md:gap-y-2">
              <span className="peer">{title}</span>
              <span className="block h-1 mx-auto w-[50%] scale-x-0 transition-all duration-500 peer-hover:scale-x-100 peer-hover:bg-white"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
