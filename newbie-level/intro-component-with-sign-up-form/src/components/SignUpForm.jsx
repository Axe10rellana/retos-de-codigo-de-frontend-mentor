//components
import { Form } from "./";

const SignUpForm = () => {
  return (
    <div className="flex w-[100%] flex-col gap-y-8 px-5 text-center md:w-[50%] md:text-start">
      <div className="flex justify-center rounded-xl bg-custom-blue py-4 shadow-lg shadow-grayish-blue">
        <p className="text-grayish-blue">
          <span className="font-semibold text-white">Try it free 7 days</span>{" "}
          then $20/mo. thereafter
        </p>
      </div>
      <Form />
    </div>
  );
};

export default SignUpForm;
