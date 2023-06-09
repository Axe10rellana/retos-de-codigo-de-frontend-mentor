//assets
import illustrationWomanOnlineDesktop from "../assets/images/illustration-woman-online-desktop.svg";
import illustrationWomanOnlineMobile from "../assets/images/illustration-woman-online-mobile.svg";
import illustrationBoxDesktop from "../assets/images/illustration-box-desktop.svg";


const Images = () => {
  return (
    <>
      <div className="hidden lg:flex bg-pattern lg:w-[40%]">
        <img
          className="pointer-events-none hidden absolute w-[38%] bottom-40 lg:left-[4%] lg:block"
          src={illustrationWomanOnlineDesktop}
          alt="illustration-woman-online-desktop"
        />
        <img
         src={illustrationBoxDesktop}
         className="pointer-events-none lg:block hidden w-[14%] absolute lg:left-[4%] bottom-60" alt="illustration-box-desktop"
        />
      </div>
      <div className="flex justify-center h-[105px] lg:hidden bg-pattern">
        <img
          className="pointer-events-none absolute top-0 w-[230px]"
          src={illustrationWomanOnlineMobile}
          alt="illustration-woman-online-mobile"
        />
      </div>
    </>
  );
};

export default Images;