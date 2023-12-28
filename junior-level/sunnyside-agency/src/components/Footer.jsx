//assets
import facebook from "../assets/icons/icon-facebook.svg";
import instagram from "../assets/icons/icon-instagram.svg";
import pinterest from "../assets/icons/icon-pinterest.svg";
import twitter from "../assets/icons/icon-twitter.svg";
import footerLogo from "../assets/icons/logo.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer p-5">
        <div>
          <img
            src={footerLogo}
            alt="sunnyside landing page"
            className="pointer-events-none select-none mt-8 block mx-auto"
          />
        </div>

        <ul className="flex gap-x-12 items-center justify-center my-12">
          <li>
            <button className="transition-colors duration-300 hover:text-white">
              About
            </button>
          </li>
          <li>
            <button className="transition-colors duration-300 hover:text-white">
              Services
            </button>
          </li>
          <li>
            <button className="transition-colors duration-300 hover:text-white">
              Projects
            </button>
          </li>
        </ul>

        <ul className="flex gap-x-6 items-center justify-center my-8">
          <li>
            <img
              className="pointer-events-none select-none"
              src={facebook}
              alt="facebook"
            />
          </li>
          <li className="">
            <img
              className="pointer-events-none select-none"
              src={instagram}
              alt="instagram"
            />
          </li>
          <li className="">
            <img
              className="pointer-events-none select-none"
              src={twitter}
              alt="twitter"
            />
          </li>
          <li className="">
            <img
              className="pointer-events-none select-none"
              src={pinterest}
              alt="pinterest"
            />
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
