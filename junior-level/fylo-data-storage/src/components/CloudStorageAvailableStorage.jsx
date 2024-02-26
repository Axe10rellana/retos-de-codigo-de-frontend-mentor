//components
import { CloudStorageProgressBar } from ".";

const CloudStorageAvailableStorage = () => {
  return (
    <div className="flex flex-col gap-y-2">
      <CloudStorageProgressBar />
      <div className="flex flex-row justify-between items-center text-pale-blue font-bold">
        <p>0 GB</p>
        <p>1000 GB</p>
      </div>
    </div>
  );
};

export default CloudStorageAvailableStorage;
