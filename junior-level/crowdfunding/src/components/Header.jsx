//context
import { useCrowdfunding } from "../context/CrowdfundingContext";

//components
import {
  HeaderLogo,
  HeaderMenuDesktop,
  HeaderMenuMobile,
  HeaderMenuMobileButton,
} from ".";

const Header = () => {
  //context variables
  const { isOpen } = useCrowdfunding();

  return (
    <>
      <header className="absolute flex items-center justify-between px-5 py-8 w-full md:left-1/2 md:transform md:-translate-x-1/2 md:w-[80%]">
        <HeaderLogo />
        <HeaderMenuDesktop />
        {isOpen && <HeaderMenuMobile />}
        <HeaderMenuMobileButton />
      </header>
    </>
  );
};

export default Header;
