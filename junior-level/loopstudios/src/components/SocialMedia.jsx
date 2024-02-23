//data
import { socialMediaLinks } from "../data";

const SocialMedia = () => {
  return (
    <nav>
      <ul className="flex flex-row justify-center items-center gap-4">
        {socialMediaLinks.map(({ id, icon }) => (
          <li key={id} className="text-white cursor-pointer">
            <a className="flex flex-col items-center gap-y-2">
              <img className="peer select-none w-6 h-6" src={icon} alt="icon" />
              <span className="block h-1 mx-auto w-[50%] scale-x-0 transition-all duration-500 peer-hover:scale-x-100 peer-hover:bg-white"></span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SocialMedia;
