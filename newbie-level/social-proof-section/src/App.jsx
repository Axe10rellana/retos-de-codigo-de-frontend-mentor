//components
import { SocialProofSectionHeader, SocialProofSectionMain } from "./components";

const App = () => {
  return (
    <div className="mx-auto my-10 flex w-[90%] select-none flex-col gap-y-10 md:w-[80%]">
      <SocialProofSectionHeader />
      <SocialProofSectionMain />
    </div>
  );
};

export default App;
