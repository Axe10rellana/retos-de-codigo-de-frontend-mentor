//assets
import { graphicDesktop } from "../data/graphic";

const GraphicDesktop = () => {
  return (
    <>
      <section className="graphic md:flex items-center justify-center 2xl:max-w-7xl 2xl:mx-auto">
        {graphicDesktop.map(({ id, image, title, text }) => (
          <article key={id} className="relative">
            <img
              className="pointer-events-none select-none"
              src={image}
              alt={title}
            />
            <div className="absolute bottom-5 left-0 text-center">
              <h3 className="text-xl mb-5">{title}</h3>
              <p>{text}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
};

export default GraphicDesktop;
