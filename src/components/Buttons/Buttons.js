import './Buttons.css'

function PrimaryButton(props) {
  return (
    <div className='button Primary__Btn'>
        <a href='Browse.html'>{props.children}</a>
    </div>
  )
}

function SecondaryButton(props) {
    return (
        <div className='button Secondary__btn'>
             <a href='Browse.html'>{props.children}</a>
        </div>
    )
  }

export default PrimaryButton
export {SecondaryButton}