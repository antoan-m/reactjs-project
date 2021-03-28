import "./ProfileDetails.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from "../../services/userService";


class ProfileDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_data: '',
      user_id: localStorage.getItem('id')
    };
  }

  componentDidMount() {
    userService.userData(this.state.user_id)
    .then(data => this.setState({ user_data: data }))
    console.log(this.state.user_data)
    console.log(this.state.user_id)
    console.log(this.state.params)
  }

  componentDidUpdate() {
    if (this.state.user_data === '') {
    userService.userData(this.state.user_id)
    .then(data => this.setState({ user_data: data }))
    console.log(this.state.user_data)
    console.log(this.state.user_id)
    console.log(this.state.params)
    }
}


  render() {console.log(this.state.user_data);
  return (
    
<div className="profile">

    <section className="profile-main">
        <section className="profile-main-left">
         
          <section className="profile-main-left-last-tasks">
          <h2 className="profile-main-header">User Panel | Hello, {this.state.user_data.name}</h2>
          <ul className="profile-main-left-last-tasks-list">
                 <Link to={`/user/profile/details/${this.state.user_data.objectId}`}><button className="btn waves-effect waves-light profile-list-item-btn-user">My Details<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/profile/orders"><button className="btn waves-effect waves-light profile-list-item-btn-user">Orders<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/profile/wishlist"><button className="btn waves-effect waves-light profile-list-item-btn-user">Wishlist<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/profile/reviews"><button className="btn waves-effect waves-light profile-list-item-btn-user">My Reviews<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/profile/user-newsletter"><button className="btn waves-effect waves-light profile-list-item-btn-user">Newsletters<i className="material-icons right">import_contacts</i></button></Link>
                </ul>
          </section>
          <section className="profile-main-left-last-orders">
          <h2 className="profile-main-header">My Details</h2>
                <ul className="profile-main-left-last-orders-list">
                  <li className="profile-details-list-item"><span className="profile-details-list-item-label">Email: </span><span className="profile-details-list-item-value">{this.state.user_data.email}</span></li>
                  <li className="profile-details-list-item"><span className="profile-details-list-item-label">Name: </span><span className="profile-details-list-item-value">{this.state.user_data.name}</span></li>
                  <li className="profile-details-list-item"><span className="profile-details-list-item-label">Country: </span><span className="profile-details-list-item-value">{this.state.user_data.country}</span></li>
                  <li className="profile-details-list-item"><span className="profile-details-list-item-label">Address: </span><span className="profile-details-list-item-value">{this.state.user_data.address}</span></li>
                  <li className="profile-details-list-item"><span className="profile-details-list-item-label">Phone: </span><span className="profile-details-list-item-value">{this.state.user_data.phone}</span></li>
                  <Link to={`/user/profile/details/${this.state.user_data.objectId}/edit`}><button className="btn waves-effect waves-light profile-list-item-btn-user">Edit Details<i className="material-icons right">import_contacts</i></button></Link>
                </ul>
          </section>
          
        </section>
     <section className="profile-main-right">
       <h2 className="profile-main-header">Admin Panel</h2>
                <ul className="profile-main-left-last-admin-list">
                  <li><Link to="/user/profile/addbook"><button className="btn waves-effect waves-light profile-list-item-btn-admin">Add Book<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/profile/editbook/###"><button className="btn waves-effect waves-light profile-list-item-btn-admin">Edit Book<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/profile/mybooks"><button className="btn waves-effect waves-light profile-list-item-btn-admin">All Books<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/profile/addnews"><button className="btn waves-effect waves-light profile-list-item-btn-admin">Add News<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/profile/editnews/###"><button className="btn waves-effect waves-light profile-list-item-btn-admin">Edit News<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/profile/mynews"><button className="btn waves-effect waves-light profile-list-item-btn-admin">All News<i className="material-icons right">import_contacts</i></button></Link></li>
                </ul>
        </section>

</section>
   </div>
  );
}
}

export default ProfileDetails;
