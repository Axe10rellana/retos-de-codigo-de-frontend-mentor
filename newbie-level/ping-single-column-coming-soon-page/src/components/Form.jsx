//react
import { useState } from "react";

const Form = () => {
  //state variables
  const [formValues, setFormValues] = useState({
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});

  //functions
  const validateForm = () => {
    const errors = {};
    if (!formValues.email.trim()) {
      errors.email = "Email cannot be empty";
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(
        formValues.email
      )
    ) {
      errors.email = "Please provide a valid email address";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // enviar formulario
    }
  };

  return (
    <form className="flex flex-col gap-y-4 p-2 md:flex-row md:gap-x-4 md:gap-y-0">
      <div className="flex flex-col gap-y-2 md:w-[70%]">
        <input
          className={`rounded-full border-[1px] border-solid px-6 py-2 text-very-dark-blue outline-none ${
            formErrors.email ? "border-light-red" : "border-custom-gray"
          }`}
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Your email address..."
          value={formValues.email}
          onChange={(event) => {
            setFormValues({ ...formValues, email: event.target.value });
          }}
          required
        />
        <p
          className={`text-center text-sm italic text-light-red md:ml-6 md:text-start ${
            formErrors.email ? "block" : "hidden"
          }`}
        >
          {formErrors.email}
        </p>
      </div>
      <button
        className="h-[50px] rounded-full bg-custom-blue text-sm text-white transition-all duration-300 hover:bg-pale-blue md:w-[30%]"
        onClick={handleSubmit}
      >
        Notify Me
      </button>
    </form>
  );
};

export default Form;
