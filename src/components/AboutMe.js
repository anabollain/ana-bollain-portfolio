import '../styles/AboutMe.scss';
import cvAnaBollain from '../data/cvAnaBollain.pdf';

function AboutMe(props) {

  return (
    <main>
        <section className='hero'>
            <div className='hero__img'></div>
            <div className='hero__info'>
                <h2 className='hero__info--title'>Front-end Developer</h2>
                <h3 className='hero__info--subtitle'>Architect and Interior Designer</h3>
                <p  className='hero__info--text'>Hi! I'm Ana, a former architect discovering a new way of shaping and constructing the world through technology. Hope you enjoy my projects as much as I have and continue doing. You will see some of them are still in progress, as I love to create and design while searching for new tools and interesting exercises.</p>
                <ul className='hero__info--text'>
                    <li>🎉  I've just finished a Front-end Development Bootcamp in Adalab</li>
                    <li>🔭  I'm looking for a job to gain experience and continue learning</li>
                    <li>🌱  I’m currently widening my knowledge of React and Node JS</li>
                    <li>👯  I’m looking to collaborate on new challenges and side projects</li>
                </ul>
                <a href={cvAnaBollain} download className='hero__info--load'>Download Resume</a>
                <nav>
                    <ul className='hero__info--icon'>
                        <li><a href="https://www.linkedin.com/in/ana-bollain/" className='hero__info--icon--link' target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href="https://github.com/anabollain" className='hero__info--icon--link' target="_blank" rel="noreferrer"><i className="fa-brands fa-github-alt"></i></a></li>
                    </ul>
                </nav>
            </div>   
        </section>
    </main>
    );
}

AboutMe.propTypes = {

};

export default AboutMe;