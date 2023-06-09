const InformationToSubscribe = () => {
  return (
    <div className="flex flex-col items-center lg:items-start lg:py-24 gap-y-4 lg:gap-y-16">
      <h1 className="text-almost-black font-bold text-3xl sm:text-5xl lg:text-6xl">
        Make remote work
      </h1>
      <p className="text-medium-gray text-center lg:text-start">
        Get your team in sync, no matter your location. Streamline processes,
        create team rituals, and watch productivity soar.
      </p>
      <button className="py-4 px-8 outline-none border-solid border-[3px] bg-almost-black text-almost-white rounded-2xl transition-colors duration-500 hover:bg-almost-white hover:text-almost-black hover:border-almost-black">
        Learn more
      </button>
    </div>
  );
};

export default InformationToSubscribe;
