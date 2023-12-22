//components
import { ButtonGroup } from ".";

const InputSelectTip = ({
  selectedButton,
  handleTipButtonClick,
  customTipPercentage,
  setCustomTipPercentage,
  handleCustomTipBlur,
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <label className="text-dark-grayish-cyan">Select Tip %</label>
      <ButtonGroup
        selectedButton={selectedButton}
        handleTipButtonClick={handleTipButtonClick}
        customTipPercentage={customTipPercentage}
        setCustomTipPercentage={setCustomTipPercentage}
        handleCustomTipBlur={handleCustomTipBlur}
      />
    </div>
  );
};

export default InputSelectTip;
