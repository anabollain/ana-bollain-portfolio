import { NavLink } from 'react-router-dom';
//styles
import '../styles/Header.scss'

function Header({navMenu, handleNavMenu}) {

    //EVENT FUNCTIONS
    const handleClickNav = () => {
        if(navMenu === false){
            handleNavMenu(true);
        }else{
            handleNavMenu(false);
        }
    }

    const handleClickLink = () => {
        handleNavMenu(false);
    }

    //RETURN
    return (
        <header className='header'>
            <NavLink to='/' className='header__title'>
                <h1 className='header__title'>Ana.Bo</h1>
            </NavLink>
            <div className='header__icon' onClick={handleClickNav}><i className="fa-solid fa-bars"></i></div>
            <nav className={`header__nav ${!navMenu ? 'js-hidden' : ''}`}>
                <ul className='header__nav--list'>
                    <li ><NavLink to='/' className='header__nav--list--item' onClick={handleClickLink}>About Me</NavLink></li>
                    <li><NavLink to='/projects' className='header__nav--list--item' onClick={handleClickLink}>Projects</NavLink></li>
                    <li><NavLink to='/skills' className='header__nav--list--item' onClick={handleClickLink}>Skills</NavLink></li>
                    <li><NavLink to='/contact' className='header__nav--list--item' onClick={handleClickLink}>Contact</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;