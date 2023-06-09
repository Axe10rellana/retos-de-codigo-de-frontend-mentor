//components
import { CardFeatureCard } from "..";

const CardFeatureCardsContainer = () => {
  return (
    <div className="mx-auto flex w-[90%] flex-col items-center justify-between lg:w-[80%] lg:flex-row lg:gap-x-6">
      <CardFeatureCard cardName="Supervisor" />
      <div className="flex w-[100%] flex-col lg:gap-y-6">
        <CardFeatureCard cardName="Team Builder" />
        <CardFeatureCard cardName="Karma" />
      </div>
      <CardFeatureCard cardName="Calculator" />
    </div>
  );
};

export default CardFeatureCardsContainer;
