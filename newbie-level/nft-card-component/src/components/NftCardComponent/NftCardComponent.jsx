//componentes
import { NftCardImg, NftCardInfo } from "../";

const NftCardComponent = () => {
  return (
    <div className="my-16 flex h-[auto] w-[90%] select-none flex-col rounded-2xl bg-very-dark-blue-card p-6 drop-shadow-2xl sm:w-[425px]">
      <NftCardImg />
      <NftCardInfo />
    </div>
  );
};

export default NftCardComponent;
