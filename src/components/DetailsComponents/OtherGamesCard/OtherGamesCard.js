import  './OtherGamesCard.css'
import {FaStar, FaDownload} from 'react-icons/fa';


function OtherGamesCard(props) {
  return (
    <div className='other__games__card'>
    <ul>
        <li className='dota'>
            <img src={props.src}/>
            <h4>
                <p>{props.title}</p>
                <span>{props.category}</span>
            </h4>
            
        </li>
        <li>
            <span><span style={{'color': 'yellow', 'marginRight':'3px' }}><FaStar /></span>{props.rate}</span><br/>
            <span><span style={{'color':'var(--color-primary)', 'marginRight':'3px'}}><FaDownload /></span>{props.download}</span>
        </li>
    </ul>
</div>
  )
}

export default OtherGamesCard