//assets
import transformMobile from "/images/mobile/image-transform.jpg"
import transformDesktop from "/images/desktop/image-transform.jpg"

const Transform = () => {
  return (
    <>
      <section className="lg:flex flex-row-reverse items-center">
        <div className="lg:w-[50%]">
          <picture>
            <source media="(min-width: 768px)" srcSet={transformDesktop} />
            <img
              src={transformMobile}
              alt="Transform mobile"
              className="pointer-events-none select-none w-full"
            />
          </picture>
        </div>

        <div className="p-5 text-center lg:text-left lg:p-20 lg:w-[50%]">
          <h2 className="text-3xl my-5 lg:text-4xl">Transform your brand</h2>
          <p className="mb-5">
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="btn-transform">Learn More</button>
        </div>
      </section>
    </>
  );
};

export default Transform;
