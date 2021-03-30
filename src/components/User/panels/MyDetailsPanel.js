import "./MyDetailsPanel.css";
import { Link } from 'react-router-dom';


function MyDetailsPanel(props) {

  return (

<section className="profile-main-left-last-orders">
          <h2 className="profile-main-header">My Details</h2>
                <ul className="profile-main-left-last-orders-list">
                  <li className="profile-details-list-item"><span className="profile-details-list-item-label">Email: </span><span className="profile-details-list-item-value">{props.userData.email}</span></li>
                  <li className="profile-details-list-item"><span className="profile-details-list-item-label">Name: </span><span className="profile-details-list-item-value">{props.userData.name}</span></li>
                  <li className="profile-details-list-item"><span className="profile-details-list-item-label">Country: </span><span className="profile-details-list-item-value">{props.userData.country}</span></li>
                  <li className="profile-details-list-item"><span className="profile-details-list-item-label">Address: </span><span className="profile-details-list-item-value">{props.userData.address}</span></li>
                  <li className="profile-details-list-item"><span className="profile-details-list-item-label">Phone: </span><span className="profile-details-list-item-value">{props.userData.phone}</span></li>
                  <Link to={`/user/profile/details/${props.userData.objectId}/edit`}><button className="btn waves-effect waves-light profile-list-item-btn-user">Edit Details<i className="material-icons right">import_contacts</i></button></Link>
                </ul>
</section>
  )
}

export default MyDetailsPanel;