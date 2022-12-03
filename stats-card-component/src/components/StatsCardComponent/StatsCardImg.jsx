//assets
import { ImgHeaderDesktop, ImgHeaderMobile } from "../../assets";

const StatsCardImg = () => {
  return (
    <div className="relative w-[100%] md:w-[50%]">
      <img
        className="hidden h-[100%] w-[100%] rounded-br-xl rounded-tr-xl md:block"
        src={ImgHeaderDesktop}
        alt="image-header-desktop"
      />
      <img
        className="block h-[100%] w-[100%] rounded-tl-xl rounded-tr-xl md:hidden"
        src={ImgHeaderMobile}
        alt="image-header-mobile"
      />
      <div className="absolute top-0 h-[100%] w-[100%] rounded-tl-xl rounded-tr-xl bg-custom-violet/50 md:rounded-tl-none md:rounded-br-xl md:rounded-tr-xl" />
    </div>
  );
};

export default StatsCardImg;
