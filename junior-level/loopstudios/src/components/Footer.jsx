//context hook
import { useLoopstudios } from "../context/LoopstudiosContext";

//components
import { Logo, Menu, SocialMedia } from ".";

const Footer = () => {
  //context variable
  const { isOpen } = useLoopstudios();

  //variables
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`flex flex-col gap-y-8 items-center py-12 px-8 md:flex-row md:justify-between md:px-24 bg-black ${
        isOpen && "pointer-events-none md:pointer-events-auto"
      }`}
    >
      <div className="flex md:w-[60%] flex-col gap-y-8 md:items-start">
        <Logo index="footer" />
        <Menu />
      </div>
      <div className="flex md:w-[40%] flex-col gap-y-2 md:gap-y-5 md:items-end">
        <SocialMedia />
        <h4 className="text-dark-gray text-sm select-none">
          © {currentYear} Loopstudios. All rights reserved.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
