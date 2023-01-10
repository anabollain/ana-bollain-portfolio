import { Link } from 'react-router-dom';
//styles
import '../styles/Header.scss'

function Header(props) {

  return (
    <header className='header'>
        <Link to='/' className='header__title'>
            <h1>Ana Bollain</h1>
        </Link>
        <nav className='header__nav'>
            <ul className='header__nav--list'>
                <li ><Link to='/aboutme' className='header__nav--list--item'>About Me</Link></li>
                <li><Link to='/projects' className='header__nav--list--item'>Projects</Link></li>
                <li><Link to='/contact' className='header__nav--list--item'>Contact</Link></li>
                <li><Link to='/' className='header__nav--list--item'>Home</Link></li>
            </ul>
        </nav>
    </header>
    );
}

Header.propTypes = {

};

export default Header;