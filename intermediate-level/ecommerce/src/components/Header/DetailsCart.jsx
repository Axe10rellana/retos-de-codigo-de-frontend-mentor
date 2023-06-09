//react
import { useContext } from "react";

//context
import { useCartDetails } from "../../context/useCartDetails";

//componentes
import { DeleteIcon } from "../";

const DetailsCart = () => {
  //variables del contexto
  const { cartProducts, deleteCartProducts } = useContext(useCartDetails);

  return (
    <section className="absolute top-[125%] left-0 z-10 w-full md:left-full md:top-full md:max-w-lg md:-translate-x-full">
      <div className="mx-4 rounded-md bg-white shadow-2xl">
        <h4 className="px-6 py-8 text-lg font-bold">Cart</h4>
        <hr />
        {cartProducts.length === 0 && (
          <p className="py-16 text-center font-bold text-dark-grayish-blue">
            Your cart is empty.
          </p>
        )}
        {cartProducts?.map((product) => (
          <article
            key={product.id}
            className="grid grid-cols-[1fr_4fr_1fr] items-center gap-6 px-6 py-4"
          >
            <img
              className="rounded-md"
              src={product.img}
              alt="Sneaker thumbnail"
            />
            <div className="text-dark-grayish-blue">
              <h6>{product.title}</h6>
              <p>
                <span>
                  ${product.discountPrice.toFixed(2)} x {product.quantity}
                </span>{" "}
                <span className="font-bold text-black">
                  ${(product.discountPrice * product.quantity).toFixed(2)}
                </span>
              </p>
            </div>
            <button
              onClick={() => deleteCartProducts(product.id)}
              className="ml-auto"
            >
              <DeleteIcon className="hover:fill-orange-primary" />
            </button>
          </article>
        ))}
        {cartProducts.length !== 0 && (
          <div className="px-6 pb-8">
            <button className="w-full rounded-md bg-orange-primary py-4 text-white transition-all hover:bg-orange-300">
              Checkout
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default DetailsCart;
