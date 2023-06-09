//react
import { useContext } from "react";

//assets
import iconArrowDown from "../assets/images/icon-arrow-down.svg";
import iconArrowUp from "../assets/images/icon-arrow-up.svg";

//context
import NavbarContext from "../context/NavbarContext";

const CompanyLinkButton = () => {
  //context variables
  const { openCompany, setOpenCompany } = useContext(NavbarContext);

  return (
    <button
      onClick={() => setOpenCompany(!openCompany)}
      className={`flex items-center outline-none justify-start transition-colors duration-300 text-medium-gray hover:text-almost-black`}
    >
      Company{" "}
      {openCompany ? (
        <img
          src={iconArrowUp}
          alt="icon-arrow-up"
          className="ml-2 pointer-events-none"
        />
      ) : (
        <img
          src={iconArrowDown}
          alt="icon-arrow-down"
          className="ml-2 pointer-events-none"
        />
      )}
    </button>
  );
};

export default CompanyLinkButton;
