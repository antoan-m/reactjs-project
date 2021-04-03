import "./UserPanel.css";
import { Link } from 'react-router-dom';
import LatestOrderPanel from "./LatestOrderPanel";


function UserPanel(props) {

  return (

    <section className="profile-main-left">
         
    <section className="profile-main-left-last-tasks">
    <h2 className="profile-main-header">Hello, {props.userData.name}</h2>
    <ul className="profile-main-left-last-tasks-list">
            <Link to={`/user/profile/details/${props.userData.objectId}`}><button className="btn waves-effect waves-light profile-list-item-btn-user">My Details<i className="material-icons right">import_contacts</i></button></Link>
            <Link to="/user/profile/orders"><button className="btn waves-effect waves-light profile-list-item-btn-user">Orders<i className="material-icons right">import_contacts</i></button></Link>
            <Link to="/user/profile/wishlist"><button className="btn waves-effect waves-light profile-list-item-btn-user">Wishlist<i className="material-icons right">import_contacts</i></button></Link>
            <Link to="/user/profile/mynewsletters"><button className="btn waves-effect waves-light profile-list-item-btn-user">Newsletters<i className="material-icons right">import_contacts</i></button></Link>
          </ul>
    </section>

  </section>
  );
}

export default UserPanel;
