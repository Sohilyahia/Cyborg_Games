import './GamingCard.css'
import { SecondaryButton } from '../../Buttons/Buttons'
function GamingCard(props) {
  return (
    <div className='gaming__library__card'>
        <ul>
            <li className='test'> <img src={props.src} alt=''/>
                <div className='padding'>
                    <h4>{props.title}</h4> <span>{props.category}</span>
                </div>
            </li>
            <li><h4>Date Added</h4> <span>{props.date_add}</span></li>
            <li><h4>Hours Played</h4> <span>{props.hours_played}</span></li>
            <li><h4>Currently</h4> <span>{props.download}</span></li>
            <div className='grid'> <SecondaryButton>Download</SecondaryButton> </div>   
        </ul>
    </div>
  )
}

export default GamingCard