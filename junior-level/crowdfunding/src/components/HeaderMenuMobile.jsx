//context
import { useCrowdfunding } from "../context/CrowdfundingContext";

//data
import { links } from "../data/data";

//components
import { HeaderMenuMobileLink } from ".";

const HeaderMenuMobile = () => {
  //context variables
  const { isOpen } = useCrowdfunding();

  //variables
  const menuMobileClasses = isOpen
    ? "absolute z-30 top-24 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[94%] opacity-100 md:hidden transition-opacity duration-500"
    : "hidden";

  return (
    <nav className={menuMobileClasses}>
      <ul className="bg-white text-moderate-black font-bold shadow-2xl rounded-2xl">
        {links.map(({ id, title, link }) => (
          <HeaderMenuMobileLink key={id} title={title} link={link} />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenuMobile;
