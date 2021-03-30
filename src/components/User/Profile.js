import "./Profile.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from "../../services/userService";
import { UserContext } from "../../services/UserContext";
import UserPanel from "./panels/UserPanel";
import AdminPanel from "./panels/AdminPanel";
import LatestOrderPanel from "./panels/LatestOrderPanel";


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
    
  return (
<div className="profile">

    <section className="profile-main">

        <UserPanel userData={this.state.user_data} />

        <LatestOrderPanel userData={this.state.user_data} />

        <AdminPanel userData={this.state.user_data} />

    </section>
</div>
  );
}
}

export default Profile;
