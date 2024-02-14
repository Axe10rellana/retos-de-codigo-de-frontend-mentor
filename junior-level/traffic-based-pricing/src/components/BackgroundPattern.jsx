//assets
import bgPattern from "../assets/icons/bg-pattern.svg";

const BackgroundPattern = () => {
  return (
    <div className="bg-pattern">
      <img
        className="pointer-events-none select-none bg-pattern-img"
        src={bgPattern}
        alt="Background pattern"
      />
    </div>
  );
};

export default BackgroundPattern;
