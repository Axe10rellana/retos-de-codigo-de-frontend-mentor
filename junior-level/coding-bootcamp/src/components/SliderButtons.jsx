//context hook
import { useCodingBootcamp } from "../context/CodingBootcampContext";

const SliderButtons = () => {
  //context variables
  const { prevSlide, nextSlide } = useCodingBootcamp();

  return (
    <div className="buttons">
      <div className="prev" onClick={prevSlide}></div>
      <div className="next" onClick={nextSlide}></div>
    </div>
  );
};

export default SliderButtons;
