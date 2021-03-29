import "./Profile.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from "../../services/userService";
import { UserContext } from "../../services/UserContext";


class Profile extends Component {
  static contextType = UserContext;

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
  }

  componentDidUpdate() {
    if (this.state.user_data === '') {
    userService.userData(this.state.user_id)
    .then(data => this.setState({ user_data: data }))
    }
}


  render() {
    // console.log(this.context);
  return (
<div className="profile">

    <section className="profile-main">
        <section className="profile-main-left">
         
          <section className="profile-main-left-last-tasks">
          <h2 className="profile-main-header">User Panel | Hello, USER</h2>
          <ul className="profile-main-left-last-tasks-list">
                 <Link to={`/user/profile/details/${this.state.user_data.objectId}`}><button className="btn waves-effect waves-light profile-list-item-btn-user">My Details<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/profile/orders"><button className="btn waves-effect waves-light profile-list-item-btn-user">Orders<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/profile/wishlist"><button className="btn waves-effect waves-light profile-list-item-btn-user">Wishlist<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/profile/reviews"><button className="btn waves-effect waves-light profile-list-item-btn-user">My Reviews<i className="material-icons right">import_contacts</i></button></Link>
                  <Link to="/user/profile/user-newsletter"><button className="btn waves-effect waves-light profile-list-item-btn-user">Newsletters<i className="material-icons right">import_contacts</i></button></Link>
                </ul>
          </section>
          <section className="profile-main-left-last-orders">
          <h2 className="profile-main-header">Last Order</h2>
                <ul className="profile-main-left-last-orders-list">
                  <li>
                    <article className="profile-main-left-last-orders-list-item"><article className="profile-main-left-last-orders-list-item-image"><img src="https://demo4.madrasthemes.com/bookworm/wp-content/uploads/2020/08/50-300x444.jpg" alt="###" /></article><article><h3 className="profile-main-left-last-orders-list-item-title">The book</h3><p className="profile-main-left-last-orders-list-item-price">$20.34</p></article><article className="profile-main-left-last-orders-list-item-buttons">
                      <Link to="#"><button className="btn waves-effect waves-light profile-list-item-btn">View Details<i className="material-icons right">import_contacts</i></button></Link>
                      </article>
                      </article>
                  </li>
                </ul>
          </section>
          
        </section>
     <section className="profile-main-right">
       <h2 className="profile-main-header">Admin Panel</h2>
                <ul className="profile-main-left-last-admin-list">
                  <li><Link to="/user/profile/mybooks"><button className="btn waves-effect waves-light profile-list-item-btn-admin">My Books<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/profile/addbook"><button className="btn waves-effect waves-light profile-list-item-btn-admin">Add Book<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/profile/mynews"><button className="btn waves-effect waves-light profile-list-item-btn-admin">All News<i className="material-icons right">import_contacts</i></button></Link></li>
                  <li><Link to="/user/profile/addnews"><button className="btn waves-effect waves-light profile-list-item-btn-admin">Add News<i className="material-icons right">import_contacts</i></button></Link></li>
                </ul>
        </section>

</section>
   </div>
  );
}
}

export default Profile;
