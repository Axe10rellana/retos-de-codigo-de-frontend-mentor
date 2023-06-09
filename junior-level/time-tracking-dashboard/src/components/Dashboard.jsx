//components
import { Card } from "./";

export default function Dashboard({options, active1, active2, active3}) {
  return (
    <section className="grid-responsive h-[100%] w-[100%] gap-2 lg:w-[70%]">
      {
        options?.map((data, index) => (
          <Card key={index} data={data} active1={active1} active2={active2} active3={active3} />
        ))
      }
    </section>
  );
};