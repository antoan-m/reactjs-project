import "./TopBar.css";
import { NavLink } from "react-router-dom";
import userService from "../../../services/userService";
import { useContext } from "react";
import { UserContext } from "../../../services/UserContext";

let userToken = localStorage.getItem('user-token');
if (userToken === null || userToken === undefined) {
  userToken = false;
}


function TopBar() {
  console.log(userToken)

  function logout() {
    // userService.userLogout(userToken);
  }

const { user, setUser } = useContext(UserContext);

const guest = 'guest' ? null : user;

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
        {/* <li>Hello, {user}</li> */}
        <li className="header-top-bar-right-item">
          <NavLink to="/contact" exact className="header-top-navigation-menu-item-active">Store Location</NavLink>
        </li>
        {guest ? <li className="header-top-bar-right-item">
          <NavLink to="/user/profile" exact className="header-top-navigation-menu-item-active">Profile</NavLink>
        </li> : ''}
        {!guest ? <li className="header-top-bar-right-item">
          <NavLink to="/user/login" exact className="header-top-navigation-menu-item-active">Login</NavLink>
        </li> : ''}
        {!guest ? <li className="header-top-bar-right-item">
          <NavLink to="/user/register" exact className="header-top-navigation-menu-item-active">Register</NavLink>
        </li> : ''}
        {guest ? <li className="header-top-bar-right-item">
        <NavLink to="/" exact onClick={ logout()} className="header-top-navigation-menu-item-active">Logout</NavLink>
        </li> : ''}
      </ul>
    </section>
  );
}

export default TopBar;
