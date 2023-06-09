//components
import { Logo, Header, Main, Footer } from "./components";

const App = () => {
  return (
    <div className="mx-auto my-10 flex w-[90%] select-none flex-col items-center gap-y-12 md:w-[60%]">
      <Logo />
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
