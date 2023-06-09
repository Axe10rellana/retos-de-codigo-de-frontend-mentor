const Results = ({ resultValues, formErrors }) => {
  return (
    <div className="flex flex-col mt-5 lg:mt-0">
      <h2 className="text-off-black text-4xl sm:text-7xl md:text-8xl font-extrabold italic">
        <span className="text-custom-purple">
          {formErrors.year ? "--" : resultValues.year}
        </span>{" "}
        years
      </h2>
      <h2 className="text-off-black text-4xl sm:text-7xl md:text-8xl font-extrabold italic">
        <span className="text-custom-purple">
          {formErrors.month ? "--" : resultValues.month}
        </span>{" "}
        months
      </h2>
      <h2 className="text-off-black text-4xl sm:text-7xl md:text-8xl font-extrabold italic">
        <span className="text-custom-purple">
          {formErrors.day ? "--" : resultValues.day}
        </span>{" "}
        days
      </h2>
    </div>
  );
};

export default Results;
