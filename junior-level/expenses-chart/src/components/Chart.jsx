//react-chartjs-2
import { Bar as BarJS } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

const Chart = () => {
  //state variables
  const state = {
    labels: ["mon", "tue", "wen", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "",
        backgroundColor: "hsl(10, 79%, 65%)",
        hoverBackgroundColor: "hsl(186, 34%, 60%)",
        borderRadius: 8,
        data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
      },
    ],
  };

  return (
    <div className="flex flex-row justify-between gap-x-2 sm:gap-x-3">
      <BarJS data={state} className={`cursor-pointer`} />
    </div>
  );
};

export default Chart;
