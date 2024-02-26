//assets
import iconDocument from "../assets/icons/icon-document.svg";
import iconFolder from "../assets/icons/icon-folder.svg";
import iconUpload from "../assets/icons/icon-upload.svg";
import logo from "../assets/icons/logo.svg";

const CloudStorageBox = () => {
  return (
    <div className="w-[100%] rounded-tr-[5rem] rounded-tl-lg rounded-b-lg flex flex-col gap-y-4 bg-dark-blue p-8 md:w-[30%]">
      <img
        className="pointer-events-none select-none w-[110px]"
        src={logo}
        alt="logo"
      />
      <div className="flex flex-row gap-x-4">
        <div className="w-[40px] h-[40px] rounded-lg bg-very-dark-blue flex justify-center items-center">
          <img
            className="pointer-events-none select-none"
            src={iconDocument}
            alt="icon document"
          />
        </div>
        <div className="w-[40px] h-[40px] rounded-lg bg-very-dark-blue flex justify-center items-center">
          <img
            className="pointer-events-none select-none"
            src={iconFolder}
            alt="icon folder"
          />
        </div>
        <div className="w-[40px] h-[40px] rounded-lg bg-very-dark-blue flex justify-center items-center">
          <img
            className="pointer-events-none select-none"
            src={iconUpload}
            alt="icon upload"
          />
        </div>
      </div>
    </div>
  );
};

export default CloudStorageBox;
