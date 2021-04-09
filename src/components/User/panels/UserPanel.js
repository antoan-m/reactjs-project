import "./UserPanel.css";
import { Link } from 'react-router-dom';
import LatestOrderPanel from "./LatestOrderPanel";
import { UserContext } from "../../../context/UserContext";
import { useContext } from 'react';


function UserPanel(props) {

const [user, setUser, admin, setAdmin] = useContext(UserContext);

  return (
    
    <section className="profile-main-left">
         
    <section className="profile-main-left-last-tasks">
    <h2 className="profile-main-header">{user.user_type == 'admin' ? 'Admin Panel' : 'User Panel'}</h2>
    {user.user_type != 'admin' ?
    <ul className="profile-main-left-last-tasks-list">
            <li><Link to={`/user/profile/details/${user.objectId}`}><button className="btn waves-effect waves-light profile-list-item-btn-user">My Details<i className="material-icons right">import_contacts</i></button></Link></li>
            <li><Link to="/user/profile/orders"><button className="btn waves-effect waves-light profile-list-item-btn-user">Orders<i className="material-icons right">import_contacts</i></button></Link></li>
            <li><Link to="/user/profile/wishlist"><button className="btn waves-effect waves-light profile-list-item-btn-user">Wishlist<i className="material-icons right">import_contacts</i></button></Link></li>
            <li><Link to="/user/profile/mynewsletters"><button className="btn waves-effect waves-light profile-list-item-btn-user">Newsletters<i className="material-icons right">import_contacts</i></button></Link></li>
    </ul> : ''}
    {user.user_type == 'admin' ?
    <ul className="profile-main-left-last-admin-list">
        <li><Link to={`/user/profile/details/${user.objectId}`}><button className="btn waves-effect waves-light profile-list-item-btn-user">My Details<i className="material-icons right">import_contacts</i></button></Link></li>
                <li><Link to="/user/profile/orders-seller">
                      <button className="btn waves-effect waves-light profile-list-item-btn-admin">My ORders<i className="material-icons right">import_contacts</i></button>
                  </Link></li>
                  <li><Link to="/user/profile/mybooks">
                      <button className="btn waves-effect waves-light profile-list-item-btn-admin">My Books<i className="material-icons right">import_contacts</i></button>
                  </Link></li>

                  <li><Link to="/user/profile/addbook">
                      <button className="btn waves-effect waves-light profile-list-item-btn-admin">Add Book<i className="material-icons right">import_contacts</i></button>
                  </Link></li>

                  <li><Link to="/user/profile/mynews">
                      <button className="btn waves-effect waves-light profile-list-item-btn-admin">My News<i className="material-icons right">import_contacts</i></button>
                  </Link></li>

                  <li><Link to="/user/profile/addnews">
                      <button className="btn waves-effect waves-light profile-list-item-btn-admin">Add News<i className="material-icons right">import_contacts</i></button>
                  </Link></li>

                  <li><Link to="/user/profile/myslides">
                      <button className="btn waves-effect waves-light profile-list-item-btn-admin">My Slides<i className="material-icons right">import_contacts</i></button>
                  </Link></li>

                  <li><Link to="/user/profile/addslide">
                      <button className="btn waves-effect waves-light profile-list-item-btn-admin">Add Slide<i className="material-icons right">import_contacts</i></button>
                  </Link></li>
      </ul> : ''}
    </section>

  </section>
  );
}

export default UserPanel;
