//components
import { InformationToSubscribe, SponsorsInformation } from "./";

const Information = () => {
  return (
    <section className="flex flex-col justify-between gap-y-8 px-5 lg:pr-16 xl:pr-32 lg:gap-0 lg:w-[60%] xl:w-[65%]">
      <InformationToSubscribe />
      <SponsorsInformation />
    </section>
  );
};

export default Information;
