//components
import { Information } from "./";

//assets
import imageHeroDesktop from "../assets/images/image-hero-desktop.png";
import imageHeroMobile from "../assets/images/image-hero-mobile.png";

const IntroSection = () => {
  return (
    <main className="flex mb-16 gap-y-10 flex-col-reverse lg:w-[80%] mx-auto lg:flex-row">
      <Information />
      <img
        className="flex lg:hidden pointer-events-none"
        src={imageHeroMobile}
        alt="image-hero-mobile"
      />
      <img
        className="hidden lg:flex lg:w-[40%] xl:w-[35%] pointer-events-none"
        src={imageHeroDesktop}
        alt="image-hero-desktop"
      />
    </main>
  );
};

export default IntroSection;
