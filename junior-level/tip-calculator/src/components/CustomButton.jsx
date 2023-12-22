const CustomButton = ({ id, selectedButton, handleClick, children }) => {
  return (
    <button
      className={`w-full border-none py-2 px-4 cursor-pointer rounded-lg text-[24px] ${
        selectedButton === id
          ? "bg-strong-cyan text-very-dark-cyan"
          : "bg-very-dark-cyan text-white hover:bg-light-grayish-cyan hover:text-very-dark-cyan"
      }`}
      type="button"
      onClick={() => handleClick(id)}
    >
      {children}
    </button>
  );
};

export default CustomButton;
