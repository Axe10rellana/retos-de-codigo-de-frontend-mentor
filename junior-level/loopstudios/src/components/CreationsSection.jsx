//components
import { CreationsGrid } from ".";

const CreationsSection = () => {
  return (
    <div className="flex flex-col gap-y-10 select-none">
      <div className="flex justify-center md:items-center md:flex-row md:justify-between">
        <h2 className="text-3xl font-josefin uppercase select-none">
          Our creations
        </h2>
        <button className="hidden md:block font-bold font-josefin uppercase py-2 px-10 transition-colors duration-500 border-2 border-dark-gray hover:border-black hover:bg-black hover:text-white">
          See all
        </button>
      </div>
      <CreationsGrid />
      <button className="block md:hidden font-bold font-josefin uppercase mx-auto w-[60%] py-2 px-6 transition-colors duration-500 border-2 border-dark-gray hover:border-black hover:bg-black hover:text-white">
        See all
      </button>
    </div>
  );
};

export default CreationsSection;
