//data
import { graphicMobile } from "../data/graphic";

const GraphicMobile = () => {
  return (
    <>
      <section className="graphic">
        {graphicMobile.map(({ id, image, title, text }) => (
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

export default GraphicMobile;
