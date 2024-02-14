//context
import { usePricing } from "../context/PricingContext";

//assets
import slider from "../assets/icons/icon-slider.svg";

const PricingForm = () => {
  //context variables
  const { sliderValue, handleSliderChange } = usePricing();

  return (
    <div>
      <div className="title">
        <h4>100K Pageviews</h4>
        <p className="price">
          <span>$16.00</span> / month
        </p>
      </div>

      <form className="form">
        <input
          type="range"
          name="range-slider"
          id="range-slider"
          min="0"
          max="10"
          value={sliderValue}
          onChange={handleSliderChange}
        />
        <img
          className="pointer-events-none select-none slider-icon"
          src={slider}
          alt="slider icon"
          draggable={true}
        />
      </form>

      <p className="price">
        <span>$16.00</span> / month
      </p>
    </div>
  );
};

export default PricingForm;
