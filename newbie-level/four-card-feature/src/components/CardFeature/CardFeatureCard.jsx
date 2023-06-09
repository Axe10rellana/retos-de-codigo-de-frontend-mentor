//components
import {
  CalculatorIcon,
  KarmaIcon,
  SupervisorIcon,
  TeamBuilderIcon,
} from "../";

const CardFeatureCard = ({ cardName }) => {
  return (
    <>
      {cardName === "Supervisor" && (
        <div className="mb-8 flex w-[100%] flex-col justify-between rounded-xl border-[4px] border-x-white border-b-white border-t-custom-cyan bg-white drop-shadow-2xl lg:mb-0">
          <div className="flex flex-col items-start p-6">
            <h2 className="mb-2 text-2xl font-semibold text-very-dark-blue">
              Supervisor
            </h2>
            <p className="text-sm text-grayish-blue">
              Monitors activity to identify project roadblocks
            </p>
          </div>
          <div className="flex flex-col items-end p-6">
            <SupervisorIcon />
          </div>
        </div>
      )}
      {cardName === "Team Builder" && (
        <div className="mb-8 flex w-[100%] flex-col justify-between rounded-xl border-[4px] border-x-white border-b-white border-t-custom-red bg-white drop-shadow-2xl lg:mb-0">
          <div className="flex flex-col items-start p-6">
            <h2 className="mb-2 text-2xl font-semibold text-very-dark-blue">
              Team Builder
            </h2>
            <p className="text-sm text-grayish-blue">
              Scans our talent network to create the optimal team for your
              project
            </p>
          </div>
          <div className="flex flex-col items-end p-6">
            <TeamBuilderIcon />
          </div>
        </div>
      )}
      {cardName === "Karma" && (
        <div className="mb-8 flex w-[100%] flex-col justify-between rounded-xl border-[4px] border-x-white border-b-white border-t-custom-orange bg-white drop-shadow-2xl lg:mb-0">
          <div className="flex flex-col items-start p-6">
            <h2 className="mb-2 text-2xl font-semibold text-very-dark-blue">
              Karma
            </h2>
            <p className="text-sm text-grayish-blue">
              Regularly evaluates our talent to ensure quality
            </p>
          </div>
          <div className="flex flex-col items-end p-6">
            <KarmaIcon />
          </div>
        </div>
      )}
      {cardName === "Calculator" && (
        <div className="flex w-[100%] flex-col justify-between rounded-xl border-[4px] border-x-white border-b-white border-t-custom-blue bg-white drop-shadow-2xl">
          <div className="flex flex-col items-start p-6">
            <h2 className="mb-2 text-2xl font-semibold text-very-dark-blue">
              Calculator
            </h2>
            <p className="text-sm text-grayish-blue">
              Uses data from past projects to provide better delivery estimates
            </p>
          </div>
          <div className="flex flex-col items-end p-6">
            <CalculatorIcon />
          </div>
        </div>
      )}
    </>
  );
};

export default CardFeatureCard;
