//components
import { SignUpForm } from "./components";

const App = () => {
  return (
    <div className="mx-auto my-16 flex w-[100%] select-none flex-col gap-y-10 md:w-[80%] md:flex-row md:gap-x-5">
      <div className="flex w-[100%] flex-col justify-center gap-y-8 px-5 text-center md:w-[50%] md:text-start">
        <h1 className="text-2xl font-bold text-white md:text-5xl">
          Learn to code by watching others
        </h1>
        <p className="text-white">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <SignUpForm />
    </div>
  );
};

export default App;
