//assets
import standOutMobile from "/images/mobile/image-stand-out.jpg";
import standOutDesktop from "/images/desktop/image-stand-out.jpg";

const StandOut = () => {
  return (
    <>
      <section className="lg:flex flex-row items-center">
        <div className="lg:w-[50%]">
          <picture>
            <source media="(min-width: 768px)" srcSet={standOutDesktop} />
            <img
              className="pointer-events-none select-none w-full"
              src={standOutMobile}
              alt="Stand out mobile"
            />
          </picture>
        </div>

        <div className="p-5 text-center lg:text-left lg:p-20 lg:w-[50%]">
          <h2 className="text-3xl my-5 lg:text-4xl">
            Stand out to the right audience
          </h2>
          <p className="mb-5">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we’ll build and
            extend your brand in digital places.
          </p>
          <button className="btn-standout">Learn More</button>
        </div>
      </section>
    </>
  );
};

export default StandOut;
