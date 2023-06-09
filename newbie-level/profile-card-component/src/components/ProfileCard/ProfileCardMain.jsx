//components
import { PatternCardIcon } from "../";

//assets
import { UserImg } from "../../assets";

const ProfileCardMain = () => {
  return (
    <div className="relative my-[7rem] mx-6 flex h-auto w-[350px] select-none flex-col items-center justify-between rounded-xl bg-white">
      <PatternCardIcon className="h-[100%] w-[100%] rounded-t-xl" />
      <img
        className="absolute bottom-[53%] w-[80px] rounded-full border-[4px] border-solid border-white"
        src={UserImg}
        alt="image-victor"
      />
      <h1 className="mb-2 mt-14 text-[18px] font-bold text-very-dark-desaturated-blue">
        Victor Crest{" "}
        <span className="font-normal text-dark-grayish-blue">26</span>
      </h1>
      <p className="mb-6 text-[14px] text-dark-gray">London</p>
      <hr className="mb-6 w-[100%] border-[1px] border-solid border-dark-gray/10" />
      <div className="mb-6 flex w-[65%] justify-between text-center">
        <div className="flex flex-col gap-y-2">
          <h2 className="text-[18px] font-bold text-very-dark-desaturated-blue">
            80K
          </h2>
          <p className="text-[12px] tracking-widest text-dark-gray">
            Followers
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-[18px] font-bold text-very-dark-desaturated-blue">
            803K
          </h2>
          <p className="text-[12px] tracking-widest text-dark-gray">Likes</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="text-[18px] font-bold text-very-dark-desaturated-blue">
            1.4K
          </h2>
          <p className="text-[12px] tracking-widest text-dark-gray">Photos</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCardMain;
