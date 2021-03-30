import "./AdminPanel.css";
import { Link } from 'react-router-dom';


function AdminPanel(props) {
    
  return (

<section className="profile-main-right">
       <h2 className="profile-main-header">Admin Panel</h2>
                <ul className="profile-main-left-last-admin-list">
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

                  <li><Link to="/user/profile/slides">
                      <button className="btn waves-effect waves-light profile-list-item-btn-admin">Slides<i className="material-icons right">import_contacts</i></button>
                  </Link></li>
                </ul>
</section>
  )
}

export default AdminPanel;