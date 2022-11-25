//componentes
import {
  OrderSummaryCard,
  PatternBackgroundDesktop,
  PatternBackgroundMobile,
} from "./components";

const App = () => {
  return (
    <>
      <PatternBackgroundDesktop className="hidden w-[100%] md:block" />
      <PatternBackgroundMobile className="block w-[100%] md:hidden" />
      <OrderSummaryCard />
    </>
  );
};

export default App;
