import { NavLink } from 'react-router-dom';
//styles
import '../styles/Header.scss'

function Header() {

    //RETURN
    return (
        <header className='header'>
            <div className='header__hero'>
                <div className='header__hero--img'></div>
                <h1 className='header__hero--title'>Ana Bollain</h1>
                <h2 className='header__hero--subtitle'>Front-end developer. Architect. Interior Designer</h2>
            </div>
            <nav className='header__nav'>
                <ul className='header__nav--list'>
                    <li ><NavLink to='/aboutme' className='header__nav--list--item'>About Me</NavLink></li>
                    <li><NavLink to='/' className='header__nav--list--item'>Portfolio</NavLink></li>
                    <li><NavLink to='/skills' className='header__nav--list--item'>Skills</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;