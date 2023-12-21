//components
import { IconSuccess } from ".";

const SubscriptionSuccess = ({ setIsSuccess, setEmail, email }) => {
  //functions
  const handleDismiss = () => {
    setIsSuccess(false);
    setEmail("");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white lg:bg-dark-slate-grey">
      <div className="flex flex-col bg-white gap-y-20 p-8 lg:rounded-3xl lg:shadow-lg lg:shadow-dark-slate-grey lg:w-[50%]">
        <div className="flex flex-col items-star gap-y-6">
          <IconSuccess />
          <h1 className="text-charcoal-grey font-bold text-5xl">
            Thanks for subscribing!
          </h1>
          <p className="text-charcoal-grey text-lg">
            A confirmation email has been sent to <strong>{email}</strong>.
            Please open it and click the button inside to confirm your
            subscription.
          </p>
        </div>
        <button
          className="bg-dark-slate-grey text-white font-bold p-4 rounded-lg outline-none cursor-pointer transition duration-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400"
          type="button"
          onClick={handleDismiss}
        >
          Dismiss message
        </button>
      </div>
    </div>
  );
};

export default SubscriptionSuccess;
