//componentes
import { CartIcon } from "../";

const AddProduct = ({ count, handleAddToCart }) => {
  return (
    <>
      {count === 0 ? (
        <button
          disabled
          className="col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-orange-primary py-3 text-white md:col-span-1"
        >
          <CartIcon fill="#fff" />
          <span>Add to cart</span>
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          className="col-span-3 flex items-center justify-center gap-x-3 rounded-md bg-orange-primary py-3 text-white transition-all hover:bg-orange-300 md:col-span-1"
        >
          <CartIcon fill="#fff" />
          <span>Add to cart</span>
        </button>
      )}
    </>
  );
};

export default AddProduct;
