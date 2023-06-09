//components
import { LuxuryIcon, SedansIcon, SuvsIcon } from "../";

const ColumnCardMain = () => {
  return (
    <div className="my-16 flex h-auto w-[90%] select-none flex-col md:w-[69%] md:flex-row">
      <div className="flex flex-col justify-between rounded-tl-lg rounded-tr-lg bg-bright-orange p-6 md:rounded-bl-lg md:rounded-tl-lg md:rounded-tr-none lg:p-7">
        <SedansIcon className="mb-6" />
        <h1 className="mb-6 font-bigShouldersDisplay text-4xl uppercase text-very-light-gray">
          Sedans
        </h1>
        <p className="mb-14 text-xl text-transparent-white">
          Choose a sedan for its affordability and excellent fuel economy. Ideal
          for cruising in the city or on your next road trip.
        </p>
        <button className="w-[50%] rounded-2xl border-[1px] border-solid bg-very-light-gray py-2 px-4 font-bold text-bright-orange transition-all duration-300 hover:border-very-light-gray hover:bg-bright-orange hover:text-very-light-gray md:w-[100%] md:px-2 lg:w-[66%] lg:px-4">
          Learn More
        </button>
      </div>
      <div className="flex flex-col justify-between bg-dark-cyan p-6 lg:p-7">
        <SuvsIcon className="mb-6" />
        <h1 className="mb-6 font-bigShouldersDisplay text-4xl uppercase text-very-light-gray">
          SUVs
        </h1>
        <p className="mb-14 text-xl text-transparent-white">
          Take an SUV for its spacious interior, power, and versatility. Perfect
          for your next family vacation and off-road adventures.
        </p>
        <button className="w-[50%] rounded-2xl border-[1px] border-solid bg-very-light-gray py-2 px-4 font-bold text-dark-cyan transition-all duration-300 hover:border-very-light-gray hover:bg-dark-cyan hover:text-very-light-gray md:w-[100%] md:px-2 lg:w-[66%] lg:px-4">
          Learn More
        </button>
      </div>
      <div className="flex flex-col justify-between rounded-bl-lg rounded-br-lg bg-very-dark-cyan p-6 md:rounded-tr-lg md:rounded-br-lg md:rounded-bl-none lg:p-7">
        <LuxuryIcon className="mb-6" />
        <h1 className="mb-6 font-bigShouldersDisplay text-4xl uppercase text-very-light-gray">
          Luxury
        </h1>
        <p className="mb-14 text-xl text-transparent-white">
          Cruise in the best car brands without the bloated prices. Enjoy the
          enhanced comfort of a luxury rental and arrive in style.
        </p>
        <button className="w-[50%] rounded-2xl border-[1px] border-solid bg-very-light-gray py-2 px-4 font-bold text-very-dark-cyan transition-all duration-300 hover:border-very-light-gray hover:bg-very-dark-cyan hover:text-very-light-gray md:w-[100%] md:px-2 lg:w-[66%] lg:px-4">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default ColumnCardMain;
