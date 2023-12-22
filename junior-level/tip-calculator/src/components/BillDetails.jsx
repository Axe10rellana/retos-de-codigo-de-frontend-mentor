const BillDetails = ({ totalAmount, tipAmount }) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h3 className="text-light-grayish-cyan">Tip Amount</h3>
          <p className="text-grayish-cyan">/ person</p>
        </div>
        <h2 className="text-strong-cyan text-4xl">{tipAmount}</h2>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <h3 className="text-light-grayish-cyan">Total</h3>
          <p className="text-grayish-cyan">/ person</p>
        </div>
        <h2 className="text-strong-cyan text-4xl">{totalAmount}</h2>
      </div>
    </div>
  );
};

export default BillDetails;
