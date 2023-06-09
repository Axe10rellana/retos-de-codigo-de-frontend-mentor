//components
import { Header, Main } from "./components";

const App = () => {
  return (
    <div className="my-5 relative flex select-none items-center justify-center md:my-0 md:h-screen">
      <div className="flex w-[90%] flex-col shadow-md shadow-grayish-blue md:w-[60%] md:flex-row">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default App;
