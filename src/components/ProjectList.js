//styles
import '../styles/ProjectList.scss'
//components
import FilterBtn from './FilterBtn';
import ProjectItem from './ProjectItem';

function Landing(props) {
    //RENDER FUNCTIONS
    const renderProjects = () => {
        return props.projectData.map((eachProject) => {
            return <ProjectItem key={eachProject.id} eachProject={eachProject}/>
        })
    }
    //RETURN
  return (
    <main>
        <section className='works'>
            <form className='works__form'>
                <FilterBtn text='All' handleClickFilter={props.handleFilterProject} checked={props.type ==='All'}></FilterBtn>
                <FilterBtn text='Layout' handleClickFilter={props.handleFilterProject} checked={props.type ==='Layout'}></FilterBtn>
                <FilterBtn text='Javascript' handleClickFilter={props.handleFilterProject} checked={props.type ==='Javascript'}></FilterBtn>
                <FilterBtn text='React' handleClickFilter={props.handleFilterProject} checked={props.type ==='React'}></FilterBtn>
                <FilterBtn text='Node' handleClickFilter={props.handleFilterProject} checked={props.type ==='Node'}></FilterBtn>
            </form>
            <ul className='works__list'>
                {renderProjects()}
            </ul>
        </section>
    </main>
    );
}

Landing.propTypes = {

};

export default Landing;