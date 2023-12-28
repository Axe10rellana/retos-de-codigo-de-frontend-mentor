//context
import { useWindowSize } from "../context/WindowSizeContext";

//assets
import menu from "../assets/icons/icon-hamburger.svg";

const MenuButton = () => {
  //context variables
  const { isOpen, setIsOpen } = useWindowSize();

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>
        <img
          className="pointer-events-none select-none"
          src={menu}
          alt="Menu"
        />
      </button>
    </>
  );
};

export default MenuButton;
