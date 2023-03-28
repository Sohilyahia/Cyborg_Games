import './GameUL.css';
import {FaStar, FaDownload, FaServer, FaGamepad} from 'react-icons/fa';

function GameUL() {
  return (
    <div className='fortnite__ul'>
        <ul>
            <li><span style={{'color': 'yellow', 'marginRight':'3px' }}><FaStar /></span>4.5</li>
            <li><span style={{'color':'var(--color-primary)', 'marginRight':'3px'}}><FaDownload /></span>2.3</li>
            <li><span style={{'color':'var(--color-primary)', 'marginRight':'3px'}}><FaServer /></span>33GB</li>
            <li><span style={{'color':'var(--color-primary)', 'marginRight':'3px'}}><FaGamepad /></span>Action</li>
        </ul>
    </div>
  )
}

export default GameUL