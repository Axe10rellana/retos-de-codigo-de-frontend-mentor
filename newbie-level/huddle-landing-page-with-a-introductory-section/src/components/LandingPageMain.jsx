//components
import { LandingPageImage, LandingPageSectionInformation } from ".";

const LandingPageMain = () => {
  return (
    <div className="absolute top-0 mx-10 mt-[6rem] flex flex-col items-center lg:mx-[5rem] lg:mt-10 lg:flex-row">
      <LandingPageImage />
      <LandingPageSectionInformation />
    </div>
  );
};

export default LandingPageMain;
