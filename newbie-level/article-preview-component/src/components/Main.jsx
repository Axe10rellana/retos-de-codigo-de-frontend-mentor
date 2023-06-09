//react
import { useState } from "react";

//components
import { MenuDesktop, MenuMobile } from "./";

const Main = () => {
  //state variables
  const [click, setClick] = useState(false);

  //functions
  const handleClick = (e) => {
    setClick(!click);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white md:w-[64%]">
      <h1 className="mt-6 px-10 text-2xl font-bold text-very-dark-grayish-blue">
        Shift the overall look and feel by adding these wonderful touches to
        furniture in your home
      </h1>
      <p className="text-md mb-4 mt-4 px-10 text-desaturated-dark-blue">
        Ever been in a room and felt like something was missing? Perhaps it felt
        slightly bare and uninviting. I’ve got some simple tips to help you make
        any room feel complete.
      </p>
      <MenuMobile click={click} handleClick={handleClick} />
      <MenuDesktop click={click} handleClick={handleClick} />
    </div>
  );
};

export default Main;
