import './TopBlockUserMenu.css';

import { NavLink } from 'react-router-dom';

function TopBlockUserMenu() {
    return (
        <ul className="header-top-block-right">
           <li className="header-top-block-right-item">
           <NavLink to="/user/wishlist" exact activeClassName="header-top-navigation-menu-item-active">Wishlist</NavLink>
           </li>
           <li className="header-top-block-right-item">
             <NavLink to="/user/orders" exact activeClassName="header-top-navigation-menu-item-active">Orders</NavLink>
           </li>
           <li className="header-top-block-right-item">
             <NavLink to="/user/profile" exact activeClassName="header-top-navigation-menu-item-active">Profile</NavLink>
           </li>
           <li className="header-top-block-right-item">
             <NavLink to="/user/cart" exact activeClassName="header-top-navigation-menu-item-active">Cart</NavLink>
           </li>
         </ul>
    );
}

export default TopBlockUserMenu;