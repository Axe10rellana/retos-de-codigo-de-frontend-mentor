const ArticleRelatedNews = ({ data }) => {
  return (
    <article className="flex gap-x-4 h-[200px]">
      <img
        className="w-[40%] md:w-[50%]"
        src={data.trendingImg}
        alt="Image-retro-pcs"
      />
      <div className="flex flex-col justify-between w-[60%] md:w-[50%]">
        <h2 className="text-grayish-blue font-bold text-2xl">
          {data.trendingTop}
        </h2>
        <h3 className="text-very-dark-blue cursor-pointer font-bold text-sm hover:text-soft-red transition-all duration-300">
          {data.trendingTitle}
        </h3>
        <p className="text-dark-grayish-blue text-xs">
          {data.trendingDescription}
        </p>
      </div>
    </article>
  );
};

export default ArticleRelatedNews;
