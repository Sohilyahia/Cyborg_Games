import { Header, Footer } from "../../sections/index";
import {
  LiveStreamers,
  StreamSlider,
} from "../../sections/StreamsSections/index";

function Streams() {
  return (
    <>
      <Header />
        <StreamSlider />
        <LiveStreamers />
      <Footer />
    </>
  );
}

export default Streams;
