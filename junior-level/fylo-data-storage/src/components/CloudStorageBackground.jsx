//assets
import bgImageDesktop from "../assets/images/bg-desktop.png";
import bgImageMobile from "../assets/images/bg-mobile.png";

const CloudStorageBackground = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 -z-10">
      <picture className="w-full">
        <source
          media="(min-width: 768px)"
          srcSet={bgImageDesktop}
          className="pointer-events-none select-none w-full"
        />
        <img
          src={bgImageMobile}
          alt="background image mobile"
          className="pointer-events-none select-none w-full"
        />
      </picture>
    </div>
  );
};

export default CloudStorageBackground;
