//assets
import {
  ImgDaniel,
  ImgJonathan,
  ImgJeanette,
  ImgPatrick,
  ImgKira,
} from "./assets";

//componentes
import BgPatternQuotation from "./components/Icons/BgPatternQuotation";

//variable inicial
const objUser1 = {
  id: 1,
  name: "Daniel Clifford",
  isVerified: "Verified Graduate",
  comment: `I received a job offer mid-course, and the subjects I learned were current, if not more so, 
  in the company I joined. I honestly feel I got every penny’s worth.`,
  testimonial: `“ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
  transition and have heard some people who had an amazing experience here. I signed up 
  for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
  The next 12 weeks was the best - and most grueling - time of my life. Since completing 
  the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”`,
  imgUser: ImgDaniel,
};

const objUser2 = {
  id: 2,
  name: "Jonathan Walters",
  isVerified: "Verified Graduate",
  comment: `The team was very supportive and kept me motivated`,
  testimonial: `“ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
  for a big company. This was one of the best investments I’ve made in myself. ”`,
  imgUser: ImgJonathan,
};

const objUser3 = {
  id: 3,
  name: "Jeanette Harmon",
  isVerified: "Verified Graduate",
  comment: `An overall wonderful and rewarding experience`,
  testimonial: `“ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
  while doing something I love. ”`,
  imgUser: ImgJeanette,
};

const objUser4 = {
  id: 4,
  name: "Patrick Abrams",
  isVerified: "Verified Graduate",
  comment: `Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
  learning from their experiences was easy.`,
  testimonial: `“ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
  gave me the confidence necessary to be able to go out in the world and present myself as a capable 
  junior developer. The standard is above the rest. You will get the personal attention you need from 
  an incredible community of smart and amazing people. ”`,
  imgUser: ImgPatrick,
};

const objUser5 = {
  id: 5,
  name: "Kira Whittle",
  isVerified: "Verified Graduate",
  comment: `Such a life-changing experience. Highly recommended!`,
  testimonial: `“ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
  professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
  student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
  did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
  project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
  could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
  experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
  100% recommend! ”`,
  imgUser: ImgKira,
};

const App = () => {
  return (
    <div className="my-24 grid gap-y-[25px] gap-x-[25px] sm:mx-auto md:container lg:grid-cols-4">
      <article className="mx-[25px] rounded-lg bg-moderate-violet p-10 text-white lg:col-start-1 lg:col-end-3 lg:mx-0">
        <div className="flex justify-between">
          <div className="mb-4 flex items-center gap-x-6">
            <img
              className="rounded-full border-[4px] border-solid border-light-gray/50"
              src={objUser1.imgUser}
              alt={objUser1.name}
            />
            <div>
              <span className="text-light-gray">{objUser1.name}</span>
              <p className="text-light-gray/50">{objUser1.isVerified}</p>
            </div>
          </div>
          <BgPatternQuotation />
        </div>

        <h2 className="mb-4 text-3xl font-bold text-white">
          {objUser1.comment}
        </h2>
        <p className="text-white/70">{objUser1.testimonial}</p>
      </article>
      <article className="mx-[25px] rounded-lg bg-very-dark-grayish-blue p-10 lg:col-start-3 lg:col-end-4 lg:mx-0">
        <div className="mb-4 flex items-center gap-x-6">
          <img
            className="rounded-full border-[4px] border-solid border-light-gray/50"
            src={objUser2.imgUser}
            alt={objUser2.name}
          />
          <div>
            <span className="text-light-gray">{objUser2.name}</span>
            <p className="text-light-gray/50">{objUser2.isVerified}</p>
          </div>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-white">
          {objUser2.comment}
        </h2>
        <p className="text-white/70">{objUser2.testimonial}</p>
      </article>
      <article className="mx-[25px] rounded-lg bg-white p-10 drop-shadow-2xl lg:col-start-1 lg:col-end-2 lg:mx-0">
        <div className="mb-4 flex items-center gap-x-6">
          <img
            className="rounded-full border-[4px] border-solid border-light-gray/50"
            src={objUser3.imgUser}
            alt={objUser3.name}
          />
          <div>
            <span className="text-very-dark-grayish-blue">{objUser3.name}</span>
            <p className="text-very-dark-grayish-blue/50">
              {objUser3.isVerified}
            </p>
          </div>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-very-dark-blackish-blue">
          {objUser3.comment}
        </h2>
        <p className="text-very-dark-blackish-blue/70">
          {objUser3.testimonial}
        </p>
      </article>
      <article className="mx-[25px] rounded-lg bg-very-dark-blackish-blue p-10 lg:col-start-2 lg:col-end-4 lg:mx-0">
        <div className="mb-4 flex items-center gap-x-6">
          <img
            className="rounded-full border-[4px] border-solid border-light-gray/50"
            src={objUser4.imgUser}
            alt={objUser4.name}
          />
          <div>
            <span className="text-light-gray">{objUser4.name}</span>
            <p className="text-light-gray/50">{objUser4.isVerified}</p>
          </div>
        </div>
        <h2 className="fond-bold mb-4 text-3xl text-white">
          {objUser4.comment}
        </h2>
        <p className="text-white/70">{objUser4.testimonial}</p>
      </article>
      <article className="mx-[25px] rounded-lg bg-white p-10 drop-shadow-2xl lg:col-start-4 lg:col-end-5 lg:row-start-1 lg:row-end-3 lg:mx-0">
        <div className="mb-4 flex items-center gap-x-6">
          <img
            className="rounded-full border-[4px] border-solid border-light-gray/50"
            src={objUser5.imgUser}
            alt={objUser5.name}
          />
          <div>
            <span className="text-very-dark-grayish-blue">{objUser5.name}</span>
            <p className="text-very-dark-grayish-blue/50">
              {objUser5.isVerified}
            </p>
          </div>
        </div>
        <h2 className="mb-4 text-3xl font-bold text-very-dark-blackish-blue">
          {objUser5.comment}
        </h2>
        <p className="text-very-dark-blackish-blue/70">
          {objUser5.testimonial}
        </p>
      </article>
    </div>
  );
};

export default App;
