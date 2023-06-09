//components
import { FormButtonConfirm } from "./";

//assets
import iconComplete from "../assets/images/icon-complete.svg";

const FormConfirmation = ({ isValidate, handleConfirm }) => {
  return (
    <div
      className={`flex-col gap-y-5 items-center justify-center text-center ${
        isValidate ? "flex" : "hidden"
      }`}
    >
      <img
        className="pointer-events-none"
        src={iconComplete}
        alt="icon-complete"
      />
      <h2 className="uppercase text-very-dark-violet">Thank you!</h2>
      <p className="text-dark-grayish-violet">We've added your card details</p>
      <FormButtonConfirm handleConfirm={handleConfirm} />
    </div>
  );
};

export default FormConfirmation;
