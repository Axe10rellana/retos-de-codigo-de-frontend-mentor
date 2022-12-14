//components
import { SinglePriceGridHeader, SinglePriceGridMain } from "../";

const SinglePriceGrid = () => {
  return (
    <div className="my-[4rem] flex h-auto w-[85%] select-none flex-col drop-shadow-2xl lg:w-[60%]">
      <SinglePriceGridHeader />
      <SinglePriceGridMain />
    </div>
  );
};

export default SinglePriceGrid;
