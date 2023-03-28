import { TopDownloadCard } from "../../../components/index";

import TopDownloadData from "../../../Data/TopDownloadData";

function TopDownload() {
  const topCard = TopDownloadData.map((item) => {
    return (
      <TopDownloadCard
        key={item.id}
        src={item.src}
        title={item.title}
        category={item.category}
        rate={item.rate}
        download={item.download}
      />
    );
  });
  return <div className="top__download__wrapper">{topCard}</div>;
}

export default TopDownload;
