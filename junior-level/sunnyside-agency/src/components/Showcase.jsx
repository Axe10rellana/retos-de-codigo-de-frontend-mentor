//assets
import arrow from "../assets/icons/icon-arrow-down.svg";

const Showcase = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay">
          <h1 className="text-4xl text-center uppercase text-white tracking-widest lg:text-6xl">
            We are creatives
          </h1>
          <img
            className="pointer-events-none arrow-down select-none"
            src={arrow}
            alt="Arrow down"
          />
        </div>
      </section>
    </>
  );
};

export default Showcase;
