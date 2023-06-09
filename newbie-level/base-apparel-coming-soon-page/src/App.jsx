//components
import { BaseApparelComingSoonNewsLetter } from "./components";

//assets
import heroDesktop from "./assets/images/hero-desktop.jpg";
import heroMobile from "./assets/images/hero-mobile.jpg";
import logo from "./assets/images/logo.svg";

const App = () => {
  return (
    <div className="flex select-none flex-col">
      <img
        className="pointer-events-none m-8 block w-[150px] md:hidden"
        src={logo}
        alt="logo"
      />
      <div className="flex flex-col-reverse md:h-screen md:flex-row">
        <BaseApparelComingSoonNewsLetter />
        <img
          className="pointer-events-none hidden md:block md:w-[40%]"
          src={heroDesktop}
          alt="hero-desktop"
        />
        <img
          className="pointer-events-none block md:hidden"
          src={heroMobile}
          alt="hero-mobile"
        />
      </div>
    </div>
  );
};

export default App;
