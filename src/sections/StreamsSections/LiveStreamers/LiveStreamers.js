import LiveStreamersData from "../../../Data/LiveStreamersData";
import PopularStreamCard from "../../../components/BrowseComponents/PopularStream/PopularStreamCard";
import {
  PrimaryButton,
  SectionHeader,
  SectionWrapper,
} from "../../../components";

function LiveStreamers() {
  const card = LiveStreamersData.map((item) => {
    return (
      <PopularStreamCard
        key={item.id}
        src={item.src}
        miniImg={item.miniImg}
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
      <div className="popular__stream__wrapper">{card}</div>
      <div className="btn__margin">
        <PrimaryButton>Discover All Streams</PrimaryButton>
      </div>
    </SectionWrapper>
  );
}

export default LiveStreamers;
