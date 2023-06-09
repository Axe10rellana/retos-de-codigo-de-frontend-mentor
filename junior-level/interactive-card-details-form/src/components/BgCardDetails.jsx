//assets
import bgMainDesktop from "../assets/images/bg-main-desktop.png";
import bgMainMobile from "../assets/images/bg-main-mobile.png";

const BgCardDetails = () => {
  return (
    <div className="absolute w-full">
      <picture>
        <source media="(min-width: 1024px)" srcSet={bgMainDesktop} />
        <img
          src={bgMainMobile}
          alt="bg-main-mobile"
          className="w-full h-[35vh] lg:h-full lg:mt-0 lg:w-[40%] pointer-events-none"
        />
      </picture>
    </div>
  );
};

export default BgCardDetails;
