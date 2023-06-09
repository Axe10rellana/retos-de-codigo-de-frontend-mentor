//components
import { BackCard, FrontCard } from "./";

const CardDetails = ({ formValues }) => {
  return (
    <div className="flex flex-col-reverse lg:mx-10 lg:gap-y-20 lg:flex-col w-[90%] lg:w-[40%]">
      <FrontCard formValues={formValues} />
      <BackCard formValues={formValues} />
    </div>
  );
};

export default CardDetails;
