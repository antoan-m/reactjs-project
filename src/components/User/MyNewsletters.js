import "./MyNewsletters.css";
import { Component } from 'react';
import newsletterService from "../../services/newsletterService";
import userService from "../../services/userService";
import UserPanel from "./panels/UserPanel";
import AdminPanel from "./panels/AdminPanel";
import MyNewslettersPanel from "./panels/MyNewslettersPanel";


class MyNewsletters extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_data: '',
      newsletter_subscribers: [],
      user_id: localStorage.getItem('id')
    };
  }

  componentDidMount() {
    userService.userData(this.state.user_id)
    .then(data => this.setState({ user_data: data }))

    newsletterService.getSubscribers()
    .then(result => this.setState({ newsletter_subscribers: result.subscribers }))
  }

  componentDidUpdate() {
    if (this.state.user_data === '') {
        userService.userData(this.state.user_id)
        .then(data => this.setState({ user_data: data }))
        }

    if (this.state.newsletter_subscribers === '') {
    newsletterService.getSubscribers()
    .then(result => this.setState({ newsletter_subscribers: result.subscribers }))
    }
  }


render() {
    
  return (
<div className="profile">

    <section className="profile-main">

        <UserPanel userData={this.state.user_data} />

        <MyNewslettersPanel myNewsletters={this.state.newsletter_subscribers} userData={this.state.user_data} />

        <AdminPanel userData={this.state.user_data} />

      </section>
    
</div>
  );
}
}

export default MyNewsletters;
