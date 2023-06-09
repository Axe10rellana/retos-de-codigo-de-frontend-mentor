//components
import { FormButton } from "./";

const FormRegister = ({
  isValidate,
  handleSubmit,
  setFormValues,
  formValues,
  formErrors,
}) => {
  return (
    <div className={`flex-col gap-y-5 ${!isValidate ? "flex" : "hidden"}`}>
      <div className="flex flex-col gap-y-2">
        <label
          className="text-very-dark-violet uppercase"
          htmlFor="cardHolderName"
        >
          Cardholder Name
        </label>
        <input
          className={`py-2 px-3 border-solid border-[2px] rounded-lg outline-none text-very-dark-violet ${
            formErrors.cardHolderName
              ? "border-custom-red"
              : "border-light-grayish-violet input-gradient"
          }`}
          type="text"
          id="cardHolderName"
          name="cardHolderName"
          placeholder="e.g. Jane Appleseed"
          value={formValues.cardHolderName}
          onChange={(event) =>
            setFormValues({ ...formValues, cardHolderName: event.target.value })
          }
          autoComplete="off"
          required
        />
        <p
          className={`text-custom-red ${
            formErrors.cardHolderName ? "block" : "hidden"
          }`}
        >
          {formErrors.cardHolderName}
        </p>
      </div>
      <div className="flex flex-col gap-y-2">
        <label className="text-very-dark-violet uppercase" htmlFor="cardNumber">
          Card Number
        </label>
        <input
          className={`py-2 px-3 border-solid border-[2px] rounded-lg outline-none text-very-dark-violet ${
            formErrors.cardNumber
              ? "border-custom-red"
              : "border-light-grayish-violet input-gradient"
          }`}
          type="text"
          id="cardNumber"
          name="cardNumber"
          placeholder="e.g. 1234 5678 9123 0000"
          value={formValues.cardNumber}
          onChange={(event) =>
            setFormValues({ ...formValues, cardNumber: event.target.value })
          }
          autoComplete="off"
          required
        />
        <p
          className={`text-custom-red ${
            formErrors.cardNumber ? "block" : "hidden"
          }`}
        >
          {formErrors.cardNumber}
        </p>
      </div>
      <div className="flex flex-row gap-x-8">
        <div className="flex flex-col gap-y-2 w-[50%]">
          <label className="text-very-dark-violet uppercase" htmlFor="mm">
            Exp. Date (MM/YY)
          </label>
          <div className="flex flex-row gap-x-4 w-[100%]">
            <div className="flex flex-col gap-y-2 w-[50%]">
              <input
                className={`py-2 px-3 border-solid border-[2px] rounded-lg outline-none text-very-dark-violet ${
                  formErrors.mm
                    ? "border-custom-red"
                    : "border-light-grayish-violet input-gradient"
                }`}
                type="text"
                id="mm"
                name="mm"
                value={formValues.mm}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    mm: event.target.value,
                  })
                }
                placeholder="MM"
                required
              />
              <p
                className={`text-custom-red ${
                  formErrors.mm ? "block" : "hidden"
                }`}
              >
                {formErrors.mm}
              </p>
            </div>
            <div className="flex flex-col gap-y-2 w-[50%]">
              <input
                className={`py-2 px-3 border-solid border-[2px] rounded-lg outline-none text-very-dark-violet ${
                  formErrors.yy
                    ? "border-custom-red"
                    : "border-light-grayish-violet input-gradient"
                }`}
                type="number"
                min="23"
                max="99"
                id="yy"
                name="yy"
                value={formValues.yy}
                onChange={(event) =>
                  setFormValues({
                    ...formValues,
                    yy: event.target.value,
                  })
                }
                placeholder="YY"
                required
              />
              <p
                className={`text-custom-red ${
                  formErrors.yy ? "block" : "hidden"
                }`}
              >
                {formErrors.yy}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-2 w-[50%]">
          <label className="text-very-dark-violet uppercase" htmlFor="cvc">
            CVC
          </label>
          <div className="flex flex-col gap-y-2 w-[100%]">
            <input
              className={`w-[100%] py-2 px-3 border-solid border-[2px] rounded-lg outline-none text-very-dark-violet ${
                formErrors.cvc
                  ? "border-custom-red"
                  : "border-light-grayish-violet input-gradient"
              }`}
              type="number"
              min="100"
              max="999"
              id="cvc"
              name="cvc"
              value={formValues.cvc}
              onChange={(event) =>
                setFormValues({
                  ...formValues,
                  cvc: event.target.value,
                })
              }
              placeholder="e.g. 123"
              required
            />
            <p
              className={`text-custom-red ${
                formErrors.cvc ? "block" : "hidden"
              }`}
            >
              {formErrors.cvc}
            </p>
          </div>
        </div>
      </div>
      <FormButton handleSubmit={handleSubmit} />
    </div>
  );
};

export default FormRegister;
