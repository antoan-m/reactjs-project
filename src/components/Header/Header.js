import './Header.css';
import Navigation from './Navigation/Navigation';
import TopBar from './TopBar/TopBar';
import TopBlockUserMenu from './TopBlockUserMenu/TopBlockUserMenu';
import Search from './Search/Search';

import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
    <header id="site-header">
       <TopBar userData={props.userData} loggedIn={props.loggedIn} />
       <section className="header-top-block">
          <NavLink to="/" exact><img src={process.env.PUBLIC_URL + '/logo.jpg'} alt="Book Store" /></NavLink>
          <Search />
          <TopBlockUserMenu userData={props.userData} loggedIn={props.loggedIn} />
       </section>
       <Navigation />
     </header>
  );
}

export default Header;