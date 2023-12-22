//assets
import person from "../assets/icons/icon-person.svg";

const InputNumberOfPeople = ({
  numberOfPeopleError,
  numberOfPeople,
  handleNumberOfPeopleChange,
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-row justify-between">
        <label htmlFor="numberPeople" className="text-dark-grayish-cyan">
          Number of People
        </label>
        {numberOfPeopleError && (
          <p className="text-red-500/80">{numberOfPeopleError}</p>
        )}
      </div>
      <div className="relative">
        <img
          src={person}
          alt="Person icon"
          className="absolute left-4 top-1/2 pointer-events-none select-none transform -translate-y-1/2 text-very-dark-cyan"
        />
        <input
          className={`border-[3px] border-solid  rounded-lg text-right bg-very-light-grayish-cyan text-very-dark-cyan placeholder:text-grayish-cyan text-[24px] outline-none p-2 w-full ${
            numberOfPeopleError
              ? "border-red-500/80 focus:border-red-500/80"
              : "border-very-light-grayish-cyan focus:border-strong-cyan"
          }`}
          type="text"
          name="numberPeople"
          id="numberPeople"
          placeholder="0"
          value={numberOfPeople}
          onChange={(e) => handleNumberOfPeopleChange(parseInt(e.target.value))}
        />
      </div>
    </div>
  );
};

export default InputNumberOfPeople;
