//context
import { useWindowSize } from "../context/WindowSizeContext";

//components
import { Logo, Navbar, MenuButton } from ".";

const Header = () => {
  //context variables
  const { isOpen } = useWindowSize();

  return (
    <>
      <header className="absolute w-full flex items-center justify-between p-5">
        <div>
          <Logo />
        </div>

        {isOpen && <Navbar />}

        <div className="md:hidden">
          <MenuButton />
        </div>
      </header>
    </>
  );
};

export default Header;
