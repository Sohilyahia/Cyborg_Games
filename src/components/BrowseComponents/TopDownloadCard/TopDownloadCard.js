import './TopDownloadCard.css'
import {FaStar, FaDownload} from 'react-icons/fa';


function TopDownloadCard(props) {
  return (
    <div className='top__doenload__wrapper'>
      <div className='top__download__card grid'>
        <div className='top__download__img'>
          <img src={props.src} alt=""/>
        </div>
        <div className='top__download__content'>
          <h4 className='top__download__title'>{props.title}</h4>
          <p className='top__download__category'>{props.category}</p>
          <ul>
            <li><span><span style={{'color': 'yellow', 'marginRight':'3px' }}><FaStar /></span>{props.rate}</span></li>
            <li><span><span style={{'color':'var(--color-primary)', 'marginRight':'3px'}}><FaDownload /></span>{props.download}</span></li> 
          </ul>
        </div>  
        <span className='button'><FaDownload/></span>
      </div>
    </div>
  )
}

export default TopDownloadCard