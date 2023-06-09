const QuantityProduct = ({
  count,
  handleSubtractionCounter,
  handleSumCounter,
}) => {
  return (
    <div className="col-span-3 flex items-baseline justify-between rounded-md bg-light-grayish-blue py-2 px-5 pb-3 md:col-span-1">
      {count === 0 ? (
        <button disabled className="text-3xl text-orange-primary">
          -
        </button>
      ) : (
        <button
          className="text-3xl text-orange-primary"
          onClick={handleSubtractionCounter}
        >
          -
        </button>
      )}
      <span className="text-xl">{count}</span>
      <button
        className="text-3xl text-orange-primary"
        onClick={handleSumCounter}
      >
        +
      </button>
    </div>
  );
};

export default QuantityProduct;
