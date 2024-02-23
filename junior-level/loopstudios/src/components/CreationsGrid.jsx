//data
import { infoCreationCards } from "../data";

const CreationsGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {infoCreationCards.map(({ id, title, mobileImage, desktopImage }) => (
        <div className="relative overflow-hidden cursor-pointer" key={id}>
          <img
            className="hidden sm:block pointer-events-none select-none w-full"
            src={desktopImage}
            alt={title}
          />
          <img
            className="block sm:hidden pointer-events-none select-none w-full"
            src={mobileImage}
            alt={title}
          />
          <div className="absolute inset-0 flex flex-col items-start justify-end pl-4 pb-4 transition-colors duration-500 text-white bg-gradient-to-r from-black/50 to-transparent sm:bg-gradient-to-t sm:from-black/50 sm:to-transparent hover:from-transparent hover:to-transparent hover:text-black hover:bg-white hover:bg-opacity-70">
            <h2 className="text-2xl sm:text-3xl uppercase font-josefin w-[125px] sm:w-[155px]">
              {title}
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CreationsGrid;
