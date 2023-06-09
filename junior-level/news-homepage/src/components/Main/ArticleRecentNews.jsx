const ArticleRecentNews = ({ data }) => {
  return (
    <article>
      <h3 className="text-off-white cursor-pointer hover:text-soft-orange transition-all duration-300 text-sm font-bold mb-2">
        {data.newsTitle}
      </h3>
      <p className="text-grayish-blue text-xs mb-6">{data.newsDescription}</p>
    </article>
  );
};

export default ArticleRecentNews;
