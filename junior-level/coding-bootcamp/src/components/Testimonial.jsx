//context hook
import { useCodingBootcamp } from "../context/CodingBootcampContext";

const Testimonial = ({ testimonial, idx }) => {
  //context variables
  const { index } = useCodingBootcamp();

  return (
    <div className={`slide ${idx === index ? "show" : "none"}`}>
      <div className="slide-text">
        <p className="testimonial-text">{testimonial.description}</p>
        <p className="author-text flex flex-col lg:flex-row lg:gap-x-2 lg:items-center">
          {testimonial.name}
          <span>{testimonial.career}</span>
        </p>
      </div>
      <div className="slide-img">
        <img
          className="pointer-events-none select-none mx-auto"
          src={testimonial.avatar}
          alt="slider image"
        />
      </div>
    </div>
  );
};

export default Testimonial;
