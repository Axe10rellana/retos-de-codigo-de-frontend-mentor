//assets
import { QRCodeImg } from "../../assets";

const QrCodeCard = () => {
  return (
    <div className="mx-auto my-[20%] flex w-[85%] select-none flex-col gap-4 rounded-xl bg-white p-4 drop-shadow-2xl md:my-[5%] md:w-[25%]">
      <img
        className="w-[100%] rounded-xl"
        src={QRCodeImg}
        alt="Image-qr-code"
      />
      <div className="flex flex-col p-2 text-center">
        <h1 className="mb-4 text-[1.5rem] font-bold leading-none text-dark-blue">
          Improve your front-end skills by building projects
        </h1>
        <p className="mb-4 leading-none text-grayish-blue">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default QrCodeCard;
