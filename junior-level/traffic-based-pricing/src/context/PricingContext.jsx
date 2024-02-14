//react
import { createContext, useContext, useState } from "react";

//context
const PricingContext = createContext();

//hook context
export const usePricing = () => {
  return useContext(PricingContext);
};

//provider
export const PricingProvider = ({ children }) => {
  //state variables
  const [sliderValue, setSliderValue] = useState(5);

  //functions
  const handleSliderChange = (e) => setSliderValue(e.target.value);

  const value = {
    sliderValue,
    handleSliderChange,
  };

  return (
    <PricingContext.Provider value={value}>{children}</PricingContext.Provider>
  );
};
