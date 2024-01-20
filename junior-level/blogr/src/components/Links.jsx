//context
import { useBlogr } from "../context/BlogrContext";

//data
import { footer } from "../data/footer";

const Links = ({ id }) => {
  //context variables
  const { openProduct, openCompany, openConnect } = useBlogr();

  return (
    <>
      <div className="w-[90%] md:w-[110px] md:absolute md:top-[35px]">
        {openProduct && id === "1" && (
          <ul className="bg-grayish-blue-links-mobile-bg mt-4 rounded-lg md:mt-0 md:bg-white">
            {footer[0].links.map((link) => (
              <li
                className="text-very-dark-desaturated-blue hover:text-very-dark-blue-headings hover:font-bold"
                key={link}
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="w-[90%] md:w-[110px] md:absolute md:top-[35px]">
        {openCompany && id === "2" && (
          <ul className="bg-grayish-blue-links-mobile-bg mt-4 rounded-lg md:mt-0 md:bg-white">
            {footer[1].links.map((link) => (
              <li
                className="text-very-dark-desaturated-blue hover:text-very-dark-blue-headings hover:font-bold"
                key={link}
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="w-[90%] md:w-[110px] md:absolute md:top-[35px]">
        {openConnect && id === "3" && (
          <ul className="bg-grayish-blue-links-mobile-bg mt-4 rounded-lg md:mt-0 md:bg-white">
            {footer[2].links.map((link) => (
              <li
                className="text-very-dark-desaturated-blue hover:text-very-dark-blue-headings hover:font-bold"
                key={link}
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Links;
