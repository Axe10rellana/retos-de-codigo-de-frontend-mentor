//assets
import logo from "../assets/icons/logo.svg";

const Logo = () => {
  return (
    <>
      <div>
        <img
          className="pointer-events-none select-none"
          src={logo}
          alt="Logo"
        />
      </div>
    </>
  );
};

export default Logo;
