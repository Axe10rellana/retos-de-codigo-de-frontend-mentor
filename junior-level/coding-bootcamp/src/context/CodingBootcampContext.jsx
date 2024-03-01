//react
import { createContext, useContext, useState } from "react";

//data
import { testimonials } from "../data";

//context
const CodingBootcampContext = createContext();

//hook context
export const useCodingBootcamp = () => {
  return useContext(CodingBootcampContext);
};

//provider
export const CodingBootcampProvider = ({ children }) => {
  //state variables
  const [index, setIndex] = useState(0);

  //functions
  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const value = {
    index,
    nextSlide,
    prevSlide,
    testimonials,
  };

  return (
    <CodingBootcampContext.Provider value={value}>
      {children}
    </CodingBootcampContext.Provider>
  );
};
