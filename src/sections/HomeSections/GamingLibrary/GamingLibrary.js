import "./GamingLibrary.css";
import {
  GamingCard,
  SectionHeader,
  SectionWrapper,
} from "../../../components/index";
import GamingLibraryData from "../../../Data/GamingLibraryData";
import { PrimaryButton } from "../../../components/index";
function GamingLibrary() {
  const cards = GamingLibraryData.map((card) => {
    return (
      <GamingCard
        key={card.id}
        src={card.src}
        title={card.title}
        category={card.category}
        date_add={card.date_add}
        hours_played={card.hours_played}
        download={card.download}
      />
    );
  });

  return (
    <SectionWrapper>
      <SectionHeader>Gaming Library</SectionHeader>
      <div className="gaming__library__cards">
        {cards}
        <div className="btn__margin">
          <PrimaryButton>View Your Library</PrimaryButton>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default GamingLibrary;
