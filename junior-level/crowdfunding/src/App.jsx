//context
import { useCrowdfunding } from "./context/CrowdfundingContext";

//components
import {
  About,
  Discover,
  Header,
  HeaderOverlay,
  GetStarted,
  ResponsiveImageSwitcher,
  ModalOverlay,
} from "./components";

const App = () => {
  //context variables
  const { modalIsOpen, modalCompletedIsOpen } = useCrowdfunding();

  return (
    <div>
      <Header />
      <ResponsiveImageSwitcher />
      <GetStarted />
      <Discover />
      <About />
      <HeaderOverlay />
      <ModalOverlay isOpen={modalIsOpen} />
      <ModalOverlay isOpen={modalCompletedIsOpen} />
    </div>
  );
};

export default App;
