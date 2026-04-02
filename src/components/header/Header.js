import './Header.css';
import Logo from '../Logo/Logo';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import HeaderIcons from '../HeaderIcons/HeaderIcons';

function Header() {
    return (
        <header className='App-header'>
          <Logo />
         <HeaderMenu />
         <HeaderIcons />
        </header>
    )
}

export default Header;