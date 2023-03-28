import "./ProfileDetails.css";
import img from "../../../assets/images/profile.jpg";
import { SectionWrapper, SecondaryButton } from "../../../components/index";

function ProfileDetails() {
  return (
    <SectionWrapper>
      <div className="profile-wrapper">
        <div className="item profile-img">
          <img src={img} />
        </div>
        <div className="item profile-content">
          <span>offline</span>
          <h4>Alan Smithee</h4>
          <p>
            You Haven't Gone Live yet. Go Live By Touching The Button Below.
          </p>
          <SecondaryButton>Start Live Stream</SecondaryButton>
        </div>
        <div className="item profile-list">
          <ul>
            <li>
              Games Downloaded <span className="color-primary">3</span>
            </li>
            <li>
              Friends Online <span className="color-primary">16</span>
            </li>
            <li>
              Live Streams <span className="color-primary">None</span>
            </li>
            <li>
              Clips <span className="color-primary">29</span>
            </li>
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ProfileDetails;
