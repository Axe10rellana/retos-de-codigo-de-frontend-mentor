//context
import { useCrowdfunding } from "../context/CrowdfundingContext";

const GetStartedModalRewardCard = ({
  title,
  pledgeAmount,
  description,
  quantityLeft,
  disabled,
}) => {
  //context variables
  const {
    selectedOption,
    radioValues,
    handleRadioChange,
    handleButtonContinue,
    handleInputIntegerNumbers,
  } = useCrowdfunding();

  return (
    <div
      className={`flex flex-col gap-y-6 border-[3px] rounded-lg ${
        disabled ? "border-gray-200 select-none" : "border-gray-300"
      } ${
        selectedOption === title ? "border-moderate-cyan" : "border-gray-300"
      }`}
    >
      <div className="flex md:items-center md:flex-row md:justify-between px-6 mt-6">
        <div
          className={`flex items-center flex-row gap-x-4 reward-title-modal ${
            disabled ? "cursor-default" : "cursor-pointer"
          } ${selectedOption === title && "selected-cursor-default"}`}
        >
          <input
            className={`${
              disabled
                ? "w-6 h-6 appearance-none rounded-full ring-2 ring-gray-100"
                : "checked:bg-moderate-cyan checked:ring-0 radio-button-modal"
            }`}
            type="radio"
            name="pledgeOption"
            value={title}
            onChange={() => handleRadioChange(title)}
            checked={selectedOption === title}
            disabled={disabled}
          />
          <div className="flex flex-col gap-y-1 md:flex-row md:gap-x-4">
            <h3
              className={`md:text-sm lg:text-lg ${
                disabled ? "font-bold text-dark-gray" : "title"
              } ${selectedOption === title && "selected-title-color"}`}
            >
              {title}
            </h3>
            {pledgeAmount !== null && (
              <h4
                className={`md:text-sm lg:text-lg ${
                  disabled ? "text-moderate-cyan/50" : "pledge-amount"
                } ${selectedOption === title && "selected-pledge-color"}`}
              >
                Pledge ${pledgeAmount} or more
              </h4>
            )}
          </div>
        </div>
        {quantityLeft !== null && (
          <div className="hidden md:flex flex-row gap-x-4 items-center">
            <h2
              className={`font-bold md:text-sm lg:text-lg ${
                disabled ? "text-dark-gray" : "text-black"
              }`}
            >
              {quantityLeft}
            </h2>
            <p
              className={`md:text-sm lg:text-lg ${
                disabled ? "text-dark-gray/50" : "text-dark-gray"
              }`}
            >
              left
            </p>
          </div>
        )}
      </div>

      <p
        className={`md:pl-16 px-6 ${
          disabled ? "text-dark-gray/50" : "text-dark-gray"
        } ${
          selectedOption === title &&
          quantityLeft === null &&
          pledgeAmount === null
            ? "mb-6"
            : selectedOption === title &&
              quantityLeft !== null &&
              pledgeAmount !== null
            ? "mb-0"
            : selectedOption !== title && "mb-6"
        }`}
      >
        {description}
      </p>

      {selectedOption === title &&
        quantityLeft !== null &&
        pledgeAmount !== null && (
          <div className="hidden border-t-gray-200 border-2 md:flex flex-row items-center justify-between py-4 md:px-4 lg:px-6">
            <p className="text-dark-gray w-[40%]">Enter your pledge</p>
            <div className="flex flex-row items-center justify-end md:gap-x-1 lg:gap-x-4 w-[62%]">
              <div className="relative w-[100%] flex flex-row">
                <span className="absolute inset-y-0 left-1 flex items-center pl-4 text-gray-400">
                  $
                </span>
                <input
                  className="font-bold text-black border-[3px] border-gray-300 py-4 md:px-8 lg:px-10 rounded-full placeholder:text-gray-400 focus:outline-moderate-cyan w-[100%] focus:cursor-pointer pl-8"
                  type="text"
                  name="pledge"
                  id="pledge"
                  autoComplete="off"
                  placeholder="0"
                  value={
                    radioValues[selectedOption] !== undefined
                      ? radioValues[selectedOption]
                      : pledgeAmount
                  }
                  onChange={(e) => handleInputIntegerNumbers(e, selectedOption)}
                  required
                />
              </div>

              <button
                type="submit"
                onClick={handleButtonContinue}
                className="w-[100%] py-4 md:px-4 lg:px-6 rounded-full transition-all duration-300 text-white bg-moderate-cyan hover:bg-dark-cyan"
              >
                Continue
              </button>
            </div>
          </div>
        )}

      {quantityLeft !== null && (
        <div
          className={`flex flex-row gap-x-4 px-6 items-center md:hidden ${
            selectedOption === title ? "mb-0" : "mb-6 -mt-6"
          }`}
        >
          <h2
            className={`font-bold ${
              disabled ? "text-dark-gray" : "text-black"
            }`}
          >
            {quantityLeft}
          </h2>
          <p className={`${disabled ? "text-dark-gray/50" : "text-dark-gray"}`}>
            left
          </p>
        </div>
      )}

      {selectedOption === title &&
        quantityLeft !== null &&
        pledgeAmount !== null && (
          <div className="border-t-gray-200 border-2 flex flex-col items-center py-6 gap-y-6 md:hidden">
            <p className="text-dark-gray">Enter your pledge</p>
            <div className="flex items-center justify-center flex-row gap-x-2 w-[90%]">
              <div className="relative w-[100%] flex flex-row">
                <span className="absolute inset-y-0 left-1 flex items-center pl-5 text-gray-400">
                  $
                </span>
                <input
                  className="font-bold text-black border-[3px] border-gray-300 py-4 rounded-full placeholder:text-gray-400 focus:outline-moderate-cyan w-[100%] focus:cursor-pointer pl-8"
                  type="text"
                  name="pledge"
                  id="pledge"
                  autoComplete="off"
                  placeholder="0"
                  value={
                    radioValues[selectedOption] !== undefined
                      ? radioValues[selectedOption]
                      : pledgeAmount
                  }
                  onChange={(e) => handleInputIntegerNumbers(e, selectedOption)}
                  required
                />
              </div>
              <button
                type="submit"
                onClick={handleButtonContinue}
                className="w-[100%] font-bold py-4 px-6 rounded-full transition-all duration-300 text-white bg-moderate-cyan hover:bg-dark-cyan"
              >
                Continue
              </button>
            </div>
          </div>
        )}
    </div>
  );
};

export default GetStartedModalRewardCard;
