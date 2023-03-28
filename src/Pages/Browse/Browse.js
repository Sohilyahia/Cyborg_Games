import { Header, Footer } from "../../sections/index";
import {
  FeaturedGames,
  LiveStream,
  PouplarStream,
} from "../../sections/BrowseSection/index";

function Browse() {
  return (
    <>
      <Header />
        <FeaturedGames />
        <LiveStream />
        <PouplarStream />
      <Footer />
    </>
  );
}

export default Browse;
