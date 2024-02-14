//assets
import check from "../assets/icons/icon-check.svg";

const StartMyTrial = () => {
  return (
    <div className="flex flex-col gap-y-8 md:gap-0 md:flex-row md:justify-between items-center pb-[3rem] px-[3rem]">
      <div className="text-sm text-grayish-blue flex items-center md:items-start flex-col gap-y-4">
        <div className="flex items-center gap-x-4">
          <img
            className="pointer-events-none select-none w-3"
            src={check}
            alt="check icon"
          />
          <p>Unlimited websites</p>
        </div>
        <div className="flex items-center gap-x-2 md:gap-x-4">
          <img
            className="pointer-events-none select-none w-3"
            src={check}
            alt="check icon"
          />
          <p>100% data ownership</p>
        </div>
        <div className="flex items-center gap-x-4">
          <img
            className="pointer-events-none select-none w-3"
            src={check}
            alt="check icon"
          />
          <p>Email reports</p>
        </div>
      </div>
      <button className="btn">Start my trial</button>
    </div>
  );
};

export default StartMyTrial;
