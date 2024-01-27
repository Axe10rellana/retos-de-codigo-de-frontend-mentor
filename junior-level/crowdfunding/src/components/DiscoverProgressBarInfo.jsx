const DiscoverProgressBarInfo = ({ amount, information }) => {
  return (
    <div className="flex flex-col gap-y-3 progress-bar-info">
      <p className="font-bold text-black text-4xl md:text-3xl lg:text-4xl">
        {amount}
      </p>
      <p className="text-dark-gray">{information}</p>
    </div>
  );
};

export default DiscoverProgressBarInfo;
