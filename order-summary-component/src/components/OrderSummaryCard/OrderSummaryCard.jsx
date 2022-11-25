//componentes
import { IllustrationHero, MusicIcon } from "../";

const OrderSummaryCard = () => {
  return (
    <div className="mx-auto mt-[-11rem] mb-[1.5rem] flex w-[85%] select-none flex-col rounded-2xl bg-white drop-shadow-2xl sm:w-[45%] md:mt-[-26rem] lg:w-[30%]">
      <IllustrationHero className="mb-6 w-[100%] rounded-tl-2xl rounded-tr-2xl" />
      <div className="flex flex-col p-4 text-center">
        <h1 className="mb-6 text-[1.5rem] font-black leading-none text-dark-blue">
          Order Summary
        </h1>
        <p className="mb-6 text-desaturated-blue">
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className="mb-6 flex items-center justify-between rounded-2xl bg-very-pale-blue px-3 py-6 sm:px-2 md:px-6">
          <div className="flex items-center gap-x-6">
            <MusicIcon className="w-[100%]" />
            <div className="flex flex-col">
              <h2 className="font-bold">Annual Plan</h2>
              <span className="text-desaturated-blue">$59.99/year</span>
            </div>
          </div>
          <a
            className="font-bold text-bright-blue underline transition-all duration-300 hover:text-opacity-blue"
            href="#"
          >
            Change
          </a>
        </div>
        <button className="mb-6 w-[100%] rounded-2xl bg-bright-blue py-3 text-center text-white drop-shadow-2xl transition-all duration-300 hover:bg-opacity-blue">
          Proceed to Payment
        </button>
        <button className="w-[100%] bg-white py-2 text-center font-bold text-desaturated-blue transition-all duration-300 hover:text-dark-blue">
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default OrderSummaryCard;
