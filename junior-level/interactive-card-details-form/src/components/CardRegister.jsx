//components
import { Form } from "./";

const CardRegister = ({
  setFormValues,
  formErrors,
  formValues,
  isValidate,
  handleSubmit,
  handleConfirm,
}) => {
  return (
    <div className="flex items-center absolute bottom-0 lg:relative justify-center lg:pl-20 lg:w-[60%] w-[90%]">
      <Form
        setFormValues={setFormValues}
        formErrors={formErrors}
        formValues={formValues}
        isValidate={isValidate}
        handleConfirm={handleConfirm}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default CardRegister;
