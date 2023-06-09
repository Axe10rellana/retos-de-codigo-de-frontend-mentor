const Form = ({ currentYear, formValues, formErrors, setFormValues }) => {
  return (
    <form className="flex w-[100%] flex-row gap-x-4 lg:gap-x-8">
      <div className="flex lg:w-[25%] flex-col gap-y-2">
        <label
          htmlFor="Day"
          className={`uppercase font-bold not-italic ${
            formErrors.day ? "text-light-red" : "text-smokey-grey"
          }`}
        >
          Day
        </label>
        <input
          className={`w-[100%] py-2 px-2 lg:px-4 rounded-md text-off-black text-[20px] sm:text-[32px] outline-none border-solid border-[1px] focus:border-custom-purple ${
            formErrors.day ? "border-light-red" : "border-light-grey"
          }`}
          type="number"
          name="day"
          id="Day"
          placeholder="DD"
          autoComplete="off"
          min="1"
          max="31"
          value={formValues.day}
          onChange={(event) =>
            setFormValues({ ...formValues, day: event.target.value })
          }
          required
        />
        <p
          className={`text-light-red italic text-xs md:text-sm ${
            formErrors.day ? "block" : "hidden"
          }`}
        >
          {formErrors.day}
        </p>
      </div>
      <div className="flex lg:w-[25%] flex-col gap-y-2">
        <label
          htmlFor="Month"
          className={`uppercase font-bold not-italic ${
            formErrors.month ? "text-light-red" : "text-smokey-grey"
          }`}
        >
          Month
        </label>
        <input
          className={`w-[100%] py-2 px-2 lg:px-4 rounded-md text-off-black text-[20px] sm:text-[32px] outline-none border-solid border-[1px] focus:border-custom-purple ${
            formErrors.month ? "border-light-red" : "border-light-grey"
          }`}
          type="number"
          name="month"
          id="Month"
          placeholder="MM"
          autoComplete="off"
          min="1"
          max="12"
          value={formValues.month}
          onChange={(event) =>
            setFormValues({ ...formValues, month: event.target.value })
          }
          required
        />
        <p
          className={`text-light-red italic text-xs md:text-sm ${
            formErrors.month ? "block" : "hidden"
          }`}
        >
          {formErrors.month}
        </p>
      </div>
      <div className="flex lg:w-[25%] flex-col gap-y-2">
        <label
          htmlFor="Year"
          className={`uppercase font-bold not-italic ${
            formErrors.year ? "text-light-red" : "text-smokey-grey"
          }`}
        >
          Year
        </label>
        <input
          className={`w-[100%] py-2 px-2 lg:px-4 rounded-md text-off-black text-[20px] sm:text-[32px] outline-none border-solid border-[1px] focus:border-custom-purple ${
            formErrors.year ? "border-light-red" : "border-light-grey"
          }`}
          type="number"
          name="year"
          id="Year"
          placeholder="YYYY"
          autoComplete="off"
          min="100"
          max={currentYear}
          value={formValues.year}
          onChange={(event) =>
            setFormValues({ ...formValues, year: event.target.value })
          }
          required
        />
        <p
          className={`text-light-red italic text-xs md:text-sm ${
            formErrors.year ? "block" : "hidden"
          }`}
        >
          {formErrors.year}
        </p>
      </div>
    </form>
  );
};

export default Form;
