import "./Order.css";
import { Component } from 'react';
import userService from '../../services/userService';
import cartService from '../../services/cartService';
import MyOrderPanel from './panels/MyOrderPanel';

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: localStorage.getItem('id'),
      my_order_id: this.props.match.params.id,
      my_order_data: '',
      my_order_book_ids: '',
      my_order: ''
    };
  }

  componentDidMount() {

    cartService.getMyOrderInfo(this.state.user_id, this.state.my_order_id)
    .then(result => {
         this.setState({ my_order_data: result, my_order_book_ids: result.book_ids });
       
        cartService.getCartBooksInfo(result.book_ids.split(','))
        .then(result => {
          this.setState({ my_order: result });
        })
    })
}

  componentDidUpdate() {

      if (this.state.my_order_data === '') {
        cartService.getMyOrderInfo(this.state.user_id, this.state.my_order_id)
        .then(result => {
          this.setState({ my_order_data: result, my_order_book_ids: result.book_ids });
        
          cartService.getCartBooksInfo(result.book_ids.split(','))
          .then(result => {
            this.setState({ my_order: result });
          })
      })
    }
}

render() {
  // console.log(this.state)
   
  return (
<div className="profile">
    <section className="profile-main">
        
            <MyOrderPanel orderIds={this.state.my_order_book_ids} myOrder={this.state.my_order} myOrderData={this.state.my_order_data} />

</section>
   </div>
  );
}
}

export default Order;
