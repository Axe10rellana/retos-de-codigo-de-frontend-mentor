//components
import {Dashboard, UserReport} from "./";

export default function TimeTrackingDashboard({active1, active2, active3, handleDaily, handleWeekly, handleMonthly, options}) {
  return(
    <div className="flex flex-col items-center lg:justify-between lg:flex-row gap-y-2 lg:gap-x-2 w-[90%] h-[100%] lg:h-[410px]">
     <UserReport active1={active1} active2={active2} active3={active3} handleDaily={handleDaily} handleWeekly={handleWeekly} handleMonthly={handleMonthly} />
     <Dashboard active1={active1} active2={active2} active3={active3} options={options} />
    </div>
  );
}