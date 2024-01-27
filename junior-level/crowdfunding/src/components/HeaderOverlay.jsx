//context
import { useCrowdfunding } from "../context/CrowdfundingContext";

const HeaderOverlay = () => {
  //context variables
  const { isOpen } = useCrowdfunding();

  //variables
  const overlayClasses = isOpen
    ? "fixed z-20 top-0 left-0 h-full w-full bg-black/75 opacity-100 md:hidden transition-opacity duration-500"
    : "hidden";

  return <span className={overlayClasses}></span>;
};

export default HeaderOverlay;
