import "./ProfileDetails.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from "../../services/userService";
import MyDetailsPanel from "./panels/MyDetailsPanel";
import UserPanel from "./panels/UserPanel";
import AdminPanel from "./panels/AdminPanel";

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
    // console.log(this.state.user_data)
    // console.log(this.state.user_id)
    // console.log(this.state.params)
  }

  componentDidUpdate() {
    if (this.state.user_data === '') {
    userService.userData(this.state.user_id)
    .then(data => this.setState({ user_data: data }))
    // console.log(this.state.user_data)
    // console.log(this.state.user_id)
    // console.log(this.state.params)
    }
}


  render() {console.log(this.state.user_data);
  return (
    
<div className="profile">

    <section className="profile-main">
        <section className="profile-main-left">
         
          <UserPanel userData={this.state.user_data} />

          <MyDetailsPanel userData={this.state.user_data} />
          
        </section>

        <AdminPanel userData={this.state.user_data} />

</section>
   </div>
  );
}
}

export default ProfileDetails;
