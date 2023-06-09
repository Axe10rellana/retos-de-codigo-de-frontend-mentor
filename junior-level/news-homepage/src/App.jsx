//api
import newsApi from "./api/newsApi";

//componentes
import { Header, Main } from "./components";

const App = () => {
  return (
    <div className="md:mx-auto mx-4 md:w-5/6 flex flex-col md:my-4 my-2">
      <Header />
      <Main newsApi={newsApi} />
    </div>
  );
};

export default App;
