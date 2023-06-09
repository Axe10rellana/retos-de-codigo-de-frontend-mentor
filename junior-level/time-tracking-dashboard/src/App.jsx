//react
import { useState, useEffect } from "react";

//components
import { TimeTrackingDashboard } from "./components";

//data
import { data } from "../data.js";

export default function App() {
  //state variables
  const [stateData, setStateData] = useState([]);
  const [options, setOptions] = useState([]);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  //useEffect
  useEffect(() => {
    setStateData(data);
    const option = stateData.map((data) => data.timeframes.weekly && {title: data.title, timeframes: data.timeframes.weekly});
    setOptions(option);
    setActive1(false);
    setActive2(true);
    setActive3(false);
  }, [stateData]);

  //functions
  const handleDaily = () => {
    const option = stateData.map((data) => data.timeframes.daily && {title: data.title, timeframes: data.timeframes.daily});
    setOptions(option);
    setActive1(true);
    setActive2(false);
    setActive3(false);
  };

  const handleWeekly = () => {
    const option = stateData.map((data) => data.timeframes.weekly && {title: data.title, timeframes: data.timeframes.weekly});
    setOptions(option);
    setActive1(false);
    setActive2(true);
    setActive3(false);
  };

  const handleMonthly = () => {
    const option = stateData.map((data) => data.timeframes.monthly && {title: data.title, timeframes: data.timeframes.monthly});
    setOptions(option);
    setActive1(false);
    setActive2(false);
    setActive3(true);
  };
  
  return (
    <div className="flex items-center justify-center my-5">
      <TimeTrackingDashboard active1={active1} active2={active2} active3={active3} handleDaily={handleDaily} handleWeekly={handleWeekly} handleMonthly={handleMonthly} options={options} />
    </div>
  );
}
