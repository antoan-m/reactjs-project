import "./Profile.css";
import { Component } from 'react';
import userService from "../../services/userService";
import UserPanel from "./panels/UserPanel";
import AdminPanel from "./panels/AdminPanel";
import AdminDashboardPanel from "./panels/AdminDashboardPanel";
import { UserContext } from "../../context/UserContext";


class Profile extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      user_data: '',
      user_id: localStorage.getItem('id'),
      admin: false
    };
  }

  componentDidMount() {
    console.log(this.context[0].user_type);
    // userService.userData(this.state.user_id)
    // .then(data => this.setState({ user_data: data }))
    if (this.context[0].user_type) {
        this.setState({ admin: true })
    } else {
      this.setState({ admin: false })
    }
  }

  componentDidUpdate() {

    // if (this.state.user_data === '') {
    // userService.userData(this.state.user_id)
    // .then(data => this.setState({ user_data: data }))
    // }
}


  render() {
    
  return (
<div className="profile">

    <section className="profile-main">
        
        <UserPanel userData={this.state.user_data} />

        <AdminDashboardPanel userData={this.state.user_data} />
        
        {/* <AdminPanel userData={this.state.user_data} /> */}

    </section>
</div>
  );
}
}

export default Profile;