import "./Orders.css";
import { Component } from 'react';
import { Link } from 'react-router-dom';
import UserPanel from "./panels/UserPanel";
import OrdersPanel from "./panels/OrdersPanel";
import AdminPanel from "./panels/AdminPanel";


class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {

}


  render() {
  return (
<div className="Orders">

    <section className="Orders-main">
        
        <UserPanel />

        {/* <OrdersPanel myOrders={this.state.orders} /> */}

        <AdminPanel />

    </section>
</div>
  );
}
}

export default Orders;
