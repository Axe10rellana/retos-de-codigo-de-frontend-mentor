//aasets
import { AvatarImg } from "../../assets";

//componentes
import { ClockIcon, EthereumIcon } from "../";

const NftCardInfo = () => {
  return (
    <div className="flex flex-col">
      <h1 className="mb-4 cursor-pointer text-2xl font-semibold text-white transition-all duration-300 hover:text-custom-cyan">
        Equilibrium #3429
      </h1>
      <p className="font-300 mb-4 text-soft-blue">
        Our Equilibrium collection promotes balance and calm.
      </p>
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <EthereumIcon />
          <span className="font-semibold text-custom-cyan">0.041 ETH</span>
        </div>
        <div className="flex items-center gap-x-2">
          <ClockIcon />
          <span className="font-300 text-soft-blue">3 days left</span>
        </div>
      </div>
      <hr className="mb-4 border-[1px] border-solid border-very-dark-blue-line" />
      <div className="flex items-center gap-x-4">
        <img
          className="w-[40px] rounded-full border-[2px] border-solid border-white"
          src={AvatarImg}
          alt="image-avatar"
        />
        <p className="font-300">
          <span className="font-400 text-soft-blue">Creation of </span>
          <span className="cursor-pointer text-white transition-all duration-300 hover:text-custom-cyan">
            Jules Wyvern
          </span>
        </p>
      </div>
    </div>
  );
};

export default NftCardInfo;
