//componentes
import { AngleLeftIcon, AngleRightIcon } from "../";

const SlideController = ({ handlePrev, handleNext }) => {
  return (
    <div className="col-start-3 col-end-4 row-start-2 row-end-3 flex bg-black text-white lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3">
      <button
        onClick={handlePrev}
        className="w-full transition-all duration-500 hover:bg-very-dark-gray"
      >
        <AngleLeftIcon className="mx-auto" />
      </button>
      <button
        onClick={handleNext}
        className="w-full transition-all duration-500 hover:bg-very-dark-gray"
      >
        <AngleRightIcon className="mx-auto" />
      </button>
    </div>
  );
};

export default SlideController;
