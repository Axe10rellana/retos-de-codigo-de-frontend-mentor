//assets
import cardLogo from "../assets/images/card-logo.svg";

const FrontCard = ({ formValues }) => {
  return (
    <div className="front-card p-5 flex flex-col justify-between">
      <img
        className="w-[70px] sm:w-[100px] pointer-events-none"
        src={cardLogo}
        alt="card-logo"
      />
      <div className="flex flex-col">
        <h2 className="text-white text-sm lg:text-3xl mb-3 sm:mb-6 tracking-widest">
          {formValues.cardNumber
            ? formValues.cardNumber
            : "0000 0000 0000 0000"}
        </h2>
        <div className="flex flex-row justify-between items-center">
          <p className="uppercase text-sm lg:text-xl tracking-widest text-light-grayish-violet">
            {formValues.cardHolderName
              ? formValues.cardHolderName
              : "Jane Appleseed"}
          </p>
          <p className="text-light-grayish-violet text-sm lg:text-xl tracking-widest">
            {formValues.mm ? formValues.mm : "00"}/
            {formValues.yy ? formValues.yy : "00"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
