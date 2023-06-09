//componentes
import { CartIcon } from "./";

const CardInfo = () => {
  return (
    <div className="flex select-none flex-col justify-between rounded-bl-xl rounded-br-xl bg-white p-7 md:w-[50%] md:rounded-tr-xl md:rounded-br-xl md:rounded-bl-none">
      <h2 className="mb-4 text-[1rem] uppercase tracking-[0.3rem] text-dark-grayish-blue">
        Perfume
      </h2>
      <h1 className="mb-4 font-fraunces text-[2.5rem] leading-none">
        Gabrielle Essence Eau De Parfum
      </h1>
      <p className="mb-4 text-dark-grayish-blue">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="mb-4 flex items-center gap-x-10">
        <span className="font-fraunces text-[2.5rem] leading-none text-dark-cyan">
          $149.99
        </span>
        <span className="text-dark-grayish-blue line-through">$169.99</span>
      </div>
      <button className="mx-auto flex w-[100%] items-center justify-center rounded-xl bg-dark-cyan py-4 text-[1rem] font-bold transition-all duration-300 hover:bg-very-dark-cyan">
        <CartIcon /> <span className="ml-2 text-white">Add to Cart</span>
      </button>
    </div>
  );
};

export default CardInfo;
