//componentes
import { ArticleRecentNews } from "../";

const RecentNews = ({ newsApi }) => {
  return (
    <div className="flex flex-col bg-very-dark-blue md:w-[30%] px-4 py-6 justify-between select-none">
      <h2 className="text-soft-orange text-2xl font-bold mb-4">New</h2>
      {newsApi.news.map((item) => {
        return (
          <div key={item.id}>
            <ArticleRecentNews data={item} />
            {newsApi.news.length > item.id && (
              <hr className="mb-6 border-dark-grayish-blue/40 border-[1px] border-solid" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RecentNews;
