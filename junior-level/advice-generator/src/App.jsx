//context
import { AdviceContextProvider } from "./context/AdviceContext";

//components
import { AdviceGenerator } from "./components";

const App = () => {
  return (
    <AdviceContextProvider>
      <div className="flex items-center justify-center h-screen">
        <AdviceGenerator />
      </div>
    </AdviceContextProvider>
  );
};

export default App;
