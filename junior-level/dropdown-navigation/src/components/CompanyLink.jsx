//react
import { useContext } from "react";

//components
import { CompanyLinkButton, CompanyLinkSublist } from "./";

//context
import NavbarContext from "../context/NavbarContext";

const CompanyLink = () => {
  //context variables
  const { openCompany } = useContext(NavbarContext);

  return (
    <div>
      <CompanyLinkButton />
      {openCompany && <CompanyLinkSublist />}
    </div>
  );
};

export default CompanyLink;
