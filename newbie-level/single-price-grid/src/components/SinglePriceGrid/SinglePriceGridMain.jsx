const SinglePriceGridMain = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="flex w-[100%] flex-col justify-between bg-custom-cyan p-8 lg:w-[50%] lg:rounded-bl-lg lg:p-10">
        <h2 className="mb-1 text-lg font-bold text-white md:text-xl">
          Monthly Subscription
        </h2>
        <div className="mb-4 flex flex-col">
          <div className="mb-2 flex items-center gap-x-4 text-center">
            <span className="text-2xl font-bold text-white md:text-4xl">
              $29
            </span>
            <p className="text-sm text-light-gray/70 md:text-base">per month</p>
          </div>
          <p className="text-sm text-light-gray md:text-base">
            Full access for less than $1 a day
          </p>
        </div>
        <button className="rounded-md bg-bright-yellow py-2 text-lg text-white drop-shadow-lg md:py-4 md:text-xl">
          Sign Up
        </button>
      </div>
      <div className="flex w-[100%] flex-col rounded-b-lg bg-custom-cyan/80 p-8 font-bold lg:w-[50%] lg:rounded-bl-none lg:p-10">
        <h2 className="mb-4 text-lg font-bold text-white md:text-xl">Why Us</h2>
        <p className="w-[70%] text-xs text-light-gray/70 md:text-base lg:w-[75%]">
          Tutorials by industry experts Peer &amp; expert code review Coding
          exercises Access to our GitHub repos Community forum Flashcard decks
          New videos every week
        </p>
      </div>
    </div>
  );
};

export default SinglePriceGridMain;
