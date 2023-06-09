export default function UserStatsMenu({ active1, active2, active3, handleDaily, handleWeekly, handleMonthly }) {
  return(
    <div className="flex flex-row items-center justify-between gap-x-5 lg:gap-y-5 lg:items-start lg:flex-col p-4 text-desaturated-blue font-light">
          <p onClick={handleDaily} className={`hover:text-pale-blue text-[18px] transition-color duration-300 cursor-pointer capitalize ${active1 && "text-pale-blue" }`}>daily</p>
          <p onClick={handleWeekly} className={`hover:text-pale-blue text-[18px] transition-color duration-300 cursor-pointer capitalize ${active2 && "text-pale-blue"}`}>weekly</p>
          <p onClick={handleMonthly} className={`hover:text-pale-blue text-[18px] transition-color duration-300 cursor-pointer capitalize ${active3 && "text-pale-blue"}`}>monthly</p>
    </div>
  );
};