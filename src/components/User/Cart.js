import "./Cart.css";
import { Component } from 'react';
import userService from "../../services/userService";
import cartService from "../../services/cartService";
import UserPanel from "./panels/UserPanel";
import AdminPanel from "./panels/AdminPanel";
import MyCartPanel from "./panels/MyCartPanel";


class Cart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user_data: '',
      localCart: localStorage.getItem('cart').split(','),
      my_cart: [],
      user_id: localStorage.getItem('id')
    };
  }

  componentDidMount() {
    userService.userData(this.state.user_id)
    .then(data => this.setState({ user_data: data }))

  cartService.getCartBooksInfo(this.state.localCart)
  .then(result => {
    this.setState({ my_cart: result });
  })
  }

  componentDidUpdate() {
    if (this.state.user_data === '') {
        userService.userData(this.state.user_id)
        .then(data => this.setState({ user_data: data }))
        }

    if (this.state.my_cart === '') {
      cartService.getCartBooksInfo(this.state.localCart)
      .then(result => {
        this.setState({ my_cart: result });
      })
  }

}

  render() {

  return (
<div className="profile">

    <section className="profile-main">

        <MyCartPanel myCart={this.state.my_cart} localCart={this.state.localCart} userData={this.state.user_data} />

      </section>
    
</div>
  );
}
}

export default Cart;
