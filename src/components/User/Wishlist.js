import "./Wishlist.css";
import { Component } from 'react';
import userService from "../../services/userService";
import UserPanel from "./panels/UserPanel";
import AdminPanel from "./panels/AdminPanel";
import WishlistPanel from "./panels/WishlistPanel";


class Wishlist extends Component {
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
<div className="wishlist">

    <section className="wishlist-main">
        <section className="wishlist-main-left">
         
        <UserPanel userData={this.state.user_data} />

        <WishlistPanel userData={this.state.user_data} />

        <AdminPanel userData={this.state.user_data} />

        </section>
    </section>
</div>
  );
}
}

export default Wishlist;
