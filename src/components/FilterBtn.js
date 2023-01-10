//styles
import '../styles/FilterBtn.scss'

function FilterBtn(props) {

  const handleClickFilter = (ev) => {
    props.handleClickFilter(ev.target.value);
  }

  //RETURN
  return (
    <div className="filter">
        <input className='filter__check' type="checkbox" name={props.text} id={props.text} value={props.text} onClick={handleClickFilter}/>
        <label className={`filter__label ${props.checked ? 'checked': ''}`} htmlFor={props.text}>{props.text}</label>
    </div>
    );
}

FilterBtn.propTypes = {

};

export default FilterBtn;