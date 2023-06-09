//data
import stats from "../db/data.json";

//assets
import iconReaction from "../assets/images/icon-reaction.svg";
import iconMemory from "../assets/images/icon-memory.svg";
import iconVerbal from "../assets/images/icon-verbal.svg";
import iconVisual from "../assets/images/icon-visual.svg";

const YourStats = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`${
            stat.category === "Reaction"
              ? "bg-light-red/5"
              : stat.category === "Memory"
              ? "bg-orange-yellow/5"
              : stat.category === "Verbal"
              ? "bg-green-teal/5"
              : stat.category === "Visual" && "bg-cobalt-blue/5"
          } text-md flex justify-between rounded-xl p-4 font-bold`}
        >
          <div className="flex gap-x-2">
            <img
              src={
                stat.category === "Reaction"
                  ? iconReaction
                  : stat.category === "Memory"
                  ? iconMemory
                  : stat.category === "Verbal"
                  ? iconVerbal
                  : stat.category === "Visual" && iconVisual
              }
              alt={`icon-${stat.category.toLowerCase()}`}
            />
            <p
              className={`${
                stat.category === "Reaction"
                  ? "text-light-red"
                  : stat.category === "Memory"
                  ? "text-orange-yellow"
                  : stat.category === "Verbal"
                  ? "text-green-teal"
                  : stat.category === "Visual" && "text-cobalt-blue"
              }`}
            >
              {stat.category}
            </p>
          </div>
          <p className="text-dark-lavender">
            <span className="text-dark-gray-blue">{stat.score}</span> / 100
          </p>
        </div>
      ))}
    </div>
  );
};

export default YourStats;
