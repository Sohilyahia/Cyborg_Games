import "./FortniteDetails.css";
import {
  GameTitle,
  GameUL,
  SecondaryButton,
  SectionHeader,
  SectionWrapper,
} from "../../../components/index";
import img1 from "../../../assets/images/details-01.jpg";
import img2 from "../../../assets/images/details-02.jpg";
import img3 from "../../../assets/images/details-03.jpg";

function FortniteDetails() {
  return (
    <div>
      <SectionHeader>
        <p className="live">FORTNITE DETAILS</p>
      </SectionHeader>
      <SectionWrapper>
        <div className="fortnite__wrappe">
          <GameTitle />
          <GameUL />
        </div>
        <div className="fort_img">
          <div>
            {" "}
            <img src={img1} />{" "}
          </div>
          <div>
            {" "}
            <img src={img2} />{" "}
          </div>
          <div>
            {" "}
            <img src={img3} />{" "}
          </div>
        </div>
        <p className="fortnite__p">
          Cyborg Gaming is free HTML CSS website template provided by
          TemplateMo. This is Bootstrap v5.2.0 layout. You can make a{" "}
          <span> small contribution via PayPal </span> to info [at]
          templatemo.com and thank you for supporting. If you want to get the
          PSD source files, please contact us. Lorem ipsum dolor sit consectetur
          es dispic dipiscingei elit, sed doers eiusmod lisum hored tempor.
        </p>

        <div className="fortnite_btn">
          <SecondaryButton>Download Fortnite Now!</SecondaryButton>
        </div>
      </SectionWrapper>
    </div>
  );
}

export default FortniteDetails;
