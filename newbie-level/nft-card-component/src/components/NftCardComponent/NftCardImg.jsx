//assets
import { EquilibriumImg } from "../../assets";

//componentes
import { ViewIcon } from "../";

const NftCardImg = () => {
  return (
    <div className="group relative mb-4 h-[100%] w-[100%] cursor-pointer">
      <img
        className="h-[100%] w-[100%] rounded-lg"
        src={EquilibriumImg}
        alt="image-equilibrium"
      />
      <div className="invisible absolute top-0 flex h-[100%] w-[100%] flex-col items-center justify-center rounded-lg bg-custom-cyan/50 group-hover:visible">
        <ViewIcon />
      </div>
    </div>
  );
};

export default NftCardImg;
