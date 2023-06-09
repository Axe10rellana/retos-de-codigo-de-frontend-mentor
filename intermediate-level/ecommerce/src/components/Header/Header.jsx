//react
import { useState } from "react";

//componentes
import { Menu, Cart } from "../";

const Header = () => {
  //variables de estado
  const [isOpenDetailsCart, setIsOpenDetailsCart] = useState(false);

  //funciones
  const handleClickDetailsCart = () => setIsOpenDetailsCart((prev) => !prev);

  return (
    <>
      <header className="container relative mx-auto flex items-center justify-between gap-4 p-4 md:p-0">
        <Menu />
        <Cart
          handleClickDetailsCart={handleClickDetailsCart}
          isOpenDetailsCart={isOpenDetailsCart}
        />
      </header>
      <span className="container mx-auto hidden h-[1px] w-full bg-gray-500 md:block"></span>
    </>
  );
};

export default Header;
