//styles
import '../styles/Contact.scss';


function Contact(props) {

    //EVENT FUNCTIONS
    const handleClickBtn = () => {
        props.handleSendBtnClick();
    }

    const handleInput = (ev) => {
        const inputName = ev.target.name;
        const inputValue = ev.target.value;
        props.handleInputContact(inputName, inputValue);
    }

    const handleSubmit = (ev) => {
        ev.preventDefault();
    }

    //RETURN
    return (
        <main className='main__contact'>
            <section className='contact'>
                <p className='contact__text'>Do not hesitate to contact me if you have any questions 🤗</p>
                <small className='contact__req'>All fields checked with <span className='contact__req--ast'>*</span> are mandatory.</small>
                <form className='form' onSubmit={handleSubmit}>

                    <div className='form__contact'>
                        <label className="form__contact--label" htmlFor="name">Name <span className="ast">*</span></label>
                        <input className="form__contact--input" type="text" id="name" name="name" placeholder="Brendan Eich"
                            required value={props.contactForm.name} onChange={handleInput}/>
                    </div>
                    <div className='form__contact'>
                        <label className="form__contact--label " htmlFor="email">Email <span className="ast">*</span></label>
                        <input className="form__contact--input " type="email" id="email" name="email"
                            placeholder="brendan.eich@mail.com" required value={props.contactForm.email} onChange={handleInput}/>
                    </div>
                    <div className='form__contact'>
                        <label className="form__contact--label " htmlFor="phone">Phone</label>
                        <input className="form__contact--input " type="tel" id="phone" name="phone" pattern="^[0-9]{9}$"
                            placeholder="Ej: 123456789" value={props.contactForm.phone} onChange={handleInput}/>
                    </div>
                    <div className='form__contact'>
                        <label className="form__contact--label" htmlFor="message">Message <span className="ast">*</span></label>
                        <textarea className="form__contact--comment" name="message" rows="5" cols="70" placeholder="Type your message here..."
                            required value={props.contactForm.message} onChange={handleInput}></textarea>
                    </div>
                    <input className="form__contact--btn" type="submit" value="Send" onClick={handleClickBtn}/>
                    <p className="form__contact--msg">{props.contactResult}</p>
                </form>
            </section>
        </main>
    );
}

export default Contact;