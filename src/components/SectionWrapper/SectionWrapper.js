import './SectionWrapper.css';

const SectionWrapper = (props) => {
  return (
    <div className="section__wrapper">{props.children}</div>
  );
}

export default SectionWrapper;
