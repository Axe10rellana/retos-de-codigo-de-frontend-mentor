//context
import { useCrowdfunding } from "../context/CrowdfundingContext";

const AboutRewardCard = ({
  id,
  title,
  pledgeAmount,
  description,
  quantityLeft,
  disabled,
}) => {
  //context variables
  const { handleModalCompletedIsOpen, selectedModal } = useCrowdfunding();

  return (
    <div
      className={`flex flex-col gap-y-6 p-6 border-2 rounded-lg ${
        disabled ? "border-gray-200 select-none" : "border-gray-300"
      }`}
    >
      <div className="flex flex-col gap-y-2 md:flex-row md:justify-between md:gap-0">
        <h3
          className={`font-bold ${disabled ? "text-dark-gray" : "text-black"}`}
        >
          {title}
        </h3>
        <p
          className={`${
            disabled ? "text-moderate-cyan/50" : "text-moderate-cyan"
          }`}
          id={selectedModal === id ? "pledgeAbout" : undefined}
        >
          Pledge ${pledgeAmount} or more
        </p>
      </div>
      <p className={`${disabled ? "text-dark-gray/50" : "text-dark-gray"}`}>
        {description}
      </p>
      <div className="flex flex-col items-start gap-y-4 md:flex-row md:justify-between md:gap-0 md:items-center">
        <div className="flex flex-row gap-x-2 items-center">
          <h2
            className={`font-bold text-4xl md:text-3xl lg:text-4xl ${
              disabled ? "text-dark-gray" : "text-black"
            }`}
            id={selectedModal === id ? "quantityAbout" : undefined}
          >
            {quantityLeft}
          </h2>
          <p className={`${disabled ? "text-dark-gray/50" : "text-dark-gray"}`}>
            left
          </p>
        </div>
        <button
          disabled={disabled}
          className={`rounded-full py-4 px-11 text-white text-sm font-bold transition-all duration-300 ${
            disabled
              ? "bg-dark-gray/50 cursor-not-allowed"
              : "bg-moderate-cyan hover:bg-dark-cyan"
          }`}
          onClick={() => handleModalCompletedIsOpen(id)}
        >
          {disabled ? "Out of stock" : "Select Reward"}
        </button>
      </div>
    </div>
  );
};

export default AboutRewardCard;
