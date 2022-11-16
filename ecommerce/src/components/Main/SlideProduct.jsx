//react
import { useEffect, useRef, useState } from "react";

//componentes
import { NextIcon, PreviousIcon } from "../";

const SlideProduct = ({
  arrayImgs = [],
  arrayThumbnailsImgs = [],
  isOpenModal = false,
  handleOpenModal = null,
  handleCloseModal = null,
  ...props
}) => {
  //variables de estado
  const [image, setImage] = useState(0);

  //referencia
  const btnSlider = useRef(null);

  //useEffect
  useEffect(() => {
    isOpenModal && btnSlider.current.classList.remove("md:hidden");
  }, [isOpenModal]);

  //funciones
  const handleClickNext = () =>
    image === arrayImgs.length - 1 ? setImage(0) : setImage(image + 1);

  const handleClickPrev = () =>
    image === 0 ? setImage(arrayImgs.length - 1) : setImage(image - 1);

  return (
    <section {...props}>
      {isOpenModal && (
        <button
          className="text-right text-2xl font-bold text-white md:col-span-4"
          onClick={handleCloseModal}
        >
          X
        </button>
      )}
      <div className="relative col-span-4">
        <img
          src={arrayImgs[image]}
          alt=""
          className="aspect-[16/13] w-full object-cover md:aspect-[16/18] md:cursor-pointer md:rounded-md xl:aspect-[16/16] 2xl:max-h-[500px]"
          onClick={handleOpenModal}
        />
        <div
          ref={btnSlider}
          className="absolute top-1/2 left-0 flex w-full -translate-y-1/2 justify-between px-4 md:hidden md:px-0"
        >
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-white"
            onClick={handleClickPrev}
          >
            <PreviousIcon />
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full bg-white"
            onClick={handleClickNext}
          >
            <NextIcon />
          </button>
        </div>
      </div>
      {arrayThumbnailsImgs.map((imageSmall, i) => (
        <div
          key={i}
          onClick={() => setImage(i)}
          className="relative cursor-pointer overflow-hidden rounded-md"
        >
          <img
            src={imageSmall}
            alt="Sneake"
            className="hidden md:block md:rounded-md"
          />
          <span
            className={`absolute top-0 h-full w-full hover:bg-[rgba(255,255,255,0.8)] ${
              i === image &&
              "border-2 border-orange-primary bg-[rgba(255,255,255,0.8)]"
            }`}
          ></span>
        </div>
      ))}
    </section>
  );
};

export default SlideProduct;
