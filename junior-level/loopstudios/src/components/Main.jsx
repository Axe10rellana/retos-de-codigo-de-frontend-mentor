//context hook
import { useLoopstudios } from "../context/LoopstudiosContext";

//components
import { CreationsSection, InteractiveVRSection } from ".";

const Main = () => {
  //context variable
  const { isOpen } = useLoopstudios();

  return (
    <main
      className={`flex flex-col gap-y-20 px-8 py-20 md:px-24 bg-white ${
        isOpen && "pointer-events-none md:pointer-events-auto"
      }`}
    >
      <InteractiveVRSection />
      <CreationsSection />
    </main>
  );
};

export default Main;
