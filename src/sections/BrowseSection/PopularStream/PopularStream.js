import "./PopularStream.css";
import {
  PrimaryButton,
  SectionHeader,
  SectionWrapper,
} from "../../../components/index";
import PopularStreamCard from "../../../components/BrowseComponents/PopularStream/PopularStreamCard";
import popularStreamData from "../../../Data/PopularStreamData";
function PopularStream() {
  const streamCard = popularStreamData.map((item) => {
    return (
      <PopularStreamCard
        key={item.id}
        src={item.src}
        miniImg={item.minisrc}
        title={item.title}
        content={item.content}
      />
    );
  });
  return (
    <SectionWrapper>
      <SectionHeader>
        Most Popular <span className="color-primary">Live Stream</span>
      </SectionHeader>
      <div className="popular__stream__wrapper">{streamCard}</div>
      <div className="btn__margin">
        <PrimaryButton>Discover All Streams</PrimaryButton>
      </div>
    </SectionWrapper>
  );
}

export default PopularStream;
