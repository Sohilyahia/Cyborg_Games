import './ClipCard.css'
import {FaEye,FaPlay} from 'react-icons/fa'


function ClipCard(props) {
  return (
    <>
         <div className='clip-card'>
            <div className='clip-img'>
                <img src={props.src} />
                <a href='/'>
                    <FaPlay></FaPlay>
                </a>
            </div>
            <div className='clip-content'>
                <h4>{props.title}</h4>
                <span><span style={{'color': 'var(--color-primary)', 'marginRight':'3px', 'fontSize':'20px' }}><FaEye/></span>{props.views}</span>
            </div>
        </div>
    </>
  )
}

export default ClipCard