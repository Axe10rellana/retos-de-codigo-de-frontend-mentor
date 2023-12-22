//components
import { CustomButton, InputCustom } from ".";

const ButtonGroup = ({
  selectedButton,
  handleTipButtonClick,
  customTipPercentage,
  setCustomTipPercentage,
  handleCustomTipBlur,
}) => {
  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-4 lg:grid-cols-3 lg:grid-rows-2">
      <CustomButton
        id={5}
        selectedButton={selectedButton}
        handleClick={handleTipButtonClick}
      >
        %5
      </CustomButton>
      <CustomButton
        id={10}
        selectedButton={selectedButton}
        handleClick={handleTipButtonClick}
      >
        %10
      </CustomButton>
      <CustomButton
        id={15}
        selectedButton={selectedButton}
        handleClick={handleTipButtonClick}
      >
        %15
      </CustomButton>
      <CustomButton
        id={25}
        selectedButton={selectedButton}
        handleClick={handleTipButtonClick}
      >
        %25
      </CustomButton>
      <CustomButton
        id={50}
        selectedButton={selectedButton}
        handleClick={handleTipButtonClick}
      >
        %50
      </CustomButton>
      <InputCustom
        customTipPercentage={customTipPercentage}
        setCustomTipPercentage={setCustomTipPercentage}
        handleCustomTipBlur={handleCustomTipBlur}
      />
    </div>
  );
};

export default ButtonGroup;
