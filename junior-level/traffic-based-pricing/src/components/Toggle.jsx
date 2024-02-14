const Toggle = () => {
  return (
    <>
      <input type="checkbox" className="checkbox" id="checkbox" />

      <label htmlFor="checkbox" className="label">
        <div className="ball"></div>
      </label>
    </>
  );
};

export default Toggle;
