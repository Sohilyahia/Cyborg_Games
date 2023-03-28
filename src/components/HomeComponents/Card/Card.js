import "./Card.css";
import {FaStar, FaDownload} from 'react-icons/fa';



const Card = (props) => {
  return (
    <div className="popular__item">
      <div className="card__wrapper">
        <img className="popular__img" src={props.src} alt="Fortnite" />
        <div className="popular__content">
          <h4 className="popular__title">
            {props.title} <br />
            <span>{props.category}</span>
          </h4>
          <ul>
            <li>
              <span><span style={{'color': 'yellow', 'marginRight':'3px' }}><FaStar /></span>{props.rate}</span>
            </li>
            <li>
              <span><span style={{'color':'var(--color-primary)', 'marginRight':'3px'}}><FaDownload /></span>{props.download}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
