const FormButton = ({ handleSubmit }) => {
  return (
    <button
      type="button"
      onClick={handleSubmit}
      className="bg-very-dark-violet outline-none w-[100%] py-2 rounded-lg text-white"
    >
      Confirm
    </button>
  );
};

export default FormButton;
