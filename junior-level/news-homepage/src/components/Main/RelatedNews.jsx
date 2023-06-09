//componentes
import { ArticleRelatedNews } from "../";

const RelatedNews = ({ newsApi }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-x-0 md:gap-x-4 gap-y-4 select-none">
      {newsApi.trending.map((item) => {
        return <ArticleRelatedNews key={item.id} data={item} />;
      })}
    </div>
  );
};

export default RelatedNews;
