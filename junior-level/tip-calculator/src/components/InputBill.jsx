//assets
import dollar from "../assets/icons/icon-dollar.svg";

const InputBill = ({ billAmountError, billAmount, handleBillAmountChange }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-row justify-between">
        <label htmlFor="bill" className="text-dark-grayish-cyan">
          Bill
        </label>
        {billAmountError && (
          <p className="text-red-500/80">{billAmountError}</p>
        )}
      </div>
      <div className="relative">
        <img
          src={dollar}
          alt="Dollar icon"
          className="absolute left-4 top-1/2 pointer-events-none select-none transform -translate-y-1/2 text-very-dark-cyan"
        />
        <input
          className={`border-[3px] border-solid  rounded-lg text-right bg-very-light-grayish-cyan text-very-dark-cyan placeholder:text-grayish-cyan  text-[24px] outline-none p-2 w-full ${
            billAmountError
              ? "border-red-500/80 focus:border-red-500/80"
              : "border-very-light-grayish-cyan focus:border-strong-cyan"
          }`}
          type="number"
          name="bill"
          id="bill"
          placeholder="0"
          value={billAmount}
          onChange={(e) => handleBillAmountChange(parseFloat(e.target.value))}
        />
      </div>
    </div>
  );
};

export default InputBill;
