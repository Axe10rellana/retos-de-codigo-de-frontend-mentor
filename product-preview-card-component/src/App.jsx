//componentes
import { CardInfo, CardImage } from "./components";

const App = () => {
  return (
    <div className="mx-4 my-9 flex flex-col md:mx-auto md:my-[5%] md:h-[500px] md:w-[80%] md:flex-row lg:w-[60%]">
      <CardImage />
      <CardInfo />
    </div>
  );
};

export default App;
