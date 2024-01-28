const DiscoverProgressBarInfo = ({ amount, information, firstAmount }) => {
  //variables
  let number = 0;

  if (amount % 1 !== 0) {
    number = amount.toFixed(3);
  } else {
    number = amount;
  }

  let formattedAmount = number.toString().replace(".", ",").toLocaleString();

  if (number === firstAmount) formattedAmount = `$${formattedAmount}`;

  return (
    <div className="flex flex-col gap-y-3 progress-bar-info">
      <p className="font-bold text-black text-4xl md:text-3xl lg:text-4xl">
        {formattedAmount}
      </p>
      <p className="text-dark-gray">{information}</p>
    </div>
  );
};

export default DiscoverProgressBarInfo;
