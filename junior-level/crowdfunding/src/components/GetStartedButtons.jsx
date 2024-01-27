//context
import { useCrowdfunding } from "../context/CrowdfundingContext";

//components
import { BookmarkedIcon, BookmarkIcon } from ".";

const GetStartedButtons = () => {
  //context variables
  const { handleModalIsOpen, bookmark, handleBookmark } = useCrowdfunding();

  return (
    <div className="pb-8 flex items-center justify-between">
      <button
        className="bg-moderate-cyan rounded-full py-4 px-11 text-white text-sm font-bold transition-all duration-300 hover:bg-dark-cyan"
        onClick={handleModalIsOpen}
      >
        Back this project
      </button>
      <div
        className={`block cursor-pointer md:hidden ${
          bookmark === false && "bookmark-icon"
        }`}
        onClick={handleBookmark}
      >
        {bookmark ? <BookmarkedIcon /> : <BookmarkIcon />}
      </div>
      <div
        className={`hidden items-center bg-gray-100 text-sm font-bold rounded-full cursor-pointer md:flex ${
          bookmark === false && "bookmark-icon"
        }`}
        onClick={handleBookmark}
      >
        {bookmark ? <BookmarkedIcon /> : <BookmarkIcon />}
        <p className={`mx-2 ${bookmark ? "text-dark-cyan" : "text-dark-gray"}`}>
          {bookmark ? "Bookmarked" : "Bookmark"}
        </p>
      </div>
    </div>
  );
};

export default GetStartedButtons;
