//context
import { useTipCalculator } from "../context/TipCalculatorContext";

const CustomButton = ({ id, children }) => {
  //context variables
  const { selectedButton, handleTipButtonClick } = useTipCalculator();

  return (
    <button
      className={`w-full border-none py-2 px-4 cursor-pointer rounded-lg text-[24px] ${
        selectedButton === id
          ? "bg-strong-cyan text-very-dark-cyan"
          : "bg-very-dark-cyan text-white hover:bg-light-grayish-cyan hover:text-very-dark-cyan"
      }`}
      type="button"
      onClick={() => handleTipButtonClick(id)}
    >
      {children}
    </button>
  );
};

export default CustomButton;
