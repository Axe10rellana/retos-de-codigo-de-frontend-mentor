//assets
import logo from "../assets/images/logo.svg";

const Balance = () => {
  return (
    <div className="flex flex-row items-center justify-between p-6 rounded-2xl bg-soft-red">
      <div className="flex flex-col gap-y-3 text-very-pale-orange">
        <p>My balance</p>
        <h2 className="text-3xl font-bold">$921.48</h2>
      </div>
      <img className="pointer-events-none" src={logo} alt="logo" />
    </div>
  );
};

export default Balance;
