//assets
import { gridDesktop } from "../data/grid";

const GridDesktop = () => {
  return (
    <>
      <section className="grid grid-cols-4">
        {gridDesktop.map(({ id, image }) => (
          <article key={id}>
            <img
              className="pointer-events-none select-none"
              src={image}
              alt={`item-${id}`}
            />
          </article>
        ))}
      </section>
    </>
  );
};

export default GridDesktop;
