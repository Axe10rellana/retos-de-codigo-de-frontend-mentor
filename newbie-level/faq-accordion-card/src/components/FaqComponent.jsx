//react
import { useState } from "react";

//components
import { Accordion } from "./";

//data
import { items } from "../data/items";

const FaqComponent = () => {
  //state variables
  const [itemsState] = useState(items);

  return (
    <div className="flex flex-col gap-y-6 px-8 py-8 text-start lg:w-[60%]">
      <h1 className="text-center text-3xl font-bold uppercase text-very-dark-desaturated-blue lg:text-start">
        Faq
      </h1>
      <div className="flex flex-col gap-y-2">
        {itemsState.map((item, index) => (
          <Accordion key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;