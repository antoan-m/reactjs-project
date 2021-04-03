import './TopBlockUserMenu.css';

import { NavLink } from 'react-router-dom';

function TopBlockUserMenu(props) {
    return (
        <ul className="header-top-block-right">
           <li className="header-top-block-right-item">
           <NavLink to="/user/profile/wishlist" exact className="header-top-navigation-menu-item-active">Wishlist</NavLink>
           </li>
           <li className="header-top-block-right-item">
             <NavLink to="/user/profile/orders" exact className="header-top-navigation-menu-item-active">Orders</NavLink>
           </li>
           <li className="header-top-block-right-item">
             <NavLink to="/user/profile" exact className="header-top-navigation-menu-item-active">Profile</NavLink>
           </li>
           <li className="header-top-block-right-item">
             <NavLink to="/user/profile/cart" exact className="header-top-navigation-menu-item-active">Cart</NavLink>
           </li>
         </ul>
    );
}

export default TopBlockUserMenu;