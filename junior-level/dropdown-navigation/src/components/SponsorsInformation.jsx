//assets
import clientAudiophile from "../assets/images/client-audiophile.svg";
import clientDatabiz from "../assets/images/client-databiz.svg";
import clientMaker from "../assets/images/client-maker.svg";
import clientMeet from "../assets/images/client-meet.svg";

const SponsorsInformation = () => {
  return (
    <div className="flex flex-row justify-between w-[100%]">
      <img
        className="pointer-events-none w-[20%] xl:w-[100px] lg:w-[75px] md:w-[95px]"
        src={clientDatabiz}
        alt="client-databiz"
      />
      <img
        className="pointer-events-none w-[20%] xl:w-[100px] lg:w-[75px] md:w-[95px]"
        src={clientAudiophile}
        alt="client-audiophile"
      />
      <img
        className="pointer-events-none w-[20%] xl:w-[100px] lg:w-[75px] md:w-[95px]"
        src={clientMeet}
        alt="client-meet"
      />
      <img
        className="pointer-events-none w-[20%] xl:w-[100px] lg:w-[75px] md:w-[95px]"
        src={clientMaker}
        alt="client-maker"
      />
    </div>
  );
};

export default SponsorsInformation;
