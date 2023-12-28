//react
import { createContext, useContext, useEffect, useState } from "react";

//context
const WindowSizeContext = createContext();

//hook context
export const useWindowSize = () => {
  return useContext(WindowSizeContext);
};

//provider
export const WindowSizeProvider = ({ children }) => {
  //state variables
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  //useEffect
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const value = {
    isOpen,
    setIsOpen,
  };

  return (
    <WindowSizeContext.Provider value={value}>
      {children}
    </WindowSizeContext.Provider>
  );
};
