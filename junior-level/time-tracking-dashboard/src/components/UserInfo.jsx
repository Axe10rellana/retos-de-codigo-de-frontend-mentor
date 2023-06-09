//assets
import jeremy from "../assets/images/image-jeremy.png";

export default function UserInfo() {
  return(
    <div className="flex flex-row items-center lg:items-start gap-x-5 lg:gap-y-5 lg:flex-col bg-custom-blue p-4 rounded-lg">
      <img className="w-[80px] h-[80px] border-[3px] border-solid border-white rounded-full pointer-events-none" src={jeremy} alt="image-jeremy" />
      <div className="flex flex-col gap-y-3">
        <p className="text-pale-blue">Report for</p>
        <h1 className="font-light text-3xl lg:text-4xl text-pale-blue">Jeremy Robson</h1>
      </div>
    </div>
  );
};