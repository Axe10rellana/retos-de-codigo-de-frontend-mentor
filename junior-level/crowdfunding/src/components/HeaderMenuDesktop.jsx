//data
import { links } from "../data/data";

const HeaderMenuDesktop = () => {
  return (
    <nav className="hidden md:block">
      <ul className="flex flex-row items-center gap-x-5">
        {links.map(({ id, title, link }) => (
          <li key={id} className="cursor-pointer text-white">
            <a href={link}>{title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenuDesktop;
