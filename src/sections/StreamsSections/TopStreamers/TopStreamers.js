import TopStreamersData from "../../../Data/TopStreamersData";
import { TopStreamersCard } from "../../../components";

function TopStreamers() {
  const card = TopStreamersData.map((item) => {
    return (
      <TopStreamersCard
        key={item.id}
        src={item.src}
        title={item.title}
        num={item.num}
      />
    );
  });
  return <>{card}</>;
}

export default TopStreamers;
