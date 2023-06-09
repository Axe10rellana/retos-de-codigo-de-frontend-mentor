//components
import { FaqComponent, Images } from "./components";

const App = () => {
  return (
    <div className="flex lg:h-screen select-none items-center justify-center text-center">
      <div className="flex w-[90%] flex-col rounded-3xl bg-white shadow-md shadow-very-dark-grayish-blue sm:w-[70%] lg:w-[80%] lg:flex-row">
        <Images />
        <FaqComponent />
      </div>
    </div>
  );
};

export default App;
