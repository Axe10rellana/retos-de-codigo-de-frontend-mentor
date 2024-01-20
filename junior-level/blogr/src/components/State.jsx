//assets
import phones from "../assets/icons/illustration-phones.svg";
import circles from "../assets/icons/bg-pattern-circles.svg";

const State = () => {
  return (
    <>
      <section className="state py-10 text-center text-white relative z-10 md:grid md:grid-cols-2 md:py-5 md:text-left xl:px-52">
        <div>
          <div>
            <img
              className="pointer-events-none select-none state-img circles"
              src={circles}
              alt="circles"
            />
          </div>
          <div>
            <img
              className="pointer-events-none select-none state-img"
              src={phones}
              alt="phones"
            />
          </div>
        </div>

        <div className="pt-80 px-20 md:py-20">
          <h2 className="text-center text-3xl mb-5 lg:text-4xl 2xl:text-5xl text-white md:text-left">
            State of the Art Infrastructure
          </h2>
          <p>
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </section>
    </>
  );
};

export default State;
