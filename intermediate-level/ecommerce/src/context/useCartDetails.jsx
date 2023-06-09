//react
import { createContext, useState } from "react";

export const useCartDetails = createContext();

export default (props) => {
  //variables de estado
  const [cartProducts, setCartProducts] = useState([]);

  //funciones
  const addCartProducts = (product) => {
    if (cartProducts.length === 0)
      return setCartProducts([...cartProducts, product]);

    setCartProducts(
      cartProducts?.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: item.quantity + product.quantity };
        } else {
          return item;
        }
      })
    );
  };
  const deleteCartProducts = (id) => {
    setCartProducts(
      cartProducts?.filter((item) => {
        if (item.id !== id) {
          return { ...item, quantity: item.quantity - product.quantity };
        }
      })
    );
  };
  const totalQuantityProducts = cartProducts?.reduce(
    (acc, current) => current.quantity + acc,
    0
  );

  return (
    <useCartDetails.Provider
      value={{
        cartProducts,
        addCartProducts,
        deleteCartProducts,
        totalQuantityProducts,
      }}
    >
      {props.children}
    </useCartDetails.Provider>
  );
};
