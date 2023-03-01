//styles
import '../styles/Contact.scss'

function Contact(props) {

    return (
        <main className='contact'>
            <h2 className='contact__title'>Let's get in touch.</h2>
            <div className='contact__info'>
                <div className='contact__info--img' alt='Touching hands'/>
                <nav>
                    <ul className='contact__info--nav'>
                        <li><a href="https://www.linkedin.com/in/ana-bollain/" className='contact__info--nav--link' target="_blank" rel="noreferrer">Linkedin</a></li>
                        <li><a href="https://github.com/anabollain" className='contact__info--nav--link' target="_blank" rel="noreferrer">Github</a></li>
                        <li><a href="https://twitter.com/ana_bollain" className='contact__info--nav--link' target="_blank" rel="noreferrer">Twitter</a></li>
                    </ul>
                </nav>
            </div>
        </main>
    );
}

Contact.propTypes = {

};

export default Contact;