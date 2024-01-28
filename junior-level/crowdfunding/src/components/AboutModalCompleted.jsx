//context
import { useCrowdfunding } from "../context/CrowdfundingContext";

//assets
import check from "../assets/icons/icon-check.svg";

const AboutModalCompleted = () => {
  //context variables
  const { modalCompletedIsOpen, handleModalCompletedIsClosed, selectedModal } =
    useCrowdfunding();

  //variables
  const aboutModalCompletedClasses = modalCompletedIsOpen
    ? "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 bg-white text-center px-6 py-10 rounded-lg border-2 flex flex-col gap-y-6 opacity-100 w-[90%] sm:w-[90%] md:w-[50%] transition-opacity duration-500 md:p-10"
    : "hidden";

  return (
    <>
      <section className={aboutModalCompletedClasses}>
        <img
          className="pointer-events-none select-none w-24 h-24 mx-auto"
          src={check}
          alt="Icon check"
        />
        <h2 className="font-bold text-black text-2xl">
          Thanks for your support!
        </h2>
        <p className="text-dark-gray">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          className="w-28 py-4 mx-auto font-bold rounded-full text-sm transition-all duration-300 text-white bg-moderate-cyan hover:bg-dark-cyan"
          onClick={() => handleModalCompletedIsClosed(selectedModal)}
        >
          Got it!
        </button>
      </section>
    </>
  );
};

export default AboutModalCompleted;
