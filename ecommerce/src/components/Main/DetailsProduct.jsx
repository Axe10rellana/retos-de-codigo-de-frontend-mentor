//react
import { useContext, useState } from "react";

//componentes
import { AddProduct, QuantityProduct, InformationProduct } from "../";

//context
import { useCartDetails } from "../../context/useCartDetails";

const DetailsProduct = ({ objectProduct }) => {
  //variables del contexto
  const { addCartProducts } = useContext(useCartDetails);

  //variables de estado
  const [count, setCount] = useState(0);

  //funciones
  const handleSumCounter = () => setCount(count + 1);
  const handleSubtractionCounter = () => {
    if (count > 0) return setCount(count - 1);
  };
  const handleAddToCart = () => {
    addCartProducts({
      img: objectProduct.thumbnails[0],
      id: objectProduct.id,
      discountPrice: objectProduct.price * (1 - objectProduct.discount),
      title: objectProduct.title,
      quantity: count || 1,
    });
    setCount(0);
  };

  return (
    <section className="container mx-auto px-4">
      <InformationProduct objectProduct={objectProduct} />
      <div className="grid grid-cols-3 gap-4 font-bold md:grid-cols-[1fr_1.7fr]">
        <QuantityProduct
          count={count}
          handleSubtractionCounter={handleSubtractionCounter}
          handleSumCounter={handleSumCounter}
        />
        <AddProduct count={count} handleAddToCart={handleAddToCart} />
      </div>
    </section>
  );
};

export default DetailsProduct;
