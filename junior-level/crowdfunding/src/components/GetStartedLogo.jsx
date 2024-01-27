//assets
import mastercraft from "../assets/icons/logo-mastercraft.svg";

const GetStartedLogo = () => {
  return (
    <img
      className="pointer-events-none select-none mastercraft-logo top-[-10%] sm:top-[-12%]"
      src={mastercraft}
      alt="Mastercraft logo"
    />
  );
};

export default GetStartedLogo;
