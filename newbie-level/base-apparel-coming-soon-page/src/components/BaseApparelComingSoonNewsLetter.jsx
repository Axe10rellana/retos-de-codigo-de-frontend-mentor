//react
import { useState } from "react";

//assets
import arrow from "../assets/images/icon-arrow.svg";
import error from "../assets/images/icon-error.svg";
import logo from "../assets/images/logo.svg";

const BaseApparelComingSoonNewsLetter = () => {
  //state variables
  const [formValues, setFormValues] = useState({
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});

  //functions
  const validateForm = () => {
    const errors = {};
    if (
      !/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/.test(
        formValues.email
      )
    ) {
      errors.email = "Please provide a valid email";
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
    <div className="flex flex-col gap-y-5 py-16 text-center md:w-[60%] md:px-5 md:text-start lg:px-32">
      <img
        className="pointer-events-none mt-4 mb-12 hidden w-[150px] md:block"
        src={logo}
        alt="logo"
      />
      <h1 className="text-5xl font-semibold uppercase tracking-[1rem] text-dark-grayish-red md:w-[1px] md:text-6xl">
        <span className="font-light text-desaturated-red">We're</span> coming
        soon
      </h1>
      <p className="mb-4 px-8 text-desaturated-red md:w-[426px] md:px-0">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <div className="flex flex-col gap-y-2">
        <form className="relative flex w-[100%] items-center md:w-[426px]">
          <input
            className="w-[100%] rounded-full border-[2px] border-solid border-desaturated-red bg-transparent p-4 font-semibold text-dark-grayish-red outline-none placeholder:text-desaturated-red focus:border-soft-red"
            type="email"
            name="email"
            placeholder="Email Address"
            autoComplete="off"
            value={formValues.email}
            onChange={(event) =>
              setFormValues({ ...formValues, email: event.target.value })
            }
            required
          />
          <img
            className={`pointer-events-none absolute right-28 ${
              formErrors.email ? "block" : "hidden"
            }`}
            src={error}
            alt="icon-error"
          />
          <button
            type="button"
            className="absolute right-0 rounded-full bg-gradient-to-r from-gradient-2-from to-gradient-2-to px-10 py-5 shadow-md shadow-desaturated-red hover:opacity-70 hover:shadow-xl hover:shadow-desaturated-red hover:transition-all hover:duration-300"
            onClick={handleSubmit}
          >
            <img className="pointer-events-none" src={arrow} alt="icon-arrow" />
          </button>
        </form>
        <p
          className={`mx-4 text-start text-sm text-soft-red ${
            formErrors.email ? "block" : "hidden"
          }`}
        >
          Please provide a valid email
        </p>
      </div>
    </div>
  );
};

export default BaseApparelComingSoonNewsLetter;
