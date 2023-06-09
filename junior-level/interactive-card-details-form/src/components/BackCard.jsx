const BackCard = ({ formValues }) => {
  return (
    <div className="back-card relative lg:ml-20">
      <p className="text-white absolute right-10 text-md lg:text-xl tracking-widest">
        {formValues.cvc ? formValues.cvc : "000"}
      </p>
    </div>
  );
};

export default BackCard;
