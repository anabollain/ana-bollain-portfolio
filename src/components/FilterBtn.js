//styles
import '../styles/FilterBtn.scss'

function FilterBtn(props) {

  //EVENT FUNCTIONS
  const handleClickFilter = (ev) => {
    props.handleClickFilter(ev.target.value);
  }

  //RETURN
  return (
    <div className="filter">
      <input className='filter__check' type="radio" name="type" id={props.text} value={props.text} onClick={handleClickFilter} />
      <label className={`filter__label ${props.checked ? 'checked' : ''}`} htmlFor={props.text}>{props.text}</label>
    </div>
  );
}

export default FilterBtn;