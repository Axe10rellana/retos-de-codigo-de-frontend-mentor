//components
import { LandingPageHeader, LandingPageMain } from "./components";

//assets
import bgImgDesktop from "./assets/images/bg-desktop.svg";
import bgImgMobile from "./assets/images/bg-mobile.svg";

const App = () => {
  return (
    <div className="relative select-none">
      <LandingPageHeader />
      <LandingPageMain />
      <img
        className="hidden h-[100%] w-[100%] lg:block"
        src={bgImgDesktop}
        alt="bg-desktop"
      />
      <img
        className="block h-[100%] w-[100%] lg:hidden"
        src={bgImgMobile}
        alt="bg-desktop"
      />
    </div>
  );
};

export default App;
