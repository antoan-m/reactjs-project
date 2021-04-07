import "./TopBar.css";
import { NavLink } from "react-router-dom";
import userService from "../../../services/userService";
import { UserContext } from "../../../context/UserContext";
import { useContext } from 'react';


// let userToken = localStorage.getItem('user-token');
// if (userToken === null || userToken === undefined) {
//   userToken = false;
// }

function TopBar(props) {

  const [user, setUser] = useContext(UserContext);

  function logout() {
     userService.userLogout();
     setUser(oldState => oldState = '');
   }

  return (
    <section className="header-top-bar">
      <article className="header-top-bar-left">
        <i className="far fa-question-circle header-top-bar-icon"></i>
        <span className="header-top-bar-left-item">
          <NavLink to="/contact" exact className="header-top-navigation-menu-item-active">Can we help you?</NavLink>
        </span>
        <i className="fas fa-phone-alt header-top-bar-icon"></i>
        <span className="header-top-bar-left-item">+359 333 555 999</span>
      </article>
      <ul className="header-top-bar-right">
        <li>Hello, {user.name ? user.name : 'Guest'}</li>
        <li className="header-top-bar-right-item">
          <NavLink to="/contact" exact className="header-top-navigation-menu-item-active">Store Location</NavLink>
        </li>
        {user.name ? 
        <li className="header-top-bar-right-item">
          <NavLink to="/user/profile" exact className="header-top-navigation-menu-item-active">Profile</NavLink>
        </li> : '' }
        {!user.name ? <li className="header-top-bar-right-item">
          <NavLink to="/user/login" exact className="header-top-navigation-menu-item-active">Login</NavLink>
        </li> : '' }
        {!user.name ? <li className="header-top-bar-right-item">
          <NavLink to="/user/register" exact className="header-top-navigation-menu-item-active">Register</NavLink>
        </li> : '' }
        {user.name ? <li className="header-top-bar-right-item">
        <NavLink to="/" exact onClick={() => {logout()}} className="header-top-navigation-menu-item-active">Logout</NavLink>
        </li> : '' }
      </ul>
    </section>
  );
}

export default TopBar;
