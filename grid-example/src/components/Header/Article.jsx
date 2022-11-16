//componentes
import { ArrowIcon } from "../";

const Article = ({ hero }) => {
  return (
    <>
      <img
        className="col-start-1 col-end-4 row-start-1 row-end-3 h-full w-full lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3"
        src={hero.image}
        alt={hero.title}
      />
      <article className="col-start-1 col-end-4 row-start-3 row-end-4 flex flex-col items-start justify-center p-8 transition-all duration-500 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-2 lg:px-16">
        <h1 className="mb-6 text-4xl font-bold">{hero.title}</h1>
        <p className="mb-6 text-dark-gray">{hero.description}</p>
        <button className="flex items-center hover:fill-dark-gray hover:text-dark-gray">
          <span className="mr-4 text-base font-semibold uppercase tracking-[1rem]">
            Shop now
          </span>
          <ArrowIcon />
        </button>
      </article>
    </>
  );
};

export default Article;
