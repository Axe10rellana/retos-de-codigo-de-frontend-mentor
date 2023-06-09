//components
import { AboutLink, CareersLink, CompanyLink, FeaturesLink } from "./";

const NavMenuLinks = ({}) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-10 gap-y-5">
      <FeaturesLink />
      <CompanyLink />
      <CareersLink />
      <AboutLink />
    </div>
  );
};

export default NavMenuLinks;
