import './TopBlockUserMenu.css';
import { UserContext } from "../../../context/UserContext";
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function TopBlockUserMenu(props) {

  // const [user] = useContext(UserContext);

  const [cart, setCart] = useState();
  const [user, setUser, loggedIn, setLoggedIn, cartItems, setCartItems] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem('cart')) {
    setCart(true) 
    setCartItems(localStorage.getItem('cart').split(','))
  } else {
    setCart(false)
  }
  }, [])

    return (
      <>
      {user.user_type != 'admin' ?
        <ul className="header-top-block-right">
           {user.name ? <li className="header-top-block-right-item">
           <NavLink to="/user/profile/wishlist" exact className="header-top-navigation-menu-item-active">Wishlist</NavLink>
           </li> : ''}
           {user.name ? <li className="header-top-block-right-item">
             <NavLink to="/user/profile/orders" exact className="header-top-navigation-menu-item-active">Orders</NavLink>
           </li>: ''}
           {cart ?
           <li className="header-top-block-right-item">
             <NavLink to="/user/profile/cart" exact className="header-top-navigation-menu-item-active">Cart ({cartItems.length})</NavLink>
           </li>
           : <li className="header-top-block-right-item"><span className="header-top-navigation-menu-item-active">Cart (0)</span></li> }
         </ul> : '' }
         {user.user_type == 'admin' ?
        <ul className="header-top-block-right">
           {user.name ? <li className="header-top-block-right-item">
           <NavLink to="/user/profile" exact className="header-top-navigation-menu-item-active">Admin</NavLink>
           </li> : ''}
           {user.name ? <li className="header-top-block-right-item">
             <NavLink to="/user/profile/orders-seller" exact className="header-top-navigation-menu-item-active">Orders</NavLink>
           </li>: ''}
         </ul> : '' }
         </>
    );
}

export default TopBlockUserMenu;