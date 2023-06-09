//components
import { CardFeatureCardsContainer, CardFeatureHeader } from "..";

const CardFeature = () => {
  return (
    <div className="my-[5rem] mx-4 flex h-auto select-none flex-col">
      <CardFeatureHeader />
      <CardFeatureCardsContainer />
    </div>
  );
};

export default CardFeature;
