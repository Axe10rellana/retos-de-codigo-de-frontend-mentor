//react
import { useState, useEffect, createContext } from "react";

//create context
const AdviceContext = createContext(null);

//create provider
export const AdviceContextProvider = ({ children }) => {
  //state variables
  const [text, setText] = useState([]);

  //functions
  const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setText(data.slip);
  };

  //useEffect
  useEffect(() => {
    fetchAdvice();
  }, []);

  //object
  const data = {
    text,
    fetchAdvice,
  };

  //return provider
  return (
    <AdviceContext.Provider value={data}>{children}</AdviceContext.Provider>
  );
};

export default AdviceContext;
