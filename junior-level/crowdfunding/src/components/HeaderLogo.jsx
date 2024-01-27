//assets
import logo from "../assets/icons/logo.svg";

const HeaderLogo = () => {
  return (
    <div>
      <img
        className="pointer-events-none select-none"
        src={logo}
        alt="Crowdfunding logo"
      />
    </div>
  );
};

export default HeaderLogo;
