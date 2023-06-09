//react
import { useState } from "react";

//assets
import iconError from "../assets/images/icon-error.svg";

const Form = () => {
  //state variables
  const [formValues, setFormValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  //functions
  const validateForm = () => {
    const errors = {};
    if (!formValues.name.trim()) {
      errors.name = "First Name cannot be empty";
    }
    if (!formValues.lastname.trim()) {
      errors.lastname = "Last Name cannot be empty";
    }
    if (!formValues.email.trim()) {
      errors.email = "Email cannot be empty";
    } else if (
      !/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(
        formValues.email
      )
    ) {
      errors.email = "Looks like this is not an email";
    }
    if (!formValues.password.trim()) {
      errors.password = "Password cannot be empty";
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
    <form className="flex flex-col gap-y-5 rounded-lg bg-white p-8 shadow-lg shadow-grayish-blue">
      <div className="flex flex-col gap-y-2">
        <div className="relative flex flex-row items-center">
          <input
            className={`w-[100%] rounded-md border-[2px] border-solid  px-6 py-3 font-semibold text-dark-blue outline-none ${
              formErrors.name
                ? "border-custom-red placeholder:text-transparent"
                : "border-grayish-blue"
            }`}
            type="text"
            name="name"
            autoComplete="off"
            placeholder="First Name"
            value={formValues.name}
            onChange={(event) =>
              setFormValues({ ...formValues, name: event.target.value })
            }
            required
          />
          <img
            className={`absolute right-6 ${
              formErrors.name ? "block" : "hidden"
            }`}
            src={iconError}
            alt="icon-error"
          />
        </div>
        <span
          className={`text-end text-xs font-medium italic ${
            formErrors.name ? "block text-custom-red" : "hidden"
          }`}
        >
          {formErrors.name}
        </span>
      </div>

      <div className="flex flex-col gap-y-2">
        <div className="relative flex flex-row items-center">
          <input
            className={`w-[100%] rounded-md border-[2px] border-solid  px-6 py-3 font-semibold text-dark-blue outline-none ${
              formErrors.lastname
                ? "border-custom-red placeholder:text-transparent"
                : "border-grayish-blue"
            }`}
            type="text"
            name="lastname"
            autoComplete="off"
            placeholder="Last Name"
            value={formValues.lastname}
            onChange={(event) =>
              setFormValues({ ...formValues, lastname: event.target.value })
            }
            required
          />
          <img
            className={`absolute right-6 ${
              formErrors.lastname ? "block" : "hidden"
            }`}
            src={iconError}
            alt="icon-error"
          />
        </div>
        <span
          className={`text-end text-xs font-medium italic ${
            formErrors.lastname ? "block text-custom-red" : "hidden"
          }`}
        >
          {formErrors.lastname}
        </span>
      </div>

      <div className="flex flex-col gap-y-2">
        <div className="relative flex flex-row items-center">
          <input
            className={`w-[100%] rounded-md border-[2px] border-solid  px-6 py-3 font-semibold text-dark-blue outline-none ${
              formErrors.email === "Looks like this is not an email"
                ? "border-custom-red placeholder:text-custom-red"
                : formErrors.email === "Email cannot be empty"
                ? "border-custom-red placeholder:text-transparent"
                : "border-grayish-blue"
            }`}
            type="email"
            name="email"
            autoComplete="off"
            placeholder={`${
              formErrors.email ? "email@example/com" : "Email Address"
            }`}
            value={formValues.email}
            onChange={(event) => {
              setFormValues({ ...formValues, email: event.target.value });
            }}
            required
          />
          <img
            className={`absolute right-6 ${
              formErrors.email ? "block" : "hidden"
            }`}
            src={iconError}
            alt="icon-error"
          />
        </div>
        <span
          className={`text-end text-xs font-medium italic ${
            formErrors.email ? "block text-custom-red" : "hidden"
          }`}
        >
          {formErrors.email}
        </span>
      </div>

      <div className="flex flex-col gap-y-2">
        <div className="relative flex flex-row items-center">
          <input
            className={`w-[100%] rounded-md border-[2px] border-solid  px-6 py-3 font-semibold text-dark-blue outline-none ${
              formErrors.password
                ? "border-custom-red placeholder:text-transparent"
                : "border-grayish-blue"
            }`}
            type="password"
            name="password"
            autoComplete="off"
            placeholder="Password"
            value={formValues.password}
            onChange={(event) =>
              setFormValues({ ...formValues, password: event.target.value })
            }
            required
          />
          <img
            className={`absolute right-6 ${
              formErrors.password ? "block" : "hidden"
            }`}
            src={iconError}
            alt="icon-error"
          />
        </div>
        <span
          className={`text-end text-xs font-medium italic ${
            formErrors.password ? "block text-custom-red" : "hidden"
          }`}
        >
          {formErrors.password}
        </span>
      </div>
      <button
        type="button"
        className="rounded-lg bg-custom-green py-4 uppercase tracking-widest text-white shadow-lg shadow-custom-green/70 transition-all duration-300 hover:opacity-60"
        onClick={handleSubmit}
      >
        Claim your free trial
      </button>
      <p className="text-center text-xs text-grayish-blue">
        By clicking the button, you are agreeing to our{" "}
        <span className="font-medium text-custom-red">Terms and Services</span>
      </p>
    </form>
  );
};

export default Form;
