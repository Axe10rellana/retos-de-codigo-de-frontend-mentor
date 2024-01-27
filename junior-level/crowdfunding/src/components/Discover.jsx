//data
import { stats } from "../data/data";

//components
import { DiscoverProgressBar, DiscoverProgressBarInfo } from ".";

const Discover = () => {
  return (
    <>
      <section
        id="discover"
        className="bg-white mt-10 mx-5 px-6 py-10 rounded-lg border-2 text-center flex flex-col items-center justify-center gap-y-5 md:text-start md:mx-auto md:w-[60%]"
      >
        <div className="flex flex-col items-center justify-center gap-y-5 md:flex-row md:justify-start md:gap-x-5 lg:gap-x-11 w-full">
          {stats.map(({ id, amount, information }) => (
            <DiscoverProgressBarInfo
              key={id}
              amount={amount}
              information={information}
            />
          ))}
        </div>
        <DiscoverProgressBar />
      </section>
    </>
  );
};

export default Discover;
