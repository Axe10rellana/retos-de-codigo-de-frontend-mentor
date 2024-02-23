//assets
import imageInteractiveDesktop from "../assets/images/desktop/image-interactive.jpg";

const InteractiveVRDesktop = () => {
  return (
    <>
      <img
        className="pointer-events-none select-none hidden lg:block w-[65%]"
        src={imageInteractiveDesktop}
        alt="image interactive desktop"
      />
      <div className="hidden lg:flex absolute bottom-0 right-0 z-10 flex-col text-start gap-y-4 pl-10 pt-10 w-[57%] bg-white">
        <h2 className="text-3xl font-josefin uppercase select-none">
          The leader in interactive VR
        </h2>
        <p className="text-dark-gray">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </>
  );
};

export default InteractiveVRDesktop;
