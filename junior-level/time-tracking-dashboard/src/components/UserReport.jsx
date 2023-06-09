//components
import {UserInfo, UserStatsMenu} from "./";

//assets
import jeremy from "../assets/images/image-jeremy.png";

export default function UserReport({active1, active2, active3, handleDaily, handleWeekly, handleMonthly}) {
  return(
    <div className="flex flex-col h-[100%] bg-dark-blue rounded-lg w-[100%] lg:w-[30%]">
      <UserInfo />
      <UserStatsMenu active1={active1} active2={active2} active3={active3} handleDaily={handleDaily} handleWeekly={handleWeekly} handleMonthly={handleMonthly} />
    </div>
  );
};