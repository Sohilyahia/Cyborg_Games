import "./FortniteImg.css";
import ImgLeft from "../../../assets/images/feature-left.jpg";
import ImgRight from "../../../assets/images/feature-right.jpg";
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

function FortniteImg() {
  return (
    <div className="fortnite__img">
      <div className="fortnite__img__left">
        <img src={ImgLeft} />
      </div>
      <div className="fortnite__img__right">
        <img src={ImgRight} />
        <Link>
          <FaPlay />
        </Link>
      </div>
    </div>
  );
}

export default FortniteImg;
