const InformationProduct = ({ objectProduct }) => {
  return (
    <>
      <p className="mb-3 text-sm font-bold uppercase tracking-wide text-orange-primary">
        {objectProduct.subtitle}
      </p>
      <h2 className="mb-4 text-3xl font-bold">{objectProduct.title}</h2>
      <p className="mb-5 text-dark-grayish-blue">{objectProduct.description}</p>
      <div className="mb-5 grid grid-cols-3 items-center gap-4 font-bold md:grid-cols-[1fr_3fr]">
        <span className="text-3xl">
          ${(objectProduct.price * (1 - objectProduct.discount)).toFixed(2)}
        </span>
        <span className="mr-auto rounded-md bg-pale-orange py-1 px-2 text-orange-primary">
          {objectProduct.discount * 100}%
        </span>
        <span className="text-right text-lg text-grayish-blue line-through md:col-span-2 md:text-left">
          ${objectProduct.price.toFixed(2)}
        </span>
      </div>
    </>
  );
};

export default InformationProduct;
