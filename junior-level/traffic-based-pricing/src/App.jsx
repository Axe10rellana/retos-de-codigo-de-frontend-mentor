//context provider
import { PricingProvider } from "./context/PricingContext";

//components
import { BackgroundPattern, CTA, Pricing } from "./components";

const App = () => {
  return (
    <PricingProvider>
      <BackgroundPattern />
      <div className="show">
        <CTA />
        <Pricing />
      </div>
    </PricingProvider>
  );
};

export default App;
