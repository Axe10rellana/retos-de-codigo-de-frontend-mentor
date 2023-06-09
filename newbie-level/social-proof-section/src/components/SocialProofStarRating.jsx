//assets
import starIcon from "../assets/images/icon-star.svg";

const SocialProofStarRating = () => {
  return (
    <div className="flex w-[100%] flex-col gap-y-4 md:w-[60%]">
      <div className="flex w-[100%] flex-col items-center justify-center gap-x-4 rounded-lg bg-light-grayish-magenta py-4 md:w-[80%] md:flex-row md:self-start">
        <div className="mb-2 flex gap-x-2">
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
        </div>
        <p className="text-lg font-bold text-very-dark-magenta md:text-sm lg:text-lg">
          Rated 5 Stars in Reviews
        </p>
      </div>
      <div className="flex w-[100%] flex-col items-center justify-center gap-x-4 rounded-lg bg-light-grayish-magenta py-4 md:w-[80%] md:flex-row md:self-center">
        <div className="mb-2 flex gap-x-2">
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
        </div>
        <p className="text-lg font-bold text-very-dark-magenta md:text-sm lg:text-lg">
          Rated 5 Stars in Report Guru
        </p>
      </div>
      <div className="flex w-[100%] flex-col items-center justify-center gap-x-4 rounded-lg bg-light-grayish-magenta py-4 md:w-[80%] md:flex-row md:self-end">
        <div className="mb-2 flex gap-x-2">
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
          <img className="h-[20px] w-[20px]" src={starIcon} alt="icon-star" />
        </div>
        <p className="text-lg font-bold text-very-dark-magenta md:text-sm lg:text-lg">
          Rated 5 Stars in BestTech
        </p>
      </div>
    </div>
  );
};

export default SocialProofStarRating;
