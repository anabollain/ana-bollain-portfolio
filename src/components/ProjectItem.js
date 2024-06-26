//styles
import '../styles/ProjectItem.scss';

function ProjectItem({ eachProject }) {

    //RETURN
    return (
        <li className='works__list--item'>
            <a href={eachProject.mainURL} target='_blank' className='works__list--item--link' rel="noreferrer">
                <article className='works__list--item--art'>
                    <img src={eachProject.photo} alt={eachProject.name} className='works__list--item--img' />
                    <h4 className='works__list--item--title'>{eachProject.name}</h4>
                    <ul className='works__list--item--desc'>
                        <li className='works__list--item--text'>{eachProject.author} · {eachProject.version}</li>
                        <li className='works__list--item--text'>{eachProject.tech}</li>
                    </ul>
                    <nav>
                        <ul className='works__list--item--nav'>
                            <li><a href={eachProject.githubURL} target='_blank' className='works__nav' rel="noreferrer"><i className="fa-brands fa-github-alt"></i></a></li>
                            <li><a href={eachProject.mainURL} target='_blank' className='works__nav' rel="noreferrer"><i className="fa-solid fa-arrow-up-right-from-square"></i></a></li>
                        </ul>
                    </nav>
                </article>
            </a>
        </li>
    );
}

export default ProjectItem;