import "./Hero.css";
import { PrimaryButton } from "../../../components";
const Hero = () => {
  return (
    <div className="hero_main">
      <div className="hero_text">
        <h6 className="hero_subtitle">Welcome To Cyborg</h6>
        <h4 className="hero_title">
          <em>Browse</em> Our Popular Games Here
        </h4>

        <PrimaryButton>Browse Now</PrimaryButton>
      </div>
    </div>
  );
};

export default Hero;
