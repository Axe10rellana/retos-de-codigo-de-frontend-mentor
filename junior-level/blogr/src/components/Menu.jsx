//context
import { useBlogr } from "../context/BlogrContext";

//assets
import open from "../assets/icons/icon-hamburger.svg";
import close from "../assets/icons/icon-close.svg";

const Menu = () => {
  //context variables
  const { isOpen, setIsOpen } = useBlogr();

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        {isOpen ? (
          <img
            className="pointer-events-none select-none"
            src={close}
            alt="close menu"
          />
        ) : (
          <img
            className="pointer-events-none select-none"
            src={open}
            alt="open menu"
          />
        )}
      </button>
    </>
  );
};

export default Menu;
