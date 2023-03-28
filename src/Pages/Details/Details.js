import { Header, Footer } from "../../sections/index";

import {
  FortniteImg,
  FortniteDetails,
  OthersGames,
} from "../../sections/DetailsSection/index";

function Details() {
  return (
    <>
      <Header />
        <FortniteImg />
        <FortniteDetails />
        <OthersGames />  
      <Footer />
    </>
  );
}

export default Details;
