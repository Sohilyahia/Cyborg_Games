import { PrimaryButton, SectionHeader } from "../../../components";
import LiveStreamCard from "../../../components/BrowseComponents/LiveStreamCard/LiveStreamCard";
import "./LiveStream.css";
import liveStreamData from "../../../Data/LiveSreamData";

function LiveStream() {
  const liveData = liveStreamData.map((live) => {
    return (
      <LiveStreamCard
        key={live.id}
        src={live.src}
        title={live.title}
        content={live.content}
      />
    );
  });
  return (
    <div className="live___main">
      <SectionHeader>
        <div className="live">
          How To Start Your <span>Live Stream</span>
        </div>
      </SectionHeader>
      <div className="live__stream__card__wrapper">{liveData}</div>
      <PrimaryButton>Go To Profile</PrimaryButton>
    </div>
  );
}

export default LiveStream;
