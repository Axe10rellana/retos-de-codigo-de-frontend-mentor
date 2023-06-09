//react
import { useState } from "react";

//date-fns
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

//components
import { Button, Form, Results } from "./components";

const App = () => {
  //state variables
  const [formValues, setFormValues] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [resultValues, setResultValues] = useState({
    day: "--",
    month: "--",
    year: "--",
  });
  const [formErrors, setFormErrors] = useState({});

  //variables
  const currentYear = new Date().getFullYear();

  const diffInDays = differenceInDays(
    new Date(formValues.year, formValues.month, 31),
    new Date(formValues.year, formValues.month, formValues.day)
  );

  const diffInMonths = differenceInMonths(
    new Date(formValues.year, 12, 31),
    new Date(formValues.year, formValues.month, formValues.day)
  );

  const diffInYears = differenceInYears(
    new Date(currentYear, 12, 31),
    new Date(formValues.year, formValues.month, formValues.day)
  );

  //functions
  const validateForm = () => {
    const errors = {};
    if (!formValues.day.trim()) {
      errors.day = "This field is required";
    } else if (formValues.day > 31) {
      errors.day = "Must be a valid day";
    } else if (formValues.day < `0${1}`) {
      errors.day = "Must be a valid day";
    }
    if (!formValues.month.trim()) {
      errors.month = "This field is required";
    } else if (formValues.month > 12) {
      errors.month = "Must be a valid month";
    } else if (formValues.month < `0${1}`) {
      errors.month = "Must be a valid month";
    }
    if (!formValues.year.trim()) {
      errors.year = "This field is required";
    } else if (formValues.year > currentYear) {
      errors.year = "Must be in the past";
    } else if (formValues.year < 100) {
      errors.year = "Must be a valid year";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setResultValues({
        ...resultValues,
        day: diffInDays,
        month: diffInMonths,
        year: diffInYears,
      });
    }
  };

  return (
    <div className="select-none flex items-center justify-center lg:h-screen">
      <div className="bg-white rounded-t-3xl rounded-bl-3xl rounded-br-[30%] shadow-lg w-[90%] lg:w-[65%] shadow-light-grey flex flex-col gap-y-2 p-10">
        <div className="flex flex-col gap-y-14">
          <Form
            currentYear={currentYear}
            formValues={formValues}
            formErrors={formErrors}
            setFormValues={setFormValues}
          />
          <Button handleSubmit={handleSubmit} />
        </div>
        <Results resultValues={resultValues} formErrors={formErrors} />
      </div>
    </div>
  );
};

export default App;
