//assets
import imageInteractiveMobile from "../assets/images/mobile/image-interactive.jpg";

const InteractiveVRMobile = () => {
  return (
    <>
      <img
        className="pointer-events-none select-none block lg:hidden"
        src={imageInteractiveMobile}
        alt="image interactive mobile"
      />
      <div className="flex flex-col text-center gap-y-4 lg:hidden">
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

export default InteractiveVRMobile;
