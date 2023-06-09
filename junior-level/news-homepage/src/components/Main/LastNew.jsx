const LastNew = ({ newsApi }) => {
  return (
    <div className="flex flex-col md:w-[70%] md:mb-0 mb-4">
      <img
        className="select-none hidden md:block"
        src={newsApi.popular.newImgDesktop}
        alt="Image-Web-3-Desktop"
      />
      <img
        className="select-none block md:hidden"
        src={newsApi.popular.newImgMobile}
        alt="Image-Web-3-Mobile"
      />
      <div className="flex flex-col md:flex-row md:justify-between gap-x-6">
        <h1 className="font-bold text-5xl md:w-[50%] select-none pt-4">
          {newsApi.popular.newTitle}
        </h1>
        <div className="flex flex-col gap-6 md:w-[50%] justify-between">
          <p className="text-dark-grayish-blue select-none text-left text-ellipsis pt-4">
            {newsApi.popular.newDescription}
          </p>
          <button className="bg-soft-red w-[50%] text-off-white py-3 px-8 uppercase tracking-[0.20rem] hover:bg-very-dark-blue transition-all duration-300 select-none text-xs">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default LastNew;
