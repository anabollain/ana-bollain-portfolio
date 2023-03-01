//components
import Filters from './Filters';
import ProjectItem from './ProjectItem';
//styles
import '../styles/ProjectList.scss'

function Landing(props) {

    //RENDER FUNCTIONS
    const renderProjects = () => {
        return props.projectData.map((eachProject) => {
            return <ProjectItem key={eachProject.id} eachProject={eachProject} />
        })
    }

    //RETURN
    return (
        <main>
            <section className='works'>
                <Filters handleFilterProject={props.handleFilterProject} type={props.type}/>
                <ul className='works__list'>
                    {renderProjects()}
                </ul>
            </section>
        </main>
    );
}

export default Landing;