import './Header.css';
import Navigation from './Navigation/Navigation';
import TopBar from './TopBar/TopBar';
import TopBlockUserMenu from './TopBlockUserMenu/TopBlockUserMenu';
import Search from './Search/Search';

import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header id="site-header">
       <TopBar />
       <section className="header-top-block">
          <NavLink to="/" exact><img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="Book Store" /></NavLink>
          <Search />
          <TopBlockUserMenu />
       </section>
       <Navigation />
     </header>
  );
}

export default Header;