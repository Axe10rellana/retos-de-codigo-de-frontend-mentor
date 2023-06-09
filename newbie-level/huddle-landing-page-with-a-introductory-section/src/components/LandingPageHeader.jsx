//assets
import logo from "../assets/images/logo.svg";

const LandingPageHeader = () => {
  return (
    <div className="absolute top-0 ml-8 mt-8 lg:mb-0 lg:ml-[5rem]">
      <img className="w-[200px]" src={logo} alt="logo" />
    </div>
  );
};

export default LandingPageHeader;
