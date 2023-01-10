import { Link } from 'react-router-dom';
//styles
import '../styles/Landing.scss'

function Landing(props) {

  return (
    <main>
        <section className='hero'>
            <div className='hero__info'>
                <h2 className='hero__info--title'>Front-end Developer</h2>
                <h3 className='hero__info--subtitle'>Ana Bollain</h3>
                <p  className='hero__info--text'>Hi! I'm Ana, a former architect discovering a new way of shaping and constructing the world through technology.</p>
                <Link to='/contact' className='hero__info--btn'>Contact me</Link>
                <input type='text' value='Download CV'/>
            </div>
            <div className='hero__img'></div>
        </section>s
        <section className='desc'>
            <h3 className='desc__title'>I love design mmaajen ldjnf m,anicmc mdkjdna</h3>
            <article className='desc__info'>
                <p className='desc__info--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint dolores laborum voluptatum enim nostrum, impedit harum iure sapiente quisquam aliquam qui provident culpa? Optio in quia earum doloribus ipsum animi?</p>
                <p className='desc__info--text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus excepturi ut qui? Possimus dignissimos excepturi quibusdam reiciendis laboriosam vitae iusto sequi dolor delectus minima eligendi quisquam, odit veniam aliquam?</p>
                <small className='desc__info--small'>Download my resume</small>
            </article>
        </section>
        <section className='works'>
            <h3 className='works__title'>Recent works</h3>
            <ul className='works__list'>
                <li className='work__item'>
                    <a href="#" className='works__item--art'>
                        <img src="" alt="" className='works__item--art--img'/>
                        <p className='works__item--art--text'>Uno</p>
                    </a>
                </li>
            </ul>
        </section>
    </main>
    );
}

Landing.propTypes = {

};

export default Landing;