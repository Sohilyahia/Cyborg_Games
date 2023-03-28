import './GameTitle.css'
import {FaStar, FaDownload} from 'react-icons/fa';
function GameTitle() {
  return (
    <div className='fortnite'>
        <div className='title'>
            <h4>Fortnite</h4>
            <span>Sandbox</span>
        </div>
        <ul>
            <li><span style={{'color': 'yellow', 'marginRight':'3px' }}><FaStar /></span>4.5</li>
            <li><span style={{'color':'var(--color-primary)', 'marginRight':'3px'}}><FaDownload /></span>2.3</li>
        </ul>
    </div>
  )
}

export default GameTitle