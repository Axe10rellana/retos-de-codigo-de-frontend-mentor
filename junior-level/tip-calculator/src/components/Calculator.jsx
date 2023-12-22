//components
import {
  BillDetails,
  InputBill,
  InputNumberOfPeople,
  InputSelectTip,
  ResetButton,
} from ".";

const Calculator = ({
  isValid,
  billAmountError,
  numberOfPeopleError,
  selectedButton,
  handleTipButtonClick,
  billAmount,
  handleBillAmountChange,
  numberOfPeople,
  handleNumberOfPeopleChange,
  customTipPercentage,
  setCustomTipPercentage,
  handleCustomTipBlur,
  totalAmount,
  tipAmount,
  resetEverything,
}) => {
  return (
    <div className="flex flex-col gap-y-4 rounded-t-3xl p-6 bg-white w-full lg:flex-row lg:gap-x-4 lg:rounded-3xl lg:w-[75%]">
      <div className="flex flex-col p-2 lg:p-6 lg:w-[50%]">
        <form className="flex flex-col gap-y-8">
          <InputBill
            billAmountError={billAmountError}
            billAmount={billAmount}
            handleBillAmountChange={handleBillAmountChange}
          />
          <InputSelectTip
            selectedButton={selectedButton}
            handleTipButtonClick={handleTipButtonClick}
            customTipPercentage={customTipPercentage}
            setCustomTipPercentage={setCustomTipPercentage}
            handleCustomTipBlur={handleCustomTipBlur}
          />
          <InputNumberOfPeople
            numberOfPeopleError={numberOfPeopleError}
            numberOfPeople={numberOfPeople}
            handleNumberOfPeopleChange={handleNumberOfPeopleChange}
          />
        </form>
      </div>
      <div className="flex flex-col p-8 bg-very-dark-cyan rounded-2xl gap-y-10 lg:justify-between lg:w-[50%]">
        <BillDetails totalAmount={totalAmount} tipAmount={tipAmount} />
        <ResetButton isValid={isValid} resetEverything={resetEverything} />
      </div>
    </div>
  );
};

export default Calculator;
