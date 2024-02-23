//context hook
import { useLoopstudios } from "../context/LoopstudiosContext";

//assets
import logo from "../assets/icons/logo.svg";

const Logo = ({ index }) => {
  //context variables
  const { isOpen } = useLoopstudios();

  return (
    <img
      className={`${
        index === "header" && isOpen
          ? "fixed top-12 left-8 z-40 md:static md:z-10"
          : "z-10"
      }pointer-events-none select-none`}
      src={logo}
      alt="Logo"
    />
  );
};

export default Logo;
