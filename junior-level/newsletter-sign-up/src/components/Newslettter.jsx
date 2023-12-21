//assets
import mobile from "../assets/icons/illustration-sign-up-mobile.svg";
import desktop from "../assets/icons/illustration-sign-up-desktop.svg";

//components
import { IconList } from ".";

const Newslettter = ({ setEmail, handleValidateEmail, isValid, email }) => {
  return (
    <div className="flex items-center justify-center lg:my-5">
      <div className="flex flex-col-reverse gap-y-4 bg-white w-full lg:p-4 lg:flex-row lg:gap-x-4 lg:rounded-3xl lg:shadow-lg lg:shadow-dark-slate-grey lg:w-[75%]">
        <div className="flex flex-col gap-y-8 p-6 justify-center lg:px-6">
          <h1 className="text-charcoal-grey font-bold text-5xl">
            Stay updated!
          </h1>
          <p className="text-charcoal-grey text-lg">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="flex flex-col gap-y-4 text-charcoal-grey text-lg">
            <div className="flex gap-x-4 items-center">
              <IconList />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="flex gap-x-4 items-center">
              <IconList />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="flex gap-x-4 items-center">
              <IconList />
              <p>And much more!</p>
            </div>
          </div>
          <form className="flex flex-col text-lg mb-6 lg:mb-0">
            <div className="flex justify-between mb-2 font-bold text-sm">
              <label htmlFor="email" className="text-charcoal-grey">
                Email address
              </label>
              {!isValid && email !== "" && (
                <p className="text-custom-tomato">Valid email required</p>
              )}
            </div>
            <input
              className={`p-4 placeholder:text-custom-grey mb-6 outline-none border-[1px] border-solid rounded-lg ${
                !isValid && email !== ""
                  ? "border-custom-tomato text-custom-tomato focus:border-custom-tomato bg-custom-error"
                  : "border-custom-grey text-charcoal-grey focus:border-charcoal-grey"
              }`}
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email@company.com"
              required
            />
            <input
              className="bg-dark-slate-grey text-white font-bold p-4 rounded-lg outline-none cursor-pointer transition duration-400 hover:bg-gradient-to-r hover:from-pink-500 hover:to-orange-400"
              type="submit"
              value="Subscribe to monthly newsletter"
              onClick={(e) => handleValidateEmail(e)}
            />
          </form>
        </div>
        <div className="lg:hidden">
          <img src={mobile} alt="Newsletter" className="w-full h-full" />
        </div>
        <div className="hidden lg:block">
          <img src={desktop} alt="Newsletter" height={250} width={768} />
        </div>
      </div>
    </div>
  );
};

export default Newslettter;
