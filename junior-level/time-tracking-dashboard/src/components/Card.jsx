//assets
import ellipsis from "../assets/images/icon-ellipsis.svg";
import work from "../assets/images/icon-work.svg";
import play from "../assets/images/icon-play.svg";
import study from "../assets/images/icon-study.svg";
import exercise from "../assets/images/icon-exercise.svg";
import social from "../assets/images/icon-social.svg";
import selfCare from "../assets/images/icon-self-care.svg";

export default function Card({data, active1, active2, active3}) {  
  return(
        <article className="bg-dark-blue rounded-xl transition-colors duration-300 hover:bg-custom-blue text-pale-blue flex flex-col w-[100%]">
          <div className={`flex rounded-t-xl items-start overflow-y-hidden justify-end h-[40px] ${data.title === "Work" ? "bg-light-red-work" : data.title === "Play" ? "bg-soft-blue-play" : data.title === "Study" ? "bg-light-red-study" : data.title === "Exercise" ? "bg-lime-green-exercise" : data.title === "Social" ? "bg-custom-violet-social" : data.title === "Self Care" && "bg-soft-orange-self-care" }`}>
            {
              data.title === "Work" && (
                <img className="pointer-events-none w-[50px]" src={work} alt="icon-work" />
              )
            }
            {
            data.title === "Play" && (
                 <img className="pointer-events-none w-[50px]" src={play} alt="icon-work" />
              )
            }
            {
            data.title === "Study" && (
                 <img className="pointer-events-none w-[50px]" src={study} alt="icon-work" />
              )
            }
            {
            data.title === "Exercise" && (
                 <img className="pointer-events-none w-[50px]" src={exercise} alt="icon-work" />
              )
            }
            {
            data.title === "Social" && (
                 <img className="pointer-events-none w-[50px]" src={social} alt="icon-work" />
              )
            }
            {
            data.title === "Self Care" && (
                 <img className="pointer-events-none w-[50px]" src={selfCare} alt="icon-work" />
              )
            }
          </div>
          <div className="flex cursor-pointer flex-col justify-center p-4 gap-y-5">
            <div className="flex flex-row justify-between items-center">
              <p className="font-medium text-[18px]">{data.title}</p>
              <img className="pointer-events-none w-[15px] h-[5px]" src={ellipsis} alt="icon-ellipsis" />
            </div>
            <div className="flex flex-row justify-between items-center lg:items-start lg:flex-col lg:gap-y-3">
              <h2 className="font-light text-lg lg:text-5xl">{data.timeframes.current}hrs</h2>
              <p className="text-sm">Last {active1 === true ? "Day" : active2 === true ? "Week" : active3 === true && "Month"} - {data.timeframes.previous}hrs</p>
            </div>
          </div>
        </article>
  );
};