//components
import LandingPageFooter from "./LandingPageFooter";

const LandingPageSectionInformation = () => {
  return (
    <div className="mt-[6rem] flex w-[100%] flex-col items-center text-white lg:mt-0 lg:w-[35%]">
      <div className="mb-[9rem] flex flex-col items-center text-center lg:mb-0 lg:items-start lg:text-start">
        <h1 className="mb-8 font-poppins text-3xl font-semibold lg:text-4xl">
          Build The Community Your Fans Will Love
        </h1>
        <p className="mb-8 text-white/80">
          Huddle re-imagines the way we build communities. You have a voice, but
          so does your audience. Create connections with your users as you
          engage in genuine discussion.
        </p>
        <button className="w-[70%] rounded-3xl bg-white py-3 text-gray-500 transition-all duration-300 hover:bg-soft-magenta hover:text-white lg:w-[40%]">
          Register
        </button>
      </div>
      <LandingPageFooter />
    </div>
  );
};

export default LandingPageSectionInformation;
