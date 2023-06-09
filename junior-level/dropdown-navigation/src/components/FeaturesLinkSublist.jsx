//assets
import iconCalendar from "../assets/images/icon-calendar.svg";
import iconPlanning from "../assets/images/icon-planning.svg";
import iconReminders from "../assets/images/icon-reminders.svg";
import iconTodo from "../assets/images/icon-todo.svg";

const FeaturesLinkSublist = () => {
  return (
    <ul className="mt-3 ml-5 lg:ml-0 lg:px-4 lg:py-3 rounded-2xl lg:shadow-2xl shadow-almost-black">
      <li className="flex cursor-pointer text-medium-gray items-center justify-start text-sm mb-4 lg:mb-2">
        <img src={iconTodo} alt="" className="mr-2 pointer-events-none" /> Todo
        List
      </li>
      <li className="flex cursor-pointer text-medium-gray items-center justify-start text-sm mb-4 lg:mb-2">
        <img src={iconCalendar} alt="" className="mr-2 pointer-events-none" />{" "}
        Calendar
      </li>
      <li className="flex cursor-pointer text-medium-gray items-center justify-start text-sm mb-4 lg:mb-2">
        <img src={iconReminders} alt="" className="mr-2 pointer-events-none" />{" "}
        Reminders
      </li>
      <li className="flex cursor-pointer text-medium-gray items-center justify-start text-sm">
        <img src={iconPlanning} alt="" className="mr-2 pointer-events-none" />{" "}
        Planning
      </li>
    </ul>
  );
};

export default FeaturesLinkSublist;
