//context
import { useCrowdfunding } from "../context/CrowdfundingContext";

//components
import {
  GetStartedButtons,
  GetStartedInfo,
  GetStartedLogo,
  GetStartedModal,
} from ".";

const GetStarted = () => {
  //context variables
  const { modalIsOpen } = useCrowdfunding();

  return (
    <>
      <section
        id="getstarted"
        className="relative bg-white -mt-20 mx-5 px-6 rounded-lg border-2 md:mx-auto md:w-[60%]"
      >
        <GetStartedLogo />
        <GetStartedInfo />
        <GetStartedButtons />
        {modalIsOpen && <GetStartedModal />}
      </section>
    </>
  );
};

export default GetStarted;
