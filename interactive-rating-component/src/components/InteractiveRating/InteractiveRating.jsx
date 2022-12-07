//components
import { StarIcon } from "../";

const InteractiveRating = ({ arrItems, setItems, handleSubmit }) => {
  return (
    <div className="my-[5rem] mx-6 flex h-auto w-[350px] select-none flex-col justify-between rounded-3xl bg-very-dark-blue p-8">
      <div className="mb-8 flex h-[48px] w-[48px] flex-col items-center justify-center rounded-full bg-dark-blue">
        <StarIcon />
      </div>
      <h1 className="mb-4 text-2xl font-bold text-white">How did we do?</h1>
      <p className="mb-6 text-[15px] text-light-grey">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="mb-8 flex items-center justify-between">
        {arrItems.map((item, index) => (
          <button
            key={index}
            onClick={() => setItems(item)}
            className={`flex h-[40px] w-[15%] flex-col items-center justify-center rounded-full border-none bg-dark-blue text-light-grey outline-none transition-all  duration-300 hover:bg-custom-orange hover:text-white focus:bg-medium-grey focus:text-white`}
          >
            {item}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="w-[100%] rounded-3xl bg-custom-orange py-2 uppercase tracking-widest text-white transition-all duration-300 hover:bg-white hover:text-custom-orange"
      >
        Submit
      </button>
    </div>
  );
};

export default InteractiveRating;
