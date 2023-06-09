const SinglePriceGridHeader = () => {
  return (
    <div className="flex flex-col rounded-t-lg bg-white p-8 lg:p-10">
      <h1 className="mb-6 text-xl font-bold text-custom-cyan md:text-2xl">
        Join our community
      </h1>
      <h2 className="mb-4 text-lg text-bright-yellow md:text-xl">
        30-day, hassle-free money back guarantee
      </h2>
      <p className="w-[100%] text-xs text-grayish-blue md:text-base lg:w-[75%]">
        Gain access to our full library of tutorials along with expert code
        reviews. Perfect for any developers who are serious about honing their
        skills.
      </p>
    </div>
  );
};

export default SinglePriceGridHeader;
