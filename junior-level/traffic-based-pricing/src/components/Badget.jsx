const Badget = () => {
  return (
    <>
      <label className="hidden md:block name">
        <span>25% discount</span>
      </label>

      <label className="block md:hidden name">
        <span>-25%</span>
      </label>
    </>
  );
};

export default Badget;
