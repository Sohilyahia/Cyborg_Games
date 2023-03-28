import  './PopularStreamCard.css';

import {FaCheckCircle} from 'react-icons/fa'

function PopularStreamCard(props) {
  return (
    <>
        <div className='popular__stream__card'>
            <div className='popular__stream__img'>
                <img src={props.src} alt=''/>
            </div>
            <div className='popular__stream__content'>
                <div>
                    <img src={props.miniImg} alt=''/>
                </div>
                <div className='popular__stream__titles'>
                    <span className='color__primary'><FaCheckCircle/> {props.title}</span>
                    <p>{props.content}</p>
                </div>
            </div>
        </div>  
    </>
  )
}

export default PopularStreamCard