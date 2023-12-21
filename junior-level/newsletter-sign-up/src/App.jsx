//react
import { useState } from "react";

//components
import { Newsletter, SubscriptionSuccess } from "./components";

const App = () => {
  //state variables
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  //functions
  const handleValidateEmail = (e) => {
    e.preventDefault();

    if (email === "") return;

    const emailRegex =
      /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
    const isValidEmail = emailRegex.test(email);
    setIsValid(isValidEmail);
    setIsSuccess(true);
  };

  return (
    <>
      {isSuccess && isValid && email !== "" ? (
        <SubscriptionSuccess
          setIsSuccess={setIsSuccess}
          setEmail={setEmail}
          email={email}
        />
      ) : (
        <Newsletter
          setEmail={setEmail}
          handleValidateEmail={handleValidateEmail}
          isValid={isValid}
          email={email}
        />
      )}
    </>
  );
};

export default App;
