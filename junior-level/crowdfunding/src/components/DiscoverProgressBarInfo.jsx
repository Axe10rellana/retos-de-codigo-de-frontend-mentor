const DiscoverProgressBarInfo = ({ amount, information, firstAmount }) => {
  //variables
  let number = 0;
  let formattedAmount;

  //validations
  if (amount % 1 !== 0) {
    number = parseFloat(amount.toFixed(3));
    if(number === firstAmount) {
      formattedAmount = `$${number.toString().replace(".", ",").toLocaleString()}`;
    }else {
      formattedAmount = number.toString().replace(".", ",").toLocaleString();
    }
  } else {
    number = amount;
    formattedAmount = number.toString().toLocaleString();
  }

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
