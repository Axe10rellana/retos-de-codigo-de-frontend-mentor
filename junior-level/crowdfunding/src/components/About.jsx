//context
import { useCrowdfunding } from "../context/CrowdfundingContext";

//data
import { rewards } from "../data/data";

//components
import { AboutInfo, AboutModalCompleted, AboutRewardCard } from ".";

const About = () => {
  //context variables
  const { modalCompletedIsOpen } = useCrowdfunding();

  return (
    <>
      <section
        id="about"
        className="bg-white mt-10 mb-32 mx-5 px-6 py-10 rounded-lg border-2 flex flex-col gap-y-8 md:p-10 md:mx-auto md:w-[60%]"
      >
        <AboutInfo />
        <div className="flex flex-col gap-y-5">
          {rewards
            .slice(1)
            .map(
              ({
                id,
                title,
                pledgeAmount,
                description,
                quantityLeft,
                disabled,
              }) => (
                <AboutRewardCard
                  key={id}
                  id={id}
                  title={title}
                  pledgeAmount={pledgeAmount}
                  description={description}
                  quantityLeft={quantityLeft}
                  disabled={disabled}
                />
              )
            )}
        </div>
        {modalCompletedIsOpen && <AboutModalCompleted />}
      </section>
    </>
  );
};

export default About;
