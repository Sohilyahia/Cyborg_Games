import "./OthersGames.css";
import {
  OtherGamesCard,
  SectionHeader,
  SectionWrapper,
} from "../../../components/index";
import OtherGamesData from "../../../Data/OtherGames";

function OthersGames() {
  const card = OtherGamesData.map((item) => {
    return (
      <OtherGamesCard
        key={item.id}
        src={item.src}
        title={item.title}
        category={item.category}
        rate={item.rate}
        download={item.download}
      />
    );
  });
  return (
    <SectionWrapper>
      <SectionHeader>
        Other Related <span className="color-primary">Games</span>
      </SectionHeader>
      <div className="other__games__cards">{card}</div>
    </SectionWrapper>
  );
}

export default OthersGames;
