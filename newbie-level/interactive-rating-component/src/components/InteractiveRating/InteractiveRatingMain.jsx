//react
import { useState } from "react";

//components
import { ThankYou, InteractiveRating } from "../";

//variables
const arrItems = [1, 2, 3, 4, 5];

const InteractiveRatingMain = () => {
  //states
  const [submit, setSubmit] = useState(false);
  const [items, setItems] = useState("");

  //functions
  const handleSubmit = () => setSubmit(true);

  return (
    <>
      {!submit ? (
        <InteractiveRating
          arrItems={arrItems}
          setItems={setItems}
          handleSubmit={handleSubmit}
        />
      ) : (
        <ThankYou items={items} />
      )}
    </>
  );
};

export default InteractiveRatingMain;
