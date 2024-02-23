//components
import { InteractiveVRDesktop, InteractiveVRMobile } from ".";

const InteractiveVRSection = () => {
  return (
    <div className="relative flex flex-col gap-y-8">
      <InteractiveVRDesktop />
      <InteractiveVRMobile />
    </div>
  );
};

export default InteractiveVRSection;
