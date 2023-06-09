const TotalThisMonth = () => {
  return (
    <div className="flex flex-row items-end justify-between">
      <div className="flex flex-col items-start gap-y-3">
        <p className="text-medium-brown text-sm tracking-widest">
          Total this month
        </p>
        <h1 className="text-dark-brown text-3xl sm:text-4xl font-bold">
          $478.33
        </h1>
      </div>
      <div className="flex flex-col items-end gap-y-1">
        <p className="text-dark-brown font-bold text-sm">+2.4%</p>
        <p className="text-medium-brown text-sm tracking-widest">
          from last month
        </p>
      </div>
    </div>
  );
};

export default TotalThisMonth;
