const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay px-5 flex flex-col items-center justify-center text-center">
          <h1 className="font-bold text-4xl text-white mb-5 md:text-5xl xl:text-6xl 2xl:text-7xl">
            A modern publishing platform
          </h1>
          <p className="text-white">
            Grow your audience and build your online brand
          </p>
          <ul className="flex items-center">
            <li className="mx-1 my-5">
              <button className="text-light-red-cta-text bg-white font-bold py-2 px-4 transition-all duration-400 hover:bg-very-light-red-cta-hover-bg hover:text-white rounded-full">
                Start for Free
              </button>
            </li>
            <li className="mx-1 my-5">
              <button className="border font-bold border-white py-2 px-4 transition-all duration-400 hover:bg-white hover:text-light-red-cta-text rounded-full text-white">
                Learn More
              </button>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Showcase;
