//assets
import { gridMobile } from "../data/grid";

const GridMobile = () => {
  return (
    <>
      <section className="grid grid-cols-2">
        {gridMobile.map(({ id, image }) => (
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

export default GridMobile;
