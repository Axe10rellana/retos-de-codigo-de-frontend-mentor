//assets
import avatarMichelle from "../assets/images/avatar-michelle.jpg";

//components
import { IconFacebook, IconPinterest, IconShare, IconTwitter } from "./";

const MenuMobile = ({ click, handleClick }) => {
  return (
    <div
      className={`flex w-[100%] flex-row items-center justify-between px-10 py-4 transition-all duration-300 md:hidden ${
        click ? "bg-very-dark-grayish-blue" : "bg-white"
      }`}
    >
      {click ? (
        <div className="flex flex-row items-center justify-center gap-x-4">
          <h2 className="sm:text-md xs:text-xl uppercase tracking-[0.3rem] text-desaturated-dark-blue">
            Share
          </h2>
          <div className="flex flex-row items-center justify-center gap-x-4">
            <div className="flex h-[22px] w-[22px] cursor-pointer items-center justify-center ">
              <IconFacebook />
            </div>
            <div className="flex h-[22px] w-[22px] cursor-pointer items-center justify-center ">
              <IconTwitter />
            </div>
            <div className="flex h-[22px] w-[22px] cursor-pointer items-center justify-center ">
              <IconPinterest />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center gap-x-4">
          <img
            className="pointer-events-none h-[40px] w-[40px] rounded-full"
            src={avatarMichelle}
            alt="avatar-michelle"
          />
          <div className="flex flex-col gap-y-1">
            <h2 className="text-md font-bold text-very-dark-grayish-blue">
              Michelle Appleton
            </h2>
            <p className="text-grayish-blue">28 Jun 2020</p>
          </div>
        </div>
      )}
      <button
        type="button"
        className={`z-50 flex h-[40px] w-[40px] outline-none items-center justify-center rounded-full ${
          click ? "bg-desaturated-dark-blue " : "bg-light-grayish-blue "
        }`}
        onClick={handleClick}
      >
        <IconShare
          className="pointer-events-none"
          color={click ? "#ffffff" : "#6E8098"}
        />
      </button>
    </div>
  );
};

export default MenuMobile;
