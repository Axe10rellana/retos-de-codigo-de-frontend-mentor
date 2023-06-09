//components
import { YourStats } from "./";

const YourSummary = () => {
  return (
    <div className="flex w-[100%] flex-col gap-y-8 bg-white p-8 md:w-[50%] md:rounded-tr-3xl md:rounded-br-3xl md:shadow-xl md:shadow-cobalt-blue/5">
      <h3 className="text-lg font-bold text-dark-gray-blue">Summary</h3>
      <YourStats />
      <button className="rounded-3xl bg-dark-gray-blue py-4 text-center text-pale-blue transition-all duration-300 hover:bg-gradient-to-t hover:from-light-royal-blue hover:via-light-royal-blue hover:to-light-slate-blue">
        Continue
      </button>
    </div>
  );
};

export default YourSummary;
