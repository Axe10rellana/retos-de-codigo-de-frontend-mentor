const StatsCardInfo = () => {
  return (
    <div className="flex flex-col justify-between rounded-bl-xl rounded-br-xl bg-dark-desaturated-blue-card-bg p-8 text-center md:w-[50%] md:rounded-br-none md:rounded-tl-xl md:rounded-bl-xl md:py-12 md:pl-12 md:pr-16 md:text-left lg:py-[6rem]">
      <div className="flex flex-col">
        <h1 className="mb-6 text-3xl font-bold leading-none text-white lg:text-[2.5rem]">
          Get <span className="text-soft-violet">insights</span> that help your
          business grow.
        </h1>
        <p className="text-md mb-8 text-slightly-transparent-white-main-p md:text-xl">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
      </div>
      <div className="flex flex-col items-center gap-x-0 gap-y-4 uppercase md:flex-row md:gap-x-4 md:gap-y-0 lg:gap-x-10">
        <div className="flex flex-col gap-y-2">
          <h2 className="md:text-md text-2xl font-bold normal-case text-white lg:text-[2rem]">
            10k+
          </h2>
          <p className="text-md tracking-wide text-slightly-transparent-white-stat-h md:text-xs lg:text-lg">
            companies
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="md:text-md text-2xl font-bold text-white lg:text-[2rem]">
            314
          </h2>
          <p className="text-md tracking-wide text-slightly-transparent-white-stat-h md:text-xs lg:text-lg">
            templates
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <h2 className="md:text-md text-2xl font-bold text-white lg:text-[2rem]">
            12m+
          </h2>
          <p className="text-md tracking-wide text-slightly-transparent-white-stat-h md:text-xs lg:text-lg">
            queries
          </p>
        </div>
      </div>
    </div>
  );
};

export default StatsCardInfo;
