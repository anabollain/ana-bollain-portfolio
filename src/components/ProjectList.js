//styles
import '../styles/ProjectList.scss'
//components
import FilterBtn from './FilterBtn';
import ProjectItem from './ProjectItem';

function Landing(props) {
    console.log(props.projectData)
    const renderProjects = () => {
        return props.projectData.map((eachProject) => {
            return <ProjectItem key={eachProject.id} eachProject={eachProject}/>
        })
    }
  return (
    <main>
        <section className='works'>
            <form className='works__form'>
                <FilterBtn text='All' handleClickFilter={props.handleFilterProject} checked={props.filterProject.includes('All')}></FilterBtn>
                <FilterBtn text='Layout' handleClickFilter={props.handleFilterProject} checked={props.filterProject.includes('Layout')}></FilterBtn>
                <FilterBtn text='Javascript' handleClickFilter={props.handleFilterProject} checked={props.filterProject.includes('Javascript')}></FilterBtn>
                <FilterBtn text='React' handleClickFilter={props.handleFilterProject} checked={props.filterProject.includes('React')}></FilterBtn>
                <FilterBtn text='Node' handleClickFilter={props.handleFilterProject} checked={props.filterProject.includes('Node')}></FilterBtn>
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