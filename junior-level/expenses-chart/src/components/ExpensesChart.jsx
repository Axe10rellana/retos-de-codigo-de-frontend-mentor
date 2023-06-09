//components
import { Balance, SpendingLastSevenDays } from "./";

const ExpensesChart = () => {
  return (
    <div className="flex flex-col gap-y-5 w-[90%] sm:w-[500px]">
      <Balance />
      <SpendingLastSevenDays />
    </div>
  );
};

export default ExpensesChart;
