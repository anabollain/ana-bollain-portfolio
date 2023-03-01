//components
import FilterBtn from './FilterBtn';
//styles
import '../styles/Filters.scss'

function Filters(props) {

    //RETURN
    return (
        <form className='works__form'>
            <FilterBtn text='All' handleClickFilter={props.handleFilterProject} checked={props.type === 'All'}></FilterBtn>
            <FilterBtn text='Layout' handleClickFilter={props.handleFilterProject} checked={props.type === 'Layout'}></FilterBtn>
            <FilterBtn text='Javascript' handleClickFilter={props.handleFilterProject} checked={props.type === 'Javascript'}></FilterBtn>
            <FilterBtn text='React' handleClickFilter={props.handleFilterProject} checked={props.type === 'React'}></FilterBtn>
            <FilterBtn text='Node' handleClickFilter={props.handleFilterProject} checked={props.type === 'Node'}></FilterBtn>
        </form>
    );
}

export default Filters;