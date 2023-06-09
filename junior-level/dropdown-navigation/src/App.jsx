//react
import { NavbarContextProvider } from "./context/NavbarContext";

//components
import { DropdownNavigation, IntroSection } from "./components";

const App = () => {
  return (
    <NavbarContextProvider>
      <div className="flex flex-col gap-y-4">
        <DropdownNavigation />
        <IntroSection />
      </div>
    </NavbarContextProvider>
  );
};

export default App;
