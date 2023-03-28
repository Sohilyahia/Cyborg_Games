import  './SectionHeader.css';

const SectionHeader = (props) => {
  return (
    <div className="section__header">
        <h4>{props.children}</h4>
      </div>
  );
}

export default SectionHeader;
