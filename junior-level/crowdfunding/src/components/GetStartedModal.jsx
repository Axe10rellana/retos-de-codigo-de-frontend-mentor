//context
import { useCrowdfunding } from "../context/CrowdfundingContext";

//data
import { rewards } from "../data/data";

//components
import { GetStartedModalRewardCard } from ".";

//assets
import closeModal from "../assets/icons/icon-close-modal.svg";

const GetStartedModal = () => {
  //context variables
  const { modalIsOpen, handleModalIsClosed } = useCrowdfunding();

  //variables
  const getStartedModalClasses = modalIsOpen
    ? "absolute z-40 bg-white px-6 py-10 rounded-lg border-2 flex flex-col gap-y-6 w-full opacity-100 transition-opacity duration-500 left-1/2 transform -translate-x-1/2 md:p-10"
    : "hidden";

  return (
    <>
      <section className={getStartedModalClasses}>
        <div className="flex items-center justify-between">
          <h4 className="font-bold text-black">Back this project</h4>
          <img
            className="z-30 select-none cursor-pointer transition-all duration-300 close-modal-icon"
            src={closeModal}
            alt="Icon close modal"
            onClick={handleModalIsClosed}
          />
        </div>
        <p className="text-dark-gray">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <div className="flex flex-col gap-y-5">
          {rewards.map(
            ({
              id,
              title,
              pledgeAmount,
              description,
              quantityLeft,
              disabled,
            }) => (
              <GetStartedModalRewardCard
                key={id}
                title={title}
                pledgeAmount={pledgeAmount}
                description={description}
                quantityLeft={quantityLeft}
                disabled={disabled}
              />
            )
          )}
        </div>
      </section>
    </>
  );
};

export default GetStartedModal;
