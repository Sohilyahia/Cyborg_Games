import {
  Hero,
  MostPopular,
  GamingLibrary,
} from "../../sections/HomeSections/index";
import { Header, Footer } from "../../sections";

const Home = () => {
  return (
    <>
      <Header />
        <Hero />
        <MostPopular />
        <GamingLibrary />
      <Footer />
    </>
  );
};

export default Home;
