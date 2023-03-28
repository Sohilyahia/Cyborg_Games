import "./PopularClips.css";
import {
  ClipCard,
  SectionHeader,
  SectionWrapper,
} from "../../../components/index";
import ClipData from "../../../Data/ClipData";

function PopularClips() {
  const card = ClipData.map((item) => {
    return (
      <ClipCard
        key={item.id}
        src={item.src}
        title={item.title}
        views={item.views}
      />
    );
  });

  return (
    <>
      <SectionWrapper>
        <SectionHeader>
          Your Most Popular <span className="color-primary">Clips</span>
        </SectionHeader>
        <div className="clip-wrapper">{card}</div>
      </SectionWrapper>
    </>
  );
}

export default PopularClips;
