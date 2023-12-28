//provider
import { WindowSizeProvider } from "./context/WindowSizeContext";

//components
import {
  Footer,
  GraphicDesktop,
  GraphicMobile,
  GridDesktop,
  GridMobile,
  Header,
  Showcase,
  StandOut,
  Testimonials,
  Transform,
} from "./components";

const App = () => {
  return (
    <WindowSizeProvider>
      <>
        <Header />
        <Showcase />
        <Transform />
        <StandOut />
        <div className="block md:hidden">
          <GraphicMobile />
        </div>
        <div className="hidden md:block">
          <GraphicDesktop />
        </div>
        <Testimonials />
        <div className="block md:hidden">
          <GridMobile />
        </div>
        <div className="hidden md:block">
          <GridDesktop />
        </div>
        <Footer />
      </>
    </WindowSizeProvider>
  );
};

export default App;
