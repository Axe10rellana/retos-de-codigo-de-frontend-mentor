//components
import { Form } from "./";

const Header = () => {
  return (
    <header className="flex w-[100%] flex-col gap-y-5">
      <div className="flex flex-col gap-y-5 text-center">
        <h1 className="text-4xl font-semibold text-custom-gray md:text-5xl">
          We are launching{" "}
          <span className="font-bold text-very-dark-blue">soon!</span>
        </h1>
        <p className="text-md text-very-dark-blue">
          Subscribe and get notified
        </p>
      </div>
      <Form />
    </header>
  );
};

export default Header;
