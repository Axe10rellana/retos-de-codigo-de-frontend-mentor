//assets
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <>
      <section className="py-10 px-5 lg:py-20">
        <h2 className="testimonials-header text-xl uppercase tracking-widest text-center">
          Client Testimonials
        </h2>

        <div className="md:grid grid-cols-2 gap-5 lg:grid-cols-3 xl:max-w-6xl xl:mx-auto">
          {testimonials.map(({ id, image, name, desc, title }) => (
            <article key={id}>
              <img
                src={image}
                alt={name}
                className="pointer-events-none select-none w-20 rounded-full block mx-auto mt-10 mb-20"
              />
              <p className="text-center mb-20">{desc}</p>
              <h4 className="text-center">{name}</h4>
              <small className="block text-grayish-blue text-center">
                {title}
              </small>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
