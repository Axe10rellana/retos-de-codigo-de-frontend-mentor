//assets
import illustration from "../assets/images/illustration-mockups.svg";

const LandingPageImage = () => {
  return (
    <div className="mt-12 flex w-[100%] flex-col items-center lg:mt-[6rem] lg:w-[65%] lg:items-start">
      <img src={illustration} alt="illustration-mockups" />
    </div>
  );
};

export default LandingPageImage;
