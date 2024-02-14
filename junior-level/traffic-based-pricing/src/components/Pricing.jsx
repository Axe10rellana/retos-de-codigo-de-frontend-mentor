//components
import { Discount, PricingForm, Separator, StartMyTrial } from ".";

const Pricing = () => {
  return (
    <div className="container-inner">
      <PricingForm />
      <Discount />
      <Separator />
      <StartMyTrial />
    </div>
  );
};

export default Pricing;
