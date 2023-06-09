//assets
import drawers from "../assets/images/drawers.jpg";

const Header = () => {
  return (
    <div className="flex md:w-[36%]">
      <img
        className="pointer-events-none w-[100%] object-cover md:object-left"
        src={drawers}
        alt="drawers"
      />
    </div>
  );
};

export default Header;
