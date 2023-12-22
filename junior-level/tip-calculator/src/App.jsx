//react
import { useState, useEffect } from "react";

//components
import { Calculator, Logo } from "./components";

const App = () => {
  //state variables
  const [isValid, setIsValid] = useState(false);
  const [billAmountError, setBillAmountError] = useState("");
  const [numberOfPeopleError, setNumberOfPeopleError] = useState("");
  const [selectedButton, setSelectedButton] = useState(null);
  const [billAmount, setBillAmount] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [customTipPercentage, setCustomTipPercentage] = useState("");
  const [tipAmount, setTipAmount] = useState("$0.00");
  const [totalAmount, setTotalAmount] = useState("$0.00");

  //useEffect
  useEffect(() => {
    setIsValid(
      billAmount !== "" && numberOfPeople !== "" && selectedButton !== null
    );
  }, [billAmount, numberOfPeople, selectedButton]);

  //functions
  const handleBillAmountChange = (value) => {
    if (value <= 0 || isNaN(value)) {
      setBillAmountError("Can't be zero");
    } else {
      setBillAmountError("");
      setBillAmount(value);
    }
  };

  const handleNumberOfPeopleChange = (value) => {
    if (value <= 0 || isNaN(value) || !Number.isInteger(value)) {
      setNumberOfPeopleError("Can't be zero");
    } else {
      setNumberOfPeopleError("");
      setNumberOfPeople(value);
    }
  };

  const handleTipButtonClick = (tipPercentage) => {
    if (billAmount === "" || numberOfPeople === "") return;
    if (billAmountError || numberOfPeopleError) {
      setTipAmount("$0.00");
      setTotalAmount("$0.00");
      return;
    }

    calculateTip(
      parseFloat(billAmount),
      parseInt(tipPercentage),
      numberOfPeople
    );
    setSelectedButton(tipPercentage);
  };

  const handleCustomTipBlur = () => {
    if (billAmountError || numberOfPeopleError) {
      setTipAmount("$0.00");
      setTotalAmount("$0.00");
      return;
    }
    if (customTipPercentage === "" || customTipPercentage <= 0) {
      return;
    }

    calculateTip(
      parseFloat(billAmount),
      parseFloat(customTipPercentage),
      numberOfPeople
    );
  };

  const calculateTip = (billAmount, tipPercentage, numberOfPeople) => {
    let tipAmount = (billAmount * (tipPercentage / 100)) / numberOfPeople;
    let tip = Math.floor(tipAmount * 100) / 100;
    tip = tip.toFixed(2);

    let totalAmount =
      (tipAmount * numberOfPeople + billAmount) / numberOfPeople;
    totalAmount = totalAmount.toFixed(2);

    setTipAmount(`$${tip}`);
    setTotalAmount(`$${totalAmount}`);
  };

  const resetEverything = () => {
    setTipAmount("$0.00");
    setTotalAmount("$0.00");
    setBillAmount("");
    setNumberOfPeople("");
    setCustomTipPercentage("");
    setBillAmountError("");
    setNumberOfPeopleError("");
    setSelectedButton(null);
    setIsValid(false);
  };

  return (
    <div className="flex flex-col gap-y-8 items-center justify-center mt-5 lg:my-5">
      <Logo />
      <Calculator
        isValid={isValid}
        billAmountError={billAmountError}
        numberOfPeopleError={numberOfPeopleError}
        selectedButton={selectedButton}
        handleTipButtonClick={handleTipButtonClick}
        billAmount={billAmount}
        handleBillAmountChange={handleBillAmountChange}
        numberOfPeople={numberOfPeople}
        handleNumberOfPeopleChange={handleNumberOfPeopleChange}
        customTipPercentage={customTipPercentage}
        setCustomTipPercentage={setCustomTipPercentage}
        handleCustomTipBlur={handleCustomTipBlur}
        totalAmount={totalAmount}
        tipAmount={tipAmount}
        resetEverything={resetEverything}
      />
    </div>
  );
};

export default App;
