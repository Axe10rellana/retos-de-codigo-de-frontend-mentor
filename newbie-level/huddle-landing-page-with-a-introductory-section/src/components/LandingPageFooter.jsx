//react icons
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";

const LandingPageFooter = () => {
  return (
    <div className="absolute bottom-0 mb-12 flex justify-center gap-x-5 text-white lg:right-0 lg:mb-0 lg:justify-end">
      <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-2 border-white transition-all duration-300 hover:border-soft-magenta hover:text-soft-magenta">
        <ImFacebook />
      </div>
      <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-2 border-white transition-all duration-300 hover:border-soft-magenta hover:text-soft-magenta">
        <ImTwitter />
      </div>
      <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-2 border-white transition-all duration-300 hover:border-soft-magenta hover:text-soft-magenta">
        <ImInstagram />
      </div>
    </div>
  );
};

export default LandingPageFooter;
