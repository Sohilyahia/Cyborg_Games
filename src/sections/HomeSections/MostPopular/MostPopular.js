import "./MostPopular.css";
import { PrimaryButton } from "../../../components";
import { Card, SectionHeader, SectionWrapper } from "../../../components/index";
import mostPopularData from "../../../Data/MostPopularData";

const MostPopular = () => {
  const cards = mostPopularData.map((card) => {
    return (
      <Card
        key={card.id}
        src={card.src}
        title={card.title}
        category={card.category}
        rate={card.rate}
        download={card.download}
      />
    );
  });

  return (
    <SectionWrapper>
      <SectionHeader>Most Popular</SectionHeader>
      <div className="most__popular__items">
        {cards}
        <div className="btn__margin">
          <PrimaryButton>Discover Popular</PrimaryButton>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default MostPopular;
