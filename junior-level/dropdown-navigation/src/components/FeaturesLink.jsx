//react
import { useContext } from "react";

//components
import { FeaturesLinkButton, FeaturesLinkSublist } from "./";

//context
import NavbarContext from "../context/NavbarContext";

const FeaturesLink = () => {
  //context variables
  const { openFeatures } = useContext(NavbarContext);

  return (
    <div>
      <FeaturesLinkButton />
      {openFeatures && <FeaturesLinkSublist />}
    </div>
  );
};

export default FeaturesLink;
