//react
import { useState } from "react";

//assets
import iconArrowDown from "../assets/images/icon-arrow-down.svg";

const Accordion = ({ item }) => {
  //state variables
  const [expandedItems, setExpandedItems] = useState(false);

  return (
        <div className="flex flex-col gap-y-2">
          <div
            onClick={() => setExpandedItems(!expandedItems)}
            className="flex cursor-pointer flex-row items-center justify-between"
          >
            <h2
              className={`text-lg transition-all duration-300 hover:text-soft-red ${
                expandedItems
                  ? "font-bold text-very-dark-desaturated-blue"
                  : "text-very-dark-grayish-blue"
              }`}
            >
              {item.title}
            </h2>
            <img
              className={`pointer-events-none mr-0 h-[12px] w-[12px] transition-all duration-300 lg:mr-2 ${
                expandedItems ? "rotate-180" : "rotate-0"
              }`}
              src={iconArrowDown}
              alt="icon-arrow-down"
            />
          </div>
          <p
            className={`text-dark-grayish-blue transition-all duration-300 ${
              expandedItems ? "block" : "hidden"
            }`}
          >
            {item.content}
          </p>
          <hr className="border-[1px] border-solid border-light-grayish-blue" />
        </div>
  );
};

export default Accordion;
