//assets
import desktopHero from "../assets/images/image-hero-desktop.jpg";
import mobileHero from "../assets/images/image-hero-mobile.jpg";

const ResponsiveImageSwitcher = () => {
  return (
    <>
      <section>
        <img
          className="block md:hidden pointer-events-none select-none"
          src={mobileHero}
          alt="Image hero mobile"
        />
        <img
          className="hidden md:block pointer-events-none select-none w-full"
          src={desktopHero}
          alt="Image hero desktop"
        />
      </section>
    </>
  );
};

export default ResponsiveImageSwitcher;
