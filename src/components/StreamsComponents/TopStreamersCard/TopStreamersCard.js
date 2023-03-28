import "./TopStreamersCard.css";
import { FaCheckCircle } from "react-icons/fa";
import PrimaryButton from "../../../components/Buttons/Buttons";

function TopStreamersCard(props) {
  return (
    <div className="top__streamers__card">
      <ul>
        <li className="first">
          {props.num}
          <img src={props.src} />
          <p className="last__children">
            <span className="color__primary">
              <FaCheckCircle />
            </span>
            {props.title}
          </p>
        </li>

        <div className="live__streamers__btn">
          <PrimaryButton>Follow</PrimaryButton>
        </div>
      </ul>
    </div>
  );
}

export default TopStreamersCard;
