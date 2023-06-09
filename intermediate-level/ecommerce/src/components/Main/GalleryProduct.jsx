//react
import { useState } from "react";

//componentes
import { SlideProduct } from "..";

const GalleryProduct = ({ arrayImgs, arrayThumbnailsImgs }) => {
  //variables de estado
  const [isOpenModal, setIsOpenModal] = useState(false);

  //funciones
  const handleOpenModal = () => window.innerWidth > 767 && setIsOpenModal(true);

  const handleCloseModal = () => setIsOpenModal(false);

  return (
    <>
      <SlideProduct
        arrayImgs={arrayImgs}
        arrayThumbnailsImgs={arrayThumbnailsImgs}
        className="grid md:grid-cols-4 md:gap-4"
        handleOpenModal={handleOpenModal}
      />
      {isOpenModal && (
        <>
          <SlideProduct
            arrayImgs={arrayImgs}
            arrayThumbnailsImgs={arrayThumbnailsImgs}
            isOpenModal={isOpenModal}
            handleCloseModal={handleCloseModal}
            className="static top-1/2 left-1/2 z-30 hidden md:fixed md:grid md:max-w-md md:-translate-x-1/2 md:-translate-y-1/2 md:grid-cols-4 md:gap-4"
          />
          <span className="static top-0 left-0 z-20 md:fixed md:h-full md:w-full md:bg-black/75"></span>
        </>
      )}
    </>
  );
};

export default GalleryProduct;
