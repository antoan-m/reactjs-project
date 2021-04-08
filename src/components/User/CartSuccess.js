import "./CartSuccess.css";
import { Component } from 'react';
import userService from "../../services/userService";
import cartService from "../../services/cartService";
import { Link } from 'react-router-dom';


class CartSuccess extends Component {

  constructor(props) {
    super(props);
  }

render() {

  return (
<div className="profile">

    <section className="profile-main">

        <article className="cart-success">

          <h2>Thank you for your order.</h2> 
          <p>We will contact you soon for confirmation.</p>
          <Link to="/user/profile/orders"><button type="button" className="cart-order-btn">MY ORDERS</button></Link>

        </article>
    </section>
    
</div>
  );
}
}

export default CartSuccess;
