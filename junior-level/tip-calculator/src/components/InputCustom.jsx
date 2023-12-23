//context
import { useTipCalculator } from "../context/TipCalculatorContext";

const InputCustom = () => {
  //context variables
  const { customTipPercentage, setCustomTipPercentage, handleCustomTipBlur } =
    useTipCalculator();

  return (
    <input
      className="w-full py-2 px-4 text-right text-[24px] border-none text-very-dark-cyan bg-very-light-grayish-cyan rounded-lg outline-strong-cyan"
      type="number"
      name="custom"
      id="custom"
      placeholder="Custom"
      value={customTipPercentage}
      onChange={(e) => setCustomTipPercentage(e.target.value)}
      onBlur={handleCustomTipBlur}
    />
  );
};

export default InputCustom;
