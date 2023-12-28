//data
import { navbar } from "../data/navbar";

//components
import { CTA } from ".";

const Navbar = () => {
  return (
    <nav>
      <div className="absolute left-1/2 top-20 transform -translate-x-1/2 z-10 bg-white px-5 py-6 shadow-lg text-center w-[90%] md:right-0 md:top-0 md:bg-transparent md:shadow-none md:w-auto md:p-0 md:relative md:text-left md:flex md:items-center">
        <ul className="flex flex-col md:flex-row md:mx-10 mt-4 mb-10 gap-y-8 md:mt-0 md:mb-0 md:gap-x-8 text-2xl md:text-lg">
          {navbar.map(({ id, title }) => (
            <li
              key={id}
              className="cursor-pointer text-dark-grayish-blue md:text-white"
            >
              {title}
            </li>
          ))}
        </ul>
        <CTA />
      </div>
    </nav>
  );
};

export default Navbar;
