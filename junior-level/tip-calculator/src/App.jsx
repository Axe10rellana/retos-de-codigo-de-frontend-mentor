//context
import { TipCalculatorProvider } from "./context/TipCalculatorContext";

//components
import { Calculator, Logo } from "./components";

const App = () => {
  return (
    <TipCalculatorProvider>
      <div className="flex flex-col gap-y-8 items-center justify-center mt-5 lg:my-5">
        <Logo />
        <Calculator />
      </div>
    </TipCalculatorProvider>
  );
};

export default App;
