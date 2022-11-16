//componentes
import { DetailsProduct, GalleryProduct } from "../";

//assets
import {
  imgProduct1,
  imgProduct2,
  imgProduct3,
  imgProduct4,
  imgProduct1Thumbnail,
  imgProduct2Thumbnail,
  imgProduct3Thumbnail,
  imgProduct4Thumbnail,
} from "../../assets";

const arrayImgs = [imgProduct1, imgProduct2, imgProduct3, imgProduct4];
const arrayThumbnailsImgs = [
  imgProduct1Thumbnail,
  imgProduct2Thumbnail,
  imgProduct3Thumbnail,
  imgProduct4Thumbnail,
];
const objectProduct = {
  id: 1,
  title: "Fall Limited Edition Sneakers",
  subtitle: "SNEAKER COMPANY",
  description:
    "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
  price: 250,
  discount: 0.5,
  images: arrayImgs,
  thumbnails: arrayThumbnailsImgs,
};

const Main = () => {
  return (
    <main className="grid grid-cols-1 items-center gap-8 md:container md:mx-auto md:min-h-[calc(100vh-88px-3px)] md:grid-cols-2">
      <GalleryProduct
        arrayImgs={objectProduct.images}
        arrayThumbnailsImgs={objectProduct.thumbnails}
      />
      <DetailsProduct objectProduct={objectProduct} />
    </main>
  );
};

export default Main;
