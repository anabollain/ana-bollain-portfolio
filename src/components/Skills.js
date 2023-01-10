//styles
import '../styles/Skills.scss';


function Skills() {

    //RETURN
    return (
        <main className='main__skills'>
            <section className='skills'>
                <div className='skills__div'>
                    <h3 className='skills__title'>Soft Skills</h3>
                    <ul className='skills__list'>
                        <li className='skills__list--item'><div className='skills__list--item--icon'>👐</div><p>Teamwork</p></li>
                        <li className='skills__list--item'><div className='skills__list--item--icon'>💁</div><p>Empathy</p></li>
                        <li className='skills__list--item'><div className='skills__list--item--icon'>🚩</div><p>Problem Solving</p></li>
                        <li className='skills__list--item'><div className='skills__list--item--icon'>🔹</div><p>Attention to detail</p></li>
                        <li className='skills__list--item'><div className='skills__list--item--icon'>🖊️</div><p>Creative Thinking</p></li>
                        <li className='skills__list--item'><div className='skills__list--item--icon'>❔</div><p>Responsiveness</p></li>
                        <li className='skills__list--item'><div className='skills__list--item--icon'>🐧 </div><p>Adaptability</p></li>
                        <li className='skills__list--item'><div className='skills__list--item--icon'>💼</div><p>Management</p></li>
                    </ul>
                </div>
                <div className='skills__div'>
                    <h3 className='skills__title'>Technical Skills</h3>
                    <ul className='skills__list'>
                        <li className='skills__list--item'>Layout: <span className='skills__list--item--bold'>HTML5, CSS3, Sass, Responsive Design, Flexbox, CSS Grid</span></li>
                        <li className='skills__list--item'><span className='skills__list--item--bold'>Javascript ES6</span> and creation of a <span className='skills__list--item--bold'>SPA</span> application with <span className='skills__list--item--bold'>React</span></li>
                        <li className='skills__list--item'>Developing a basic <span className='skills__list--item--bold'>REST API </span>with <span>Node JS</span> and <span className='skills__list--item--bold'>Express JS</span></li>
                        <li className='skills__list--item'><span className='skills__list--item--bold'>SQLite</span> for creating and managing databases and EJS <span className='skills__list--item--bold'>Template Engine</span></li>
                        <li className='skills__list--item'>Version control with <span className='skills__list--item--bold'>Git</span></li>
                        <li className='skills__list--item'>Project development under <span className='skills__list--item--bold'>SCRUM</span> framework and <span className='skills__list--item--bold'>Agile</span> philosophy</li>
                        <li className='skills__list--item'>Development tools: <span className='skills__list--item--bold'>Gulp, Visual Studio Code, Command Shell, Zeplin</span></li>
                        <li className='skills__list--item'>Communication skills and team work: <span className='skills__list--item--bold'>Slack, Github, Railway</span></li>
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Skills;