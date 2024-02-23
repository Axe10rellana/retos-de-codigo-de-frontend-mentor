//data
import { menuLinks } from "../data";

//context hook
import { useLoopstudios } from "../context/LoopstudiosContext";

//assets
import iconCloseMenu from "../assets/icons/icon-close.svg";
import iconOpenMenu from "../assets/icons/icon-hamburger.svg";

const MobileMenu = () => {
  //context variable
  const { isOpen, handleIsOpen } = useLoopstudios();

  return (
    <>
      <div
        onClick={handleIsOpen}
        className={`${isOpen ? "fixed top-14 right-8 z-40 open" : ""}`}
      >
        <img
          className="pointer-events-none select-none"
          src={isOpen ? iconCloseMenu : iconOpenMenu}
          alt={isOpen ? "icon close" : "icon hamburger"}
        />
      </div>
      <nav className={`transition-all-menu ${isOpen ? "open" : "closed"}`}>
        <ul className="fixed inset-0 z-30 flex bg-black h-full w-full flex-col items-start pl-8 pt-48 gap-y-4">
          {menuLinks.map(({ id, title }) => (
            <li
              className="select-none cursor-pointer uppercase font-josefin text-2xl transition-colors duration-500 text-dark-gray hover:text-white"
              key={id}
            >
              <a>{title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default MobileMenu;
