//components
import { FormConfirmation, FormRegister } from "./";

const Form = ({
  setFormValues,
  formErrors,
  formValues,
  isValidate,
  handleConfirm,
  handleSubmit,
}) => {
  return (
    <form className="flex flex-col gap-y-8 lg:w-[50%] w-[100%]">
      <FormRegister
        isValidate={isValidate}
        handleSubmit={handleSubmit}
        setFormValues={setFormValues}
        formValues={formValues}
        formErrors={formErrors}
      />
      <FormConfirmation isValidate={isValidate} handleConfirm={handleConfirm} />
    </form>
  );
};

export default Form;
