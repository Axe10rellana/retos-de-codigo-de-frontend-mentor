//components
import { YourResult, YourSummary } from "./components";

const App = () => {
  return (
    <div className="flex w-[100%] select-none flex-col md:mx-auto md:my-10 md:w-[70%] md:flex-row">
      <YourResult />
      <YourSummary />
    </div>
  );
};

export default App;
