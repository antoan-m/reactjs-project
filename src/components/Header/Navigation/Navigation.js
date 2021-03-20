import './Navigation.css';

import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="header-top-navigation">
         <ul className="header-top-navigation-menu">
           <li className="header-top-navigation-menu-item">
           <NavLink to="/" exact activeClassName="header-top-navigation-menu-item-active">Home</NavLink>
           </li>
           <li className="header-top-navigation-menu-item">
             <NavLink to="/news" exact activeClassName="header-top-navigation-menu-item-active">News</NavLink>
           </li>
           <li className="header-top-navigation-menu-item">
             <NavLink to="/books" exact activeClassName="header-top-navigation-menu-item-active">Books</NavLink>
           </li>
           <li className="header-top-navigation-menu-item">
             <NavLink to="/authors" exact activeClassName="header-top-navigation-menu-item-active">Authors</NavLink>
           </li>
           <li className="header-top-navigation-menu-item">
             <NavLink to="/about" exact activeClassName="header-top-navigation-menu-item-active">About Us</NavLink>
           </li>
         </ul>
       </nav>
  );
}

export default Navigation;