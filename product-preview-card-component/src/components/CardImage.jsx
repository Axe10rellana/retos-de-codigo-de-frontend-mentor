//assets
import { ProductDesktop, ProductMobile } from "../assets";

const CardImage = () => {
  return (
    <>
      <img
        className="hidden select-none rounded-tl-xl rounded-bl-xl md:block md:w-[50%]"
        src={ProductDesktop}
        alt="Image-product-desktop"
      />
      <img
        className="block select-none rounded-tl-xl rounded-tr-xl md:hidden"
        src={ProductMobile}
        alt="Image-product-mobile"
      />
    </>
  );
};

export default CardImage;
