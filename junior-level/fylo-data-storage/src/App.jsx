//components
import {
  CloudStorageBackground,
  CloudStorageBox,
  CloudStorageInfo,
} from "./components";

const App = () => {
  return (
    <>
      <CloudStorageBackground />
      <div className="px-8 h-[100vh] flex flex-col items-center justify-center gap-y-5 md:flex-row md:gap-x-5">
        <CloudStorageBox />
        <CloudStorageInfo />
      </div>
    </>
  );
};

export default App;
