//components
import { IllustrationThankYouIcon } from "../";

const ThankYou = ({ items }) => {
  return (
    <div className="my-[5rem] mx-6 flex h-auto w-[350px] select-none flex-col items-center justify-between rounded-3xl bg-very-dark-blue p-8 text-center">
      <IllustrationThankYouIcon className="mb-6" />
      <p className="mb-6 rounded-3xl bg-dark-blue px-6 py-2 text-[15px] text-custom-orange">
        You selected {items} out of 5
      </p>
      <h2 className="mb-4 text-2xl font-bold text-white">Thank you!</h2>
      <p className="text-[15px] text-light-grey">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankYou;
