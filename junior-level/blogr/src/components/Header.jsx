//context
import { useBlogr } from "../context/BlogrContext";

//components
import { Buttons, Link, Menu } from ".";

//assets
import logo from "../assets/icons/logo.svg";

const Header = () => {
  //context variables
  const { isOpen } = useBlogr();

  return (
    <>
      <header className="absolute p-5 flex items-center justify-between w-full">
        <div className="md:mr-5">
          <img
            className="pointer-events-none select-none"
            src={logo}
            alt="blogr logo"
          />
        </div>

        {isOpen && (
          <nav className="navbar md:flex md:justify-between">
            <ul>
              <Link title="Product" id="1" />
              <Link title="Company" id="2" />
              <Link title="Connect" id="3" />
            </ul>
            <hr className="mt-2 md:hidden mx-auto w-[90%]" />
            <Buttons />
          </nav>
        )}
        <Menu />
      </header>
    </>
  );
};

export default Header;
