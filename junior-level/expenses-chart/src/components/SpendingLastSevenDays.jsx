//components
import { Chart, TotalThisMonth } from "./";

const SpendingLastSevenDays = () => {
  return (
    <div className="flex flex-col p-6 gap-y-5 rounded-2xl bg-very-pale-orange">
      <h2 className="text-dark-brown font-bold text-2xl sm:text-3xl mb-9">
        Spending - Last 7 days
      </h2>
      <Chart />
      <hr className="border-[1px] border-solid border-custom-cream" />
      <TotalThisMonth />
    </div>
  );
};

export default SpendingLastSevenDays;
