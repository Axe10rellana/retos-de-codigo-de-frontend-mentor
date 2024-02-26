//components
import { CloudStorageMessage, CloudStorageAvailableStorage } from ".";

const CloudStorageInfo = () => {
  return (
    <div className="relative w-[100%] rounded-lg flex flex-col gap-y-4 bg-dark-blue px-8 pt-8 pb-12 md:p-8 md:w-[40%]">
      <p className="text-pale-blue text-center md:text-left">
        You’ve used <span className="font-bold">815 GB</span> of your storage
      </p>
      <CloudStorageAvailableStorage />
      <CloudStorageMessage />
    </div>
  );
};

export default CloudStorageInfo;
