//componentes
import { LogoIcon, Menu } from "../";

const Header = () => {
  return (
    <header className="flex justify-between items-center md:py-8 py-4">
      <LogoIcon />
      <Menu />
    </header>
  );
};

export default Header;
