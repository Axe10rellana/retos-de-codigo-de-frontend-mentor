//react
import { createContext, useContext, useState } from "react";

//context
const LoopstudiosContext = createContext();

//hook context
export const useLoopstudios = () => {
  return useContext(LoopstudiosContext);
};

//provider
export const LoopstudiosProvider = ({ children }) => {
  //state variables
  const [isOpen, setIsOpen] = useState(false);

  //functions
  const handleIsOpen = () => setIsOpen(!isOpen);

  const value = {
    isOpen,
    handleIsOpen,
  };

  return (
    <LoopstudiosContext.Provider value={value}>
      {children}
    </LoopstudiosContext.Provider>
  );
};
