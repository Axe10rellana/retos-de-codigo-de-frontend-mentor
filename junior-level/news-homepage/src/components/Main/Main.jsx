//componentes
import { LastNew, RecentNews, RelatedNews } from "../";

const Main = ({ newsApi }) => {
  return (
    <div className="flex flex-col gap-y-6  md:gap-6 mb-6">
      <div className="flex flex-col md:flex-row mb-4 md:justify-between gap-6">
        <LastNew newsApi={newsApi} />
        <RecentNews newsApi={newsApi} />
      </div>
      <RelatedNews newsApi={newsApi} />
    </div>
  );
};

export default Main;
