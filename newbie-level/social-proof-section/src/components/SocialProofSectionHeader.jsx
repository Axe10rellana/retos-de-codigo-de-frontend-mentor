//components
import { SocialProofStarRating } from "./";

const SocialProofSectionHeader = () => {
  return (
    <div className="flex flex-col items-center gap-y-4 text-center md:flex-row md:items-start md:gap-x-8 md:text-start">
      <div className="mb-4 flex w-[100%] flex-col gap-y-4 md:w-[40%]">
        <h1 className="text-6xl font-bold text-very-dark-magenta">
          10,000+ of our users love our products.
        </h1>
        <p className="text-lg font-medium text-dark-grayish-magenta">
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </p>
      </div>
      <SocialProofStarRating />
    </div>
  );
};

export default SocialProofSectionHeader;
