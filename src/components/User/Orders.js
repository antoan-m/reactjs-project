import "./Orders.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import UserPanel from "./panels/UserPanel";
import MyOrdersPanel from "./panels/MyOrdersPanel";
import AdminPanel from "./panels/AdminPanel";
import cartService from "../../services/cartService";
import userService from "../../services/userService";


class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_data: '',
      user_id: localStorage.getItem('id'),
      orders: []
    };
  }

  componentDidMount() {

    userService.userData(this.state.user_id)
    .then(data => this.setState({ user_data: data }))

    cartService.getMyOrders(this.state.user_id)
    .then(result => this.setState({ orders: result }));

  }

  componentDidUpdate() {
    if (this.state.user_data === '') {
      userService.userData(this.state.user_id)
      .then(data => this.setState({ user_data: data }))
      }

    if (this.state.orders === '') {
      cartService.getMyOrders(this.state.user_id)
      .then(result => this.setState({ orders: result }));
      }
}


  render() {
  return (
<div className="profile">

    <section className="profile-main">
        
        <UserPanel userData={this.state.user_data} />

        <MyOrdersPanel userData={this.state.user_data} myOrders={this.state.orders} />

        <AdminPanel userData={this.state.user_data} />

    </section>
</div>
  );
}
}

export default Orders;
