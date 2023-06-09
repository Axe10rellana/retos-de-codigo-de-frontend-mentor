//assets
import logo from "../assets/images/logo.svg";

const Logo = () => {
  return (
    <img
      className="pointer-events-none mx-auto w-[100px]"
      src={logo}
      alt="logo"
    />
  );
};

export default Logo;
