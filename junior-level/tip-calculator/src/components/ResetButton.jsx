const ResetButton = ({ isValid, resetEverything }) => {
  return isValid ? (
    <button
      type="submit"
      className="text-very-dark-cyan bg-strong-cyan transition duration-400 outline-none hover:bg-light-grayish-cyan rounded-lg p-2 uppercase text-[24px]"
      id="resetBtn"
      onClick={resetEverything}
    >
      Reset
    </button>
  ) : (
    <button
      type="button"
      className="text-very-dark-cyan/50 bg-strong-cyan/30 rounded-lg outline-none p-2 uppercase text-[24px] cursor-not-allowed"
      disabled
    >
      Reset
    </button>
  );
};

export default ResetButton;
