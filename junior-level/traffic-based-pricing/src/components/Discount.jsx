//components
import { Badget, Toggle } from ".";

const Discount = () => {
  return (
    <div className="toggle">
      <label className="name">Monthly Billing</label>
      <Toggle />
      <div className="flex flex-row items-center">
        <label className="name">Yearly Billing</label>
        <Badget />
      </div>
    </div>
  );
};

export default Discount;
