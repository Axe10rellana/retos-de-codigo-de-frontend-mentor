const YourResult = () => {
  return (
    <div className="flex w-[100%] flex-col items-center justify-center gap-y-5 rounded-b-3xl bg-gradient-to-t from-light-royal-blue via-light-royal-blue to-light-slate-blue p-8 text-center text-white md:w-[50%] md:rounded-3xl">
      <h3 className="text-lg font-bold text-violet-text-results">
        Your Result
      </h3>
      <div className="flex h-[150px] w-[150px] flex-col items-center justify-center rounded-full bg-gradient-to-t from-light-royal-blue via-violet-blue to-violet-blue">
        <p className="text-6xl font-extrabold text-white-text-circle">76</p>
        <p className="font-bold text-violet-text-circle">of 100</p>
      </div>
      <h2 className="text-3xl font-bold text-white-text-heading">Great</h2>
      <p className="text-gray-text-parragraph">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default YourResult;
