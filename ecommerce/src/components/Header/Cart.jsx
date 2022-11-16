//react
import { useContext } from "react";

//assets
import { AvatarImage } from "../../assets";

//context
import { useCartDetails } from "../../context/useCartDetails";

//componentes
import { CartIcon, DetailsCart } from "../";

const Cart = ({ handleClickDetailsCart, isOpenDetailsCart }) => {
  //variables del contexto
  const { totalQuantityProducts } = useContext(useCartDetails);

  return (
    <div className="flex justify-between gap-x-4">
      <button className="relative mt-1" onClick={handleClickDetailsCart}>
        <CartIcon />
        <span className="absolute top-0 right-0 translate-x-1 rounded-full bg-orange-primary px-2 text-sm font-bold text-white">
          {totalQuantityProducts}
        </span>
      </button>
      <img src={AvatarImage} alt="Avatar" title="User" className="w-10" />
      {isOpenDetailsCart && <DetailsCart />}
    </div>
  );
};

export default Cart;
