import { Footer, Header } from "../../sections/index";
import {
  PopularClips,
  ProfileDetails,
} from "../../sections/ProfileSection/index";
import { GamingLibrary } from "../../sections/HomeSections/index";

function Profile() {
  return (
    <>
      <Header />
        <ProfileDetails />
        <PopularClips />
        <GamingLibrary />
      <Footer />
    </>
  );
}

export default Profile;
