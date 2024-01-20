const Buttons = () => {
  return (
    <>
      <ul>
        <li>
          <button className="py-2 text-very-dark-blue-headings md:text-white font-bold px-6 rounded-full">
            Login
          </button>
        </li>
        <li>
          <button className="hidden md:block md:bg-white md:text-light-red-cta-text font-bold py-2 px-8 rounded-full transition-all duration-300 md:hover:bg-very-light-red-cta-hover-bg md:hover:text-white">
            Sign Up
          </button>
          <button className="block md:hidden bg-gradient-to-r from-very-light-red to-light-red text-white font-bold py-2 px-8 rounded-full transition-all duration-300">
            Sign Up
          </button>
        </li>
      </ul>
    </>
  );
};

export default Buttons;
