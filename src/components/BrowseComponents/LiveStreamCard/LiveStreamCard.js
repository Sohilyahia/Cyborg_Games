import  './LiveStreamCard.css'

function LiveStreamCard(props) {
  return (
    <div className='live__stream__wrapper'>
        <div className='live__stream__card'>
            <div className='live__img'>
                <img src={props.src} alt=''/>
            </div>
            <div className='live__title'>{props.title}</div>
            <div className='live__content'>{props.content}</div>
        </div>
    </div>
  )
}

export default LiveStreamCard