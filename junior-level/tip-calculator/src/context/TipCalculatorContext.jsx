//react
import React, { createContext, useContext, useState, useEffect } from "react";

//context
const TipCalculatorContext = createContext();

//hook context
export const useTipCalculator = () => {
  const context = useContext(TipCalculatorContext);
  if (!context) {
    throw new Error(
      "useTipCalculator must be used within a TipCalculatorProvider"
    );
  }
  return context;
};

//provider
export const TipCalculatorProvider = ({ children }) => {
  //state variables
  const [isValid, setIsValid] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [billAmountError, setBillAmountError] = useState("");
  const [numberOfPeopleError, setNumberOfPeopleError] = useState("");
  const [billAmount, setBillAmount] = useState("");
  const [numberOfPeople, setNumberOfPeople] = useState("");
  const [customTipPercentage, setCustomTipPercentage] = useState("");
  const [tipAmount, setTipAmount] = useState("$0.00");
  const [totalAmount, setTotalAmount] = useState("$0.00");

  //useEffect
  useEffect(() => {
    setIsValid(
      (billAmount !== "" || numberOfPeople !== "") &&
        parseFloat(billAmount) > 0 &&
        parseInt(numberOfPeople) > 0 &&
        selectedButton !== null
    );
  }, [billAmount, numberOfPeople, selectedButton]);

  //functions
  const handleBillAmountChange = (value) => {
    if (isNaN(value)) {
      setBillAmount("");
      return;
    }

    if (value < 0) {
      setBillAmount("");
      return;
    }

    if (value === 0) {
      setBillAmountError("Can't be zero");
      setBillAmount(0);
    } else {
      setBillAmountError("");
      setBillAmount(value);
    }
  };

  const handleNumberOfPeopleChange = (value) => {
    if (isNaN(value)) {
      setNumberOfPeople("");
      return;
    }

    if (value < 0) {
      setNumberOfPeople("");
      return;
    }

    if (value === 0) {
      setNumberOfPeopleError("Can't be zero");
      setNumberOfPeople(0);
    } else {
      setNumberOfPeopleError("");
      setNumberOfPeople(value);
    }
  };

  const handleTipButtonClick = (tipPercentage) => {
    if (billAmountError || numberOfPeopleError) {
      setTipAmount("$0.00");
      setTotalAmount("$0.00");
      return;
    }

    if (parseFloat(billAmount) === 0 && parseInt(numberOfPeople) === 0) {
      return;
    }

    if (billAmount === "" || numberOfPeople === "") {
      resetEverything();
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

    if (parseFloat(billAmount) === 0 && parseInt(numberOfPeople) === 0) {
      return;
    }

    if (billAmount === "" || numberOfPeople === "") {
      resetEverything();
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

  const contextValue = {
    isValid,
    selectedButton,
    billAmountError,
    numberOfPeopleError,
    billAmount,
    numberOfPeople,
    customTipPercentage,
    setCustomTipPercentage,
    tipAmount,
    totalAmount,
    resetEverything,
    handleBillAmountChange,
    handleCustomTipBlur,
    handleTipButtonClick,
    handleNumberOfPeopleChange,
  };

  return (
    <TipCalculatorContext.Provider value={contextValue}>
      {children}
    </TipCalculatorContext.Provider>
  );
};
