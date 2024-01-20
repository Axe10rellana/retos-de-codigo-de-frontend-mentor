//context
import { useBlogr } from "../context/BlogrContext";

//components
import { Links } from ".";

//assets
import arrowLight from "../assets/icons/icon-arrow-light.svg";
import arrowDark from "../assets/icons/icon-arrow-dark.svg";

const LinkContent = ({ title, id }) => {
  //context variables
  const { openProduct, openCompany, openConnect } = useBlogr();

  return (
    <div className="flex flex-col items-center md:items-start">
      <div className="flex flex-row gap-x-2 items-center">
        <p
          className={`transition-all duration-300 font-bold hover:font-normal text-very-dark-blue-headings hover:text-very-dark-desaturated-blue md:text-grayish-blue-links-text md:hover:text-white md:hover:font-bold md:hover:underline ${
            openProduct && id === "1"
              ? "text-very-dark-desaturated-blue font-normal md:font-bold md:text-white md:underline"
              : ""
          } ${
            openCompany && id === "2"
              ? "text-very-dark-desaturated-blue font-normal md:font-bold md:text-white md:underline"
              : ""
          } ${
            openConnect && id === "3"
              ? "text-very-dark-desaturated-blue font-normal md:font-bold md:text-white md:underline"
              : ""
          }`}
        >
          {title}
        </p>
        <img
          className={`hidden md:block transition-all duration-300 pointer-events-none select-none ${
            openProduct && id === "1" ? "rotate-180" : "rotate-0"
          } ${openCompany && id === "2" ? "rotate-180" : "rotate-0"} ${
            openConnect && id === "3" ? "rotate-180" : "rotate-0"
          }`}
          src={arrowLight}
          alt="arrow right light"
        />
        <img
          className={`block md:hidden transition-all duration-300 pointer-events-none select-none ${
            openProduct && id === "1" ? "rotate-180" : "rotate-0"
          } ${openCompany && id === "2" ? "rotate-180" : "rotate-0"} ${
            openConnect && id === "3" ? "rotate-180" : "rotate-0"
          }`}
          src={arrowDark}
          alt="arrow right dark"
        />
      </div>
      <Links id={id} />
    </div>
  );
};

export default LinkContent;
