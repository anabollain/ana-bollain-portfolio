//Data
import cvAnaBollain from '../data/resumeAnaBollain.pdf';
//Styles
import '../styles/AboutMe.scss';

function AboutMe() {

    //RETURN
    return (
        <main>
            <section className='hero'>
                <div className='hero__img'></div>
                <div className='hero__info'>
                    <h2 className='hero__info--title'>Hi! I'm Ana Bollain.</h2>
                    <h3 className='hero__info--subtitle'>Frontend Developer.</h3>
                    <h3 className='hero__info--text'>A former architect and interior designer discovering a new way of shaping and constructing the world through technology.</h3>
                    <a href={cvAnaBollain} download className='hero__info--load'>Download Resume.</a>
                    <nav>
                        <ul className='hero__info--icon'>
                            <li><a href="https://www.linkedin.com/in/ana-bollain/" className='hero__info--icon--link' target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li><a href="https://github.com/anabollain" className='hero__info--icon--link' target="_blank" rel="noreferrer"><i className="fa-brands fa-github-alt"></i></a></li>
                            <li><a href="https://twitter.com/ana_bollain" className='hero__info--icon--link' target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter"></i></a></li>
                        </ul>
                    </nav>
                </div>
            </section>
        </main>
    );
}

export default AboutMe;