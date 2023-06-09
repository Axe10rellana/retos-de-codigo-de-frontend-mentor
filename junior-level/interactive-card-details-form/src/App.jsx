//react
import { useState } from "react";

//components
import { BgCardDetails, CardDetails, CardRegister } from "./components";

const App = () => {
  //state variables
  const [formValues, setFormValues] = useState({
    cardHolderName: "",
    cardNumber: "",
    mm: "",
    yy: "",
    cvc: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isValidate, setIsValidate] = useState(false);

  //variables
  const currentYear = new Date().getFullYear();
  const year = Math.abs(currentYear) % 100;

  //functions
  const validateForm = () => {
    const errors = {};
    if (!formValues.cardHolderName.trim()) {
      errors.cardHolderName = "Can't be blank";
    } else if (
      !/^[A-Za-z][A-Za-z\s]*[A-Za-z]$/.test(formValues.cardHolderName)
    ) {
      errors.cardHolderName = "Wrong format, letters only";
    }

    if (!formValues.cardNumber.trim()) {
      errors.cardNumber = "Can't be blank";
    } else if (!/^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(formValues.cardNumber)) {
      errors.cardNumber = "Wrong format, numbers only";
    }

    if (!formValues.mm.trim()) {
      errors.mm = "Can't be blank";
    } else if (!(formValues.mm >= 1 && formValues.mm <= 12)) {
      errors.mm =
        "Wrong format, the number can't be less than 1 nor greater than 12";
    } else if (!/^[0-9]{1,2}$/.test(formValues.mm)) {
      errors.mm = "Wrong format, numbers only";
    }

    if (!formValues.yy.trim()) {
      errors.yy = "Can't be blank";
    } else if (!(formValues.yy >= year && formValues.yy <= 99)) {
      errors.yy = `Wrong format, the number can't be less than ${year} nor greater than 99`;
    } else if (!/^[0-9]{1,2}$/.test(formValues.yy)) {
      errors.yy = "Wrong format, numbers only";
    }

    if (!formValues.cvc.trim()) {
      errors.cvc = "Can't be blank";
    } else if (!(formValues.cvc >= 100 && formValues.cvc <= 999)) {
      errors.cvc =
        "Wrong format, the number can't be less than 1 nor greater than 999";
    } else if (!/^[0-9]{1,3}$/.test(formValues.cvc)) {
      errors.cvc = "Wrong format, numbers only";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      setIsValidate(true);
    }
  };

  const handleConfirm = (event) => {
    event.preventDefault();
    setIsValidate(false);
  };

  return (
    <section>
      <BgCardDetails />
      <div className="select-none flex flex-col lg:flex-row items-center justify-center lg:h-screen">
        <CardDetails formValues={formValues} />
        <CardRegister
          setFormValues={setFormValues}
          formErrors={formErrors}
          formValues={formValues}
          isValidate={isValidate}
          handleConfirm={handleConfirm}
          handleSubmit={handleSubmit}
        />
      </div>
    </section>
  );
};

export default App;
