import './Header.css';

import { Route, Link, NavLink, Redirect, Switch } from 'react-router-dom';

function Header() {
  return (
    <header id="site-header">
       <section class="header-top-bar">
         <article class="header-top-bar-left">
           <i class="far fa-question-circle header-top-bar-icon"></i>
           <span class="header-top-bar-left-item">
           <NavLink to="/contact-us" exact activeClassName="header-top-navigation-menu-item-active">Can we help you?</NavLink>
           </span>
           <i class="fas fa-phone-alt header-top-bar-icon"></i>
           <span class="header-top-bar-left-item">+359 333 555 999</span>
         </article>
         <ul class="header-top-bar-right">
           <li class="header-top-bar-right-item">
             <NavLink to="/contact-us" exact activeClassName="header-top-navigation-menu-item-active">Store Location</NavLink>
           </li>
           <li class="header-top-bar-right-item">Hello, User!</li>
           <li class="header-top-bar-right-item">
             <NavLink to="/user/profile" exact activeClassName="header-top-navigation-menu-item-active">Profile</NavLink>
           </li>
           <li class="header-top-bar-right-item">
             <NavLink to="/user/login" exact activeClassName="header-top-navigation-menu-item-active">Login</NavLink>
           </li>
           <li class="header-top-bar-right-item">
             <NavLink to="/user/register" exact activeClassName="header-top-navigation-menu-item-active">Register</NavLink>
           </li>
         </ul>
       </section>
       <section class="header-top-block">
       <NavLink to="/" exact><img src="./logo.jpg" alt="Book Store" /></NavLink>
         <article class="header-top-block-site-search">
           <input type="text" class="header-top-block-site-search-input" name="s" placeholder="Search site" />
           <i class="fas fa-search header-top-block-site-search-input-icon"></i>
         </article>
         <ul class="header-top-block-right">
           <li class="header-top-block-right-item">
           <NavLink to="/user/wishlist" exact activeClassName="header-top-navigation-menu-item-active">Wishlist</NavLink>
           </li>
           <li class="header-top-block-right-item">
             <NavLink to="/user/orders" exact activeClassName="header-top-navigation-menu-item-active">Orders</NavLink>
           </li>
           <li class="header-top-block-right-item">
             <NavLink to="/user/profile" exact activeClassName="header-top-navigation-menu-item-active">Profile</NavLink>
           </li>
           <li class="header-top-block-right-item">
             <NavLink to="/user/cart" exact activeClassName="header-top-navigation-menu-item-active">Cart</NavLink>
           </li>
         </ul>
       </section>
       <nav class="header-top-navigation">
         <ul class="header-top-navigation-menu">
           <li class="header-top-navigation-menu-item">
           <NavLink to="/" exact activeClassName="header-top-navigation-menu-item-active">Home</NavLink>
           </li>
           <li class="header-top-navigation-menu-item">
             <NavLink to="/news" exact activeClassName="header-top-navigation-menu-item-active">News</NavLink>
           </li>
           <li class="header-top-navigation-menu-item">
             <NavLink to="/books" exact activeClassName="header-top-navigation-menu-item-active">Books</NavLink>
           </li>
           <li class="header-top-navigation-menu-item">
             <NavLink to="/authors" exact activeClassName="header-top-navigation-menu-item-active">Authors</NavLink>
           </li>
           <li class="header-top-navigation-menu-item">
             <NavLink to="/about" exact activeClassName="header-top-navigation-menu-item-active">About Us</NavLink>
           </li>
         </ul>
       </nav>
     </header>
  );
}

export default Header;