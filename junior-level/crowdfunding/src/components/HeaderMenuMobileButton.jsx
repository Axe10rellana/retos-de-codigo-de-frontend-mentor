//context
import { useCrowdfunding } from "../context/CrowdfundingContext";

//assets
import hamburger from "../assets/icons/icon-hamburger.svg";
import closeMenu from "../assets/icons/icon-close-menu.svg";

const HeaderMenuMobileButton = () => {
  //context variables
  const { isOpen, handleIsOpen } = useCrowdfunding();

  return (
    <div className="z-30 md:hidden">
      {isOpen ? (
        <img
          className="select-none cursor-pointer"
          src={closeMenu}
          alt="Icon close menu"
          onClick={handleIsOpen}
        />
      ) : (
        <img
          className="select-none cursor-pointer"
          src={hamburger}
          alt="Icon hamburger"
          onClick={handleIsOpen}
        />
      )}
    </div>
  );
};

export default HeaderMenuMobileButton;
