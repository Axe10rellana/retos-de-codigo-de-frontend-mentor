//context
import { useCrowdfunding } from "../context/CrowdfundingContext";

const HeaderMenuMobileLink = ({ title, link }) => {
  //context variables
  const { handleIsClosed } = useCrowdfunding();

  return (
    <li className="cursor-pointer link">
      <a
        className="block px-5 py-4 sm:py-11"
        href={link}
        onClick={handleIsClosed}
      >
        {title}
      </a>
    </li>
  );
};

export default HeaderMenuMobileLink;
