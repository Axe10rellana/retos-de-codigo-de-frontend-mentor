//context hook
import { useCodingBootcamp } from "./context/CodingBootcampContext";

//components
import { SliderButtons, Testimonial } from "./components";

const App = () => {
  //context variables
  const { testimonials } = useCodingBootcamp();

  return (
    <section className="container-app">
      <div className="slider">
        {testimonials.map((testimonial, idx) => (
          <Testimonial
            key={testimonial.id}
            testimonial={testimonial}
            idx={idx}
          />
        ))}
        <SliderButtons />
      </div>
    </section>
  );
};

export default App;
