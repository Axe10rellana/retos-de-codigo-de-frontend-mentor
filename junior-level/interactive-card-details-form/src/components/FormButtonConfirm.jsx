const FormButtonConfirm = ({ handleConfirm }) => {
  return (
    <button
      onClick={handleConfirm}
      type="button"
      className="bg-very-dark-violet outline-none w-[100%] py-2 rounded-lg text-white"
    >
      Continue
    </button>
  );
};

export default FormButtonConfirm;
