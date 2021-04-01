import "./MySlides.css";
import { Component } from 'react';
import userService from "../../services/userService";
import slidesService from "../../services/slidesService";
import UserPanel from "./panels/UserPanel";
import AdminPanel from "./panels/AdminPanel";
import MySlidesPanel from "./panels/MySlidesPanel";


class MySlides extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_data: '',
      my_slides: [],
      deleted_slide: false,
      user_id: localStorage.getItem('id')
    };
  }

  componentDidMount() {
    userService.userData(this.state.user_id)
    .then(data => this.setState({ user_data: data }))

    slidesService.getMySlides(this.state.user_id)
    .then(slides => this.setState({ my_slides: slides }))
  }

  componentDidUpdate() {
    if (this.state.user_data === '') {
        userService.userData(this.state.user_id)
        .then(data => this.setState({ user_data: data }))
        }

    if (this.state.my_slides === '') {
    slidesService.getMySlides(this.state.user_id)
    .then(slides => this.setState({ my_slides: slides }))
    }
  }

  render() {
    console.log(this.state.my_slides);
  return (
<div className="profile">

    <section className="profile-main">

        <UserPanel userData={this.state.user_data} />

        <MySlidesPanel mySlides={this.state.my_slides} />

        <AdminPanel userData={this.state.user_data} />

      </section>
    
</div>
  );
}
}

export default MySlides;
