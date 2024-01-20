//provider
import { BlogrProvider } from "./context/BlogrContext";

//components
import { Designed, Footer, Free, Header, Showcase, State } from "./components";

const App = () => {
  return (
    <BlogrProvider>
      <>
        <Header />
        <Showcase />
        <Designed />
        <State />
        <Free />
        <Footer />
      </>
    </BlogrProvider>
  );
};

export default App;
