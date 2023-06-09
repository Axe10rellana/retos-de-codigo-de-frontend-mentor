//assets
import iconArrow from "../assets/images/icon-arrow.svg";

const Button = ({ handleSubmit }) => {
  return (
    <div className="flex mb-8 flex-col relative">
      <article className="border-solid border-b border-off-white"></article>
      <button
        type="button"
        className="bg-custom-purple w-[60px] h-[60px] flex items-center justify-center rounded-full transition-all duration-300 hover:bg-off-black outline-none absolute right-[43%] lg:right-0 -top-7"
        onClick={handleSubmit}
      >
        <img
          className="w-[30px] h-[30px] pointer-events-none"
          src={iconArrow}
          alt="icon-arrow"
        />
      </button>
    </div>
  );
};

export default Button;
