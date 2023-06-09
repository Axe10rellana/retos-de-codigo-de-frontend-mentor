//react-icons
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-y-5">
      <div className="flex flex-row justify-center gap-x-4">
        <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-[1px] border-solid border-custom-gray bg-white text-custom-blue transition-all duration-300 hover:bg-custom-blue hover:text-white">
          <FaFacebookF />
        </div>
        <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-[1px] border-solid border-custom-gray bg-white text-custom-blue transition-all duration-300 hover:bg-custom-blue hover:text-white">
          <FaTwitter />
        </div>
        <div className="flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-[1px] border-solid border-custom-gray bg-white text-custom-blue transition-all duration-300 hover:bg-custom-blue hover:text-white">
          <FaInstagram />
        </div>
      </div>
      <p className="text-sm text-custom-gray">
        &copy; Copyright Ping. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
