//react
import { useContext } from "react";

//context
import AdviceContext from "../context/AdviceContext";

//assets
import iconDice from "../assets/images/icon-dice.svg";
import patternDividerDesktop from "../assets/images/pattern-divider-desktop.svg";
import patternDividerMobile from "../assets/images/pattern-divider-mobile.svg";

const AdviceGenerator = () => {
  //context variables
  const { text, fetchAdvice } = useContext(AdviceContext);

  return (
    <div className="relative flex flex-col items-center text-center p-12 gap-y-5 w-[90%] sm:w-[500px] bg-dark-grayish-blue rounded-xl">
      <h2 className="uppercase tracking-[0.3rem] text-neon-green">
        Advice #{text.id}
      </h2>
      <h1 className="text-[28px] text-light-cyan">
        <blockquote>"{text.advice}"</blockquote>
      </h1>
      <img
        className="hidden sm:block w-[100%] pointer-events-none mt-2 mb-5"
        src={patternDividerDesktop}
        alt="pattern-divider-desktop"
      />
      <img
        className="block sm:hidden w-[100%] pointer-events-none mt-2 mb-5"
        src={patternDividerMobile}
        alt="pattern-divider-mobile"
      />
      <div className="absolute bottom-[-2rem]">
        <button
          type="button"
          onClick={fetchAdvice}
          className="bg-neon-green p-5 outline-none transition-colors duration-300 rounded-full shadow-lg hover:shadow-neon-green"
        >
          <img className="pointer-events-none" src={iconDice} alt="icon-dice" />
        </button>
      </div>
    </div>
  );
};

export default AdviceGenerator;
