//componentes
import { StatsCardImg, StatsCardInfo } from "../";

const StatsCardComponent = () => {
  return (
    <div className="my-16 flex h-auto w-[90%] select-none flex-col-reverse md:flex-row">
      <StatsCardInfo />
      <StatsCardImg />
    </div>
  );
};

export default StatsCardComponent;
